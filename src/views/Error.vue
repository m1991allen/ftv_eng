<template>
    <div class="section layout">
        <div class="grid_layout">
            <div class="info" v-for="(info, index) in status" :key="index">{{ info }}</div>
        </div>
        <NewsRelated />
    </div>
</template>

<script>
import NewsRelated from '@/components/NewsRelated.vue'

export default {
    name: 'Error',
    components: {
        NewsRelated,
    },
    data() {
        return {
            status: ['OOPS...PAGE NOT FOUND', '404 ><'],
        }
    },
}
</script>

<style scoped>
.info {
    text-align: center;
    padding: 2rem 0 1rem;
}

.info:nth-of-type(1) {
    font-size: 2rem;
    background-color: #275174;
    color: white;
}

.info:nth-of-type(2) {
    font-size: 8rem;
    background-color: #275174;
    color: white;
}

.grid_layout {
    margin: 1rem 1rem 3rem 1rem;
}
</style>
