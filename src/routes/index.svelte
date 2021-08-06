<!-- src/routes/index.svelte -->
<script>
  import { onMount } from 'svelte';
  import { css } from '@emotion/css';
  export const ssr = false;

  let minutes = 10;
  let seconds = 0;
  let initialMinutes = 10;
  let initialSeconds = 0;
  let editing = 'minutes';
  let intervalReference = null;
  let timeEnded = false;

  const stringifyIntWithTwoDigits = (int) => {
    return ('0' + int).slice(-2)
  }

  const startTimer = () => {
    if (!intervalReference) {
      intervalReference = setInterval(() => {
        if (timeEnded) {
          if (seconds === 59) {
            seconds = 0;
            minutes = minutes + 1;
          } else {
            seconds = seconds +1;
          }
        } else {
          if (seconds === 0) {
            const shouldTimeEnded = !!intervalReference && minutes === 0;
            seconds = shouldTimeEnded ? 0 : 59;
            minutes = shouldTimeEnded ? 0 : minutes - 1;
            timeEnded = shouldTimeEnded;
          } else {
            seconds = seconds - 1;
          }
        }
      }, 1000);

      initialMinutes = minutes;
      initialSeconds = seconds;
    }
  };

  const pauseTimer = () => {
    clearInterval(intervalReference);
    intervalReference = null;
  };

  const resetTimer = () => {
    clearInterval(intervalReference);
    intervalReference = null;
    timeEnded = false;
    minutes = initialMinutes;
    seconds = initialSeconds;
  };

  const toggleEdit = (_editing) => {
    editing = _editing;
    console.log(`now editing ${editing}`)
  };

  const updateMinutes = (_shouldIncrement) => {
    if (minutes < 99 && minutes > 0) {
        minutes = _shouldIncrement ? minutes + 1 : minutes - 1
    } else if (minutes <= 0 && _shouldIncrement) {
      minutes = minutes + 1;
      timeEnded = false;
    } else if (minutes === 99 && !_shouldIncrement) {
      minutes = minutes - 1;
    }
  };

  const updateSeconds = (_shouldIncrement) => {
    if (seconds < 59 && seconds > 0) {
      seconds = _shouldIncrement ? seconds + 1 : seconds - 1;
    } else if (seconds === 0 && _shouldIncrement) {
      seconds = seconds + 1;
    } else if (seconds === 59 && !_shouldIncrement) {
      seconds = seconds - 1;
    }
  };

  const setDemoPreset = (m) => {
    minutes = m;
    initialMinutes = m;
    seconds = 0;
    initialSeconds = 0;
    timeEnded = false;
  };

  // for swipes
  let xDown = null;
  let yDown = null;

  onMount(async () => {
    document.addEventListener('keyup', (event) => {
      const { key } = event;
      if (key === ' ' || key === 'Enter') {
        intervalReference ? pauseTimer() : startTimer();
      } else if (key === 'ArrowRight') {
        toggleEdit('seconds');
      } else if (key === 'ArrowLeft') {
        toggleEdit('minutes');
      } else if (key === 'ArrowUp') {
        editing === 'minutes' ? updateMinutes(true) : updateSeconds(true);
      } else if (key === 'ArrowDown') {
        editing === 'minutes' ? updateMinutes(false) : updateSeconds(false);
      } else if (key === 'r' || key === 'R') {
        resetTimer();
      } else if (key === '1') {
        setDemoPreset(5);
      } else if (key === '2') {
        setDemoPreset(10);
      } else if (key === '3') {
        setDemoPreset(15);
      } else if (key === '4') {
        setDemoPreset(20);
      }
    });

    document.addEventListener('click', () => {
      console.log('click!')
      if (intervalReference) {
        pauseTimer();
      } else {
        startTimer();
      }
    });

    document.addEventListener('dblclick', () => {
      console.log('dblclick!')
      if (intervalReference) {
        resetTimer();
      } else {
        startTimer();
      }
    });
    
    document.addEventListener('touchstart', (e) => {
      console.log('touch start!')
      const firstTouch = e.touches[0];
      console.log('first touch X ', firstTouch.clientX, ' former X ', xDown)
      console.log('first touch Y ', firstTouch.clientY, ' former Y ', yDown)
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }, false);
    document.addEventListener('touchmove', (evt) => {
      console.log('touch move!');
      if ( ! xDown || ! yDown ) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
          if ( xDiff > 0 ) {
              /* right swipe */
              toggleEdit('seconds');
          } else {
              /* left swipe */
              toggleEdit('minutes');
          }
      } else {
          if ( yDiff > 0 ) {
              /* down swipe */
              editing === 'minutes' ? updateMinutes(false) : updateSeconds(false);
          } else { 
              /* up swipe */
              editing === 'minutes' ? updateMinutes(true) : updateSeconds(true);
          }
      }
      /* reset values */
      xDown = null;
      yDown = null;  
    }, false);
  });

  $: totalTime = (initialMinutes * 60) + initialSeconds
  $: remainingTime = (minutes * 60) + seconds
  $: isRunning = !!intervalReference

  // wtf is this? there is style in my js...
  // sorry
  const TEXT_COLOR = '#ffffff';
  const OLX_VERDO = '#8ce563';
  const OLX_LARANJO = '#f28000';
  const BACKPANEL_COLOR = Math.random() < 0.5 ? OLX_LARANJO : OLX_VERDO;
  const UNSELECTED_TEXT_COLOR = '#999999';
  const BLINK_COLOR = '#e22828';
  $: index__backpanel = css`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${BACKPANEL_COLOR};
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    transform: ${isRunning && !timeEnded ? `scale(1, ${remainingTime / totalTime})` : 'scale(1,0)'};
    transform-origin: 50% 100%;
    transition: transform 1s, background 1s;
  `;
  $: index__text_wrapper = css`
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    font-weight: 600;
    color: ${TEXT_COLOR};
    height: 1em;
    font-size: 25.5vw;
    position: absolute;
    left: 50%;
    margin-top: -0.1em;
    @keyframes pink-blink {
        0% {color: white;}
        50% {color: ${BLINK_COLOR};}
      100%{color: white;}
    }
    ${timeEnded && isRunning ? 'animation: pink-blink 1s steps(5, start) infinite;' : ''}
  `;
  $: index__text_minutes = css`
    position: absolute;
    color: ${!isRunning && editing === 'seconds' ? UNSELECTED_TEXT_COLOR : ''};
    right: 0.15em;
  `;
  $: index__text_seconds = css`
    position: absolute;
    color: ${!isRunning && editing === 'minutes' ? UNSELECTED_TEXT_COLOR : ''};
    left: 0.15em;
  `;
</script>

<svelte:head>
	<title>timer</title>
</svelte:head>

<div class="index__container">
  <div class={index__backpanel} />
  <div class="index__subcontainer">
    <div class="index__frontpanel">
      <span class={index__text_wrapper}>
        <span class={index__text_minutes}>
          {`${timeEnded ? '-' : ''}${stringifyIntWithTwoDigits(minutes)}`}
        </span>
        <span class="index__text_separator">:</span>
        <span class={index__text_seconds}>
          {stringifyIntWithTwoDigits(seconds)}
        </span>
      </span>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .index__container {
    display: flex;
    position: relative;
    overflow: hidden;
    overscroll-behavior: none;
    height: 100vh;
    width: 100%;
    text-align: center;
    background-color: #37056b;
  }

  .index__subcontainer {
    position: absolute;
    height: 100vh;
    width: 100%;
  }

  .index__frontpanel {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .index__text_minutes {
    position: absolute;
    color: #979899;
  }

  .index__text_separator {
    position: absolute;
    transform: translate(-50%, 0);
  }
</style>
