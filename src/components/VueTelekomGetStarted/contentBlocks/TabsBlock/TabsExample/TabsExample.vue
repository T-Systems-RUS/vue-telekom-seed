<template>
  <div class="example-list">
    <div class="example-item">
      <Tabs
        class="example-tabs is-aligned-left"
        v-model="tabValue">
        <Tab :value="ExampleTab.personal">Personal Info</Tab>
        <Tab :value="ExampleTab.organization">Organization Info</Tab>
        <Tab :value="ExampleTab.security">Security Settings</Tab>
      </Tabs>
      <div class="tabs-content-wrap">
        <div v-if="tabValue === ExampleTab.personal" class="tab-content">Personal Info</div>
        <div v-if="tabValue === ExampleTab.organization" class="tab-content">Organization Info</div>
        <div v-if="tabValue === ExampleTab.security" class="tab-content">Security Settings</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Tabs from '../../../../../common/vue-telekom/components/Tabs/Tabs.vue';
  import Tab from '../../../../../common/vue-telekom/components/Tabs/Tab/Tab.vue';

  enum ExampleTab {
    personal = 'personal',
    security = 'security',
    organization = 'organization'
  }

  export default Vue.extend({
    components: {
      Tabs,
      Tab
    },
    data() {
      return {
        tabValue: ExampleTab.personal,
        ExampleTab
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../../contentBlocks';

  .tab-content {
    padding: $building-unit-x2;
    height: 100px;
    background-color: $gray-248;
  }
</style>
