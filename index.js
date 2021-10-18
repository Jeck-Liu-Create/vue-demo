var dataSource = {
  buttonClass:'ui button',
  colorClass:'violet',
  isLoading:false
}

var vm = new Vue({
  el:'#app',
  data: dataSource,
})


// Vue.component('comment', {
//   props: ['comment'],
//   template: '<li>{{comment.content}}</li>'
// })
//
// var app = new Vue({
//   el: '#app',
//   data:{
//     comments:[
//       {content:'nice ~'},
//       {content:'great ~'},
//       {content:'awesome ~'},
//     ]
//   }
// })

// var app = new Vue ({
//   el: '#app',
//   methods: {
//     logMessage (){
//       console.log(this.message)
//     }
//   },
//   data:{
//     message:'hello',
//     title: 'hello',
//     welcome: true
//   }
// })
