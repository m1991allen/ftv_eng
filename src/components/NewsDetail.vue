<template>
    <div class="news_detail">
        <div class="news_photo">
            <img src="../assets/test.jpg" alt="" />
        </div>
        <div class="grid">
            <div class="news_info" v-show="news_detail != null">
                <h2 id="news_title"></h2>
                <h4><i class="fad fa-lg fa-history"></i> <span id="news_date"></span></h4>
                <p id="news_summary"></p>
                <p id="news_content" v-html="news_detail.content"></p>
            </div>
            <div class="news_info" v-show="news_detail != null">
                <h2 id="news_title_tw"></h2>
                <p id="news_summary_tw"></p>
                <p id="news_content_tw" v-html="news_detail.content_tw"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            news_detail: [],
        }
    },
    methods: {
        getEnNews() {
            // eslint-disable-next-line no-undef
            axios
                .get(`https://www.ftvnews.com.tw/API/engNews.json`)
                .then((res) => {
                    let news = res.data.Data[0].news[0]
                    this.news_detail.push(news)
                    this.insertNewsData(news)
                })
                .catch((error) => {
                    console.log('error:' + error)
                })
        },
        insertNewsData() {
            // 原文
            document.querySelector('#news_title').innerHTML = this.news_detail[0].title
            document.querySelector('#news_date').innerHTML = this.news_detail[0].date
            document.querySelector('#news_summary').innerHTML = this.news_detail[0].summary
            document.querySelector('#news_content').innerHTML = this.news_detail[0].content

            // 中文
            document.querySelector('#news_title_tw').innerHTML = this.news_detail[0].title_tw
            document.querySelector('#news_summary_tw').innerHTML = this.news_detail[0].summary_tw
            document.querySelector('#news_content_tw').innerHTML = this.news_detail[0].content_tw
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    cursor: pointer;
    border-bottom: 1px solid #e7e4eb;
    transition: 0.3s;
}

@media screen and (max-width: 769px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.grid .news_info:nth-child(1) {
    background-color: #ffffff;
    padding: 1rem;
}

.grid .news_info:nth-child(2) {
    background-color: #fcf7ff;
    padding: 1rem;
}

.grid .news_info:nth-child(2) h2 {
    margin-bottom: 1rem;
}
.news_detail {
    margin: 4rem 1rem;
}

p {
    padding: 0.8rem 0;
}
</style>
