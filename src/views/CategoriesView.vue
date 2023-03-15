<template>
  <div style="text-align: left">

    <FormularioNuevaCategorie :inpayload="payload" @on-payload="crearCategorie($event)"></FormularioNuevaCategorie>
  </div><br><br>

  <h1>listado de Categorias</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) of categories" id="key">
        <th scope="row">{{ value.id }}</th>
        <td>{{ value.name }}</td>
        <td>
          <button type="button" class="btn btn-primary" @click="editar(value)">Editar</button>
          <button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button>

        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import FormularioNuevaCategorie from '@/components/FormularioNuevaCategorie.vue';
export default {
  name: 'NuevoView',
  props: [],
  emits: [],
  data() {
    return {
      categories: [],
      payload: {
        name: ""
      }
    }
  },
  methods: {
    getCategories() {
      this.axios.get('http://localhost:5000/categories')

        .then(response => {
          console.log(response.data);
          this.categories = response.data;
        })
        .catch(e => console.log("catch", e))
        .finally()
    },
    crearCategorie(payload) {
      this.axios.post("http://localhost:5000/categories", payload)

        .then((response) => {
          this.categories.push(response.data);
        })
        .catch((err) => { console.log(err) })
      console.log(this.payload);
    },
    editar(item) {
      this.$router.push('/categories/' + item.id + '/editar');
      console.log(item);
    },

    eliminar(item) {
      this.axios.delete("http://localhost:5000/categories/" + item.id)
        .then((response) => { console.log(response); this.getCategories(); })
        .catch((err) => { console.log(err) })
    }
  },
  computed: {},
  mounted() {
    this.getCategories();

  },
  components: {
    FormularioNuevaCategorie
  }

}




</script>


