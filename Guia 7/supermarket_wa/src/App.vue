<template>
  <div id="app">
    <div class="header">
      <h1>Supermarket UMB</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth">Inicio</button>
        <button v-on:click="categories" v-if="is_auth">Categorías</button>
        <button v-if="is_auth">Productos</button>
        <button v-if="is_auth">Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Curso de sistemas distribuidos</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data: function () {
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
    init: function () {
      // eslint-disable-next-line eqeqeq
      if (this.$route.name != 'user') {
        let username = localStorage.getItem('current_username')
        this.$router.push({ name: 'user', params: { username: username } })
      }
    },
    categories: function () {
      // eslint-disable-next-line eqeqeq
      if (this.$route.name != 'categories') {
        let username = localStorage.getItem('current_username')
        this.$router.push({
          name: 'categories',
          params: { username: username }
        })
      }
    }
  },
  beforeCreate: function () {
    localStorage.setItem('current_username', 'Miguel Valbuena')
    localStorage.setItem('isAuth', true)
    this.$router.push({ name: 'user', params: { username: 'Miguel Valbuena' } })
  }
}
</script>

<style>
body {
  margin: 0 0 0 0;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #981827;
  color: #e5e7e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1 {
  width: 20%;
  text-align: center;
}
.header nav {
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}
.header nav button {
  color: #e5e7e9;
  background: #981827;
  border: 1px solid #e5e7e9;
  border-radius: 5px;
  padding: 10px 20px;
}
.header nav button:hover {
  color: #981827;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}
.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #981827;
  color: #e5e7e9;
}
.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
