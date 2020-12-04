<template>
    <div class="form-group  ">
  <h4 >Chart Color</h4>
  <select @change='emitColor' v-model="colorSelected" class="form-control " id="sel1">
    <option :key='color.id' v-for='color in colors' >{{color.color}}</option>
    <!-- <option>Green</option>
    <option>Pink</option>
    <option>Yellow</option> -->
  </select>
</div>
</template>
<script>
export default {
    emit:['color-selected'],
    data(){
        return{
            colors:[{
                    color:'red',
                    id:1
                },{
                    color:'green',
                    id:2
                },{
                    color:'blue',
                    id:3
                },{
                    color:'yellow',
                    id:4
                }],
                colorSelected:'blue'

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