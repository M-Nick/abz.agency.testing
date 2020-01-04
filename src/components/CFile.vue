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
    <div class="file__button button button--secondary">
      <span class="tablet desktop two-k">
        Upload
      </span>
      <svg width="20" height="24" class="file__icon mobile">
        <g fill="currentColor">
          <path
            d="M18.12 14.2a.31.31 0 01-.2 0c-.06 0-.11 0-.14.11-.03.11-.07.12-.09.12-.02 0 0 .06 0 .18v4.95A2.46 2.46 0 0115.18 22H4.41a2.35 2.35 0 01-1.73-.72A2.35 2.35 0 012 19.59v-4.9a.45.45 0 00-.1-.31.48.48 0 00-.3-.15 2.58 2.58 0 00-.36-.05H.49a.45.45 0 00-.34.15.46.46 0 00-.15.34v4.9a4.27 4.27 0 001.29 3.12A4.27 4.27 0 004.41 24h10.77a4.4 4.4 0 004.41-4.41v-4.9a.45.45 0 00-.1-.31.43.43 0 00-.3-.15 2.58 2.58 0 00-.36-.05h-.71v.02z"
          />
          <path
            d="M9.11.29L.78 8.62a1 1 0 000 1.38.92.92 0 00.69.3h4.41v6.85a1 1 0 001 1h5.87a1 1 0 001-1v-6.86h4.41a.92.92 0 00.69-.3 1 1 0 000-1.37L10.48.29a1 1 0 00-1.37 0z"
          />
        </g>
      </svg>
    </div>
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
      this.$refs.nativeFile.value = ''
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