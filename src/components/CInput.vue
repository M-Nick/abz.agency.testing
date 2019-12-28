<template>
  <label class="input">
    <input
      ref="input"
      :placeholder="placeholder"
      class="input__input"
      :type="type"
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
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    assistive: {
      type: String,
      default: '',
    },
    mask: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  mounted() {
    this.setMask()
  },
  methods: {
    setMask() {
      if (this.mask) {
        let im = new Inputmask(this.mask)
        im.mask(this.$refs.input)
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CInput.scss">
</style>