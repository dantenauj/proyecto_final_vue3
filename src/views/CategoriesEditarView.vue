<template>
    <div style="text-align: left;">
        Editar persona
        <form @submit.prevent="editar()">
            <div>
                <input type="text" v-model="payload.name" placeholder="name">
            </div>

            <div>
                <button>Editar</button>
            </div>
        </form>
        <FormularioNuevaCategorie v-if="isload" :inpayload="payload" @on-payload="editar($event)">
        </FormularioNuevaCategorie>
    </div>
</template>
<script>
import FormularioNuevaCategorie from '@/components/FormularioNuevaCategorie.vue';
export default {
    name: 'PersonaEditarView',
    props: [],
    emits: [],
    data() {
        return {
            categoriesId: 0,
            isload: false,
            payload: {
                name: "aa"

            }
        }
    },
    methods: {
        load() {
            this.categoriesId = this.$route.params.id;
        },
        getPersona() {

            this.axios.get("http://localhost:5000/categories/" + this.categoriesId)
                .then((response) => { this.payload = response.data, this.isload = true; })
                .catch((err) => { console.log(err) })
        },
        editar(payload) {
            this.axios.patch("http://localhost:5000/categories/" + this.categoriesId, payload)
                .then((response) => { console.log(response) })
                .catch((err) => { console.log(err) })
        }
    },
    computed: {
    },
    mounted() {
        this.load(),
            this.getPersona()
    },
    components: {
        FormularioNuevaCategorie
    }
}
</script>

<style></style>