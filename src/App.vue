<template>
  <div id="app">
     <main>
    <header>
      <h1>RECEPTIA</h1>
    </header>
    <article>

    </article>
    <article>
      <router-view></router-view>
      <aside>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/burgers">Burgers</router-link>
              <router-link to="/soups">Soups</router-link>
                  <router-link to="/desserts">Desserts</router-link>
        </nav>
      </aside>
    </article>
  </main>
  <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    -->
  </div>
</template>
<style src="./assets/style.css"></style>

<!-- <style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->
