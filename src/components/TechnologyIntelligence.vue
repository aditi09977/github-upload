<template>
    <b-tabs content-class="mt-3"> 
    <b-tab title="First" active>
   {{apiData.data}}
   <br>
   <button class='btn btn-danger' @click='this.getResultsFromApi' >Get Results</button>
        
    </b-tab>
     <b-tab title="Second"><p>I'm the second tab</p></b-tab>
    <b-tab title="Third" ><p>I'm a disabled tab!</p></b-tab>
   </b-tabs>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            apiData:''

        }
    },
    methods:{
        getResultsFromApi(){
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(res =>{
                this.apiData=res
               console.log(res)
               return res
                })
        }
    }
    
}
</script>