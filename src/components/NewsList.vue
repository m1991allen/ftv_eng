<template>
    <div @click="link">
        <div class="grid" v-for="(item, index) of news" :key="index">
            <div class="news_photo">
                <img src="../assets/test.jpg" alt="" />
            </div>
            <div class="news_info">
                <h2>
                    {{ item.title }}
                </h2>
                <h3>
                    {{ item.summary }}
                </h3>
                <h4>
                    {{ item.date }}
                </h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news: [],
        }
    },
    methods: {
        getEnNews() {
            // eslint-disable-next-line no-undef
            axios
                .get(`https://www.ftvnews.com.tw/API/engNews.json`)
                .then((res) => {
                    // console.log(res.data.Data[0].news)
                    let news = res.data.Data[0].news
                    news.forEach((item) => {
                        this.news.push(item)
                    })
                })
                .catch((error) => {
                    console.log('error:' + error)
                })
        },

        link() {
            console.log(1)
        },
    },
    created() {
        this.getEnNews()
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
} /* 內文大綱 */
h3 {
    font-size: 1.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
} /* 日期 */
h4 {
    font-size: 0.8rem;
    margin-top: 1rem;
}
@media screen and (max-width: 500px) {
    /* 標題 */
    h2 {
        font-size: 1rem;
    } /* 內文大綱 */
    h3 {
        font-size: 0.8rem;
    } /* 日期 */
    h4 {
        font-size: 0.6rem;
    }
}

.grid {
    grid-template-columns: 1fr 2fr;
    grid-gap: 1rem;
    margin: 4rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid #e7e4eb;
    transition: 0.3s;
}

.grid:hover {
    background-color: #fcfcfd;
}

.news_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
}
</style>

<style scoped>
@media screen and (max-width: 768px) {
    .grid {
        cursor: pointer;
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width: 500px) {
    .news_info h2 {
        -webkit-line-clamp: 3;
    }
    .news_info h3 {
        display: none;
    }
    img {
        width: 160px;
    }
}
</style>
