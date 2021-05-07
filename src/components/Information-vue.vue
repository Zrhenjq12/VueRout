<template>
   <div class="modal d-block" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{item.title}}</h5>
        <button type="button" @click="closeModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{todoText}}</p>
      </div>
      <div class="modal-footer">
        <button @click="closeModal" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    props:{
        todoInf:{
            type:Number,
            required: true,
        }
    },


    data(){
        return{
            item:'',
        }
    },


    mounted(){
       this.item = this.getTodo(this.todoInf)
       console.log(this.item);
    },

    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    },
    computed:{
        ...mapGetters('Todos',{
            getTodo:'getTodo',
        }),
        todoText(){
            return this.item.text ? this.item.text : 'Никаких заметок нет'
        }
    },

}
</script>
<style scoped>
.modal{
    background-color: rgba(0, 0, 0,0.3);
}
</style>
