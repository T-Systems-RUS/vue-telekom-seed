export const fileUploaderCodeExample = `<template>
  <div class="example-list">
    <Tabs
      class="is-aligned-left"
      :value="tabValue"
      @input="updateTabWithDelay($event)">
      <Tab :value="1">Example 1</Tab>
      <Tab :value="2">Example 2</Tab>
      <Tab :value="3">Example 3</Tab>
      <Tab :value="4">Example 4</Tab>
    </Tabs>

    <div
      v-if="tabValue === 1"
      class="example-item">
      <p class="title is-6">Example 1 (single file):</p>
      <FileUploader
        :key="1"
        :is-image-upload="false"
        :is-multiple="false">
        <span slot="button-text">Add files for upload</span>
        <span slot="upload-title">Main Title</span>
        <template slot="upload-optional">
          Optional title
        </template>
        <div
          class="has-text-centered"
          slot="upload-info">
          Maximum file size: 10MB
        </div>
        <template slot="modal-cancel-btn-text">{{ $t('cancel') }}</template>
      </FileUploader>
    </div>

    <div
      v-if="tabValue === 2"
      class="example-item">
      <p class="title is-6">Example 2 (multiple files):</p>
      <FileUploader
        :key="2"
        :is-image-upload="false"
        :is-multiple="true">
        <span slot="button-text">Add files for upload</span>
        <span slot="upload-title">Main Title</span>
        <template slot="upload-optional">
          Optional title
        </template>
        <div
          class="has-text-centered"
          slot="upload-info">
          Maximum file size: 10MB
        </div>
        <template slot="modal-cancel-btn-text">{{ $t('cancel') }}</template>
      </FileUploader>
    </div>

    <div
      v-if="tabValue === 3"
      class="example-item">
      <p class="title is-6">Example 3 (Image upload, single file):</p>
      <FileUploader
        :key="3"
        :is-image-upload="true"
        :is-multiple="false">
        <span slot="button-text">Add files for upload</span>
        <span slot="upload-title">Main Title</span>
        <template slot="upload-optional">
          Optional title
        </template>
        <div
          class="has-text-centered"
          slot="upload-info">
          Maximum file size: 10MB
        </div>
        <template slot="modal-cancel-btn-text">{{ $t('cancel') }}</template>
      </FileUploader>
    </div>

    <div
      v-if="tabValue === 4"
      class="example-item">
      <p class="title is-6">Example 4 (Image upload, multiple files):</p>
      <FileUploader
        :key="4"
        :is-image-upload="true"
        :is-multiple="true">
        <span slot="button-text">Add files for upload</span>
        <span slot="upload-title">Main Title</span>
        <template slot="upload-optional">
          Optional title
        </template>
        <div
          class="has-text-centered"
          slot="upload-info">
          Maximum file size: 10MB
        </div>
        <template slot="modal-cancel-btn-text">{{ $t('cancel') }}</template>
      </FileUploader>
    </div>
    <p class="is-size-7">Outside upload button:</p>
    <button
      @click="handleUpload"
      :class="{'is-disabled': !filesToUpload.length}"
      class="button is-primary">Upload</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import FileUploader from '../../../../../common/vue-telekom/components/FileUploader/FileUploader.vue';
  import Tabs from '../../../../../common/vue-telekom/components/Tabs/Tabs.vue';
  import Tab from '../../../../../common/vue-telekom/components/Tabs/Tab/Tab.vue';
  import {
    ALL_UPLOAD_FILES
  } from '../../../../../common/vue-telekom/components/FileUploader/fileUploadStore/getter-types';
  import {IFileUpload} from '../../../../../common/vue-telekom/components/FileUploader/IFileUploadList';
  import {
    SET_FILE_COMPLETED,
    SET_FILE_LOADING
  } from '../../../../../common/vue-telekom/components/FileUploader/fileUploadStore/mutation-types';

  export default Vue.extend({
    components: {
      Tabs,
      Tab,
      FileUploader
    },
    data() {
      return {
        tabValue: 1
      };
    },
    computed: {
      filesToUpload(): IFileUpload[] {
        return this.$store.getters[ALL_UPLOAD_FILES];
      }
    },
    methods: {
      updateTabWithDelay(tabValue: number) {
        // necessary for FileUploader to be destroyed before it is created on new tab
        this.tabValue = 0;
        Vue.nextTick(() => {
          this.tabValue = tabValue;
        });
      },
      fakeUpload() {
        return new Promise(resolve => setTimeout(resolve, Math.random() * 3000));
      },
      handleUpload() {
        Promise.all(this.filesToUpload.map((file: IFileUpload) => {
          this.setUploadFileLoading(file);
          // call API instead of fakeUpload
          return this.fakeUpload()
            .then(() => this.setUploadFileCompleted(file));
        }));
      },
      setUploadFileCompleted(file: IFileUpload) {
        this.$store.commit(SET_FILE_COMPLETED, file);
      },
      setUploadFileLoading(file: IFileUpload) {
        this.$store.commit(SET_FILE_LOADING, file);
      }
    }
  });
</script>

<style lang='scss' scoped>
  @import '../../contentBlocks';

  .file-upload-wrapper {
    margin-bottom: $building-unit-x4;
  }

  .example-item {
    padding-top: $building-unit-x2;
  }
</style>`;
