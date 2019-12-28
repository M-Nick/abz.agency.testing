<template>
  <div @click="handleClick" ref="customFile" tabindex="0" class="file">
    <input
      @change="handleChange"
      accept=".jpg,.jpeg"
      ref="nativeFile"
      tabindex="-1"
      type="file"
      class="visually-hidden"
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
      type: [File, null,],
      default: null,
    },
    assistive: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      placeholder: 'Upload your photo',
    }
  },
  computed: {
    text() {
      return this.value === null ? this.placeholder : this.value.name
    },
  },
  methods: {
    nameClass() {
      let result = ''
      result += this.value === null ? ' file__name--placeholder' : ''
      return result
    },
    handleClick(e) {
      this.$refs.nativeFile.click()
    },
    checkSize(file) {
      const maxSize = 1024 ** 2 * 5
      return file.size <= maxSize
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
        if (this.checkSize(file)) {
          this.checkResolution(file)
        } else {
        }
      }
    },
    reactOnResolution(checked, file) {
      console.log(arguments)
      if (checked) {
        this.$emit('input', file)
      } else {
        console.error('File is too small')
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CFile.scss">
</style>