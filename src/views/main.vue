<template>
<div>
  <form>
    <ProgressBar 
    :progress="progressWidth"
    > </ProgressBar>
  <div>
    <InputVue v-for="(item,i) in info" :obj="item" @step="inputVal(i,$event)" :key="item.name">
    </InputVue>
  </div>
  <button @click="newValue" class="btn btn-primary" :disabled="btnDisabled">
    Send Data
  </button>
  </form>
  <ModaVuel
  :modalisOpen = "modal"
  @closeModal = "modal = false"
  > 
    <div>
      <table class="table table-bordered">
        <tr v-for="(item) in info" :key="item.value">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          </tr>
      </table>
    </div>
  </ModaVuel>
    </div>
</template>

<script>

import InputVue from "@/components/Input-vue"
import ProgressBar from "@/components/ProgressBar"
import ModaVuel from "@/components/Moda-vuel"

export default {
  name: 'App',
  components: {
    ProgressBar,
    InputVue,
    ModaVuel,
  },
  data() {
    return {
      info: [{
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z ]{2,30}$/
      }, {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/
      }, {
          name: 'Email',
          value: '',
          pattern: /.+/
      }, {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/
      }, {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/
      }],
      modal: false,
    }
  },
  methods: {
    inputVal(i, date) {
        this.info[i].value = date.trim()
    },
    newValue(event) {
        event.preventDefault()
        this.modal = true
    }
  },
  computed: {
    normFilter() {
        return this.info.filter(el => el.value != '').length
    },
    progressWidth() {
        return {
            width: +(this.normFilter / this.info.length) * 100 + '%'
        }
    },
    btnDisabled() {
        return this.normFilter == 5 ? false : true
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
