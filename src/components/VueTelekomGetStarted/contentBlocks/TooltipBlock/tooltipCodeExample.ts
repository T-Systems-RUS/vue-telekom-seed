export const tooltipCodeExample = `<template>
  <div class="example-list">
    <div class="example-item">
      <Tooltip
        :class="modifierClasses"
        text="Some dummy hint for a user">
        <button class="button is-primary">Button 1</button>
      </Tooltip>
    </div>
    <div class="example-item">
      <div class="field is-width-full">
        <div class="label is-pulled-left is-size-7">Horizontal position:</div>
        <div class="control">
          <RadioButton
            name="horizontalClass"
            @toggle="horizontalClass = ''"
            :checked="true"
            label="Center"/>
          <RadioButton
            name="horizontalClass"
            @toggle="horizontalClass = 'is-left'"
            label="Left"/>
          <RadioButton
            name="horizontalClass"
            @toggle="horizontalClass = 'is-right'"
            label="Right"/>
        </div>
      </div>
      <div class="field is-width-full">
        <span class="label is-pulled-left is-size-7">Vertical position:</span>
        <div class="control">
          <RadioButton
            name="verticalClass"
            @toggle="verticalClass = ''"
            :checked="true"
            label="Top"/>
          <RadioButton
            name="verticalClass"
            @toggle="verticalClass = 'is-bottom'"
            label="Bottom"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tooltip from '../../../../../common/vue-telekom/components/Tooltip/Tooltip.vue';
  import RadioButton from '../../../../../common/vue-telekom/components/RadioButton/RadioButton.vue';

  export default Vue.extend({
    components: {
      Tooltip,
      RadioButton
    },
    data() {
      return {
        horizontalClass: '',
        verticalClass: ''
      };
    },
    computed: {
      modifierClasses(): string {
        return \`\${this.horizontalClass} \${this.verticalClass}\`;
      }
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  .control {
    clear: both;
  }

  .radio + .radio {
    margin-left: $building-unit-x3;
  }
</style>`;
