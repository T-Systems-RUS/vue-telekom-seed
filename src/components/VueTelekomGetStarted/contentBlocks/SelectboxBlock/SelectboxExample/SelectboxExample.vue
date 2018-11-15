<template>
  <div class="example-list">
    <div class="example-item">
      <div class="field">
        <span class="label is-pulled-left is-size-7">Single selection:</span>
        <div class="control">
          <Selectbox
            :disabled="isDisabled"
            v-model="selectbox1">
            <template slot="placeholder">
              {{ selectbox1 || 'Please select' }}
            </template>
            <template slot="menu">
              <SelectboxItem :value="null">
                <template slot="item-text">Please select</template>
              </SelectboxItem>
              <SelectboxItem
                v-for="option in selectboxOptions"
                :key="option"
                :value="option">
                <template slot="item-text">{{ option }}</template>
              </SelectboxItem>
            </template>
          </Selectbox>
        </div>
        value: {{ selectbox1 }}
      </div>
    </div>
    <div class="example-item">
      <div class="field">
        <span class="label is-pulled-left is-size-7">Multiple selection:</span>
        <div class="control">
          <Selectbox
            :disabled="isDisabled"
            :is-multiple="true"
            v-model="selectbox2">
            <template slot="placeholder">
              <span v-if="selectbox2.length">Countries ({{ selectbox2.length }})</span>
              <span v-else>Please select</span>
            </template>
            <template slot="menu">
              <SelectboxItem
                v-for="option in selectboxOptions"
                :key="option"
                :value="option">
                <template slot="item-text">{{ option }}</template>
              </SelectboxItem>
            </template>
          </Selectbox>
        </div>
        value: {{ selectbox2 }}
      </div>
    </div>
    <div class="example-item">
      <div class="field">
        <span class="label is-pulled-left is-size-7">Multiple selection (with reset and labels):</span>
        <div class="control">
          <Selectbox
            :disabled="isDisabled"
            :is-multiple="true"
            :has-reset="true"
            v-model="selectbox3">
            <template slot="placeholder">
              <span v-if="selectbox3.length">Countries ({{ selectbox3.length }})</span>
              <span v-else>Please select</span>
            </template>
            <template slot="reset">Reset all</template>
            <template slot="menu">
              <SelectboxItem
                v-for="(option, index) in selectboxOptions"
                :key="option"
                :value="option">
                <template slot="item-text">{{ option }}</template>
                <template slot="item-label">{{ index + 1 }}</template>
              </SelectboxItem>
            </template>
          </Selectbox>
        </div>
        value: {{ selectbox3 }}
      </div>

    </div>
    <div class="example-item">
      <button
        @click="isDisabled = !isDisabled"
        class="button is-outline">Disabled: {{ isDisabled }}</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Selectbox from '../../../../../common/vue-telekom/components/Selectbox/Selectbox.vue';
  import SelectboxItem from '../../../../../common/vue-telekom/components/Selectbox/SelectboxItem/SelectboxItem.vue';

  const selectboxOptions = ['Algeria', 'Bulgaria', 'Canada',
    'Dennmark', 'Estonia', 'France', 'Germany', 'Hungary', 'Ireland', 'Jamaica', 'Kenia', 'Lebanon', 'Macedonia',
    'Netherlands', 'OAE', 'Puerto Rico', 'Qatar', 'Russia', 'Serbia', 'Thailand', 'USA', 'Venezuela', 'Wales',
    'Yemen', 'Zambia'];

  export default Vue.extend({
    components: {
      Selectbox,
      SelectboxItem
    },
    data() {
      return {
        isDisabled: false,
        selectbox1: null,
        selectbox2: [],
        selectbox3: [],
        selectboxOptions
      };
    },
    methods: {

    }
  });
</script>

<style lang='scss' scoped>
  @import '../../contentBlocks';

  .message {
    margin-top: $building-unit;
    color: $green;
  }
</style>
