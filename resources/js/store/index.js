import Vue from 'vue';
import Vuex from "vuex";
Vue.use(Vuex)

const base_api="http://feapi.ajt.my/";
const store = new Vuex.Store({
	state: {
		job:[],
	},
	mutations: {
		setJob (data) {
			this.state.job=data;
		},
		filter(data){
			this.state.job.forEach(val){
				if(data.title!=""){
					
				}
				if(data.salary!=""){
					
				}
				if(data.location!=""){
					
				}
			}
			
		}
	},
	actions:{
		getJob({commit,state}){
			axios.get(base_api+"jobs").then((response) => {
				commit.setJob(response.data);
				console.log(response.data)
			})
		}
	}
})
export default store;
