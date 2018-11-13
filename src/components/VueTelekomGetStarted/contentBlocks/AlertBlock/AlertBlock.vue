<template>
  <section class="content-block is-alert">
    <h2 class="title is-2 is-main">Alert</h2>
    <p>
      Alert notifications are informing the user about an event and can encourage him to take action.
      They should be used sparely, as frequent interruptions may cause annoyance. Alerts can be of 4 types: <i>DEFAULT | SUCCESS | WARNING | HINT</i> and there can be only one alert at a time.
    </p>
    <p> Alert component has its own <i>Vuex</i> store
      so in order to useit you will need to add Alert store as a module to your Vuex store.
      After that to set the alert you need to commit a <i>SET_ALERT</i> mutation just as shown in the examples below:</p>
    <ContentBlockExample>
      <AlertBlockExample slot="example"/>
      <template slot="code">{{ alertCodeExample }}</template>
    </ContentBlockExample>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import AlertBlockExample from './AlertBlockExample/AlertBlockExample.vue';
  import {alertCodeExample} from './alertCodeExample';

  export default Vue.extend({
    components: {AlertBlockExample},
    mixins: [contentBlockMixin],
    data() {
      return {alertCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
