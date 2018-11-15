<template>
  <div class="example-list">
    <div class="example-item">
      <p>Example 1 (multiple file upload):</p>
      <div class="field is-width-full">
        <SimpleFileUploader
          :is-multiple="true"
          :file-max-size="2"
          :allowed-formats="fileAllowedFormats"
          :disabled="isDisabled"
          @change="files = $event; fileErrors = null"
          @error="fileErrors = $event"/>
        <div
          v-if="fileErrors"
          class="example-errors">
          <p
            v-if="fileErrors[fileErrorType.FILE_SIZE]"
            class="help is-danger is-size-7">
            {{ getInvalidFileNames(fileErrors[fileErrorType.FILE_SIZE]) }}:
            too large (2MB max)
          </p>
          <p
            v-if="fileErrors[fileErrorType.FILE_EXTENSION]"
            class="help is-danger is-size-7">
            {{ getInvalidFileNames(fileErrors[fileErrorType.FILE_EXTENSION]) }}:
            harmful extension
          </p>
          <p
            v-if="fileErrors[fileErrorType.CUSTOM_FORMAT]"
            class="help is-danger is-size-7">
            {{ getInvalidFileNames(fileErrors[fileErrorType.CUSTOM_FORMAT]) }}:
            invalid file type. Should be: {{ fileAllowedFormats }}
          </p>
        </div>
      </div>
      <div class="field is-width-full">
        <SimpleFileList
          v-if="files.length"
          :files="files"
          :disabled="isDisabled"
          @delete="deleteFile($event)"/>
      </div>
    </div>
    <div class="example-item">
      <p>Example 2 (multiple image upload):</p>
      <div class="field is-width-full">
        <SimpleFileUploader
          :is-multiple="true"
          :is-image-upload="true"
          :file-max-size="3"
          :disabled="isDisabled"
          @change="images = $event; imageErrors = null"
          @error="imageErrors = $event"/>
        <div
          v-if="imageErrors"
          class="example-errors">
          <p
            v-if="imageErrors[fileErrorType.FILE_SIZE]"
            class="help is-danger is-size-7">
            {{ getInvalidFileNames(imageErrors[fileErrorType.FILE_SIZE]) }}:
            too large (3MB max)
          </p>
          <p
            v-if="imageErrors[fileErrorType.IMAGE_EXTENSION]"
            class="help is-danger is-size-7">
            {{ getInvalidFileNames(imageErrors[fileErrorType.IMAGE_EXTENSION]) }}:
            invalid format, should be: *.jpg, *.jpeg, *.png
          </p>
        </div>
      </div>
      <div class="field is-width-full">
        <SimpleFileList
          v-if="images.length"
          :files="images"
          :is-tile="isTile"
          :is-image-upload="true"
          :disabled="isDisabled"
          @delete="deleteImage($event)"/>
      </div>
      <button
        @click="isTile = !isTile"
        class="button is-outline">Tile view for image file list: {{ isTile }}</button>
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
  import SimpleFileList from '../../../../../common/vue-telekom/components/SimpleFileList/SimpleFileList.vue';
  // tslint:disable-next-line
  import SimpleFileUploader from '../../../../../common/vue-telekom/components/SimpleFileUploader/SimpleFileUploader.vue';
  import {IFileUpload} from '../../../../../common/vue-telekom/components/FileUploader/IFileUploadList';
  import {
    FileUploadErrorType,
    IFileUploadErrors
  } from '../../../../../common/vue-telekom/components/FileUploader/fileUploadStore';

  interface IExampleData {
    isDisabled: boolean;
    isTile: boolean;
    files: IFileUpload[];
    images: IFileUpload[];
    fileErrors: IFileUploadErrors | null;
    imageErrors: IFileUploadErrors | null;
    fileErrorType: typeof FileUploadErrorType;
    fileAllowedFormats: string[];
  }

  const fileAllowedFormats = ['pdf', 'doc', 'txt'];

  export default Vue.extend({
    components: {
      SimpleFileList,
      SimpleFileUploader
    },
    data(): IExampleData {
      return {
        isDisabled: false,
        isTile: false,
        files: [],
        images: [],
        fileErrors: null,
        imageErrors: null,
        fileErrorType: FileUploadErrorType,
        fileAllowedFormats
      };
    },
    methods: {
      getInvalidFileNames(fileNames: string[]) {
        return fileNames.join(', ');
      },
      deleteFile(file: IFileUpload) {
        this.files.splice(this.files.indexOf(file), 1);
      },
      deleteImage(image: IFileUpload) {
        this.images.splice(this.images.indexOf(image), 1);
      }
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
