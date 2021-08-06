# This is a timer
  no mistery, just to test some things with svelte...

# Commandos
### Comandos principais
------------------timer commands------------------

Setas para o lado ou Swipe lateral:
 - muda a edição entre minuto e segundo.

Setas para cima/baixo ou Swipe vertical:
 - aumenta/diminui o número.

Barra de espaço ou Enter:
 - começa a contar ou pausa.

R - reseta para o último valor.

### Atalhos
---------------numeros no teclado---------------

 1 - set 5 min

 2 - set 10 min

 3 - set 15 min

 4- é 20 min :herb:

# this was made with svelte-kit
# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

Since i'm using static-adapter, after installing `npm i` you have to go to `node_modules/@sveltejs/adapter-static` folder and replace index.js with the [most recent one here](https://github.com/sveltejs/kit/tree/master/packages/adapter-static).

Than run `npm run deploy` to publish in gh-pages.
