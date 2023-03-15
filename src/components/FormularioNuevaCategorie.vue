<template>
    <div>
        <form @submit.prevent="crearCategorie()">
            <input type="text" v-model="payload.name" placeholder="Name">
            <button type="submit">Agregar formulario</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioNuevaCategorie',
    props: ["inpayload"],
    emits: ["on-payload"],
    data() {
        return {
            payload: {
                name: ""
            }
        }
    },
    methods: {
        crearCategorie() {
            this.$emit('on-payload', this.payload);
        }
    },
    computed: {
    },
    mounted() {
        this.payload = this.inpayload;
    },
    components: {
    }
}

</script>

<style></style>