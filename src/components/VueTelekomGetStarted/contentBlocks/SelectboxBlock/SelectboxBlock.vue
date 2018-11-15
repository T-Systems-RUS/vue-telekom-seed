<template>
  <section class="content-block is-selectbox">
    <h2 class="title is-2 is-main">Selectbox</h2>
    <p>Selectbox component that can be used for single and multiple selection.</p>
    <p>Selectbox uses SelectboxItem component for the dropdown options. When the menu is being open it will be
      automatically scrolled to the first selected element. Also if you press a letter key on the keyboard
      the menu will be scrolled to the first element that starts with this letter (if any).
    </p>
    <p>Please see the examples below:</p>
    <ContentBlockExample>
      <SelectboxExample slot="example"/>
      <template slot="code">{{ selectboxCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">Selectbox API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>v-model (type: any, required: true)</b>: combination binding value / emit input</li>
      <li class="list-item"><b>value (type: any, required: true)</b>: binding value</li>
      <li class="list-item"><b>isMultiple (type: Boolean, required: false)</b>: specify if multiple selection</li>
      <li class="list-item"><b>hasReset (type: Boolean, required: false)</b>: specify if there is 'reset all' option
        (only when isMutiple: true)
      </li>
      <li class="list-item"><b>disabled (type: Boolean, required: false)</b>: same as native</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>input (any)</b>: triggers when value is changed</li>
      <li class="list-item"><b>blur ()</b>: when toggle button is focused out</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>menu</b>: for SelectboxItem list</li>
      <li class="list-item"><b>placeholder</b>: for the text that is shown on the toggle button</li>
      <li class="list-item"><b>reset</b>: for the reset text like 'Reeset all' or something (see example)</li>
    </ul>
    <h4 class="title is-4">SelectboxItem API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>value (type: any, required: true)</b>: the value of the item</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li class="list-item"><b>item-label</b>: for item label</li>
      <li class="list-item"><b>item-text</b>: for the item text</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import {selectboxCodeExample} from './selectboxCodeExample';
  import SelectboxExample from './SelectboxExample/SelectboxExample.vue';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {SelectboxExample},
    data() {
      return {
        selectboxCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';

  ul + h4 {
    margin-top: $building-unit-x3;
  }
</style>
