<template>
	<div class="start-project">
		<Nav/>
		<Sidebar active="settings"/>
	    <div class="content">
	    	<div class="container-fluid">

	    		<h5 class="setting-head"> Lorem ipsum </h5>

		    	<div class="milestonediv">
		    		<table>
				       

				        <tbody>
				          <tr>
				            
				            <td class="settting-text">Lorem ipsum & details <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				             </p> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				             </p></td>

				             <td > <div class="switch">
								   	<label>
								     	<input type="checkbox">
								      <span class="lever"></span>
								    </label>
								</div>
							</td>
				            
				          </tr>
				          <tr>
				            <td class="settting-text">Lorem ipsum & details <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				             </p> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				             </p></td>
				            <td> 
				            	<div class="switch">
								   	<label>
								     	<input type="checkbox">
								      <span class="lever"></span>
								    </label>
								</div>
							</td>
				            
				          </tr>
				          
				        </tbody>
				    </table>
		    		
		    	</div>

		    	<h5 class="setting-head"> Lorem ipsum </h5>

		    	<div class="milestonediv">
		    		<table>
				       

				        <tbody>
				          <tr>
				            
				            <td class="setting-icon"> <i class="fa fa-credit-card"></i> &nbsp; payment Method</td>
				            <td> <i class="fa fa-play"></i> </td>
				            
				            
				          </tr>
				          <tr>
				            <td class="setting-icon"> <i class="fa fa-lock"></i> &nbsp; Password</td>
				            <td> <i class="fa fa-play"></i> </td>
				            
				          </tr>
				          <tr>
				            
				            <td class="setting-icon"> <i class="fa fa-bookmark"></i> &nbsp; Bookmark and History</td>

				             <td> <i class="fa fa-play"></i> </td>
				            
				          </tr>
				          
				        </tbody>
				    </table>
		    		
		    	</div>

		    	<h5 class="setting-head"> Lorem ipsum  </h5>

		    	<div class="milestonediv">
		    		<table>
				       

				        <tbody>
				          <tr>
				            
				            <td class="setting-icon">About, Privacy and License</td>

				             <td class="setting-icon"> <i class="fa fa-edit"></i> </td>
				            
				          </tr>
				          <tr>
				            <td class="setting-icon">Restore System Default</td>
				            <td> </td>
				            
				          </tr>
				          
				        </tbody>
				    </table>
		    		
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

</script>
