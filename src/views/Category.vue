<template>
    <div class="section layout">
        <div class="grid_layout">
            <div>
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
import NewsList from '@/components/NewsList.vue'
import SidebarDatePicker from '@/components/Sidebar-DatePicker.vue'
import SidebarHotNews from '@/components/Sidebar-HotNews.vue'

export default {
    name: 'Category',
    components: {
        NewsList,
        SidebarDatePicker,
        SidebarHotNews,
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
