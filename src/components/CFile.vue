<template>
  <div
    @click="handleProcess"
    @keydown.enter="handleProcess"
    @keydown.space="handleProcess"
    ref="customFile"
    tabindex="0"
    class="file"
    :class="generalClass()"
  >
    <input
      @change="handleChange"
      accept=".jpg,.jpeg"
      ref="nativeFile"
      tabindex="-1"
      type="file"
      class="visually-hidden"
      :name="name"
      required
    />
    <div class="file__name" :class="nameClass()">{{ text }}</div>
    <div class="file__button button button--secondary">Upload</div>
    <div class="file__assistive">{{ assistive }}</div>
  </div>
</template>

<script>
export default {
  name: 'CFile',
  props: {
    value: {
      type: [File, null],
      default: null,
    },
    assistive: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      placeholder: 'Upload your photo',
      error: false,
    }
  },
  computed: {
    text() {
      return this.value === null ? this.placeholder : this.value.name
    },
  },
  methods: {
    generalClass() {
      let result = ''
      result += this.error ? ' file--error' : ''
      return result
    },
    nameClass() {
      let result = ''
      result += this.value === null ? ' file__name--placeholder' : ''
      return result
    },
    handleProcess() {
      this.$refs.nativeFile.click()
    },
    checkSize(file) {
      const maxSize = 1024 ** 2 * 5
      return file.size <= maxSize
    },
    checkExtension(file) {
      const extensions = ['.jpg', '.jpeg']
      const name = file.name.toLowerCase()
      return extensions.reduce((res, cur) => res || name.endsWith(cur), false)
    },
    checkResolution(file) {
      const self = this
      const url = window.URL.createObjectURL(file)
      const img = document.createElement('img')
      img.src = url
      img.onload = function() {
        const checked = img.naturalHeight >= 70 && img.naturalWidth >= 70
        self.reactOnResolution(checked, file)
      }
    },
    async handleChange(e) {
      if (e && e.target && e.target.files && e.target.files.length > 0) {
        const file = await e.target.files[0]
        if (this.checkSize(file) && this.checkExtension(file)) {
          this.checkResolution(file)
        } else {
          this.errorFile()
        }
      }
    },
    reactOnResolution(checked, file) {
      if (checked) {
        this.$emit('input', file)
        this.error = false
        this.correctFile()
      } else {
        this.errorFile()
      }
    },
    errorFile() {
      this.$refs.input.value = ''
      this.error = true
    },
    correctFile() {
      this.error = false
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CFile.scss">
</style>