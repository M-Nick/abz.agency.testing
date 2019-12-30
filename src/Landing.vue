<template>
  <div id="app">
    <CHeader />
    <CAssignment />
    <CAboutMe />
    <CRelationships />
    <CRequirements />
    <CUsers ref="users" />
    <CRegister @registered="resetUsers" @alert="alert" />
    <CFooter />
    <CAlert ref="alert" />
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
import CAssignment from '@/components/CAssignment'
import CAboutMe from '@/components/CAboutMe'
import CRelationships from '@/components/CRelationships'
import CRequirements from '@/components/CRequirements'
import CUsers from '@/components/CUsers'
import CRegister from '@/components/CRegister'
import CFooter from '@/components/CFooter'
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
    CAlert,
  },
  methods: {
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
@use "styles/default/default";
@import url("./styles/default/fonts.css");
@import url("./styles/default/global-vars.css");

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
#app {
  position: relative;
  margin: auto;
  width: var(--max-width);
  padding-top: var(--header-h);
}
</style>
