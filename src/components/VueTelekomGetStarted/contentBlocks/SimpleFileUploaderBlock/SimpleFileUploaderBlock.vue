<template>
  <section class="content-block is-simple-file-uploader">
    <h2 class="title is-2 is-main">SimpleFileUploader</h2>
    <p> Simple file list that is supposed to be used in conjunction with SimpleFileUploader. For the examples please
      also refer to
      <router-link
        @click.native="goToMenuItem(UIComponent.SimpleFileUploader)"
        :to="{query: {q: UIComponent.SimpleFileUploader}}">SimpleFileUploader</router-link>.
    </p>
    <ContentBlockExample>
      <SimpleFileUploaderExample slot="example"/>
      <template slot="code">{{ simpleFileUploaderCodeExample }}</template>
    </ContentBlockExample>
    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>isImageUpload (type: Boolean, required: false)</b>: enables image upload</li>
      <li class="list-item"><b>isMultiple (type: Boolean, required: false)</b>:
        enables multiple file upload behavior</li>
      <li class="list-item"><b>fileMaxSize (type: Number, required: false)</b>: max file size in MB</li>
      <li class="list-item"><b>allowedFormats (type: string[], required: false)</b>:
        array of allowed file extensions (e.g ['pdf', 'txt'])
      </li>
      <li class="list-item"><b>disabled (type: Boolean, required: false)</b>: same as native</li>
    </ul>
    <h5 class="title is-6">Events</h5>
    <ul class="list">
      <li><b>change (IFileUpload)</b>: triggers when file are dropped in the input area</li>
      <li><b>error (IFileUploadErrors)</b>: triggers when any file failed the checks
        (always fires after change event)</li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>default</b>: for the content of the file input area (including image)</li>
      <li><b>drop-area-text</b>: for the content below the image</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import SimpleFileUploaderExample from './SimpleFileUploaderExample/SimpleFileUploaderExample.vue';
  import {simpleFileUploaderCodeExample} from './simpleFileUploaderCodeExample';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {SimpleFileUploaderExample},
    data() {
      return {simpleFileUploaderCodeExample};
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
