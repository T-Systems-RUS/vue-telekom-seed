<template>
  <div class="checkbox-example">
    <div class="field">
      <Checkbox
        :checked.sync="checkbox1"
        :disabled="true">Value 1</Checkbox>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Checkbox from '../../../../../common/vue-telekom/components/Checkbox/Checkbox.vue';

  export default Vue.extend({
    components: {Checkbox},
    data() {
      return {
        checkbox1: true
      }
    }
  });
</script>

<style scoped lang="scss">
  .alert-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .column {
    padding-top: 12px;
    padding-bottom: 12px;
  }
</style>