<template>
  <div class="hello">
    <div class="container">
      <h1 class="title is-2">{{ msg }}</h1>
      <div class="hello-block">
        <p>
          For guide and recipes on how to configure / customize this project,<br>
          check out the
          <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
        </p>
      </div>
      <div class="hello-block">
        <h3 class="title is-3">Installed CLI Plugins</h3>
        <ul>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank">typescript</a></li>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank">unit-jest</a></li>
          <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch" target="_blank">e2e-nightwatch</a></li>
        </ul>
      </div>
      <div class="hello-block">
        <h3 class="title is-3">Essential Links</h3>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
        </ul>
      </div>
      <div class="hello-block">
        <h3 class="title is-3">Ecosystem</h3>
        <ul>
          <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
          <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
          <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
          <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
      <div class="hello-block">
        <h3 class="title is-3">Vue-telekom</h3>
        <p>
          Vue-telekom is a collection of Telekom styles relied on
          <a href="https://github.com/vuejs/awesome-vue" target="_blank">bulma</a> CSS framework and base Vue components.
          For more information regarding <i>vue-telekom</i> please refer to its
          <a href="https://github.com/T-Systems-RUS/vue-telekom" target="_blank">GitHub repository</a>
          and also the <router-link to="vue-telekom">component list page</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    msg: String
  }
});
</script>

<style scoped lang="scss">
@import '../common/vue-telekom/styles/base/variables';

.hello {
  padding: $building-unit-x3 $building-unit;

  &-block {
    margin-bottom: $building-unit-x2;

    h3 {
      margin-bottom: $building-unit;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 (-$building-unit);
    }

    li {
      padding: 0 $building-unit;
    }
  }
}
</style>
