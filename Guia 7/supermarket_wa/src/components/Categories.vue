/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
<template>
  <div id="Categories">
    <h2>
      Usuario autenticado: <span>{{ username }}</span>
    </h2>
    <button v-on:click="getCategory">Obtener categoría</button>
    <h2>
      La categoría con id = <span>{{ category_id }}</span
      >, tiene el nombre <span>{{ name }}</span> y su descripción es «<span>{{
        description
      }}</span
      >».
    </h2>
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
      description: ''
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
      let self = this
      axios
        .get('http://localhost:4000/categories/' + 1)
        .then((result) => {
          // eslint-disable-next-line no-unused-expressions
          (
          // eslint-disable-next-line no-unused-expressions
            (self.category_id = result.data.id),
            (self.name = result.data.name),
            (self.description = result.data.description))
        })
        .catch((error) => {
          alert('ERROR de Servidor: ', error)
        })
    }
  }
}
</script>
