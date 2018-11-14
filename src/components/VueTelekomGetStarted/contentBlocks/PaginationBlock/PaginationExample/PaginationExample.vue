<template>
  <div class="example-list">
    <div class="example-item">
      <div class="field">
        <label class="label is-pulled-left">Total pages:</label>
        <div class="control">
          <input
            min="1"
            class="input"
            v-model="totalPages"
            type="number">
        </div>
      </div>
      <div class="field">
        <label class="label is-pulled-left">Max pages in row:</label>
        <div class="control">
          <input
            min="1"
            step="2"
            class="input"
            v-model="maxPagesInRow"
            type="number">
        </div>
      </div>
      <div class="field">
        current page: {{ currentPage }}
      </div>
      <div class="pagination-wrapper">
        <Pagination
          :current-page="currentPage"
          :total-pages="Number(totalPages)"
          :max-pages-in-row="Number(maxPagesInRow)"
          @pagechange="currentPage = $event"/>
      </div>

    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Pagination from '../../../../../common/vue-telekom/components/Pagination/Pagination.vue';

  export default Vue.extend({
    components: {Pagination},
    data() {
      return {
        currentPage: 5,
        totalPages: 15,
        maxPagesInRow: 3 // < 1 ... (5 [7] 9) ... 500> round brackets
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  .example-list {
    .input {
      height: 36px;
    }

    .field {
      margin-bottom: $building-unit-x2;
    }

    .pagination-wrapper {
      display: flex;
      overflow-x: auto;
      padding: $building-unit 0;
    }
  }
</style>
