<template>
  <div id="app" class='container'>
    <div class="row">
      <div>
        <h4>Chart Types</h4>
        <div class='checkbox' v-for="graphs in graphTypes" v-bind:key='graphs.id'>
          <input v-model="graphSelected" type="radio" :value='graphs.name'  > {{graphs.name}} <br>
        </div>
      </div>
      <HelloWorld :chart-color='colorSelected' :chart-type="graphSelected" />
      <ChartColor @color-selected='getColor'></ChartColor>
      
      </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChartColor from './components/ChartColor.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,ChartColor
  },data(){
        return{
            graphSelected: 'Bar Chart',
            graphTypes:[
                    {
                        name:'Bar Chart',
                        id:'1'
                    },
                    {
                        name:'Line Chart',
                        id:'2'
                    },
                    {
                        name:'Pie Chart',
                        id:'3'
                    },
                    {
                        name:'Piece Wise Chart',
                        id:'4'
                    }
            ],
            colorSelected:''

        }
    },
    methods:{
      getColor(value){
        this.colorSelected=value

      }
    }
    
}
</script>

<style>
.checkbox{
  margin-top: 4%;

}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
