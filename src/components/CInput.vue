<template>
  <label class="input">
    <input placeholder="Label text" class="input__input" type="text" />
    <span class="input__name">Label text</span>
    <span class="input__assistive">Assistive text</span>
  </label>
</template>

<script>
export default {
  name: 'CInput',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CInput.scss">
</style>