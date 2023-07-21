<template>
  <div>

    <PropsTest 
      v-for="user in users"
      v-bind:user_props="user"
      v-bind:key="user.id"
    />

    <EmitTest
      @create="createUser"
    />

  </div>
</template>

<script>
import EmitTest from './components/EmitTest.vue';
import PropsTest from './components/PropsTest.vue';

  export default {
    data(){
      return {
        users:[
          {id:1, name:'Пол', nickname:'user_01'},
          {id:2, name:'Андрэ', nickname:'user_02'},
          {id:3, name:'Виктория', nickname:'user_03'},
          {id:4, name:'Анна', nickname:'user_04'},
          {id:5, name:'Кристофер', nickname:'user_05'}
        ]
      }
    },
    components:{
      PropsTest, EmitTest
    },
    methods:{
      createUser(user){
        this.users.push(user)
      }
    }
  }
</script>

<style scoped>

</style>