<template>
     <div>
            <h4>Chart Types</h4>
            <div class='checkbox' v-for="graphs in graphTypes" v-bind:key='graphs.id'>
              <input v-model="graphActive" type="radio" :value='graphs.name'  > {{graphs.name}} <br>
            </div>
          </div>
</template>

<script>
export default {
    emit:['graph-selected'],
    props:{
         graphTypes:{
            required:true,
        }
    },
    data(){
        return{
            graphActive:'Bar Chart'
        }
    },
    watch:{
        graphActive(){
            this.$emit('graph-selected',this.graphActive)
            
        }
    },
   
    
}
</script>

<style scoped>
.checkbox{
  margin-top: 4%;

}
</style>