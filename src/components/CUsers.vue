<template>
  <section class="users">
    <h1 class="users__header">Our cheerful users</h1>
    <p class="users__title">
      Attention! Sorting users <br class="mobile" />
      by registration date
    </p>
    <div class="users__group">
      <article v-for="(user, index) in users" :key="index" class="users__user">
        <img :src="user.photo" :alt="user.name" class="users__avatar" />
        <div class="users__info">
          <div class="users__name">{{ user.name }}</div>
          <div class="users__position">{{ user.position }}</div>
          <div class="users__email">{{ user.email }}</div>
          <div class="users__phone">{{ user.phone }}</div>
        </div>
      </article>
    </div>
    <button
      v-if="showButton"
      @click="getUsersRequest()"
      class="button button--secondary users__button"
    >
      Show more
    </button>
  </section>
</template>

<script>
import { url } from '@/configs/url.js'

export default {
  name: 'CUsers',
  data() {
    return {
      currentPage: 1,
      perPage: 6,
      users: [],
      showButton: true,
    }
  },
  mounted() {
    this.getUsersRequest()
  },
  methods: {
    async getUsersRequest() {
      const response = await fetch(
        url.get.users({ page: this.currentPage++, count: 6 })
      )
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          this.showButton = data.links.next_url !== null
          this.users.push(...data.users)
        }
      }
    },
    reset() {
      this.currentPage = 1
      this.perPage = 6
      this.users = []
      this.showButton = true
      this.getUsersRequest()
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CUsers.scss">
</style>