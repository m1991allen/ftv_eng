<template>
    <div id="Paginate">
        <paginate
            :page-count="totalPages"
            :click-handler="clickHandler"
            :containerClass="'page_layout'"
            :prev-text="'Prev'"
            :next-text="'Next'"
            :initial-page="1"
            :hide-prev-next="true"
        />
    </div>
</template>

<script>
import paginate from 'vuejs-paginate'

export default {
    name: 'Paginate',
    data() {
        return {
            totalPages: 10,
            page: 1,
        }
    },

    components: {
        paginate,
    },

    methods: {
        clickHandler() {
            console.log(1)
        },
    },
}
</script>

<style>
#Paginate {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

#Paginate .page_layout {
    display: flex;
}

#Paginate .page_layout li {
    transition: 0.3s;
}

#Paginate .page_layout li a {
    border: 1px solid rgb(219, 219, 219);
    padding: 10px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2c263e;
}

#Paginate .page_layout li:hover {
    background-color: rgb(230, 230, 230);
}

#Paginate .page_layout li.active a {
    color: white;
}

.active {
    background-color: #275174;
}

.active:hover {
    background-color: #275174 !important;
}
</style>
