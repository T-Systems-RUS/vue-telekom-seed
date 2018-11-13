export const checkboxCodeExample = `
<template>
  <div class="checkbox-examples">
    <div class="checkbox-example">
      <label class="label is-size-7">Simple usage example (disables checkbox below):</label>
      <Checkbox :checked.sync="checkbox1">checkbox 1 ({{ checkbox1 }})</Checkbox>
    </div>

    <div class="checkbox-example">
      <label class="label is-size-7">Disabled state example (click checkbox above to toggle disabled state):</label>
      <Checkbox
        :disabled="checkbox1"
        :checked.sync="checkbox2">checkbox 2 ({{ checkbox2 }})</Checkbox>
    </div>

    <div class="checkbox-example">
      <label class="label is-size-7">Checkbox set object:</label>
      <Checkbox :checked.sync="checkboxSet.value1">value 1 ({{ checkboxSet.value1 }})</Checkbox>
      <Checkbox :checked.sync="checkboxSet.value2">value 2 ({{ checkboxSet.value2 }})</Checkbox>
      <Checkbox :checked.sync="checkboxSet.value3">value 3 ({{ checkboxSet.value3 }})</Checkbox>
      <div class="checkbox-value">{{ checkboxSet }}</div>
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
        checkbox1: true,
        checkbox2: true,
        checkboxSet: {
          value1: true,
          value2: false,
          value3: true
        }
      };
    }
  });
</script>

<style scoped lang="scss">

  .checkbox-example {
    margin-bottom: 24px;

    .label {
      margin-bottom: 6px;
    }

    .checkbox + .checkbox {
      margin-left: 24px;
    }

    .checkbox-value {
      margin-top: 6px;
    }
  }
</style>`;
