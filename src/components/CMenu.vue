<template>
  <div class="cmenu">
    <transition name="animation-bg">
      <div v-if="opened" @click="close" class="cmenu__bg"></div>
    </transition>
    <transition name="animation-body">
      <div v-if="opened" class="cmenu__body">
        <CFirstUser :user="user" class="cmenu__user" />
        <hr class="cmenu__line" />
        <CNav class="cmenu__nav" />
      </div>
    </transition>
  </div>
</template>

<script>
import CNav from '@/components/CNav'
import CFirstUser from '@/components/CFirstUser'

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
    },
    close() {
      this.opened = false
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CMenu.scss">
</style>