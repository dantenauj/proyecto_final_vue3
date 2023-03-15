<template>
    <div>
        <h2>New Product</h2>
        <form @submit.prevent="crearProduct()">

            <label>
                Name:
                <input type="text" v-model="payload.name" placeholder="Name">
            </label>
            <label>
                Price:
                <input type="text" v-model="payload.price" placeholder="price" step="0.01" min="0" required>
            </label>
            <label>
                Category:
                <select v-model="categoryId" required>
                    <option v-for="category in categories_combo" :value="category.id" :key="category.id">{{ category.name }}
                    </option>
                </select>
            </label>
            <button type="submit">Create </button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioNuevaProduct',
    props: ["inpayload"],
    emits: ["on-payload"],
    data() {
        return {
            payload: {
                name: "",
                price: "",
                categoryId: "",
            },
            categories_combo: [],
        }
    },
    methods: {
        crearProduct() {
            this.$emit('on-payload', this.payload);
        },

        getCategories() {
            this.axios.get('http://localhost:5000/categories')
                .then(response => {
                    console.log(response.data);
                    this.categories_combo = response.data;
                    this.categoryId = this.categories_combo[0].id;
                })
                .catch(e => console.log("catch", e))
                .finally()
        },
    },
    computed: {
    },
    mounted() {
        this.payload = this.inpayload;
        this.getCategories();
    },
    components: {
    }
}

</script>

<style></style>
