<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'English News FTV',
        }
    },
}
</script>

<style scoped>
h1 {
    font-size: 1.8rem;
    color: white;
    background-image: linear-gradient(to top, #4d3a60, #aa84d1);
    padding: 3% 0;
}
</style>
