<template>
  <section class="content-block is-pagination">
    <h2 class="title is-2 is-main">Pagination</h2>
    <p>A configurable pagination component:</p>
    <ContentBlockExample>
      <PaginationExample slot="example"/>
      <template slot="code">{{ paginationCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>currentPage (type: Number, required: true)</b>: current page</li>
      <li class="list-item"><b>totalPages (type: Number, required: true)</b>: total number of pages</li>
      <li class="list-item"><b>maxPagesInRow (type: Number, required: false, default: 3)</b>: max pages count between
        spreads (odd numbers preferred) < 1 ... (5 6 [7] 8 9) ... 500></li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>pagechange (Number)</b>: triggers when page changes</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import PaginationExample from './PaginationExample/PaginationExample.vue';
  import {paginationCodeExample} from './paginationCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {PaginationExample},
    data() {
      return {
        paginationCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
