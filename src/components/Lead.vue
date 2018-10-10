<template>
	<div>

      <Nav/>
	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="leads"/>

		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Leads</h1>

		          	<div class="row">
		          		<div class="col-md-8 col-sm-7">
		          			<div class="__nxtmilestone">
								<!-- <p class="__milestonenext">Projects</p> -->
								<div class="table-responsive">
									<table class="table table-hover">
										<thead>
											<tr>
												<th class="">Name</th>
												<th class="">Email</th>
												<th class="">Phone</th>
												<th class="">SkypeID</th>
												<!-- <th class="">Brief</th> -->
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><router-link to="/leadpage"> Transafty</router-link></td>
												<td><router-link to="/leadpage"> Transafty@gmail.com</router-link></td>
												<td><router-link to="/leadpage"> 09842348753</router-link></td>
												<td><router-link to="/leadpage"> 23456</router-link></td>
												<!-- <td><router-link to="/leadpage"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</router-link></td> -->
											</tr>

											<tr>
												<td><router-link to="/leadpage"> Transafty</router-link></td>
												<td><router-link to="/leadpage"> Transafty@gmail.com</router-link></td>
												<td><router-link to="/leadpage"> 09842348753</router-link></td>
												<td><router-link to="/leadpage"> 23456</router-link></td>
												<!-- <td><router-link to="/leadpage"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</router-link></td> -->
											</tr>

											<tr>
												<td><router-link to="/leadpage"> Transafty</router-link></td>
												<td><router-link to="/leadpage"> Transafty@gmail.com</router-link></td>
												<td><router-link to="/leadpage"> 09842348753</router-link></td>
												<td><router-link to="/leadpage"> 23456</router-link></td>
												<!-- <td><router-link to="/leadpage"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</router-link></td> -->
											</tr>

											<tr>
												<td><router-link to="/leadpage"> Transafty</router-link></td>
												<td><router-link to="/leadpage"> Transafty@gmail.com</router-link></td>
												<td><router-link to="/leadpage"> 09842348753</router-link></td>
												<td><router-link to="/leadpage"> 23456</router-link></td>
												<!-- <td><router-link to="/leadpage"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</router-link></td> -->
											</tr>

											<tr>
												<td><router-link to="/leadpage"> Transafty</router-link></td>
												<td><router-link to="/leadpage"> Transafty@gmail.com</router-link></td>
												<td><router-link to="/leadpage"> 09842348753</router-link></td>
												<td><router-link to="/leadpage"> 23456</router-link></td>
												<!-- <td><router-link to="/leadpage"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</router-link></td> -->
											</tr>
										</tbody>
									</table>
								</div>
								<!-- <div class="row">
									<div class="col-md-9"></div>
									<div class="col-md-3">
										<a href="" class="btn __projectbtn">Start Project</a>
									</div>
								</div> -->
							</div>
		          		</div>
		          		<div class="col-md-4 col-sm-5">
		          			<div class="__dash1">
								<div class="row __dashrow">
									<div class="col-md-2 col-xs-2">
										<p class="__dashimgr1">
											<span class="icon icon-briefcase icon-sm" style="color: #8c0f0f;"></span>
										</p>
									</div>
									<div class="col-md-10 col-xs-10">
										<p class="f2 __dashpt2">Total Leads:</p>
									</div>
								</div>

								<div class="row __dashrow">
									<div class="col-md-2 col-xs-2">
										<p class="__dashimgr2">
											<span class="icon icon-briefcase icon-sm" style="color: #545408;"></span>
										</p>
									</div>
									<div class="col-md-10 col-xs-10">
										<p class="f2 __dashpt2">Completed Leads:</p>
									</div>
								</div>
							</div>
						</div>
		          	</div>
		          	<br>

		        </div>
	      	</div>
	    </div>
	</div>
</template>

<script>
  import Nav from './includes/nav.vue';
  import Sidebar from './includes/sidebar.vue';

	export default {
    components: {
      Nav,
      Sidebar
    }
	}
</script>

