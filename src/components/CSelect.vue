<template>
  <div class="select">
    <select
      tabindex="-1"
      :name="name"
      :value="currentOption.id"
      class="visually-hidden"
      required
    >
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.id"
      ></option>
    </select>
    <div tabindex="0" ref="select" class="select__select">
      {{ currentOption.name }}
    </div>
    <svg class="select__caret" viewBox="0 0 16 9">
      <path
        d="M15.7.3A.94.94 0 0015 0H1a.94.94 0 00-.7.3A1 1 0 000 1a.94.94 0 00.3.7l7 7a1 1 0 001.4 0l7-7A.94.94 0 0016 1a1 1 0 00-.3-.7z"
      />
    </svg>
    <ul v-if="opened" class="select__list" ref="selectList">
      <li
        @click="handleClose()"
        v-if="options.length === 0"
        class="select__option select__option--empty"
      >
        Empty list
      </li>
      <li
        v-for="option in options"
        :key="option.id"
        :data-value="option.id"
        :class="optionClass(option)"
        class="select__option"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CSelect',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Number, String,],
      default: null,
    },
  },
  data() {
    return {
      opened: false,
      currentOptionIndex: null,
      defaultOption: {
        id: null,
        name: 'Chose position',
      },
      eventsToClose: [
        {
          name: 'mousedown',
          handler: this.handleWindowMouseDown,
        },
        {
          name: 'keydown',
          handler: this.handleWindowKeyDown,
        },
      ],
      eventsSelectCall: [
        {
          name: 'mousedown',
          handler: this.handleSelectMouseDown,
        },
        {
          name: 'keydown',
          handler: this.handleSelectKeyDown,
        },
      ],
      eventsToSelect: [
        { name: 'mousedown', handler: this.handleOptionMouseDown, },
      ],
    }
  },
  computed: {
    currentOption() {
      return this.currentOptionIndex === null
        ? { name: this.placeholder, id: null, }
        : this.options[this.currentOptionIndex]
    },
  },
  mounted() {
    this.handleSelectCall()
  },
  methods: {
    optionClass(obj) {
      let result = ''
      result +=
        this.currentOptionIndex !== null &&
        obj.id === this.options[this.currentOptionIndex].id
          ? ' select__option--selected'
          : ''
      return result
    },

    async handleOpen() {
      await this.open()
      if (this.options.length) {
        await this.focusFirst()
        await this.setEventsToSelect()
      }
      await this.setEventsToClose()
    },

    handleClose() {
      if (this.options.length) {
        this.removeEventsToSelect()
      }
      this.removeEventsToClose()
      this.close()
    },

    open() {
      this.opened = true
    },

    close() {
      this.opened = false
    },

    setEventsToSelect() {
      this.eventsToSelect.forEach((event) =>
        this.$refs.selectList.addEventListener(event.name, event.handler)
      )
    },

    setEventsToClose() {
      this.eventsToClose.forEach((event) =>
        window.addEventListener(event.name, event.handler)
      )
    },

    removeEventsToSelect() {
      if (this.$refs.selectList) {
        this.eventsToSelect.forEach((event) =>
          this.$refs.selectList.removeEventListener(event.name, event.handler)
        )
      }
    },

    removeEventsToClose() {
      this.eventsToClose.forEach((event) =>
        window.removeEventListener(event.name, event.handler)
      )
    },

    handleSelectMouseDown(e) {
      e.stopPropagation()
      if (e.button === 0) {
        if (this.opened) {
          this.handleClose()
        } else {
          this.handleOpen()
        }
      }
    },

    handleSelectKeyDown(e) {
      if (e && e.code) {
        const keys = ['Space', 'Enter',]
        if (keys.includes(e.code) && !this.opened) {
          e.preventDefault()
          e.stopPropagation()
          this.handleOpen()
        }
        if (e.code === 'Home') {
          e.preventDefault()
          e.stopPropagation()
          this.currentOptionIndex = 0
        }
        if (e.code === 'End') {
          e.preventDefault()
          e.stopPropagation()
          this.currentOptionIndex = this.options.length - 1
        }
        if (e.code === 'ArrowUp') {
          e.preventDefault()
          e.stopPropagation()
          this.selectPrev()
        }
        if (e.code === 'ArrowDown') {
          e.preventDefault()
          e.stopPropagation()
          this.selectNext()
        }
      }
    },

    handleSelectCall() {
      this.eventsSelectCall.forEach((event) =>
        this.$refs.select.addEventListener(event.name, event.handler)
      )
    },

    focusFirst() {
      if (this.currentOptionIndex < 0) {
        this.currentOptionIndex = 0
      }
      this.$refs.selectList.children[0].focus()
    },

    async handleOptionMouseDown(e) {
      if (
        e &&
        e.target &&
        e.target.classList.contains('select__option') &&
        e.target.dataset &&
        e.target.dataset.value
      ) {
        e.preventDefault()
        await this.selectOption(e.target.dataset.value)
        await this.handleClose()
      }
    },

    handleWindowMouseDown(e) {
      if (!(e && e.target && e.target.classList.contains('select__option'))) {
        this.handleClose()
      }
    },

    handleWindowKeyDown(e) {
      if (e && e.code) {
        const codesToClose = ['Tab', 'Escape', 'Enter',]
        if (codesToClose.includes(e.code)) {
          e.preventDefault()
          this.handleClose()
        }
        if (e.code === 'ArrowUp') {
          e.preventDefault()
          this.selectPrev()
        }
        if (e.code === 'ArrowDown') {
          e.preventDefault()
          this.selectNext()
        }
      }
    },

    selectNext() {
      this.currentOptionIndex =
        this.currentOptionIndex === null ? 0 : this.currentOptionIndex
      this.currentOptionIndex =
        this.currentOptionIndex === this.options.length - 1
          ? 0
          : this.currentOptionIndex + 1
    },

    selectPrev() {
      this.currentOptionIndex =
        this.currentOptionIndex === null ? 0 : this.currentOptionIndex
      this.currentOptionIndex =
        this.currentOptionIndex === 0
          ? this.options.length - 1
          : this.currentOptionIndex - 1
    },

    selectOption(id) {
      this.currentOptionIndex = this.options.findIndex(
        (option) => option.id == id
      )
    },
  },
  watch: {
    currentOptionIndex(curr, prev) {
      this.$emit('input', this.options[curr].id)
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CSelect.scss">
</style>