<template>
  <section class="relates">
    <div class="anchor" id="relationships"></div>
    <div class="relates__header">
      About my relationships with web-development
    </div>
    <div class="relates__body">
      <article
        v-for="(skill, index) in skills"
        :key="index"
        class="relates__tech"
      >
        <img
          :src="skill.src"
          :alt="skill.alt"
          class="relates__logo"
          :class="skill.class"
        />
        <div class="relates__info">
          <div class="relates__title" v-html="skill.title"></div>
          <div class="relates__text" v-html="skill.text"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CRelationships',
  data() {
    return {
      skills: [
        {
          src: require('@/assets/html.svg'),
          alt: 'html logo',
          title: 'I\'m in love with HTML',
          text:
            'Hypertext Markup Language (HTML) <br class="mobile"> is the standard markup language for creating web pages and web applications.',
          class: 'relates__logo--smaller',
        },
        {
          src: require('@/assets/css.svg'),
          alt: 'css logo',
          title: 'CSS is my best friend',
          text:
            'Cascading Style Sheets (CSS) <br class="tablet" />is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
          class: 'relates__logo--smaller',
        },
        {
          src: require('@/assets/javascript.svg'),
          alt: 'javascript logo',
          title: 'JavaScript is my passion',
          text:
            'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and <br />multi-paradigm.',
          class: 'relates__logo--js',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CRelationships.scss">
</style>