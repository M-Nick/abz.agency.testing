<template>
  <div v-if="opened" class="alert">
    <div @click="close()" class="alert__bg"></div>
    <div class="alert__modal">
      <div class="alert__title">{{ title }}</div>
      <div class="alert__text">{{ text }}</div>
      <button
        :aria-label="button"
        @click="close()"
        class="alert__button link-bold"
      >
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CAlert',
  data() {
    return {
      opened: false,
      title: 'Congratulations',
      text: 'You have successfully passed the registration',
      button: 'OK',
    }
  },
  methods: {
    open({ title, text, button }) {
      this.title = title
      this.text = text
      this.button = button ? button : 'OK'
      this.opened = true
      this.removeScroll()
    },
    close() {
      this.opened = false
      this.returnScroll()
    },
    removeScroll() {
      const el = document.scrollingElement
      if (
        el &&
        el.style &&
        Object.prototype.hasOwnProperty.call(el.style, 'overflow')
      ) {
        el.style.overflow = 'hidden'
      }
    },
    returnScroll() {
      const el = document.scrollingElement
      if (
        el &&
        el.style &&
        Object.prototype.hasOwnProperty.call(el.style, 'overflow')
      ) {
        el.style.overflow = ''
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CAlert.scss">
</style>