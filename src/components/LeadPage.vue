<template>
	<div class="milestone">
		<Nav/>
		<Sidebar active="leads"/>
		<Loader v-bind:active="loading"/>
	    <div class="content">
	    	<div class="container-fluid">

		    	<div>
		    		<!-- <h5 class="lead-title"> Leads </h5> -->
		    		<div class="row">
					    <div class="col m9 leadpage" id="lead">
					    	<table class="responsive-table">

						        <tbody>
						          <tr class="table-border">
						            <td class="table-width">Name</td>
						            <td>{{ data.fullname }}</td>
						            
						          </tr>
						          <tr  class="table-border">
						            <td class="table-width">Email</td>
						            <td>{{ data.email }}</td>
						            
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Phone</td>
						            <td>{{ data.phone }}</td>
						          </tr>
						          <tr class="table-border">
						            
						            <td class="table-width">Skype-ID</td>
						            <td>{{ data.skypeId }}</td>
						            
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Brief</td>
						            <td> <p>{{ data.brief }}</p>
						            </td>
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Link</td>
						            <td> <i class="font-color"><a v-bind:href="data.links" target="_blank">{{ data.links }} </a></i> </td>
						            
						          </tr>
						        </tbody>
						    </table>
						    <div class="lead-button">

							     <button class="btn center-align __createbtn z-depth-0" @click="startProject(data)">Start Project</button>

							      <button class="btn  center-align __deletebtn right z-depth-0" @click="deleteLead(data.id)" >Delete <i class="fa fa-trash" style="font-size: 12px;"></i></button>
						    </div>
					    </div>

					    <div class="col m3" id="lead-d">
					    	<div class="sidelead">
					    		<div class="lead-icon">
					    			<i class="fa fa-project-diagram"> </i><span> Total Leads</span>

					    		</div>
					    		<div class="lead-content">
					    			<h3> {{ leadCount }} </h3>
					    		</div>

					    		
					    		
					    	</div>

					    	<div class="sidelead">
					    		<div class="lead-icon">
					    			<i class="fa fa-project-diagram"> </i><span> Completed Leads</span>
					    		</div>
					    		<div class="lead-content">
					    			<h3> 0 </h3>
					    		</div>
					    		
					    	</div>
					    	
					    </div>
					</div>
		    	</div>
	    	</div>
			
		</div>
	</div>
</template>

<script>
import Nav from "./includes/nav";
import Sidebar from "./includes/sidebar";
import Loader from "./includes/Loader";
import axios from 'axios'
import constants from './includes/constants.js'
const { API_URL } = constants

export default {
  name: 'LeadPage',  
	components: {
		Nav,
		Sidebar,
		Loader
	},
	data(){
		return {
			loading: true,
			data: {},
			leadCount: 0
		}
	},
	props: ['id'],
	mounted(){
		const userData = sessionStorage.getItem('userData')
		if (!userData) this.$router.push('/')
		
		const { token } = JSON.parse(sessionStorage.userData)
		axios
			.get(`${API_URL}/leads/fetchOne?id=${this.id}`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(res => {
				// console.log(res.data)
				if (res.data.error) M.toast({ html: '<span>Couldn\'t load lead. Please check your internet connection and try again</span>' })
				else {
					this.data = res.data.data
				}
			})
			.catch(err => console.error(err))
			.finally(() => this.loading = false)
		
		axios
			.get(`${API_URL}/leads/fetchAll`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(res => this.leadCount = res.data.data.length)
			.catch(err => console.error(err))
	},
	methods: {
		deleteLead: function(id){
			this.loading = true

			axios
				.get(`${API_URL}/leads/deleteLead?id=${id}`, {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => {
					// console.log(res.data)
					if (res.data.error) M.toast({ html: '<span>Couldn\'t delete lead. Please check your internet connection and try again</span>' })
					else {
						M.toast({ html: '<span>Lead deleted successfully</span>' })
						this.loading = false
						this.$router.go(-1)
					}
				})
				.catch(err => console.error(err))
		},
		startProject: function(){
			this.$router.push(`/start/${this.data.id}`)
		}
	}
};
</script>
