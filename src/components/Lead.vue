<template>
	<div class="milestone">
		<Nav hasSearch/>
		 <Loader v-bind:active="loading"/>
		<Sidebar active="leads"/>
	    <div class="content">
	    	<div class="container-fluid">

		    	<div>
		    		<h5 class="lead-title"> Leads </h5>
		    		<div class="row">
					    <div class="col m9" id="lead">
					    	<table class="responsive-table">
						        <thead>
						          <tr>
						              <th class="table-head">Name</th>
						              <th class="table-head">Email</th>
						              <th class="table-head">Phone</th>
						              <th class="table-head">Skype-ID</th>
									  <th class="table-head">Status</th>
						              <th></th>
						          </tr>
						        </thead>
						        <tbody>
						          <tr style="cursor: pointer" v-for="(lead, i) in leads" :key="i">
						            <td @click="viewLead(lead.id)">{{ lead.fullname }}</td>
						            <td @click="viewLead(lead.id)">{{ lead.email }}</td>
						            <td @click="viewLead(lead.id)">{{ lead.phone }}</td>
						            <td @click="viewLead(lead.id)">{{ lead.skypeId }}</td>
									<td @click="viewLead(lead.id)" style="text-transform: capitalize">{{ lead.status.replace('-', ' ') }}</td>
						            <td class="fa fa-trash" style="cursor: pointer" @click="deleteLead(lead.id, i)"> </td>
						          </tr>
						        </tbody>
						    </table>
					    </div>

					    <div class="col m3" id="lead-d">
					    	<div class="sidelead">
					    		<div class="lead-icon">
					    			<i class="fa fa-project-diagram"> </i><span> Total Leads</span>

					    		</div>
					    		<div class="lead-content">
					    			<h3> {{ leads.length }} </h3>
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
  name: 'Leads',  
	components: {
		Nav,
		Sidebar,
		Loader
	},
	data(){
		return {
			loading: true,
			leads: []
		}
	},
	mounted(){
		const userData = sessionStorage.getItem('userData')
		if (!userData) this.$router.push('/')

		const { token } = JSON.parse(sessionStorage.userData)
		axios
			.get(`${API_URL}/leads/fetchAll`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(res => {
				// console.log(res.data)
				if (res.data.error) {
					M.toast({ html: '<span>Couldn\'t get leads. Please check your internet connection and try again</span>' })
				} else {
					this.leads = res.data.data
				}
			})
			.catch(err => M.toast({ html: '<span>Couldn\'t get leads. Please check your internet connection and try again</span>' }))
			.finally(() => this.loading = false)
	},
	methods: {
		deleteLead: function(leadId, index){
			const { token } = JSON.parse(sessionStorage.userData)

			axios
				.get(`${API_URL}/leads/deleteLead?id=${leadId}`, {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => {
					console.log(res.data)
					if (res.data.error) M.toast({ html: '<span>Couldn\'t delete lead. Please check your internet connection and try again</span>' })
					else {
						let { leads } = this
						leads.splice(index, 1)
						this.leads = leads
						M.toast({ html: '<span>Lead deleted successfully</span>' })
					}
				})
				.catch(err => console.error(err))
		},
		viewLead: function(lead){
			// this.$router.push({ name: 'LeadPage', params: { data: lead, leadCount: this.leads.length } })
			this.$router.push(`/lead/${lead}`)
		}
	}
};
</script>
