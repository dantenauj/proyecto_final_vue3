<template>
    <div style="text-align: left;">
        Editar Producto
        <form @submit.prevent="editar()">
            <div>
                <input type="text" v-model="payload.name" placeholder="name">
                <input type="text" v-model="payload.price" placeholder="name">



            </div>
            <div>
                <button>Editar Producto</button>
            </div>
        </form>
        <FormularioNuevaProduct v-if="isload" :inpayload="payload" @on-payload="editar($event)">
        </FormularioNuevaProduct>
    </div>
</template> 
<script>
import FormularioNuevaProduct from '@/components/FormularioNuevaProduct.vue';
export default {
    name: 'CategoriesEditarView',
    props: [],
    emits: [],
    data() {
        return {
            productId: 0,
            isload: false,
            payload: {
                name: "aa"

            }
        }
    },
    methods: {
        load() {
            this.productId = this.$route.params.id;
        },
        getPersona() {

            this.axios.get("http://localhost:5000/products/" + this.productId)
                .then((response) => { this.payload = response.data, this.isload = true; })
                .catch((err) => { console.log(err) })
        },
        editar(payload) {
            this.axios.patch("http://localhost:5000/products/" + this.productId, payload)
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
        FormularioNuevaProduct
    }
}
</script>

<style></style>