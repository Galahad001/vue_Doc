import { createApp } from 'vue'
const app = createApp({
    data() {
      return { count: 4 }
    }
  })

  const res = createApp({
    data() {
      return { count: 1 }
    },
    created() {
      // `this` указывает на экземпляр vm
      console.log('счётчик: ' + this.count) // => "счётчик: 1"
    }
  })

//   const test1 = {
//     data() {
//         return {
//             message:'ABC'
//         }
//     },
//     methods:{
//         reverseMessage() {
//             this.message = this.message
//               .split('')
//               .reverse()
//               .join('')
//         }
//     }
//   }
  
  const vm = app.mount('#app')
  const vm2 = res.mount('#res')
//   createApp(test1).mount('#test')
  console.log(vm.count) 
