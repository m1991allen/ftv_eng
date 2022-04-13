<template>
    <div>
        <div v-for="(anchor, index) in anchors" :key="index" class="grid">
            <div class="anc_photo">
                <img :src="anchor.photo" :alt="anchor.name" />
            </div>
            <div class="anc_info">
                <p>{{ anchor.name }}</p>
                <p>{{ anchor.birth }}</p>
                <p>學歷：{{ anchor.edu }}</p>
                <p>經歷：{{ anchor.exp }}</p>
                <p>嗜好：{{ anchor.hab }}</p>
            </div>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            anchors: [
                {
                    name: '李顗恩 Ken Lee',
                    birth: '11月21日 天蠍座',
                    photo: 'https://cdn.ftvnews.com.tw/manasystem/FileData/Anchor/8b5a3ec0-f80d-462a-955f-e5995f68107a.jpg',
                    exp: `
                        中國電視公司英語新聞－編播、
                        空中英語教室
                        大家說英語－英語教師`,
                    edu: `
                        國立台灣大學－外國語文學碩士、
                        美國歐柏林大學 (Oberlin College)－歷史學士`,
                    hab: `閱讀、爬山、滑雪、騎鐵馬`,
                },
                {
                    name: '陳思頌 Celia Chan',
                    birth: '2月11日 水瓶座',
                    photo: 'https://cdn.ftvnews.com.tw/manasystem/FileData/Anchor/06319863-cb12-42c6-8fdf-dc09ff105d15.jpg',
                    exp: `
                        華視宏觀電視英語新聞主播、
                        華視英語新聞部編譯、
                        華視小主播班夏令營講師、
                        華視莒光園地節目主持人、
                        美國紐約華爾街Salomon Smith Barney 副總特助
                    `,
                    edu: `
                        國立政治大學企管研究所 IMBA碩士、
                        國立臺灣大學華語師資研習所結業、
                        美國Rochester大學經濟系學士、
                        台北美國學校高中畢業
                    `,
                    hab: `看書、看電影、旅行`,
                },
                {
                    name: 'Michael Lee',
                    birth: '6月22日 巨蟹座',
                    photo: 'https://cdn.ftvnews.com.tw/manasystem/FileData/Anchor/e2495fad-a0a3-4b4f-a81d-8dfafe30dc20.jpg',
                    exp: `
                        鉅成國際留學顧問有限公司總經理、
                        鉅成國際留學顧問有限公司專任英文講師、
                        維客義式廚房餐飲總監
                    `,
                    edu: `美國波士頓大學語言學學士`,
                    hab: `棒球、烹飪`,
                },
            ],
        }
    },
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 1rem;
    margin: 2rem 1rem;
}

@media screen and (max-width: 500px) {
    .grid {
        grid-template-columns: 1fr;
        margin: 3rem 0;
    }
}

.grid:nth-child(even) .anc_info {
    background-color: #f9fbff;
    padding: 0 1rem;
}

.grid .anc_info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.grid .anc_info p:nth-child(1) {
    font-weight: bolder;
    font-size: 1.1rem;
}
</style>
