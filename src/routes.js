import graphs from './components/TheGraphs.vue';
import Home from './components/Home.vue';
// import { resolve } from 'path';
// import TechnologyIntelligence from './components/TechnologyIntelligence.vue'
const TechnologyIntelligence = resolve=>{
    require.ensure(['./components/TechnologyIntelligence.vue'], ()=>{
        resolve(require('./components/TechnologyIntelligence.vue'));

    });
}

export const routes=[
    {path:'/company',component:graphs},
    {path:'/',component:Home},
    {
        path:'/technology' ,components:{
            default:TechnologyIntelligence

        }
    },
    // {path:'/redirect-me',redirect:'/company'},
    {path:'/*',redirect:'/'},

]