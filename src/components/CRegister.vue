<template>
  <div class="register">
    <h1 class="register__header">Register to get a work</h1>
    <div class="register__title">
      Attention! After successful registration and alert, update the list of
      users in the block from the top
    </div>
    <form class="register__form" novalidate>
      <div class="register__fieldset">
        <CInput class="register__input" />
        <CInput class="register__input" />
        <CInput class="register__input" />
      </div>
      <div class="register__fieldset">
        <CSelect class="register__select" />
        <CFile class="register__file" />
      </div>
      <input
        type="submit"
        value="Sign Up"
        class="button button--primary register__button"
        disabled
      />
    </form>
  </div>
</template>

<script>
import CInput from '@/components/CInput'
import CSelect from '@/components/CSelect'
import CFile from '@/components/CFile'

export default {
  name: 'CRegister',
  components: {
    CSelect,
    CInput,
    CFile,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss" src="@/styles/components/CRegister.scss">
</style>