<template>
  <div>
    <span>Сообщение: {{ msg }}</span>
    <input type="text" v-model="msg">
    <br>
    <span v-once="msg2">Это сообщение никогда не изменится: {{ msg2 }}</span>
    <input type="text" v-model="msg2">

    <br>
    <hr>

    <p>Двойные фигурные скобки: {{ rawHtml }}</p>
    <p>Директива v-html: <span v-html="rawHtml"></span></p>

    <br>
    <hr>

    <div v-bind:id="dynamicId">{{dynamicId}}</div>
    <button v-on:click="testF" v-bind:disabled="isButtonDisabled">Кнопка</button>
    <button v-on:click="on_off">Работает/Не работает</button>
 
    <br>
    <hr>

    <div>
      <div>{{ number + 1 }}</div>
      <div>{{ ok ? 'YES' : 'NO' }}</div>
      <div>{{ message.split('').reverse().join('') }}</div>
    </div>

    <br>
    <hr>

    <div>
      <p v-if="seen">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis dolor eveniet nostrum eaque veritatis placeat recusandae? Eveniet saepe ipsam natus, est, delectus cupiditate sint nostrum, pariatur dolore rerum eos exercitationem.
      Distinctio repudiandae quia eaque modi aliquam, nisi sequi nemo ipsam perspiciatis dignissimos? Sapiente tempore nulla eligendi eum numquam maxime libero sint laudantium voluptatem error quidem consectetur impedit, consequuntur accusantium quibusdam?
      Repellendus eius quod aliquam itaque sed voluptatibus corporis ipsam, id assumenda ducimus obcaecati voluptate nulla ex debitis consectetur non necessitatibus fuga modi inventore soluta excepturi ad adipisci architecto sint? Deserunt?
      Repudiandae hic maxime vel eaque! Perspiciatis officia possimus sed ducimus commodi minima error quas, ab, fugit voluptas atque fugiat incidunt nesciunt maiores deleniti illum repudiandae obcaecati. Temporibus totam repudiandae dolore?
      Necessitatibus eligendi consequatur totam perspiciatis quam vitae voluptatibus eos, odio recusandae maxime ipsam distinctio fuga ab magni impedit qui a autem corporis perferendis asperiores rem hic iure? Sapiente, aut autem!</p>
      <p v-else>Я спрятался</p>
      <button v-on:click="res">Скрыть</button>
    </div>

    <br>
    <hr>

    <div>
      <h2>Аргументы</h2>
      <a v-bind:href="url">Ссылка</a>
      <a v-on:click="doSomething"> ... </a>
    </div>

    <br>
    <hr>

    <div>
      <p>Динамические аргументы</p>
      <a v-bind:[attributeName]="dinamic"> {{ dinamic }} </a>
      <button v-on:click="one">1</button>
      <button v-on:click="two">2</button>
      <button v-on:click="three">3</button>
      <button v-on:click="revAttribut">Текст/Ссылка</button>
    </div>

    <br>
    <hr>

    <div>
      <p>Модификаторы</p>
      <div><form @submit.prevent>
          <input type="number" v-model="res">
          <!-- <div @submit.prevent :value="res">{{ res }}</div> -->
          <button @click="dable">Test</button>
      </form></div>
    </div>

 </div>
</template>

<script>
  export default {
    data() {
      return{
        msg: 'Test',
        msg2: 'Super_Test',
        // 
        rawHtml: '<span style="color: red">This should be red.</span>',
        // 
        dynamicId:'Atribut',
        isButtonDisabled:true,
        // 
        number: 1,
        ok: true,
        message:"Hello",
        // 
        seen:true,
        // 
        url:'https://github.com/Galahad001/vue2.git',
        // 
        attributeName: 'value',
        dinamic: "Test",
        // 
        res: 1
        
      }
    },
    methods:{
      testF(){
        alert('OK')
      },
      on_off(){
        this.isButtonDisabled = !this.isButtonDisabled
      },
      res(){
        this.seen = !this.seen
      },
      doSomething(){
        alert('Аргументы')
      },
      // Динамические аргументы
      one(){
         if(this.attributeName == 'value'){
           this.dinamic = 'Фильмы'
         } else{
          this.dinamic = 'https://github.com/Galahad001/front.git'
         }
      },
      two(){
        if(this.attributeName == 'value'){
           this.dinamic = 'Книги'
         } else{
          this.dinamic = 'https://github.com/Galahad001/website_about_people.git'
         }
      },
      three(){
        if(this.attributeName == 'value'){
           this.dinamic = 'Музыка'
         } else{
          this.dinamic = 'https://github.com/Galahad001/Django_Blog.git'
         }
      },
      revAttribut(){
        if(this.attributeName == 'value'){
          this.attributeName = 'href'
        } else{
          this.attributeName = 'value'
        }
      },
      dable(){
        this.res = this.res + 1
      },
      
    }
  }
</script>

<style scoped>

</style>