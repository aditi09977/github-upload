<template>
  <div id="app" class='container'>
    <div class="row">
      <div class='checkbox'  >
        <div  v-for="graphs in graphTypes" v-bind:key='graphs.id'>
          <input v-model="graphSelected" type="radio" :value='graphs.name'  > {{graphs.name}} <br>
        </div>
      </div>
      <HelloWorld  :chart-type="graphSelected" />
      
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
            ]

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
