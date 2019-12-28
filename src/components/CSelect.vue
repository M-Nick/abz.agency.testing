<template>
  <div class="select">
    <select tabindex="-1" name="" v-model="value" class="visually-hidden">
      <option v-for="option in options" :key="option.id" :value="option.name">{{
        option.name
      }}</option>
    </select>
    <div tabindex="0" ref="select" class="select__select">
      {{ value }}
    </div>
    <svg class="select__caret" viewBox="0 0 16 9">
      <path
        d="M15.7.3A.94.94 0 0015 0H1a.94.94 0 00-.7.3A1 1 0 000 1a.94.94 0 00.3.7l7 7a1 1 0 001.4 0l7-7A.94.94 0 0016 1a1 1 0 00-.3-.7z"
      />
    </svg>
    <ul v-if="opened" class="select__list" ref="selectList">
      <li
        v-for="option in options"
        :key="option.id"
        :value="option.name"
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
  data() {
    return {
      opened: false,
      options: [
        {
          id: 0,
          name: 'Frontend developer',
          selected: true,
        },
        {
          id: 1,
          name: 'Backend developer',
          selected: false,
        },
        {
          id: 2,
          name: 'QA',
          selected: false,
        },
        {
          id: 3,
          name: 'PM',
          selected: false,
        },
        {
          id: 5,
          name: 'Teamlead',
          selected: false,
        },
        {
          id: 6,
          name: 'Data specialist',
          selected: false,
        },
        {
          id: 7,
          name: 'Data designer',
          selected: false,
        },
      ],
    }
  },
  mounted() {
    this.handleSelectCall()
  },
  methods: {
    optionClass(obj) {
      let result = ''
      result += obj.selected ? ' select__option--selected' : ''
      return result
    },
    handleSelectMouseDown(e) {
      e.stopPropagation()
      this.handleOpen()
    },
    handleSelectKeyDown(e) {
      const keys = ['Space', 'Enter',]
      if (keys.includes(e.code)) {
        e.preventDefault()
        this.handleOpen()
      }
    },
    handleSelectCall() {
      const events = [
        {
          name: 'mousedown',
          handler: this.handleSelectMouseDown,
        },
        {
          name: 'keydown',
          handler: this.handleSelectKeyDown,
        },
      ]
      events.forEach((event) =>
        this.$refs.select.addEventListener(event.name, event.handler)
      )
    },
    open() {
      this.opened = true
    },
    close() {
      this.opened = false
    },
    focusFirst() {
      this.$refs.selectList.children[0].focus()
    },
    async handleOpen() {
      await this.open()
      this.focusFirst()
      this.setEventsToClose()
    },
    setEventsToClose() {
      window.addEventListener('mousedown', this.handleWindowMouseDown)
      window.addEventListener('keydown', this.handleWindowKeyDown)
    },
    removeEventsToClose() {
      window.removeEventListener('mousedown', this.handleWindowMouseDown)
      window.removeEventListener('keydown', this.handleWindowKeyDown)
    },
    setEventsToSelect() {
      const eventsToSelect = [
        { name: 'mousemove', handler: this.handleOptionMouseMove, },
      ]
      eventsToSelect.forEach((event) =>
        this.$refs.selectList.addEventListener(event.name, event.handler)
      )
    },
    removeEventsToSelect() {
      const eventsToSelect = [
        { name: 'mousemove', handler: this.handleOptionMouseMove, },
      ]
      eventsToSelect.forEach((event) =>
        this.$refs.selectList.removeEventListener(event.name, event.handler)
      )
    },
    handleClose() {
      this.removeEventsToClose()
      this.close()
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
      const currentIndex = this.options.findIndex(
        (option) => option.selected === true
      )
      const nextIndex =
        currentIndex === this.options.length - 1 ? 0 : currentIndex + 1
      this.selectOption(this.options[nextIndex])
    },
    selectPrev() {
      const currentIndex = this.options.findIndex(
        (option) => option.selected === true
      )
      const prevIndex =
        currentIndex === 0 ? this.options.length - 1 : currentIndex - 1
      this.selectOption(this.options[prevIndex])
    },
    selectOption(option) {
      this.options.forEach((opt) => this.$set(opt, 'selected', false))
      this.$set(option, 'selected', true)
    },
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CSelect.scss">
</style>