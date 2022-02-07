<template>
    <div class="section layout">
        <AnchorsInfo />
    </div>
</template>

<script>
// @ is an alias to /src
import AnchorsInfo from '@/components/AnchorsInfo.vue'

export default {
    name: 'Anchor',
    components: {
        AnchorsInfo,
    },
}
</script>
