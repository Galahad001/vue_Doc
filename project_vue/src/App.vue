<template>
<div id="bind-attribute">

  <span v-bind:title="message">
    Наведи на меня курсор на пару секунд, чтобы
    увидеть динамически связанное значение title!
  </span>

  <br>

  <div>
    {{ test }}
  </div>

  <br>

  <div>
    <p>{{ message2 }}</p>
    <button v-on:click="reverseMessage">Перевернуть сообщение</button>
  </div>

  <br>

  <div>
    <p>{{ message3 }}</p>
    <input type="text" v-model="message3">
  </div>

  <br>

  <div>
    <div v-if="seen">Сейчас меня видно</div>
    <button v-on:click="on_off()">Видно/Не видно</button>
  </div>

  <br>

  <div>
    <ol>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ol>
  </div>

            <br>

  <ol>
    <TodoItem
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    />
  </ol>
</div>
</template>

<script>
    import TodoItem from './components/TodoItem.vue'
  
    export default {
    data() {
      return{
        message: 'Страница загружена ' + new Date().toLocaleString(),
        // 
        test: '12345',
        // 
        message2: 'Hello Vue.js',
        // 
        message3: 'Привет Vue',
        // 
        seen: true,
        // 
        todos:[
          {text:'ABC'},
          {text:'CLI'},
          {text:'FTP'},
          {text:'HTPP'},
          {text:'API'}
        ],
        // 
        groceryList:[
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    },
    methods:{
      reverseMessage(){
        this.message2 = this.message2
        .split('')
        .reverse()
        .join('')       
      },
      // 
      on_off(){
        this.seen = !this.seen
      }
    },
    components:{
      TodoItem
    }
  }

 
</script>

<style scoped>

</style>
