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
  color: #05502b;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
}

nav a:hover {
  text-shadow: 2px 2px 4px #423d3d;
  border-bottom-color: #66666625;
}

nav .router-link-active {
  outline: none; /* Remove the default focus outline */
  border-bottom-color: #ccc;
}
</style>
