<template>
    <div class="grid" @click="link">
        <div class="news_photo">
            <img src="../assets/test.jpg" alt="" />
        </div>
        <div class="news_info">
            <h2>CORONAVIRUS/Taiwan reports 49 new COVID-19 cases, including 4 domestic</h2>
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
/* 標題 */
h2 {
    font-size: 1.2rem;
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

/* 內文大綱 */
h3 {
    font-size: 1.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

/* 日期 */
h4 {
    font-size: 0.8rem;
    margin-top: 1rem;
}

@media screen and (max-width: 500px) {
    /* 標題 */
    h2 {
        font-size: 1rem;
    }

    /* 內文大綱 */
    h3 {
        font-size: 0.8rem;
    }

    /* 日期 */
    h4 {
        font-size: 0.6rem;
    }
}

.grid {
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    margin: 4rem 1rem 1rem;
    cursor: pointer;
    transition: 0.3s;
}

.grid:hover {
    background-color: #fcfcfd;
}

.news_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    grid-gap: 1rem;
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
