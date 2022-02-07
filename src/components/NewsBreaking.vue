<template>
    <div class="grid" @click="link">
        <div class="news_photo">
            <img src="../assets/test.jpg" alt="" />
        </div>
        <div class="news_info">
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi illo debitis maiores dolore laborum
                exercitationem vel labore quis suscipit. Aperiam quisquam fugiat alias voluptatibus corrupti sint
                dignissimos officia tempora voluptatem.
            </h2>
            <h3>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fugiat quibusdam minima enim eos eaque
                officia rerum blanditiis quas veniam iste beatae repudiandae libero corporis, cupiditate nihil debitis
                laborum! Quam?
            </h3>
            <h4>time:21/01/20</h4>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        link() {
            console.log(1)
        },
    },
}
</script>

<style scoped>
.grid {
    grid-template-columns: 1fr 2fr;
    margin: 2rem 1rem;
    cursor: pointer;
    transition: 0.3s;
}

.grid:hover {
    background-color: #fcfcfd;
}

/* 標題 */
h2 {
    font-size: 1.6rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

/* 內文大綱 */
h3 {
    font-size: 1.2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}

/* 日期 */
h4 {
    font-size: 0.8rem;
}

.news_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 1rem;
}
</style>

<style scoped>
@media screen and (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }

    .news_info {
        padding: 1rem 0;
    }
}
</style>
