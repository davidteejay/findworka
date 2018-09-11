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

			            <li class="active"><router-link to="/" class="" ><span class="icon icon-home icon-sm"></span>
						&nbsp;&nbsp;Dashboard</router-link></li>

			            <li><router-link to="/project" ><span class="icon icon-briefcase icon-sm"></span>
						&nbsp;&nbsp;PROJECTS</router-link></li>
			            <li><router-link to="/login" ><span class="icon icon-credit-card icon-sm"></span>
						&nbsp;&nbsp;TRANSACTIONS</router-link></li>
			            <li><router-link to="/lead" ><span class="icon icon-settings icon-sm"></span>
						&nbsp;&nbsp;LEADS</router-link></li>
			            <li><router-link to="/milestone" >Milestone</router-link></li>
			            <li><router-link to="/talent" >Talents</router-link></li>
		          	</ul>
		          
		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Dashboard</h1>

		          	<div class="row">
		          		<div class="col-md-8 col-sm-7">
		          			<div class="__dash">
								<div class="table-responsive">
									<table class="table table-hover">
										<thead>
											<tr>
												<th class="">Current Projects</th>
												<th class="">Start Date</th>
												<th class="">End Date</th>
												<th class="">Talents</th>
												<th class="">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td><a href=""> Website Development for Transafty</a></td>
												<td><a href="">12-05-2018</a></td>
												<td><a href="">05-06-2018</a></td>
												<td class="text-center"><a href="">5</a></td>
												<td><a href=""><span class="label label-success label-sm">completed</span></a></td>
											</tr>

											<tr>
												<td><a href="">Website Development for Transafty</a></td>
												<td><a href="">12-05-2018</a></td>
												<td><a href="">05-06-2018</a></td>
												<td class="text-center"><a href="">5</a></td>
												<td><a href=""><span class="label label-warning label-sm">in-progress</span></a></td>
											</tr>

											<tr>
												<td><a href="">Website Development for Transafty</a></td>
												<td><a href="">12-05-2018</a></td>
												<td><a href="">05-06-2018</a></td>
												<td class="text-center"><a href="">5</a></td>
												<td><a href=""><span class="label label-danger label-sm">cancelled</span></a></td>
											</tr>
										</tbody>
									</table>
								</div>
								<br>
								<div class="row">
									<div class="col-md-9"></div>
									<div class="col-md-3">
										<router-link to="/viewallproject" class="">See all Projects</router-link>
									</div>
								</div>

								<!-- <a href="all_project.html" class="row __dashrow small pull-right hover-blue m-t-5p">See all Projects</a> -->
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
										<p class="f2 __dashpt2">1 Completed Project</p>
									</div>
								</div>

								<div class="row __dashrow">
									<div class="col-md-2 col-xs-2">
										<p class="__dashimgr2">
											<span class="icon icon-briefcase icon-sm" style="color: #545408;"></span>
										</p>
									</div>
									<div class="col-md-10 col-xs-10">
										<p class="f2 __dashpt2">4 Total Project</p>
									</div>
								</div>

								<div class="row __dashrow">
									<div class="col-md-2 col-xs-2">
										<p class="__dashimgr3">
											<span class="icon icon-briefcase icon-sm" style="    color: #077507;"></span>
										</p>
									</div>
									<div class="col-md-10 col-xs-10">
										<p class="f2 __dashpt2">3 Project In-progress</p>
									</div>
								</div>
								<div class="row __dashrow">
									<div class="col-md-2 col-xs-2">
										<p class="__dashimgr4">
											<span class="icon icon-credit-card icon-sm" style="color: #0972ce;"></span>
										</p>
									</div>
									<div class="col-md-10 col-xs-10">
										<p class="f2 __dashpt2">Transaction</p>
									</div>
								</div>
							</div>
						</div>
		          	</div>
		          	<br>
		          	<div class="row">
						<div class="col-md-8 col-sm-7">
							<div class="__dash1">
								<div class="table-responsive">
									<table class="table table-hover">
										<thead>
											<tr>
												<th class="">Transactions</th>
												<th class="">Projects</th>
												<th class="">Date</th>
												<th class="">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>NGN 20,000</td>
												<td>Transafty</td>
												<td>March 1, 2018</td>
												<td class="">Received</td>
											</tr>

											<tr>
												<td>NGN 20,000</td>
												<td>Findworka</td>
												<td>March 1, 2018</td>
												<td class="">Sent</td>
											</tr>

											<tr>
												<td>NGN 20,000</td>
												<td>Transafty</td>
												<td>March 1, 2018</td>
												<td class="">Received</td>
											</tr>

											<tr>
												<td>NGN 20,000</td>
												<td>Findworka</td>
												<td>March 1, 2018</td>
												<td class="">Sent</td>
											</tr>

											<tr>
												<td>NGN 20,000</td>
												<td>Transafty</td>
												<td>March 1, 2018</td>
												<td class="">Received</td>
											</tr>

											<tr>
												<td>NGN 20,000</td>
												<td>Findworka</td>
												<td>March 1, 2018</td>
												<td class="">Sent</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div class="col-md-4 col-sm-5"></div>
					</div>

			        <!-- <div class="row placeholders">
			            <div class="col-xs-6 col-sm-3 placeholder">
			              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
			              <h4>Label</h4>
			              <span class="text-muted">Something else</span>
			            </div>
			            <div class="col-xs-6 col-sm-3 placeholder">
			              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
			              <h4>Label</h4>
			              <span class="text-muted">Something else</span>
			            </div>
			            <div class="col-xs-6 col-sm-3 placeholder">
			              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
			              <h4>Label</h4>
			              <span class="text-muted">Something else</span>
			            </div>
			            <div class="col-xs-6 col-sm-3 placeholder">
			              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" class="img-responsive" alt="Generic placeholder thumbnail">
			              <h4>Label</h4>
			              <span class="text-muted">Something else</span>
			            </div>
			        </div> -->

			        <!-- <h2 class="sub-header">Section title</h2>
			        <div class="table-responsive">
			            <table class="table table-striped">
			              <thead>
			                <tr>
			                  <th>#</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                  <th>Header</th>
			                </tr>
			              </thead>
			              <tbody>
			                <tr>
			                  <td>1,001</td>
			                  <td>Lorem</td>
			                  <td>ipsum</td>
			                  <td>dolor</td>
			                  <td>sit</td>
			                </tr>
			                <tr>
			                  <td>1,002</td>
			                  <td>amet</td>
			                  <td>consectetur</td>
			                  <td>adipiscing</td>
			                  <td>elit</td>
			                </tr>
			                <tr>
			                  <td>1,003</td>
			                  <td>Integer</td>
			                  <td>nec</td>
			                  <td>odio</td>
			                  <td>Praesent</td>
			                </tr>
			                <tr>
			                  <td>1,003</td>
			                  <td>libero</td>
			                  <td>Sed</td>
			                  <td>cursus</td>
			                  <td>ante</td>
			                </tr>
			                <tr>
			                  <td>1,004</td>
			                  <td>dapibus</td>
			                  <td>diam</td>
			                  <td>Sed</td>
			                  <td>nisi</td>
			                </tr>
			                <tr>
			                  <td>1,005</td>
			                  <td>Nulla</td>
			                  <td>quis</td>
			                  <td>sem</td>
			                  <td>at</td>
			                </tr>
			                <tr>
			                  <td>1,006</td>
			                  <td>nibh</td>
			                  <td>elementum</td>
			                  <td>imperdiet</td>
			                  <td>Duis</td>
			                </tr>
			                <tr>
			                  <td>1,007</td>
			                  <td>sagittis</td>
			                  <td>ipsum</td>
			                  <td>Praesent</td>
			                  <td>mauris</td>
			                </tr>
			                <tr>
			                  <td>1,008</td>
			                  <td>Fusce</td>
			                  <td>nec</td>
			                  <td>tellus</td>
			                  <td>sed</td>
			                </tr>
			                <tr>
			                  <td>1,009</td>
			                  <td>augue</td>
			                  <td>semper</td>
			                  <td>porta</td>
			                  <td>Mauris</td>
			                </tr>
			                <tr>
			                  <td>1,010</td>
			                  <td>massa</td>
			                  <td>Vestibulum</td>
			                  <td>lacinia</td>
			                  <td>arcu</td>
			                </tr>
			                <tr>
			                  <td>1,011</td>
			                  <td>eget</td>
			                  <td>nulla</td>
			                  <td>Class</td>
			                  <td>aptent</td>
			                </tr>
			                <tr>
			                  <td>1,012</td>
			                  <td>taciti</td>
			                  <td>sociosqu</td>
			                  <td>ad</td>
			                  <td>litora</td>
			                </tr>
			                <tr>
			                  <td>1,013</td>
			                  <td>torquent</td>
			                  <td>per</td>
			                  <td>conubia</td>
			                  <td>nostra</td>
			                </tr>
			                <tr>
			                  <td>1,014</td>
			                  <td>per</td>
			                  <td>inceptos</td>
			                  <td>himenaeos</td>
			                  <td>Curabitur</td>
			                </tr>
			                <tr>
			                  <td>1,015</td>
			                  <td>sodales</td>
			                  <td>ligula</td>
			                  <td>in</td>
			                  <td>libero</td>
			                </tr>
			              </tbody>
			            </table>
			        </div> -->
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
	
	/*dashboard page*/

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

	.__projectbtn{
	    background: #26acf5;
	    color: #fff !important;
	}

	/*dashboard page end*/

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