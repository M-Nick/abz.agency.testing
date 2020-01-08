<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a @click="handleLinkClick" href="#about" class="menu nav__link"
          >About me</a
        >
      </li>
      <li class="nav__item">
        <a @click="handleLinkClick" href="#relationships" class="menu nav__link"
          >Relationships</a
        >
      </li>
      <li class="nav__item">
        <a @click="handleLinkClick" href="#requirements" class="menu nav__link"
          >Requirements</a
        >
      </li>
      <li class="nav__item">
        <a @click="handleLinkClick" href="#users" class="menu nav__link"
          >Users</a
        >
      </li>
      <li class="nav__item">
        <a @click="handleLinkClick" href="#register" class="menu nav__link"
          >Sign Up</a
        >
      </li>
      <li class="nav__item nav__item--last tablet mobile">
        <a @click="handleLinkClick" href="#" class="menu nav__link">Sign Out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CNav',
  data() {
    return {}
  },
  methods: {
    handleLinkClick() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CNav.scss">
</style>