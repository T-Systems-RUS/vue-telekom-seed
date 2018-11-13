<template>
  <div id="app">
    <Header v-if="$route.name !== 'vue-telekom'"/>
    <div class="view">
      <router-view/>
    </div>
    <Footer v-if="$route.name !== 'vue-telekom'"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Header from './components/root/Header/Header.vue';
  import Footer from './components/root/Footer/Footer.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Header,
      Footer
    }
  });
</script>

<style lang="scss" scoped>
  // For sticky footer
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .view {
    // Sticky footer
    flex: 1;
  }

</style>
