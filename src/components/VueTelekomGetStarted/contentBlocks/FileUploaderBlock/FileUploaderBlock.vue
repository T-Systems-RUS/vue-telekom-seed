<template>
  <section class="content-block is-file-uploader">
    <h2 class="title is-2 is-main">FileUploader</h2>
    <p>Really heavy component that handles managing files for upload in a very specific way as described below.
      <span class="important">PLEASE NOTE</span>: Because of that and many other reasons this component will
      eventually be deprecated so please consider using
      <router-link
        @click.native="goToMenuItem(UIComponent.SimpleFileUploader)"
        :to="{query: {q: UIComponent.SimpleFileUploader}}">SimpleFileUploader</router-link>
      instead.</p>
    <p>FileUploader uses its own vuex store so it has to be added to your application vuex store as module.
      FileUploader store cannot to be used with multiple instances of FileUploader. So there is no way to
      have multiple FileUploader components on one page/view.
    </p>
    <p>Depends on the following components:</p>
    <ul class="list">
      <li>
        <b>FileUploaderModal</b>: the modal window with the file drop input that opens when clicking the
        main upload button.
      </li>
      <li>
        <b>FileList</b>: shows the files that were dropped to file input. Is present on FileUploaderModal and under
        main upload button (except if <i>hasOuterFileList</i> property is set to <b>false</b>)
      </li>
      <li>
        <b><router-link
          @click.native="goToMenuItem(UIComponent.CommonModal)"
          :to="{query: {q: UIComponent.CommonModal}}">CommonModal</router-link></b>:
        used by FileUploaderModal
      </li>
      <li><b><router-link
        @click.native="goToMenuItem(UIComponent.ConfirmModal)"
        :to="{query: {q: UIComponent.ConfirmModal}}">ConfirmModal</router-link></b>:
        used by FileUploaderModal and FileList</li>
      <li><b>ErrorMessage</b>: used by FileUploaderModal</li>
    </ul>
    <p>The workflow is the following:</p>
    <ul class="list">
      <li>FileUploader is a button that opens FileUploaderModal</li>
      <li>FileUploaderModal has the file input where the user can drag and drop the files.
        When the user drops the file(s) to file input FileUploader validates the file(s) for size 10MB) hardcoded
        <ul class="list">
          <li>Size is not bigger than 10MB (cannot be changed)</li>
          <li>File is not harmful (extension check)</li>

          <li>Also checks whether the file is already in the list</li>
        </ul>
      </li>
      <li>If there is an error error message appears.</li>
      <li>If no errors - files are added to the list below the input.</li>
      <li>
        So the files are in the list below the file input.
        <ul class="list">
          <li>If at this step close or cancel button is clicked, files are not going be added to the main file list.</li>
          <li>If the user clicks the confirmation button below the file list the files are added to main file list and
            FileUploaderModal is closed.</li>
        </ul>
      </li>
      <li>FileList allows to delete the files after asking for confirmation.</li>
      <li>For the image upload:
        <ul class="list">
          <li>FileUploader checks if file extension is .jpg, .jpeg or .png</li>
          <li>If it is a single file upload FileUploaderModal will have 'Add Url' tab where it would be possible to specify
            the url to the publicly available image.
          </li>
        </ul>
      </li>
    </ul>
    <ContentBlockExample>
      <FileUploaderExample slot="example"/>
      <template slot="code">{{ fileUploaderCodeExample }}</template>
    </ContentBlockExample>

    <h4 class="title is-4">API</h4>
    <h5 class="title is-6">Properties</h5>
    <ul class="list">
      <li class="list-item"><b>isImageUpload (type: Boolean, required: false)</b>: enables image upload</li>
      <li class="list-item"><b>isMultiple (type: Boolean, required: false)</b>:
        enables multiple file upload behavior</li>
      <li class="list-item"><b>hasOuterFileList (type: Boolean, required: false, default: true)</b>:
        shows/hides main file list
      </li>
    </ul>
    <h5 class="title is-6">Slots</h5>
    <ul class="list">
      <li><b>open-modal-btn</b>: allows to added custom main upload button</li>
      <li><b>button-text</b>: allows to change default upload button text</li>
      <li><b>upload-title</b>: title of the FileUploaderModal</li>
      <li><b>upload-optional</b>: text under title of the FileUploaderModal</li>
      <li><b>upload-info</b>: information block in the FileUploaderModal</li>
      <li><b>upload-btn</b>: allows to add custom confirmation button in the FileUploaderModal</li>
      <li><b>upload-btn-text</b>: change text of the confirmation button in the FileUploaderModal</li>
      <li><b>modal-cancel-btn</b>: allows to add custom cancel button in the FileUploaderModal</li>
      <li><b>modal-cancel-btn-text</b>: allows to change text of the cancel button in the FileUploaderModal</li>
    </ul>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {contentBlockMixin} from '../contentBlockMixin';
  import {fileUploaderCodeExample} from './fileUploaderCodeExample';
  import FileUploaderExample from './FileUploaderExample/FileUploaderExample.vue';

  export default Vue.extend({
    mixins: [contentBlockMixin],
    components: {FileUploaderExample},
    data() {
      return {
        fileUploaderCodeExample
      };
    }
  });
</script>

<style scoped lang="scss">
  @import '../contentBlocks';
</style>
