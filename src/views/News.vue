<template>
    <div class="section layout">
        <Breadcrumb />
        <NewsDetail />
        <NewsRelated />
    </div>
</template>

<script>
// @ is an alias to /src
import NewsDetail from '@/components/NewsDetail.vue'
import NewsRelated from '@/components/NewsRelated.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

export default {
    name: 'News',
    components: {
        NewsDetail,
        NewsRelated,
        Breadcrumb,
    },
}
</script>
