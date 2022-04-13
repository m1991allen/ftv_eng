<template>
    <div class="section layout">
        <Breadcrumb />
        <h2>Anchors</h2>
        <AnchorsInfo />
    </div>
</template>

<script>
// @ is an alias to /src
import AnchorsInfo from '@/components/AnchorsInfo.vue'
import Breadcrumb from '@/components/Breadcrumb'

export default {
    name: 'Anchor',
    components: {
        AnchorsInfo,
        Breadcrumb,
    },
}
</script>

<style scoped>
h2 {
    margin-top: 2rem;
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: bolder;
    color: white;
    padding: 0.5rem 1rem;
    background-color: #275174;
    border: 1px solid;
    display: inline-block;
}
</style>
