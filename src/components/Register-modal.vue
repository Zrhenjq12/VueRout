<template>
    <div  class="main">
        <div class="main-inner">
            <div class="content">
                <h3>Введите данные</h3>
                <hr>
                <div class="modal__item">
                    <label for="register__one">Название дела</label>
                    <input v-model.trim="todoItem.title" @input="valudate" class="form-control" id="register__one" type="text">
                </div>
                 <div class="modal__item">
                    <p>Краткое описание</p>
                    <textarea v-model.trim="todoItem.text" class="form-control"  id="text" cols="30" rows="2"></textarea>
                </div>
                <div class="modal__result">
                    <button  :disabled="isDisabled" @click="createTodo" class="btn btn-success">Сохранить</button>
                </div>
            </div>
            <div @click="modalClose"  class="modal-close">&#10008;</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default{
    data(){
        return{
            isDisabled:true,
            todoItem:{
                title:'',
                text:'',
            },
        }
    },
    methods:{
        modalClose(event){
            event.stopPropagation()
            this.$emit('modalClose')
        },
        valudate(){
        this.todoItem.title.length >= 3 ? this.isDisabled = false : this.isDisabled = true
    },
        ...mapActions('Todos',['addTodo']),
        createTodo(){
            this.addTodo(this.todoItem)
            this.$emit('modalClose')
        }
    },


}
</script>


<style scoped>
.main{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .2);
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 100px 1fr 200px;
    grid-template-areas: ". . ." ". main-inner .";
    justify-items: center;
    align-items:start;
    z-index: 1;
    
}
.main-inner{
    width: 400px;
    height: 400px;
    background-color: #fff;
    grid-area: main-inner;
    border-radius: 10px;
    padding: 15px;
    position: relative;
    z-index: 2;
}
.modal-close{
    position: absolute;
    top: 0px;
    color: red;
    cursor: pointer;
    right: -20px;
    font-size: 20px;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: start;
    height: 100%;
}
h3{
    font-family: 'Noto Serif', serif;
}
#text{
    min-height: 60px;
    max-height:140px;
}
.modal__result{
    align-self: center;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
}
</style>
