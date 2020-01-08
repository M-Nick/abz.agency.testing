<template>
  <div class="cmenu">
    <transition name="animation-bg">
      <div
        v-touch:swipe.left="close"
        v-if="opened"
        @click="close"
        class="cmenu__bg"
      ></div>
    </transition>
    <transition name="animation-body">
      <div v-touch:swipe.left="close" v-if="opened" class="cmenu__body">
        <CFirstUser :user="user" class="cmenu__user" />
        <hr class="cmenu__line" />
        <CNav @click="handleLinkClick" class="cmenu__nav" />
      </div>
    </transition>
  </div>
</template>

<script>
import CNav from '@/components/CNav'
import CFirstUser from '@/components/CFirstUser'

import { removeScroll, returnScroll } from '@/js/managePageScroll.js'

export default {
  name: 'CMenu',
  components: {
    CNav,
    CFirstUser,
  },
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      opened: false,
    }
  },
  methods: {
    open() {
      this.opened = true
      window.addEventListener('keydown', this.handleKeydown)
      removeScroll()
    },
    close() {
      window.removeEventListener('keydown', this.handleKeydown)
      returnScroll()
      this.opened = false
    },
    handleKeydown(e) {
      if (e.code === 'Escape') {
        this.close()
      }
    },
    handleLinkClick() {
      this.close()
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CMenu.scss">
</style>