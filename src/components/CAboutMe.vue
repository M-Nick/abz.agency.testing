<template>
  <section class="about">
    <h1 class="about__header">Let's get acquainted</h1>
    <div class="about__body">
      <img src="@/assets/man-mobile.svg" alt="" class="about__img" />
      <div class="about__info">
        <h2 class="about__title">I am cool frontend developer</h2>
        <p class="about__text">
          When real users have a slow experience on mobile, they're much less
          likely to find what they are looking for or purchase from you in the
          furure. For many sites this equates to a huge missed opportunity,
          especially when more than half of visits are abandoned if a mobile
          page takes over 3 seconds to load.
        </p>
        <p class="about__text">
          Last week, Google Search and Ads teams announced two new speed
          initiatives to help improve user-experience on the web.
        </p>
        <a href="" class="link-bold about__link">Sign Up</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CAboutMe',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CAboutMe.scss">
</style>