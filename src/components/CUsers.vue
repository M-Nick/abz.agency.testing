<template>
  <section class="users">
    <h1 class="users__header">Our cheerful users</h1>
    <p class="users__title">Attention! Sorting users by registration date</p>
    <div class="users__group">
      <article v-for="(user, index) in users" :key="index" class="users__user">
        <img :src="user.avatar" alt="user.name" class="users__avatar" />
        <div class="users__info">
          <div class="users__name">{{ user.name }}</div>
          <div class="users__position">{{ user.position }}</div>
          <div class="users__email">{{ user.email }}</div>
          <div class="users__phone">{{ user.phone }}</div>
        </div>
      </article>
    </div>
    <button href="" class="button button--secondary users__button">
      Show more
    </button>
  </section>
</template>

<script>
export default {
  name: 'CUsers',
  data() {
    return {
      users: [
        {
          avatar: require('@/assets/user-1.jpg'),
          name: 'Noah',
          position: 'Leading specialist of the Control Department',
          email: 'noah.controldepartment@gmail.com',
          phone: '+38 (050) 678 03 24',
        },
        {
          avatar: require('@/assets/user-2.png'),
          name: 'Adolph Blaine Charles David Earl',
          position: 'The contextual advertising specialist',
          email: 'adolph.blainecharles-davidearl@gmail.com',
          phone: '+38 (095) 556 08 45',
        },
        {
          avatar: require('@/assets/user-3.jpg'),
          name: 'Liamgrievescasey Smith Wiam',
          position: 'Lead designer',
          email: 'liamgrievescasey@example.com',
          phone: '+38 (050) 273 93 32',
        },
        {
          avatar: require('@/assets/user-4.jpg'),
          name: 'Elizabeth',
          position: 'Frontend developer',
          email: 'elisabet.frontend@gmail.com',
          phone: '+38 (095) 924 66 37',
        },
        {
          avatar: require('@/assets/user-5.jpg'),
          name: 'Alexander',
          position: 'Backend developer',
          email: 'alexander.backend@gmail.com',
          phone: '+38 (050) 789 24 09',
        },
        {
          avatar: require('@/assets/user-6.jpg'),
          name: 'Mason',
          position: 'QA',
          email: 'mason.qa@gmail.com',
          phone: '+38 (095) 283 27 00',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss" src="@/styles/components/CUsers.scss">
</style>