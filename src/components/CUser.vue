<template>
  <article class="user">
    <img
      v-if="photoSrc"
      :src="photoSrc"
      :alt="user.name"
      class="user__avatar"
    />
    <div v-else class="user__avatar user__avatar--default"></div>
    <div class="user__info" :class="infoClass()">
      <h4 v-line-clamp:20="2" ref="name" class="user__name">{{ user.name }}</h4>
      <div class="user__position">{{ user.position }}</div>
      <div class="user__email">{{ user.email }}</div>
      <div class="user__phone">{{ user.phone }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CUser',
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      photoSrc: '',
    }
  },
  async mounted() {
    await this.loadPhoto()
    // this.setOverflowVerticalClass()
  },
  methods: {
    infoClass() {
      let result = ''
      result += ['name', 'position', 'email', 'phone'].reduce(
        (acc, cur) =>
          acc || Object.prototype.hasOwnProperty.call(this.user, cur),
        false
      )
        ? ''
        : ' user__info--empty'
      return result
    },
    setOverflowVerticalClass() {
      const nameEl = this.$refs.name
      if (
        nameEl.offsetHeight < nameEl.scrollHeight &&
        nameEl.offsetWidth <= nameEl.scrollWidth
      ) {
        nameEl.classList.add('user__name--overflow-vertical')
      }
    },
    loadPhoto() {
      if (this.user.photo !== undefined) {
        const img = document.createElement('img')
        img.src = this.user.photo
        img.onload = this.setPhoto
        img.onerror = this.setNoPhoto
      }
    },
    setPhoto() {
      this.photoSrc = this.user.photo
    },
    setNoPhoto() {
      this.photoSrc = require('@/assets/no-user.png')
    },
  },
  watch: {
    user() {
      this.loadPhoto()
      // this.setOverflowVerticalClass()
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CUser.scss">
</style>