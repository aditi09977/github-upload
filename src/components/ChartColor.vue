<template>
    <div class="form-group">
  <h4 >Chart Color</h4>
  <select @change='emitColor' v-model="colorSelected" class="form-control " id="sel1">
    <option :key='color.id' v-for='color in colors' >{{color.color}}</option>
  </select>
</div>
</template>
<script>
export default {
    emit:['color-selected'],
    props:['colors','colorModal'],
    data(){
        return{
            colorSelected:this.colorModal
        }
    },
    methods:{
        emitColor(){
            this.$emit('color-selected',this.colorSelected)
        }
    }
    
}
</script>

<style lang="stylus" scoped>

</style>