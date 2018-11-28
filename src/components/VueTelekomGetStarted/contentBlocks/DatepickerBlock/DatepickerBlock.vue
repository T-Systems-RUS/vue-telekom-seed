<template>
  <section class="content-block is-datepicker">
    <h2 class="title is-2 is-main">Datepicker</h2>
    <p>An input with a simple dropdown/modal for selecting a date, uses native datepicker for mobile.
      It is based on <a href="https://buefy.github.io/documentation/datepicker/" target="_blank">Buefy</a> datepicker
      so you will have to add buefy as a dependency to your project.</p>
    <ContentBlockExample>
      <template slot="code">{{ datepickerCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>v-model (type: Date, required: true)</b>: combination binding value / emit input</li>
      <li class="list-item"><b>value (type: Date, required: true)</b>: binding value</li>
      <li class="list-item"><b>placeholder (type: String, required: false)</b>: datepicker placeholder</li>
      <li class="list-item"><b>minDate (type: Date, required: false)</b>: datepicker min date</li>
      <li class="list-item"><b>maxDate (type: Date, required: false)</b>: datepicker max date</li>
      <li class="list-item"><b>locale (type: String, required: false)</b>: translation locale. Can be either
        'en' or 'de', other languages are not supported).</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li class="list-item"><b>input (Date)</b>: triggers when value is changed</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import {datepickerCodeExample} from './datepickerCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    data() {
      return {
        datepickerCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
