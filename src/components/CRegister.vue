<template>
  <section class="register">
    <h1 class="register__header">Register to get a work</h1>
    <div class="register__title">
      Attention! After successful registration and alert, update the list of
      users in the block from the top
    </div>
    <form class="register__form" novalidate>
      <div class="register__fieldset">
        <CInput
          type="text"
          placeholder="Your name"
          label="Name"
          v-model="registrationData.name"
          class="register__input"
        />
        <CInput
          type="email"
          label="Email"
          v-model="registrationData.email"
          class="register__input"
        />
        <CInput
          type="tel"
          label="Phone"
          v-model="registrationData.phone"
          class="register__input"
        />
      </div>
      <div class="register__fieldset">
        <CSelect
          placeholder="Select your position"
          :options="positions"
          v-model="registrationData.position"
          class="register__select"
        />
        <CFile
          assistive="File format jpg up to 5 MB, the minimum size of 70x70px"
          v-model="registrationData.photo"
          class="register__file"
        />
      </div>
      <input
        type="submit"
        value="Sign Up"
        class="button button--primary register__button"
        disabled
      />
    </form>
  </section>
</template>

<script>
import CInput from '@/components/CInput'
import CSelect from '@/components/CSelect'
import CFile from '@/components/CFile'

import { url } from '@/configs/url.js'

export default {
  name: 'CRegister',
  components: {
    CSelect,
    CInput,
    CFile,
  },
  data() {
    return {
      positions: [],
      registrationData: {
        name: '',
        email: '',
        phone: '',
        position: '',
        photo: null,
      },
    }
  },
  async mounted() {
    await this.getPositionsRequest()
  },
  methods: {
    async getPositionsRequest() {
      const response = await fetch(url.get.positions)
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          this.positions = data.positions
        }
      }
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CRegister.scss">
</style>