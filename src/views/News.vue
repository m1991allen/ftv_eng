<template>
    <div class="section layout">
        <NewsDetail />
        <NewsRelated />
    </div>
</template>

<script>
// @ is an alias to /src
import NewsDetail from '@/components/NewsDetail.vue'
import NewsRelated from '@/components/NewsRelated.vue'

export default {
    name: 'News',
    components: {
        NewsDetail,
        NewsRelated,
    },
}
</script>
