<template>
  <section class="register">
    <h1 class="register__header">Register to get a work</h1>
    <div class="register__title">
      Attention! After successful registration and alert, update the list of
      users in the block from the top
    </div>
    <form @submit="handleSubmit" class="register__form" ref="form" novalidate>
      <div class="register__fieldset">
        <CInput
          ref="name"
          label="Name"
          v-model="registrationData.name"
          class="register__input"
          :attributes="{
            type: 'text',
            placeholder: 'Your name',
            name: 'name',
            maxlength: 60,
            required: true,
            minlength: 2
          }"
        />
        <CInput
          ref="email"
          label="Email"
          v-model="registrationData.email"
          class="register__input"
          :attributes="{
            type: 'email',
            placeholder: 'Your email',
            name: 'email',
            required: true
          }"
        />
        <CInput
          ref="phone"
          label="Phone"
          mask="+38 (099) 999 99 99"
          v-model="registrationData.phone"
          class="register__input"
          :attributes="{
            type: 'tel',
            placeholder: '+38 (___) ___ __ __',
            name: 'phone',
            required: true,
            pattern:
              '\\+38\\s\\([0]{1}[0-9]{2}\\)\\s[0-9]{3}\\s[0-9]{2}\\s[0-9]{2}'
          }"
        />
      </div>
      <div class="register__fieldset">
        <CSelect
          ref="position"
          placeholder="Select your position"
          :options="positions"
          v-model="registrationData.position"
          class="register__select"
        />
        <CFile
          ref="photo"
          assistive="File format jpg up to 5 MB, the minimum size of 70x70px"
          v-model="registrationData.photo"
          class="register__file"
          name="photo"
        />
      </div>
      <input
        type="submit"
        value="Sign Up"
        class="button button--primary register__button"
        :disabled="buttonDisabled"
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
        position: null,
        photo: null,
      },
    }
  },
  computed: {
    formatPhone() {
      let result = this.registrationData.phone.replace(
        /\+38 \((\d+)\) (\d+) (\d+) (\d+)/,
        '+38$1$2$3$4'
      )
      return result
    },
    buttonDisabled() {
      let result = false
      for (const key in this.registrationData) {
        const value = this.registrationData[key]
        result = result || value === null || value === ''
      }
      return result
    },
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
    checkValidity() {
      let allValid = true
      for (const el of this.$refs.form) {
        if (!el.validity.valid) {
          const name = el.name
          this.$refs[name].error(el.validationMessage)
          allValid = allValid && el.validity.valid
        }
      }
      return allValid
    },
    handleSubmit(e) {
      e.preventDefault()
      if (this.checkValidity()) {
        this.register()
      }
    },
    async register() {
      const token = await this.getTokenRequest()
      if (token) {
        this.postUsersRequest(token)
      }
    },
    async getTokenRequest() {
      const response = await fetch(url.get.token)
      if (response.ok) {
        const data = await response.json()
        if (data.success) {
          return data.token
        }
      }
      return null
    },
    async postUsersRequest(token) {
      let formData = new FormData()
      // file from input type='file'
      formData.append('position_id', this.registrationData.position)
      formData.append('name', this.registrationData.name)
      formData.append('email', this.registrationData.email)
      formData.append('phone', this.formatPhone)
      formData.append('photo', this.registrationData.photo)

      const response = await fetch(url.post.users, {
        method: 'POST',
        body: formData,
        headers: {
          Token: token, // get token with GET api/v1/token method
        },
      })
      console.log(response)
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CRegister.scss">
</style>