<template>
  <div class="example-list">

    <div class="example-item">
      <p class="label is-size-7">Simple usage:</p>
      <Collapse header="Click here to expand">
        <ul><li v-for="i in [1,2,3,4,5,6,7,8]">{{ i }}</li></ul>
      </Collapse>
    </div>

    <div class="example-item">
      <p class="label is-size-7">Can be white, header can be passed as slot:</p>
      <Collapse class="is-bg-white">
        <span
          slot="header"
          class="is-size-5">Add class 'is-bg-white' to make white</span>
        <ul><li v-for="i in [1,2,3,4,5,6,7,8]">{{ i }}</li></ul>
      </Collapse>
    </div>

    <div class="example-item">
      <p class="label is-size-7">Change initial expanded state with 'isOpen' property:</p>
      <Collapse :is-open="true">
        <span
          slot="header"
          class="is-size-3">Click here to expand</span>
        <ul><li v-for="i in [1,2,3,4,5,6,7,8]">{{ i }}</li></ul>
      </Collapse>
    </div>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import Collapse from '../../../../../common/vue-telekom/components/Collapse/Collapse.vue';

  export default Vue.extend({
    components: {Collapse}
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';
</style>
