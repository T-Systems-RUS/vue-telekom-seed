# vue-telekom-seed

This is a seed front-end application to use in most of our Vue.js projects.

## Getting Started

To get the initial code please clone this repo.

Please note before building that this seed actually uses our T-Systems 
[vue-telekom](https://github.com/T-Systems-RUS/vue-telekom/blob/master/styles/export-variables.scss) project internally.
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

# Run e2e tests with output to console
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