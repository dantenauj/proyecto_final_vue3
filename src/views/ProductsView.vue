<template>
    <div style="text-align: left">
        <h1>listado de Productos </h1>
        <FormularioNuevaProduct :inpayload="payload" @on-payload="crearProduct($event)"></FormularioNuevaProduct>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) of products" id="key">
                <th scope="row">{{ value.id }}</th>
                <td>{{ value.name }}</td>
                <td>{{ value.price }}</td>
                <td>
                    <button type="button" class="btn btn-primary" @click="editar(value)">Editar</button>
                    <button type="button" class="btn btn-danger" @click="eliminar(value)">Eliminar</button>

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import FormularioNuevaProduct from '@/components/FormularioNuevaProduct.vue';
export default {
    name: 'NuevoView',
    props: [],
    emits: [],
    data() {
        return {
            products: [],
            payload: {
                name: "",
                price: 0,
                categoryId: 1
            }
        }
    },


    methods: {
        getProducts() {
            this.axios.get('http://localhost:5000/products')

                .then(response => {
                    console.log(response.data);
                    this.products = response.data;
                })
                .catch(e => console.log("catch", e))
                .finally()
        },
        crearProduct(payload) {
            this.axios.post("http://localhost:5000/products", payload)

                .then((response) => {
                    this.categories.push(response.data);
                })
                .catch((err) => { console.log(err) })
            console.log(this.payload);
        },
        editar(item) {
            this.$router.push('/products/' + item.id + '/editar');
            console.log(item);
        },

        eliminar(item) {
            this.axios.delete("http://localhost:5000/products/" + item.id)
                .then((response) => { console.log(response); this.getProducts(); })
                .catch((err) => { console.log(err) })
        }
    },
    computed: {},
    mounted() {
        this.getProducts();

    },
    components: {
        FormularioNuevaProduct
    }

}




</script>


