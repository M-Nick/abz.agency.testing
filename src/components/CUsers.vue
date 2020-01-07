<template>
  <section class="users">
    <div class="anchor" id="users"></div>
    <h2 v-line-clamp:20="2" class="users__header">Our cheerful users</h2>
    <p class="users__title">
      Attention! Sorting users <br class="mobile" />
      by registration date
    </p>
    <div class="users__group" ref="users">
      <User
        v-for="(user, index) in usersOrEmpty"
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
      <span v-if="!loading">Show more</span>
      <div v-else class="users__loaders">
        <div class="users__loader"></div>
        <div class="users__loader"></div>
        <div class="users__loader"></div>
        <div class="users__loader"></div>
        <div class="users__loader"></div>
      </div>
    </button>
  </section>
</template>

<script>
import { url } from '@/js/url.js'

import User from '@/components/CUser'

export default {
  name: 'CUsers',
  components: {
    User,
  },
  data() {
    return {
      perPage: 6,
      users: [],
      showButton: true,
      loading: false,
    }
  },
  computed: {
    page() {
      return Math.ceil(this.users.length / this.perPage + 1)
    },
    usersOrEmpty() {
      if (this.users.length > 0) {
        return this.users
      } else {
        return new Array(this.perPage).fill({})
      }
    },
  },
  mounted() {
    this.setWindowResizeHandler()
    this.setPerPage()
  },
  methods: {
    setWindowResizeHandler() {
      window.addEventListener('resize', this.setPerPage)
    },
    setPerPage() {
      if (window.innerWidth < 768) {
        this.perPage = 3
      } else {
        this.perPage = 6
      }
      this.getMoreUsersIfNeed()
    },
    getMoreUsersIfNeed() {
      if (this.users.length < this.perPage && !this.loading) {
        this.getUsersRequest(this.perPage - this.users.length)
      }
    },
    async getUsersRequest(count) {
      if (this.loading) {
        return
      }
      this.loading = true
      const response = await fetch(
        url.get.users({
          page: this.page,
          count: count || this.perPage,
        })
      )
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          this.showButton = data.links.next_url !== null
          await this.users.push(...data.users)
        }
      } else {
        this.showButton = false
      }
      this.loading = false
    },
    reset() {
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