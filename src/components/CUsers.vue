<template>
  <section class="users">
    <h2 class="users__header">Our cheerful users</h2>
    <p class="users__title">
      Attention! Sorting users <br class="mobile" />
      by registration date
    </p>
    <div class="users__group" ref="users">
      <User
        v-for="(user, index) in users"
        :key="index"
        :user="user"
        class="users__user"
      ></User>
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

import User from '@/components/CUser'

export default {
  name: 'CUsers',
  components: {
    User,
  },
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