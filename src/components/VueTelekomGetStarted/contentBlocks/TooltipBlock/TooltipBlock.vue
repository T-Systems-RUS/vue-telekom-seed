<template>
  <section class="content-block is-tooltip">
    <h2 class="title is-2 is-main">Tooltip</h2>
    <p>Simple tooltip component that displays a brief helper text to user. It will automatically change the
      horizontal position to fit in browser window.</p>
    <ContentBlockExample>
      <TooltipExample slot="example"/>
      <template slot="code">{{ tooltipCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li><b>test (String)</b>: text that should be displayed on the tootip</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the element to fire tooltip on</li>
    </ul>
    <h5 class="title is-6">CSS modifiers</h5>
    <ul class="list">
      <li><b>is-bottom</b>: position bottom</li>
      <li><b>is-right</b>: position right</li>
      <li><b>is-left</b>: position left</li>
    </ul>
    <p>By default tooltip will be positioned at the top center.</p>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import TooltipExample from './TooltipExample/TooltipExample.vue';
  import {tooltipCodeExample} from './tooltipCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {TooltipExample},
    data() {
      return {
        tooltipCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
