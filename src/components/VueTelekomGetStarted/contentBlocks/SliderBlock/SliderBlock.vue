<template>
  <section class="content-block is-slider">
    <h2 class="title is-2 is-main">Slider</h2>
    <p>Very simple slider that have no configuration settings for now but will be upgraded eventually.
      Should be used together with Slide component as shown in the example below:</p>
    <ContentBlockExample>
      <SliderExample slot="example"/>
      <template slot="code">{{ sliderCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">Slider API</h4>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the Slide component list</li>
    </ul>
    <h4 class="title is-4">Slide API</h4>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the Slide item content</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import SliderExample from './SliderExample/SliderExample.vue';
  import {sliderCodeExample} from './sliderCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {SliderExample},
    data() {
      return {
        sliderCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
