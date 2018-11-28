<template>
  <section class="content-block is-dropdown">
    <h2 class="title is-2 is-main">Dropdown</h2>
    <p>Simple dropdown that can used as a quick menu:</p>
    <ContentBlockExample>
      <DropdownExample slot="example"/>
      <template slot="code">{{ dropdownCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>items</b>: dropdown items</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import {dropdownCodeExample} from './dropdownCodeExample';
  import DropdownExample from './DropdownExample/DropdownExample.vue';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {DropdownExample},
    data() {
      return {
        dropdownCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
