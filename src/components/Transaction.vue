<template>
	<div>

		<nav class="navbar navbar-inverse navbar-fixed-top">
		    <div class="container-fluid">
		        <div class="navbar-header">
		          	<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span class="sr-only">Toggle navigation</span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
			            <span class="icon-bar"></span>
		          </button>
		          <a class="navbar-brand __dashlogoimg" href="#">
		          	<router-link to="/" class="" >
			          	<center>
							<a href="">
								<span>h</span>
								<img src="../assets/o.png">&nbsp;&nbsp;
								<span>rus</span>
							</a>
						</center>
					</router-link>
				</a>
		        </div>
		        <div id="navbar" class="navbar-collapse collapse">
		          	<ul class="nav navbar-nav navbar-right">
			            <!-- <li><a href="#">Dashboard</a></li>
			            <li><a href="#">Settings</a></li>
			            <li><a href="#">Profile</a></li>
			            <li><a href="#">Help</a></li> -->
			            <li class="dropdown __dashdropdown">
			              	<a href="#" class="dropdown-toggle " data-toggle="dropdown"><img src="../assets/avatar.png" class="img-circle">&nbsp; &nbsp;<span>Abimbola Odugbesan</span>
							</a>
							<ul class="dropdown-menu __dropmenu">
								<li>
									<a href="">
									<span><i class="icon icon-note"></i></span>&nbsp; &nbsp;&nbsp; &nbsp; Edit Profile</a>
								</li>
								<li>
									<a href="">
									<span><i class="icon icon-key"></i></span>&nbsp; &nbsp;&nbsp; &nbsp; Change Password</a>
								</li>
								<li>
									<a href="">
									<span><i class="icon icon-logout"></i></span>&nbsp; &nbsp;&nbsp; &nbsp;Logout</a>
								</li>
							</ul>
			            </li>
		          </ul>
		          <!-- <form class="navbar-form navbar-right">
		            <input type="text" class="form-control" placeholder="Search...">
		          </form> -->
		        </div>
		    </div>
	    </nav>

	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<ul class="nav nav-sidebar">
			            <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li> -->

			            <li><router-link to="/" class="" ><span class="icon icon-home icon-sm"></span>
						&nbsp;&nbsp;DASHBOARD</router-link></li>

			            <li ><router-link to="/project" ><span class="icon icon-briefcase icon-sm"></span>
						&nbsp;&nbsp;PROJECTS</router-link></li>
			            <li class="active"><router-link to="/transaction" ><span class="icon icon-credit-card icon-sm"></span>
						&nbsp;&nbsp;TRANSACTIONS</router-link></li>
			            <li><router-link to="/lead" ><span class="icon icon-settings icon-sm"></span>
						&nbsp;&nbsp;LEADS</router-link></li>
			            <li><router-link to="/milestone" >MILESTONE</router-link></li>
			            <li><router-link to="/talent" >TALENTS</router-link></li>
			            <li><router-link to="/inbox" >INBOX</router-link></li>
		          	</ul>
		          
		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Transaction</h1>

		          	<div class="__nxtmilestone">
						<div class="row">
							<ul class="nav nav-pills nav-stacked __nav-pills col-md-5 col-sm-5">
								<li class="active">
							    	<a href="#tab_a" data-toggle="pill" class="a">
							    		<div class="__bids">
											<div class="row">
												<div class="col-md-9 col-sm-9 col-xs-8 __bids7">
													<p class="__actr">Payment Confirmation</p>
													<p>Order #10078998 has ben successfully deli....</p>
												</div>
												<div class="col-md-3 col-sm-3 col-xs-4 __bidsp">
													<p class="">10:10 AM</p>
												</div>
											</div>
										</div>
							    	</a>
							    </li>
							    <li>
							    	<a href="#tab_b" data-toggle="pill" class="a">
							    		<div class="__bids">
											<div class="row">
												<div class="col-md-9 col-sm-9 col-xs-8 __bids7">
													<p class="__actr">Payment Confirmation</p>
													<p>Order #10078998 has ben successfully deli....</p>
												</div>
												<div class="col-md-3 col-sm-3 col-xs-4 __bidsp">
													<p class="">10:10 AM</p>
												</div>
											</div>
										</div>
							    	</a>
							    </li>
							    <li>
							    	<a href="#tab_c" data-toggle="pill" class="a">
							    		<div class="__bids">
											<div class="row">
												<div class="col-md-9 col-sm-9 col-xs-8 __bids7">
													<p class="__actr">Payment Confirmation</p>
													<p>Order #10078998 has ben successfully deli....</p>
												</div>
												<div class="col-md-3 col-sm-3 col-xs-4 __bidsp">
													<p class="">10:10 AM</p>
												</div>
											</div>
										</div>
							    	</a>
							    </li>
							    <li>
							    	<a href="#tab_d" data-toggle="pill" class="a">
							    		<div class="__bids">
											<div class="row">
												<div class="col-md-9 col-sm-9 col-xs-8 __bids7">
													<p class="__actr">Payment Confirmation</p>
													<p>Order #10078998 has ben successfully deli....</p>
												</div>
												<div class="col-md-3 col-sm-3 col-xs-4 __bidsp">
													<p class="">10:10 AM</p>
												</div>
											</div>
										</div>
							    	</a>
							    </li>
							</ul>
							<div class="tab-content col-md-7 col-sm-7">
						        <div class="tab-pane active" id="tab_a">
						            <div class="__tab">
						            	1
						            	<div class="__carddb">
										  	<div class="__carddbok">
										  		<p class="f1 __cardp1">Order #100078998</p>
										  		<div class="row __bookt">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Payment method</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1"><img src="assets/img/card.svg">********6789</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Customer name</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Bolotal Adeem</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Pick up city</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Lagos</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Destination</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Kaduna</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Fare</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">NGN 20,000</p>
										  			</div>
										  		</div>

										  	</div>
										</div>
						            </div>
						        </div>
						        <div class="tab-pane" id="tab_b">
						            <div class="__tab">
						            	2
						            	<div class="__carddb">
										  	<div class="__carddbok">
										  		<p class="f1 __cardp1">Order #100078998</p>
										  		<div class="row __bookt">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Payment method</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1"><img src="assets/img/card.svg">********6789</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Customer name</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Bolotal Adeem</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Pick up city</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Lagos</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Destination</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Kaduna</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Fare</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">NGN 20,000</p>
										  			</div>
										  		</div>

										  	</div>
										</div>
						            </div>
						        </div>
						        <div class="tab-pane" id="tab_c">
						            <div class="__tab">
						            	3
						            	<div class="__carddb">
										  	<div class="__carddbok">
										  		<p class="f1 __cardp1">Order #100078998</p>
										  		<div class="row __bookt">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Payment method</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1"><img src="assets/img/card.svg">********6789</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Customer name</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Bolotal Adeem</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Pick up city</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Lagos</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Destination</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Kaduna</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Fare</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">NGN 20,000</p>
										  			</div>
										  		</div>

										  	</div>
										</div>
						            </div>
						        </div>
						        <div class="tab-pane" id="tab_d">
						            <div class="__tab">
						            	4
						            	<div class="__carddb">
										  	<div class="__carddbok">
										  		<p class="f1 __cardp1">Order #100078998</p>
										  		<div class="row __bookt">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Payment method</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1"><img src="assets/img/card.svg">********6789</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Customer name</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Bolotal Adeem</p>
										  			</div>
										  		</div>
										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Pick up city</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Lagos</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Destination</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">Kaduna</p>
										  			</div>
										  		</div>

										  		<div class="row">
										  			<div class="col-md-8 col-sm-7 col-xs-8">
										  				<p class="__cardp">Fare</p>
										  			</div>
										  			<div class="col-md-4 col-sm-5 col-xs-4">
										  				<p class="__cardp1">NGN 20,000</p>
										  			</div>
										  		</div>

										  	</div>
										</div>
						            </div>
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
export default {
  
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

	.__nxtmilestone {
	    border: 1px solid #8888881f;
	    border-radius: 6px;
	    background-color: #ffffff;
	    padding: 11px 30px ;
	}

	/*transaction*/

	.__nav-pills li .a {
    /*padding: 0px;*/
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    /*margin-top: 4px;*/
    background: #ffffff;
	}

	.__nav-pills {
	border-right: 1px solid #8888881f;
    overflow-y: scroll;
    height: 66vh;
    overflow-x: hidden;
	}

	.__nav-pills::-webkit-scrollbar {
    width: 2px;
    /*background-color: #d6f4ff;*/
	}
	.__nav-pills::-webkit-scrollbar-thumb {
	    background: #333; 
	}

	.__carddb {
    padding: 20px 90px 0px 47px;
    background-color: #ffffff;
	}

	.__carddbok {
    padding: 40px 20px 50px 20px !important;
    background: #f4f4f4;
	}

	.__bookt {
    margin-top: 20%;
	}

	.__actr {
    font-size: 15px;
    font-weight: 900;
	}


	

	/*transaction page end*/

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

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
  background: #ffffff;
}

/*
 * Sidebar
 */

/* Hide for mobile, show later */
.sidebar {
  display: none;
}
@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #ffffff;
    border-right: 1px solid #eee;
  }
}

/* Sidebar navigation */
.nav-sidebar {
  margin-right: -21px; /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}
.nav-sidebar > .red {
  padding-right: 20px;
  padding-left: 20px;
}

.navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover {
    color: #fff;
    background-color: transparent;
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

.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
  text-decoration: none;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #00aeef !important;
  border-right: 4px solid #00aeef;
  background-color: #ffffff !important;
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