<style>

	/*project page*/

	.__dashlogoimg span {
	    text-transform: uppercase !important;
	    font-size: 22px;
	    letter-spacing: .4rem;
	    color: #0000008c;
	}
	.__dashlogoimg img {
	    width: 30px !important;
	    width: 30px !important;
	    position: relative;
	    top: -5.5px;
	    bottom: 5.5px;
	}

  .__dashp {
    border: none;
    padding-left: 0 !important;
  }

	.__dashdropdown img {
	    width: 25px;
	    /*box-shadow: 0px 0px 16px 0px rgba(241, 239, 239, 1);*/
	}

	.__dashp span {
	    font-size: 10px !important;
	    font-weight: 100 !important;
	}

	.__dash {
	    /* box-shadow: 0px 2px 20px 0px #a9a9a92b; */
	    border-radius: 4px;
	    padding-bottom: 3%;
	    border: 1px solid #8888881f;
	    border-radius: 6px;
	    background-color: #ffffff;
	}

	.table>thead>tr>th {
	    vertical-align: bottom;
	    border-bottom: 1px solid #ddf6ff;
	    font-size: 14px;
	    color: #26acf5;
	    text-transform: uppercase;
	    font-weight: 100;
	    /* border-bottom: none; */
	}

	.table>tbody>tr>td {
	    border-bottom: none !important;
	    border-top: none !important;
	    line-height: 2.0 !important;
	}

	.__dash1 {
	    /* box-shadow: 0px 0px 16px 0px rgba(241, 239, 239, 1); */
	    border-radius: 4px;
	    /*width: 347px;*/
	    /* height: 321px; */
	    padding-bottom: 5%;
	    background-color: #ffffff;
	    border: 1px solid #8888881f;
	    border-radius: 6px;
	}

	.__dashimgr1 {
	    border-radius: 50%;
	    border: 1px solid;
	    height: 40px;
	    width: 40px;
	    text-align: center;
	    padding: 8px 2px 2px 2px;
	    background: #fbd5d3;
	    color: #fff;
	    font-size: 12px;
	    margin-bottom: 5px;
	}

	.__dashrow {
    	padding: 10px 20px 0px;
	}

	.__dashpt2 {
	    font-size: 16px;
	    color: #4a4a4a;
	    margin-top: 8px;
	    margin-bottom: 0px;
	    /* margin-top: 0px; */
	}

	.__dashimgr2 {
	    border-radius: 50%;
	    border: 1px solid;
	    height: 40px;
	    width: 40px;
	    text-align: center;
	    padding: 8px 2px 2px 2px;
	    background: #ffffe3;
	    color: #fff;
	    font-size: 12px;
	    margin-bottom: 5px;
	}

	.__dashimgr3 {
	    border-radius: 50%;
	    border: 1px solid;
	    height: 40px;
	    width: 40px;
	    text-align: center;
	    padding: 8px 2px 2px 2px;
	    background: #e1ffe9;
	    color: #fff;
	    font-size: 12px;
	    margin-bottom: 5px;
	}

	.__dashimgr4 {
	    border-radius: 50%;
	    border: 1px solid;
	    height: 40px;
	    width: 40px;
	    text-align: center;
	    padding: 8px 2px 2px 2px;
	    background: #c7f0ff;
	    color: #fff;
	    font-size: 12px;
	    margin-bottom: 5px;
	}

	.icon-sm {
    	font-size: 20px;
	}

	.__nxtmilestone {
	    border: 1px solid #8888881f;
	    border-radius: 6px;
	    background-color: #ffffff;
	    padding: 11px 30px ;
	}

	.__milestonenext {
    	font-size: 20px;
	    /*font-weight: 600;*/
	}

	.__milestonenextp {
	    font-size: 13px;
	}

	.__milestonecheck{
	  padding-left: 10px;
	}

	.__dashp {
	    color: #4a4a4a;
	    font-size: 30px;
	    padding: 11px 30px 1px;
	    /* font-weight: 600; */
	}

	/*check box*/

		/* The check */
		.check {
		    display: block;
		    position: relative;
		    padding-left: 20px;
		    margin-bottom: 12px;
		    padding-right: 2px;
		    /*cursor: pointer;*/
		    font-size: 16px;
		    -webkit-user-select: none;
		    -moz-user-select: none;
		    -ms-user-select: none;
		    user-select: none;
		    font-weight: 200;
		}

		/* Hide the browser's default checkbox */
		.check input {
		    position: absolute;
		    opacity: 0;
		    cursor: pointer;
		}

		/* Create a custom checkbox */
		.checkmark {
		    position: absolute;
		    top: 2px;
		    left: 0;
		    height: 15px;
		    width: 15px;
		    background-color: #fff;
		    border-color: #00aeef;
		    border-style: solid;
		    border-width: 2px;
		}


		/* When the checkbox is checked, add a blue background */
		.check input:checked ~ .checkmark {
		    background-color: #00aeef;
		}

		/* Create the checkmark/indicator (hidden when not checked) */
		.checkmark:after {
		    content: "";
		    position: absolute;
		    display: none;
		}

		/* Show the checkmark when checked */
		.check input:checked ~ .checkmark:after {
		    display: block;
		}

		/* Style the checkmark/indicator */
		.check .checkmark:after {
		    left: 4px;
		    top: 1px;
		    width: 4px;
		    height: 9px;
		    border: solid;
		    border-color: #ffffff;
		    border-width: 0 2px 2px 0;
		    -webkit-transform: rotate(45deg);
		    -ms-transform: rotate(45deg);
		    transform: rotate(45deg);
		}

	/*end*/

	/*project page end*/

	/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
body {
  padding-top: 50px;
}


/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

a, a:active, a:hover, a:focus, a:visited {
    text-decoration: none;
    /* background: transparent; */
    outline: none;
    color: inherit;
}

.__dashdropdown a:hover{
	color: #9d9d9d !important;
}

/*
 * Main content
 */

.main {
  padding: 20px;
}
@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}
.main .page-header {
  margin-top: 0;
}


/*
 * Placeholder dashboard ideas
 */

.placeholders {
  margin-bottom: 30px;
  text-align: center;
}
.placeholders h4 {
  margin-bottom: 0;
}
.placeholder {
  margin-bottom: 20px;
}
.placeholder img {
  display: inline-block;
  border-radius: 50%;
}
</style>
