<template>
	<div class="milestone inprogress">
		<Nav/>
		<Sidebar active="projects"/>
		<Loader v-bind:active="loading"/>
	    <div class="content inprogress">
	    	<div class="container-fluid">
				<h5 class="progress-title"> <span class="number">21</span> Projects in-progress </h5>
		    	<div class="milestonediv">		    		
		    		<div class="row" style="margin: 0">
					    <table class="responsive-table tableau">
						    <tbody>
						        <tr v-for="(project, i) in data" :key="i">
						            <td class="table-num" >{{ i + 1 }}</td>
						            <td> <div class="row">
							            	<div class="col s3">
							            		<img src="../assets/img/avatar.png" class="progress-img">
							            	</div>
							            	<div class="col s9">
							            		<p class="main-text">
						            				{{ project.title }} <br>
						            				<span class="sub-text truncate">{{ project.description }}</span>
						            			</p>
							            	</div>
						            	</div>
						            </td>
						            <!-- <td class="main-text">Lagos</td> -->
						            <td class="main-text">{{ new Date(project.created_at).toDateString() }}</td>
						            <td><button class="btn table-button z-depth-0" @click="project(project.id)">See Project</button></td>
						        </tr>
						        </tbody>
						</table>
					</div>
		    	</div>
	    	</div>
			
		</div>
	</div>
</template>

<script>
import Nav from "./includes/nav";
import Sidebar from "./includes/sidebar";
import Loader from './includes/Loader.vue'
import axios from 'axios'
import constants from './includes/constants.js'

const { API_URL } = constants

export default {
	name: "Milestone",
	components: {
		Nav,
		Sidebar,
		Loader
	},
	mounted() {
		const userData = sessionStorage.getItem("userData");
		if (!userData) this.$router.push("/");

		const { token } = JSON.parse(sessionStorage.userData);
		axios
			.get(`${API_URL}/projects/fetchAll`, {
				headers: {
				Authorization: `Bearer ${token}`
				}
			})
			.then(res => {
				res = res.data;
				console.log(res);
				if (res.error)
				M.toast({
					html:
					"<span>Something went wrong. Please check your internet connection and try again</span>"
				});
				else {
					const inP = res.data.filter(datum => datum.status === "in-progress");
					this.data = inP;

					this.loading = false
				}
			})
			.catch(err => console.error(err));
	},
	data() {
		return {
			data: [],
			loading: true
		};
	}
};
</script>
