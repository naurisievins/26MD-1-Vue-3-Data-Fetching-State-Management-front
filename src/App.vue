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
  z-index: 1;
  background-color: #ffffff11;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 16px;
  gap: 20px;
  padding: 0.5rem 1rem;
}

nav a {
  color: #c3c7c5;
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  transition: 0.4s;
  cursor: pointer;
}

nav a:hover {
  transform: translateY(-2px);
  text-shadow: 1px 2px 4px #666262;
  border-bottom-color: #49474783;
}
nav .router-link-active {
  outline: none;
  border-bottom-color: #c3c7c5;
}

</style>
