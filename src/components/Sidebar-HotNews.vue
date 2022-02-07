<template>
    <div class="grid">
        <h2>{{ title }}</h2>
        <ul class="news_info">
            <li @click="link" v-for="(item, index) of news" :key="index">
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'HOT NEWS',
            news: [],
        }
    },
    methods: {
        getEnNews() {
            // eslint-disable-next-line no-undef
            axios
                .get(`https://www.ftvnews.com.tw/API/engNews.json`)
                .then((res) => {
                    let news = res.data.Data[0].hotNews
                    console.log(news)
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
.grid {
    background-color: #f5f5f5;
    box-shadow: 1px 2px 3px #e7e4eb;
    margin: 1rem 1rem 1rem 0 !important;
}

h2 {
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1rem 0;
    text-align: center;
}

ul.news_info {
    margin: 0;
    padding: revert;
}

ul.news_info li {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
    list-style-type: auto;
    cursor: pointer;
    transition: 0.3s;
}

ul.news_info li:hover {
    color: #5971a6;
}

@media screen and (max-width: 768px) {
    .grid {
        margin: 1rem !important;
    }
}
</style>
