<template>
    <div class="section layout">
        <Breadcrumb />
        <h2>Search：{{ getSearchString }}</h2>
        <NewsList />
        <Paginate />
    </div>
</template>

<script>
// @ is an alias to /src
import NewsList from '@/components/NewsList.vue'
import Paginate from '@/components/Paginate.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Search',
    components: {
        NewsList,
        Paginate,
        Breadcrumb,
    },
    computed: {
        getSearchString() {
            return this.$store.state.search
        },
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
