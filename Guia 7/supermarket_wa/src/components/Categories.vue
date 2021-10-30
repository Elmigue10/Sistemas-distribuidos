/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
<template>
  <div id="Categories">
  <div class="modificarCategoria">
    <div class="addCategoria">
      <h2>Añadir categoria</h2>
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" placeholder="Nombre">
      <label for="descripcion">Descripcion</label>
      <input type="text" id="descripcion" name="descripcion" placeholder="descripcion">
      <button v-on:click="postCategory">Agregar</button>
    </div>
    <div class="updateCategoria">
      <h2>Editar categoria</h2>
      <label for="nombreUpdate">Nombre</label>
      <input type="text" id="nombreUpdate" name="nombre" placeholder="Nombre">
      <label for="descripcionUpdate">Descripcion</label>
      <input type="text" id="descripcionUpdate" name="descripcionUpdate" placeholder="descripcion">
      <button v-on:click="postCategory">Actualizar</button>
    </div>
  </div>
    <h2>
      Usuario autenticado: <span>{{ username }}</span>
    </h2>
    <button v-on:click="getCategory">Obtener categorías</button>

    <div v-for="(category, index) in categories" v-bind:key="index">
      <h2>
        La categoría con id = <span>{{ category.id }}</span
        >, tiene el nombre <span>{{ category.name }}</span> y su descripción es «<span>{{
          category.description
        }}</span>». <button v-on:click="fillForm(index)">Editar</button> <button v-on:click="deleteCategory(category.id)">Eliminar</button>
      </h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Categories',
  data: function () {
    return {
      category_id: '',
      name: '',
      description: '',
      categories: []
    }
  },
  created: function () {
    this.username = this.$route.params.username
    // eslint-disable-next-line no-unused-vars
    let self = this
  },
  methods: {
    getCategory: function () {
      this.username = this.$route.params.username
      axios
        .get('http://localhost:4000/categories/')
        .then((result) => {
          this.categories = result.data
        })
        .catch((error) => {
          alert('ERROR de Servidor: ', error)
        })
    },
    postCategory: function () {
      this.username = this.$route.params.username
      let data = {
        name: document.getElementById('nombre').value,
        description: document.getElementById('descripcion').value
      }
      axios.post('http://localhost:4000/categories', data)
        .then((result) => {
          console.log(result)
        })
        .catch((e) => {
          console.log('Error:, ', e)
        })
    },
    fillForm: function (id) {
      document.getElementById('nombreUpdate').value = this.categories[id].name
      document.getElementById('descripcionUpdate').value = this.categories[id].description
    },
    putCategory: function (id) {
      this.username = this.$route.params.username
      let data = {
        name: this.categories[id].name,
        description: this.categories[id].description
      }
      axios.put('http://localhost:4000/categories', data)
        .then((result) => {
          console.log(result)
        })
        .catch((e) => {
          console.log('Error:, ', e)
        })
    },
    deleteCategory: function (id) {
      this.username = this.$route.params.username
      axios.delete(`http://localhost:4000/categories/${id}`)
    }
  }
}
</script>

<style>
  .modificarCategoria{
    display: flex;
  }
  .addCategoria{
    width:50%
  }
  .updateCategoria{
    width:50%
  }
</style>
