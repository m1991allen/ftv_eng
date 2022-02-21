<template>
    <div id="app">
        <Header />
        <!-- Searchbar -->
        <div class="searchbar_layout">
            <div class="section searchbar_menu">
                <input id="search" type="text" placeholder=" Searching..." />
                <button><i class="fas fa-search"></i></button>
            </div>
        </div>

        <!-- Navigation -->
        <div id="mainMenu" class="nav_layout">
            <nav class="section nav_menu">
                <i @click="menuHandler" class="fad fa-2x" :class="{ 'fa-bars': !isShow, 'fa-stream': isShow }"></i>
                <div class="hashtag_menu">
                    <ul>
                        <li
                            v-for="(tag, index) of hashtags"
                            :key="index"
                            @click="addActiveHandler(tag)"
                            class="list"
                            :class="{ selected: isActive }"
                        >
                            {{ tag }}
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="nav" class="section" v-show="isShow">
                <router-link to="/">Home</router-link> | <router-link to="/anchor">Anchors</router-link> |
                <router-link to="/category">Category</router-link> | <router-link to="/news">News</router-link> |
                <router-link to="/search">Search</router-link>
            </div>
        </div>
        <router-view />
        <Footer />
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            isShow: false,
            isActive: false,
            hashtags: ['International', 'Politics', 'Society', 'Sports', 'Business', 'Life', 'entertainment'],
            counter: 0,
        }
    },
    methods: {
        menuHandler() {
            this.isShow = !this.isShow
        },

        addActiveHandler() {
            let tagName = event.target
            let list = document.querySelectorAll('.list')

            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove('selected')
            }
            tagName.classList.add('selected')
        },
    },

    mounted() {
        let mainMenu = document.getElementById('mainMenu')
        let nav = document.getElementById('nav')
        let stickyMain = mainMenu.offsetTop

        window.onscroll = () => {
            if (window.pageYOffset >= stickyMain) {
                mainMenu.classList.add('sticky')
                nav.classList.add('sticky_nav')
            } else {
                mainMenu.classList.remove('sticky')
                nav.classList.remove('sticky_nav')
            }
        }
    },
}
</script>

<style>
#app {
    font-family: 'Open Sans', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #ebebeb;
}

.layout {
    background-color: white;
    box-shadow: 1px 5px 5px #bbbac4;
}

.section {
    max-width: 1240px;
    margin: auto;
    padding: 3rem 0.5rem 1rem;
    text-align: left;
    align-items: center;
}

.grid {
    display: grid;
}

img {
    margin: auto;
    width: 100%;
}

/* Serach style */
i {
    cursor: pointer;
}

i.fa-bars,
i.fa-stream {
    color: #ededed;
    padding-left: 1rem;
    padding-right: 1rem;
}

input {
    border-radius: 3px 0 0 3px;
    padding-left: 0.5rem !important;
    width: 100%;
    height: 30px;
}

.searchbar_layout {
    background-color: #4d3a60;
}

.searchbar_menu {
    display: grid;
    grid-template-columns: 9fr 1fr;
    background-color: #0f1627;
    border-radius: 10px 10px 0 0;
    padding: 1.5rem;
    box-shadow: 2px 0 5px #171623;
}

.searchbar_menu button {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-top: 1px solid;
    color: white;
    height: 30px;
    box-shadow: 1px 2px 3px #1c1c1c;
    transition: 0.3s;
}

.searchbar_menu button:hover {
    background-color: #4c385f;
}

/* Hashtag style */

.nav_menu {
    display: grid;
    grid-template-columns: 1fr 9fr;
    background-color: #0f1627;
    box-shadow: 1px 5px 5px #bbbac4;
}

.nav_menu .hashtag_menu {
    overflow-x: auto;
    scrollbar-color: #ffffff;
    scrollbar-width: auto;
    touch-action: pan-x;
    padding-right: 1rem;
}

.nav_menu .hashtag_menu::-webkit-scrollbar {
    height: 1px;
}

.nav_menu .hashtag_menu::-webkit-scrollbar-thumb {
    background-color: #0f1627;
}

.nav_menu .hashtag_menu ul {
    display: flex;
    text-align: center;
    align-items: center;
    min-width: 768px;
    height: 40px;
}

.nav_menu .hashtag_menu ul li {
    font-size: 1.2rem;
    font-family: system-ui;
    font-weight: bolder;
    color: white;
    transition: 0.3s;
    width: 100%;
    cursor: pointer;
    grid-gap: 1rem;
}

.nav_menu .hashtag_menu ul li:hover {
    transform: translateY(-3px);
    background-color: #4c385f;
    border-radius: 100px;
}

.selected {
    background-color: #4c385f;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
}

.sticky_nav {
    position: fixed;
    top: 96px;
    width: 100%;
    z-index: 999;
}

/* hamburger menu */
#nav {
    background-color: #0f1627;
    color: white;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-top: 1px solid white;
    padding: 1.5rem;
    z-index: 999;
}
</style>
