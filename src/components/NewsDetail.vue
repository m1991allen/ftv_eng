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
.grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    margin: 1rem 1rem 3rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid #e7e4eb;
    transition: 0.3s;
}

@media screen and (max-width: 769px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

.grid .news_info:nth-child(2) {
    background-color: #fcf7ff;
    padding: 1rem;
}
.news_detail {
    margin: 1rem 1rem 3rem 1rem;
}

/* Title */
h2#news_title,
h2#news_title_tw {
    font-size: 2rem;
    padding: 1rem 0;
}

h4#news_date {
    text-align: right;
}

/* summary */
p#news_summary,
p#news_content,
p#news_summary_tw,
p#news_content_tw {
    font-size: 1.1rem;
    padding: 1rem 0;
}
</style>
