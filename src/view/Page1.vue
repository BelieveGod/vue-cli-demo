<template>
    <p>
        page1
    </p>
</template>

<script>
    export default {
        name: "Page1",
        mounted() {
            this.showRoute();
        },
        methods:{
            showRoute(){
                console.log(this.$route);
                console.log(this.$router);
            }
        }
    }
</script>

<style scoped>

</style>