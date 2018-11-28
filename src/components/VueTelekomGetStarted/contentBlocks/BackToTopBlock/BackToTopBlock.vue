<template>
  <section class="content-block is-back-to-top">
    <h2 class="title is-2 is-main">BackToTop</h2>
    <p>The Back-to-top button will be displayed as soon as you scrolled down 1 full viewport height.
      On viewport-L the button will always be displayed when you scroll up & down.
      On the viewports M and S the button will be displayed when you scroll up,
      but will be hidden when you scroll down.</p>
    <p>BackToTop doesn't have any properties and doesn't emit any events.</p>
    <p>You can see <i>BackToTop</i> button if you scroll down this page 1 full viewport height.</p>
    <ContentBlockExample>
      <template slot="code">{{ codeExample }}</template>
    </ContentBlockExample>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';

  const codeExample = '<BackToTop/>';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    data() {
      return {codeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
