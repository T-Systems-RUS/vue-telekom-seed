<template>
  <section class="content-block is-tabs">
    <h2 class="title is-2 is-main">Tabs</h2>
    <p>Simple tabs component. Should be used together with Tab component:</p>
    <ContentBlockExample>
      <TabsExample slot="example"/>
      <template slot="code">{{ tabsCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">Tabs API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>v-model (type: String, required: true)</b>:
        combination of binding value / input event</li>
      <li class="list-item"><b>value (type: String, required: false)</b>:
        value of the selected tab</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li><b>input, change (String)</b>: triggers when tab is selected</li>
      <li><b>change (String)</b>: the same as <i>input</i></li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the Tab component list</li>
    </ul>
    <h4 class="title is-4">Tab API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>value (type: String, required: false)</b>:
        value of the tab that will be emitted when tab is selected</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the Tab item content</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import TabsExample from './TabsExample/TabsExample.vue';
  import {tabsCodeExample} from './tabsCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {TabsExample},
    data() {
      return {
        tabsCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
