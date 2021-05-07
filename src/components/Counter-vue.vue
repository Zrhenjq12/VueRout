<template>
    <div class="vuex" >
    <h3 v-text="count"></h3>
     <button @click="decrement">decriment</button>
     <button @click="increment">incriment</button>
   </div>
   <hr>
   <div class="new__job">

        <label for="one">Введите новое дело</label>
       <input id="one" 
        v-model="inputValue"
        type="text"> 

       <button @click="addTodos" class="btn btn-success">Добавить в список</button>
              <span v-text="helped"></span>
   </div>
   <ul>
      <li v-for="(todo,i) in dotoList" :key="todo.name">
           {{todo.title}}
           <button class="btn btn-danger" @click="doneTodo(i)">Сделано</button>
      </li>
   </ul>
   <p v-if="dotoList.length==0">Дел больше нет</p>
</template>


<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default{
    mounted(){
        this.runServe()
    },
    data(){
        return{
            counter: 2,
            inputValue:'',
            helped:'',
        }
    },
    methods:{
        ...mapMutations('Todos',{
            increment:'increment',
            decrement:'decrement',
            add:'addTodo',

    }),
    ...mapActions('Todos',{
        runServe:'todoRequest',
        doneTodo:'doneTodo'
    }),
    addTodos(){
        this.inputValue.length > 1 ?  this.add(this.inputValue) : this.helped = 'Попробуйте ещё раз'
        this.inputValue = ''
    },
    },
    computed:{
        ...mapGetters('Todos',
        {
            count:'getCount',
            dotoList:'Todos',
        })

        
    }
}
</script>

<style >
li{
    display: flex;
    justify-content: space-between;
    border: 1px solid #2123;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
}
.new__job{
    text-align: center;
}
input{
    margin: 0 15px  !important;
}
</style>
