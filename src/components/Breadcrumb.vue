<template>
    <div class="breadcrumb">
        <ul>
            <li
                v-for="(breadcrumb, idx) in breadcrumbList"
                :key="idx"
                @click="routeTo(idx)"
                :class="{ linked: !!breadcrumb.link }"
            >
                {{ breadcrumb.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            breadcrumbList: [],
        }
    },
    mounted() {
        this.updateList()
    },
    watch: {
        $route() {
            this.updateList()
        },
    },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb
        },
    },
}
</script>

<style scoped>
ul {
    display: flex;
    list-style: none;
    padding: 0;
    flex-direction: row;
    justify-content: flex-end;
}

li {
    cursor: pointer;
    color: #275174;
    padding-right: 1rem;
}

li:last-child {
    cursor: default;
}

li:not(:last-child):after {
    content: '>';
    margin: 5px;
}
</style>
