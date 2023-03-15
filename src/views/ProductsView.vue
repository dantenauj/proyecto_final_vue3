<template>
    <div>
        <input v-model="searchQuery" placeholder="Search for a product">
        <input v-model.number="priceFilter" placeholder="Price filter">
        <ul>
            <li v-for="product in filteredProducts" :key="product.id">
                {{ product.name }} - {{ product.price }}
            </li>
        </ul>
    </div>

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
            },
            searchQuery: "",
            priceFilter: 0
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
                    this.products.push(response.data);
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
    computed: {

        filteredProducts() {
            return this.products.filter(product =>
                product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
                product.price > this.priceFilter
            );
        }
    },
    mounted() {
        this.getProducts();

    },
    components: {
        FormularioNuevaProduct
    }

}




</script>


