# vue-telekom-seed

This is a seed front-end application to use in most of our Vue.js projects.

## Getting Started

To get the initial code please clone this repo.

Please note before building that this seed actually uses our T-Systems 
[vue-telekom](https://github.com/T-Systems-RUS/vue-telekom) project internally.
Which is a collection of custom components and Telekom design styling. 

And since *vue-telekom* is a submodule you will have to run this after cloning the project:

```bash
git submodule init
git submodule update
```

This should get latest submodule version. If you wish to update the submodule and the link please run
```bash
git submodule update --remote
```

## How to

``` bash
# Install dependencies first
yarn

# Serve with hot reload at localhost:8080 (if port is busy will be other - see console)
yarn serve

# Build for production with minification
yarn build

# Run unit tests
yarn test:unit

# Run e2e tests
yarn test:e2e

# Perform TSLint code check
yarn lint
```

### Via UI

You can also run these tasks via nice UI app if you have vue-cli installed globally.
```bash
# Install vue cli globally
yarn global add @vue/cli

# Run UI
vue ui
```
After this import you project via UI and look at tasks.

For more information on how to use Vue CLI please look at the [documentation](https://cli.vuejs.org/guide/).

## WebStorm / Intellij IDEA configuration

Enable TSlint plugin, Vue plugin and TypeScript integration.
All of these should work by default.

### Unit testing via Jest

1. Click Run in the main toolbar
2. Edit Configurations
3. On the top left of the Run/Debug Configurations dialog, click the + sign.
4. Choose Jest
5. Name the new configuration "Jest"
6. Under "Configuration file" select `jest.conf.js` from root
7. Specify Jest package - `node_modules/jest`
8. Click Apply 

You can now both run Unit tests and debug them inside the IDE.

### e2e testing via Nightwatch

**Note that this is different from running via console** `yarn test:e2e` 
**which also starts the http server and checks if port is in use.**

**Prerequisite** : running application locally e.g. `yarn serve` or somewhere else.

1. Click Run in the main toolbar
2. Edit Configurations
3. On the top left of the Run/Debug Configurations dialog, click the + sign.
4. Choose Node.js
5. Name the new configuration "Nightwatch"
6. Under "JavaScript file" enter `node_modules\nightwatch\bin\runner.js`
7. Under "Application parameters" enter `--config nightwatch.config.js --env chrome`
8. Add environment variable `VUE_DEV_SERVER_URL` with value which is the location of your
 application, in case of local `yarn serve` the value will be `http://localhost:8080/`
9. Click Apply 

You can now both run e2e tests and debug them inside the IDE.
