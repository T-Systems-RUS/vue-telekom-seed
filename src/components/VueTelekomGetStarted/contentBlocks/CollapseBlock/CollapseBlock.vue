<template>
  <section class="content-block is-collapse">
    <h2 class="title is-2 is-main">Collapse</h2>
    <p>Simple styled collapse component that allows you to toggle content visibility on your pages.</p>
    <ContentBlockExample>
      <CollapseBlockExample slot="example"/>
      <template slot="code">{{ collapseCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>isOpen (type: String, required: false)</b>: to specify initial <i>expanded</i> state</li>
      <li class="list-item"><b>header (type: String, required: false)</b>: collapse block header</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>default</b>: collapse block content</li>
      <li class="list-item"><b>header</b>: collapse block content</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import CollapseBlockExample from './CollapseBlockExample/CollapseBlockExample.vue';
  import {collapseCodeExample} from './collapseCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {CollapseBlockExample},
    data() {
      return {collapseCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
