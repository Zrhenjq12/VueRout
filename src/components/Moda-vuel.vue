<template>
  <div class="modal" tabindex="-1"
  :style="'display:' + showModal"
  >
     <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
           @click="closeModal"
          >X</button>
      </div>
      <div class="modal-body">
        <slot> </slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
        @click="closeModal"
        >Close</button>
        <button type="button" class="btn btn-primary"
        @click="saveInf"
        >Save changes</button>
      </div>
    </div>
  </div>
</div>

</template>


<script>
import axios from 'axios'

export default{
  props:{
    modalisOpen:{
      type: Boolean,
      required:true,
      default: false,
    }
  },
    data() {
        return{

        }
    },
    methods:{
      closeModal(){
        this.$emit('closeModal')
      },
      saveInf(){
         axios({
          method: 'post',
          url: 'http://127.0.0.1:3000/',
          params: {
            user_key_id: 'USER_KEY_ID',
          },
          data: {
            title: 'new_title',
            body: 'new_body',
            userId: 'userid'
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(function(response) {
          console.log('Ответ сервера успешно получен!');
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
      },
    },

    computed:{
      showModal(){
        return this.modalisOpen ? 'block' : 'none'
      }
    }
}
</script>
