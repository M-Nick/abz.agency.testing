<template>
  <div id="app">
    <CHeader />
    <CAssignment />
    <CAboutMe />
    <CRelationships />
    <CRequirements />
    <CUsers />
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
import CAssignment from '@/components/CAssignment'
import CAboutMe from '@/components/CAboutMe'
import CRelationships from '@/components/CRelationships'
import CRequirements from '@/components/CRequirements'
import CUsers from '@/components/CUsers'

export default {
  name: 'app',
  components: {
    CHeader,
    CAssignment,
    CAboutMe,
    CRelationships,
    CRequirements,
    CUsers,
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
#app {
  position: relative;
  margin: auto;
  width: var(--max-width);
  padding-top: var(--header-h);
}
</style>
