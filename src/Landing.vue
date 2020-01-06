<template>
  <div id="app">
    <CHeader ref="header" @menuClick="handleMenuClick" :user="user" />
    <CAssignment ref="assigment" />
    <CAboutMe ref="about" />
    <CRelationships ref="relationships" />
    <CRequirements ref="requirements" />
    <CUsers ref="users" />
    <CRegister ref="register" @registered="resetUsers" @alert="alert" />
    <CFooter />
    <CMenu ref="menu" :user="user" />
    <CAlert ref="alert" />
  </div>
</template>

<script>
import { url } from '@/js/url.js'

import CHeader from '@/components/CHeader'
import CAssignment from '@/components/CAssignment'
import CAboutMe from '@/components/CAboutMe'
import CRelationships from '@/components/CRelationships'
import CRequirements from '@/components/CRequirements'
import CUsers from '@/components/CUsers'
import CRegister from '@/components/CRegister'
import CFooter from '@/components/CFooter'
import CMenu from '@/components/CMenu'
import CAlert from '@/components/CAlert'

export default {
  name: 'app',
  components: {
    CHeader,
    CAssignment,
    CAboutMe,
    CRelationships,
    CRequirements,
    CUsers,
    CRegister,
    CFooter,
    CMenu,
    CAlert,
  },
  data() {
    return {
      id: 1,
      user: {},
      startTime: 0,
    }
  },
  mounted() {
    this.addTooltips()
    this.getUserRequest()
  },
  methods: {
    async getUserRequest() {
      const response = await fetch(url.get.user({ id: this.id }))
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          this.user = data.user
        }
      }
    },
    handleMenuClick() {
      this.$refs.menu.open()
    },
    mouseOverMoveHandler(e) {
      const el = e.target
      if (
        (el.offsetWidth + 3 < el.scrollWidth ||
          el.offsetHeight + 3 < el.scrollHeight) &&
        el.children.length == 0
      ) {
        el.title = el.textContent
      } else {
        el.title = ''
      }
    },
    addTooltips() {
      window.addEventListener('mouseover', this.mouseOverMoveHandler)
      window.addEventListener('mousemove', this.mouseOverMoveHandler)
    },
    alert(params) {
      this.$refs.alert.open(params)
    },
    resetUsers() {
      this.$refs.users.reset()
    },
  },
}
</script>

<style lang="scss">
@use "styles/general/default";
@use "./styles/general/global-vars";
@import url("./styles/general/fonts.css");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: unset;
  text-decoration: none;
}
input {
  color: unset;
  background: none;
  border: none;
}
ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  overflow: hidden;
  text-overflow: ellipsis;
}

#app {
  position: relative;
  margin: auto;
  width: var(--max-width);
  padding-top: var(--header-h);
}
</style>
