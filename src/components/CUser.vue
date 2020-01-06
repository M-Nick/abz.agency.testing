<template>
  <article class="user">
    <img
      v-if="photoSrc"
      :src="photoSrc"
      :alt="user.name"
      class="user__avatar"
    />
    <div v-else class="user__avatar user__avatar--default"></div>
    <div class="user__info">
      <div ref="name" class="user__name">{{ user.name }}</div>
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
    this.setOverflowVerticalClass()
    this.loadPhoto()
  },
  methods: {
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
      const img = document.createElement('img')
      img.src = this.user.photo
      img.onload = this.setPhoto
      img.onerror = this.setNoPhoto
    },
    setPhoto() {
      this.photoSrc = this.user.photo
    },
    setNoPhoto() {
      this.photoSrc = require('@/assets/no-user.png')
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CUser.scss">
</style>