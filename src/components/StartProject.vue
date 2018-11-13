<template>
	<div class="start-project">
		<Nav/>
		<Sidebar active="leads"/>
	    <div class="content">
	    	<div class="container">
	    		<h6 class="project-title">Start New Project</h6>

		    	<div class="milestonediv">
		    		
		    		<div class="row">
					    <form class="col s12">
					      	<div class="row __row">
						        <div class="input-field __inputf col s8">
						          <input placeholder="Project name" id="" type="text" class="__input2 form-width validateinput form-width ">
						        </div>
						        <div class="input-field col s4">
						          <input placeholder="Project duratione"  type="text" class="__input2 input validate ">
						        </div>
					      	</div>
					      	
					      	<div class="row __row">
						        <div class="input-field __inputf col s8">
						          <input placeholder="Project location" id="" type="text" class="__input2 validateinput form-width ">
						        </div>
						        <div class="input-field col s4">

						        	<div class="form-group"><br>
									<!-- upload -->
									<input type="file" id="base-input5" name="" class="form-control5 form-input5 form-style-base5">
									<input type="text" id="fake-input5" name="" class="form-control5 form-input5 form-style-fake5  __input2" placeholder="project image" readonly>
									<span class="fa fa-image input-place5"></span>
									<!-- end -->
									</div>
						        </div>
					      	</div>

					      	<div class="row __row">
						        <div class="input-field __inputf col s12">
						          <!-- <input placeholder="Status"  type="text" class="__input validateinput "> -->
						          <select class="browser-default __input2 input validate">
						          	<option value="Project-type " class= " .placeholder-text" disabled selected> Project Type</option>
						          	<option value="Project-type"> Project Type</option>
						          	<option value="Project-type"> Project Type</option><option value="Project-type">  Project Type</option>
						          </select>
						        </div>
					      	</div>
					      	
					      	<div class="row __row">
						        <div class="input-field __inputf col s12">
						        	<textarea id="textarea1" class="__input1 .placeholder-text" placeholder=" project description"></textarea>
						        </div>
					      	</div>
					      
					      	<div class="row __row">
					      		
						        <div class="lead-button">

								     <!-- <p class="waves-effect waves-light enter-align __starticon z-depth-0"> <i class="fa fa-lock __starticon"></i></p> -->


								      <button class="waves-effect waves-light btn  center-align __postbtn right z-depth-0" >post 
								      </button>
						   		 </div>
						       
					      	</div>
					   	</form>
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
  name: 'StartProject',

	components: {
		Nav,
		Sidebar,
	},
};
window.addEventListener('load', () => {
	document.querySelector('#base-input5').addEventListener('change', (e) => {
		console.log(e.target.value)
		document.getElementById('fake-input5').value = e.target.value.replace(`C:\\fakepath\\`, '') 
	})
})
// $().change(function() {
// $().val($(this).val().replace("C:\\fakepath\\", ""));
// });
</script>