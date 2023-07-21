<template>
    <form v-on:submit.prevent>
        <h1>Добавить пользователя</h1>
        <input
            v-model="user.name"
            placeholder="Введите имя"
            type="text"
        >

        <input
            v-model="user.nickname"
            placeholder="Введите nickname"
            type="text"
        >

        <button
        v-on:click="createUser">
            Добавить
        </button>
    </form>
</template>

<script>
    export default {
        name:'EmitTest',
        data(){
            return{
                user:{
                    name:'',
                    nickname:''
                }
            }
        },
        methods:{
            createUser(){
                this.user.id = Date.now()
                this.$emit('create', this.user)
                this.user = {
                    name:'',
                    nickname:''
                }
            }
        }
    }
</script>

<style scoped>

</style>