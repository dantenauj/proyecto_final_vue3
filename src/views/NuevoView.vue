<template>
  <div class="about">
    <h1>nuevo pagina</h1>
    <router-link to="/about">About</router-link>
  </div>


  <div class="card" style="width: 18rem;">
    <img src="../assets/logo.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NuevoView',
  props: [],
  emits: [],
  data() {
    return {

    }
  },
  methods: {
    getUsuario() {
      this.axios.get('http://localhost:5000/persona')
        .then(response => {
          console.log(response.data);
          this.listaUsuario = response.data;
        })
        .catch(e => console.log("catch", e))
        .finally()
    }

  },
  computed: {},
  mounted() {
    this.getUsuario();

  },
  components: {

  }

}




</script>


