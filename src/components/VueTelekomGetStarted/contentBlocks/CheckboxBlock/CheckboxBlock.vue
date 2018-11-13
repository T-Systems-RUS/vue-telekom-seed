<template>
  <section class="content-block is-checkbox">
    <h2 class="title is-2 is-main">Checkbox</h2>
    <p>Simple base checkbox component. Please see the usage options below:</p>
    <CheckboxBlockExample/>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import CheckboxBlockExample from './CheckboxBlockExample/CheckboxBlockExample.vue';

  const codeExample = '<BackToTop/>';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {CheckboxBlockExample},
    data() {
      return {codeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
