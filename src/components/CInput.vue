<template>
  <label class="input" :class="rootClass()">
    <input
      ref="input"
      class="input__input"
      @change="handleInput"
      @input="handleInput"
    />
    <span class="input__label">{{ label }}</span>
    <span class="input__assistive">{{ assistive }}</span>
  </label>
</template>

<script>
import Inputmask from 'inputmask'

export default {
  name: 'CInput',
  props: {
    attributes: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    mask: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      assistive: '',
      isError: false,
    }
  },
  mounted() {
    this.setAttributes()
    this.setMask()
  },
  methods: {
    rootClass() {
      let result = ''
      result += this.isError ? ' input--error' : ''
      return result
    },
    setAttributes() {
      Object.keys(this.attributes).forEach((key) =>
        this.$refs.input.setAttribute(key, this.attributes[key])
      )
    },
    setMask() {
      if (this.mask) {
        let im = new Inputmask(this.mask)
        im.mask(this.$refs.input)
      }
    },
    handleInput() {
      this.resetError()
      this.$emit('input', this.$refs.input.value)
    },
    error(message) {
      this.isError = true
      this.assistive = message
    },
    resetError() {
      this.isError = false
      this.assistive = ''
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CInput.scss">
</style>