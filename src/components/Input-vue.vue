<template>
    <div class="form-group" >
				<label>{{obj.name}}</label> &#160;
                <transition mode="out-in" name="fade">
                    <font-awesome-icon  :style="awesomeColor" :key="awesomeName" :icon="awesomeName" />
                </transition>
				<input type="text"
				@input="inputValue" 
				class="form-control" >
				{{valudate}}
			</div>
</template>

<script>
export default {
    props: {
        obj: {
            type: Object,
            default: function() {
                return {
                    name: 'hello',
                    pattern: /^[0-9]{7,14}$/,
                    value: '',
                }
            }
        }
        },
    data() {
            return {
                dsip: 'none',
                value: '',
            }
        },
    methods: {
        inputValue(event) {
            this.value = event.target.value.trim()
            if (this.valudate) {
                this.$emit('step', this.value)
                this.dsip = 'inline-block'
            } else {
                this.$emit('step', '')
            }

        }
    },
    computed: {
        valudate() {
            return this.obj.pattern.test(this.value.trim())
        },
        awesomeColor() {
            return {
                color: this.valudate ? 'green' : 'red',
                display: this.dsip,
            }
        },
        awesomeName(){
            return  this.valudate ? 'check' : 'exclamation-circle';
        }
    },
}
</script>
<style >
.fade-enter-active{
  animation: flipInY; 
  animation-duration: 0.4s
}
.fade-leave-active{
  animation: flipOutY; 
  animation-duration: 0.4s
}
</style>
