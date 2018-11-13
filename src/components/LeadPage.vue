<template>
	<div class="milestone">
		<Nav/>
		<Sidebar active="leads"/>
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
						            <td>Carol</td>
						            
						          </tr>
						          <tr  class="table-border">
						            <td class="table-width">Email</td>
						            <td>carol@findwoora.com</td>
						            
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Phone</td>
						            <td>09011122239</td>
						          </tr>
						          <tr class="table-border">
						            
						            <td class="table-width">Skype-ID</td>
						            <td>1114</td>
						            
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Brief</td>
						            <td> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
						            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua 
						            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
						            </td>
						          </tr>
						          <tr class="table-border">
						            <td class="table-width">Link</td>
						            <td> <i class="font-color"> carolinfo.bling </i> </td>
						            
						          </tr>
						        </tbody>
						    </table>
						    <div class="lead-button">

							     <button class="waves-effect waves-light btn enter-align __createbtn z-depth-0">Start Project</button>

							      <button class="waves-effect waves-light btn  center-align __deletebtn right z-depth-0" >Delete <i class="fa fa-trash" style="font-size: 12px;"></i></button>
						    </div>
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
