export const datepickerCodeExample = `<template>
  <div class="example-list">
    <div class="example-item">
      <div class="field">
        <label class="label is-pulled-left">Min date:</label>
        <div class="control">
          <Datepicker
            placeholder="Date"
            :locale="locale"
            v-model="minDate"/>
        </div>
      </div>
    </div>
    <div class="example-item">
      <div class="field">
        <label class="label is-pulled-left">Min date:</label>
        <div class="control">
          <Datepicker
            placeholder="Date"
            :locale="locale"
            v-model="maxDate"/>
        </div>
      </div>
    </div>
    <div class="example-item">
      <div class="field">
        <label class="label is-pulled-left">Min date:</label>
        <div class="control">
          <Datepicker
            placeholder="Date"
            v-model="result"
            :locale="locale"
            :min-date="minDate"
            :max-date="maxDate"/>
        </div>
      </div>
    </div>
    <div class="example-item">
      <p class="label is-size-7">Toggle locale</p>
      <button
        @click="toggleLocale"
        class="button is-outline">{{ locale }}</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Datepicker from '../../../../../common/vue-telekom/components/Datepicker/Datepicker.vue';

  export default Vue.extend({
    components: {Datepicker},
    data() {
      return {
        minDate: null,
        maxDate: null,
        result: null,
        locale: 'en'
      };
    },
    methods: {
      toggleLocale() {
        this.locale = this.locale === 'en' ? 'de' : 'en';
      }
    }
  });
</script>

<style lang='scss' scoped>
  @import '../../contentBlocks';

  .button {
    width: 50px;
  }
</style>`;
