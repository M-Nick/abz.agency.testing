<template>
  <section class="reqs">
    <div class="anchor anchor--no-top" id="requirements"></div>
    <div class="reqs__bg"></div>
    <h2 class="reqs__header">General requirements for the test task</h2>
    <div class="reqs__body">
      <div class="reqs__info">
        <p class="reqs__p">
          Users want to find answers to their questions quickly and data shows
          that people really care about how quickly their pages load. The Search
          team announced speed would be a ranking signal for desktop searches in
          2010 and as of this month (July 2018), page speed will be a ranking
          factor for mobile searches too.
        </p>
        <p class="reqs__p">
          If you're a developer working on a site, now is a good time to
          evaluate your performance using our speed tools. Think about how
          performance affects the user experience of your pages and consider
          measuring a variety of real-world <br class="mobile two-k" />
          user-centric performance metrics.
        </p>
        <p class="reqs__p">
          Are you shipping too much JavaScript? Too many images? Images and
          JavaScript are the most significant contributors to the page weight
          that affect page load time based on data from HTTP Archive and the
          Chrome User Experience Report - our public dataset for key UX metrics
          as experienced by Chrome users under <br class="mobile" />
          real-world conditions.
        </p>
      </div>
      <img
        src="@/assets/man-laptop-h.svg"
        alt="man with laptop"
        class="reqs__img reqs__img--h"
      />
      <img
        src="@/assets/man-laptop-v.svg"
        alt="man with laptop"
        class="reqs__img reqs__img--v"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'CRequirements',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CRequirements.scss">
</style>