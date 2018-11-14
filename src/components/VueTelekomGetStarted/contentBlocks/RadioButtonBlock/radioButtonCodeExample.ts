export const radioButtonCodeExample = `<template>
  <div class="examples-list">
    <div class="example-item">
      <div class="field is-width-full">
        <div class="control">
          <div class="radio-holder is-flex">
            <RadioButton
              name="radioExample"
              @toggle="setValue('Yes')"
              :checked="true"
              label="Yes"/>
            <RadioButton
              name="radioExample"
              @toggle="setValue('No')"
              label="No"/>
            <RadioButton
              name="radioExample"
              @toggle="setValue('Maybe')"
              label="Maybe"/>
          </div>
        </div>
      </div>
      <div class="radio-value">RadioButton value: {{ radioValue }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import RadioButton from '../../../../../common/vue-telekom/components/RadioButton/RadioButton.vue';

  export default Vue.extend({
    components: {RadioButton},
    data() {
      return {
        radioValue: 'Yes'
      };
    },
    methods: {
      setValue(value: {}) {
        this.radioValue = value;
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  .example-item {
    .radio + .radio {
      margin-left: $building-unit-x3;
    }

    .radio-value {
      margin-top: $building-unit-x0_5;
    }
  }
</style>
`;
