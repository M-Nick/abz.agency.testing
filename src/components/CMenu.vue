<template>
  <div class="menu">
    <transition name="animation-bg">
      <div v-if="opened" @click="close" class="menu__bg"></div>
    </transition>
    <transition name="animation-body">
      <div v-if="opened" class="menu__body">
        <CFirstUser :user="user" class="menu__user" />
        <hr class="menu__line" />
        <CNav class="menu__nav" />
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
      opened: true,
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