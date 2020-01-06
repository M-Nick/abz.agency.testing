<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <a href="#about" class="menu nav__link">About me</a>
      </li>
      <li class="nav__item">
        <a href="#relationships" class="menu nav__link">Relationships</a>
      </li>
      <li class="nav__item">
        <a href="#requirements" class="menu nav__link">Requirements</a>
      </li>
      <li class="nav__item">
        <a href="#users" class="menu nav__link">Users</a>
      </li>
      <li class="nav__item">
        <a href="#register" class="menu nav__link">Sign Up</a>
      </li>
      <li class="nav__item nav__item--last tablet mobile">
        <a href="#" class="menu nav__link">Sign Out</a>
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
}
</script>

<style scoped lang="scss" src="@/styles/components/CNav.scss">
</style>