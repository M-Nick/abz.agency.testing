<template>
  <div class="relates">
    <div class="relates__header">
      About my relationships with web-development
    </div>
    <div class="relates__body">
      <div class="relates__tech">
        <img
          src="@/assets/html.svg"
          alt="html logo"
          class="relates__logo relates__logo--smaller"
        />
        <div class="relates__title">I'm in love with HTML</div>
        <div class="relates__text">
          Hypertext Markup Language (HTML) is the standard markup language for
          creating web pages and web applications.
        </div>
      </div>
      <div class="relates__tech">
        <img
          src="@/assets/css.svg"
          alt="css logo"
          class="relates__logo relates__logo--smaller"
        />
        <div class="relates__title">CSS is my best friend</div>
        <div class="relates__text relates__text--short">
          Cascading Style Sheets (CSS) <br />is a style sheet language used for
          describing the presentation of a document written in a markup language
          like HTML.
        </div>
      </div>
      <div class="relates__tech">
        <img
          src="@/assets/javascript.svg"
          alt="javascript logo"
          class="relates__logo"
        />
        <div class="relates__title">JavaScript is my passion</div>
        <div class="relates__text">
          JavaScript is a high-level, interpreted programming language. It is a
          language which is also characterized as dynamic, weakly typed,
          prototype-based and <br />multi-paradigm.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CRelationships',
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/components/CRelationships.scss">
</style>