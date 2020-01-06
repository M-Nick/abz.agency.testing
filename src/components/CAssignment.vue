<template>
  <section class="assignment">
    <div class="anchor" id="assignment"></div>
    <div class="assignment__bg"></div>
    <h1 class="assignment__title">
      Test assignment for Frontend Developer position
    </h1>
    <p class="assignment__text">
      <span
        >We kindly remind you that your test assignment should
        <br class="two-k" />
        be submitted as a link to github/bitbucket repository.
      </span>
      <br class="two-k" />
      <span class="desktop tablet two-k"
        >Please be patient, we consider and respond to every application that
        meets minimum requirements. We look forward to your submission. Good
        luck!</span
      >
    </p>
    <a
      @mousedown="handleLinkMousedown"
      href="#register"
      class="button button--primary assignment__sign-up"
      >Sign Up</a
    >
  </section>
</template>

<script>
export default {
  name: 'CAssignment',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CAssignment.scss">
</style>