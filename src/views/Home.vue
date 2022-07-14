<template>
  <div class="home">
    Wannaplay tonight ?
    <a :href="url">Sign in with Discord</a>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    url:'http://localhost:3333/api/auth/login',
  }),
  mounted() {}
}
</script>
