<template>
    <div class="progress">
        <div :style="progress" class="progress-bar"></div>
    </div>
</template>


<script>
export default{
    props:{
        progress:{
            type: Object,
            default: function(){
                return{
                    width:100 +'px'
                }
            },
        }
    }
}
</script>
