<template>
    <ul>
        <li>Имя: {{ user_props.name }}, Ник на сервисе: {{ user_props.nickname }}</li>
    </ul>
</template>

<script>
    export default {
        name:'PropsTest',
        props:['user_props']
    }
</script>

<style scoped>

</style>