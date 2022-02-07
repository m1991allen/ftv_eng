<template>
    <div class="section layout">
        <NewsList />
        <Paginate />
    </div>
</template>

<script>
// @ is an alias to /src
import NewsList from '@/components/NewsList.vue'
import Paginate from '@/components/Paginate.vue'

export default {
    name: 'Search',
    components: {
        NewsList,
        Paginate,
    },
}
</script>

<style scoped>
.grid_layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 1rem;
}

@media screen and (max-width: 768px) {
    .grid_layout {
        grid-template-columns: 1fr;
    }
}
</style>
