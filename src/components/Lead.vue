<template>
	<div class="milestone">
		<Nav hasSearch/>
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
						              <th></th>
						          </tr>
						        </thead>

						        <tbody>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
						          </tr>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
						          </tr>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
						          </tr>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
						          </tr>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
						          </tr>
						          <tr>
						            <td>Carol</td>
						            <td>carol@findwoora.com</td>
						            <td>09011122239</td>
						            <td>1114</td>
						            <td class="fa fa-trash"> </td>
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
					    			<h3> 814 </h3>
					    		</div>

					    		
					    		
					    	</div>

					    	<div class="sidelead">
					    		<div class="lead-icon">
					    			<i class="fa fa-project-diagram"> </i><span> Completed Leads</span>
					    		</div>
					    		<div class="lead-content">
					    			<h3> 104 </h3>
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

export default {
  name: 'Milestone',

  
	components: {
		Nav,
		Sidebar,
	},
};
</script>
