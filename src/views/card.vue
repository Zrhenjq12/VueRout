<template>
    <div class="vuex" >
    <h3 v-text="count"></h3>
    <button @click="decrement">decriment</button>
    <button @click="increment">incriment</button>
   </div>
   <hr>
   <div class="new__job">

       <button @click="modalIsOpen = true" class="btn btn-success">Добавить в список</button>
   </div>
   <ul>
      <li v-for="todo in dotoList" :key="todo.name">
           {{todo.title}}{{todo}}
           <div class="menu-btn">
           <button  @click="showInformation(todo.id)" type="button" class="btn btn-info">Информация</button>	&#160;
           <button class="btn btn-danger" @click="doneTodo(todo.id)">Сделано</button>
           </div>
      </li>
   </ul>
   <p v-if="dotoList.length==0">Дел больше нет</p>
     <teleport to="body">
        <Register v-if="modalIsOpen" @modalClose="modalIsOpen = false"> </Register>
     </teleport>
     <teleport to="body">
            <Information @closeModal="todoInf = 0" v-if="todoInf != 0" :todoInf="todoInf"> </Information>
     </teleport>


</template>


<script>
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
import Register from '@/components/Register-modal'
import Information from '@/components/Information-vue'
export default{
    components:{
        Register,
        Information,
    },


    mounted(){
        this.localGet()
    },


    data(){
        return{
            inputValue: '',
            helped: '',
            modalIsOpen: false,
            todoInf: 0,
        }
    },


    methods:{
        ...mapMutations('Todos',
        {
            increment:'increment',
            decrement:'decrement',
            add:'addTodo',
            localGet:'localGet',
        }),

        ...mapActions('Todos',{
            doneTodo:'doneTodo',
        }),

        addTodos(){
            this.inputValue = ''
        },

        showInformation(id){
            this.todoInf = id
            // this.getItem(id)
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
    align-items: center;
    border: 1px solid #2123;
    padding: 5px;
    border-radius: 10px;
    margin: 10px;
}
.new__job{
    text-align: center;
}
#one{
	border-radius: 5px;
	outline: none;
}
.menu-btn{
    display: flex;
    justify-content: space-between;
}
.btn{
    color: #fff  !important;
}
</style>
