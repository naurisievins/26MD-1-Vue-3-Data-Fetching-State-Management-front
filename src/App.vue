<script setup lang="ts">
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Favorites' }">Favorites</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  padding: 1rem;
}

nav a {
  color: #2e302f;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  transition: 0.4s;
}

nav a:hover {
  text-shadow: 1px 2px 4px #666262;
  border-bottom-color: #969393;
}
nav .router-link-active {
  outline: none;
  border-bottom-color: #2e302f;
}

</style>
