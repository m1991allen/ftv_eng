<template>
    <div class="section layout">
        <Breadcrumb />
        <h2>Breaking News</h2>
        <NewsBreaking />
        <div class="grid_layout">
            <div>
                <h2>Latest</h2>

                <NewsList />
            </div>
            <div>
                <SidebarDatePicker />
                <SidebarHotNews />
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import NewsBreaking from '@/components/NewsBreaking.vue'
import NewsList from '@/components/NewsList.vue'
import SidebarDatePicker from '@/components/Sidebar-DatePicker.vue'
import SidebarHotNews from '@/components/Sidebar-HotNews.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'Home',
    components: {
        NewsBreaking,
        NewsList,
        SidebarDatePicker,
        SidebarHotNews,
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
