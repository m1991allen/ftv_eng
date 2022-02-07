<template>
    <div>
        <datepicker :inline="true"></datepicker>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
    components: {
        Datepicker,
    },
    data() {
        return {}
    },
}
</script>

<style>
.vdp-datepicker {
    margin: 1rem 1rem 1rem 0 !important;
}

.vdp-datepicker__calendar {
    margin: auto !important;
    width: 100% !important;
    background-color: #f5f5f5 !important;
    border: none !important;
    box-shadow: 1px 2px 3px #e7e4eb !important;
}

.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover,
.vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
    border: 1px solid #869dce !important;
}

.vdp-datepicker__calendar .cell.selected {
    background-color: #869dce !important;
}

@media screen and (max-width: 768px) {
    .vdp-datepicker {
        margin: 1rem !important;
    }
}
</style>
