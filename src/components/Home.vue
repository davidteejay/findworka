<template>
	<div>
      <Nav/>
	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="dashboard"/>
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
						<div class="col-md-4 col-sm-5">
              <div class="__dash3">
										<div class="row __dashrow">
											<div class="col-md-8">
												<p class="__dashpt">Milestones</p>
											</div>
											<div class="col-md-4">

											</div>
										</div>

										<div class="row __dashrow1">
											<!-- <p class="f2 small">See milestones for your projects</p> -->
										</div>
										<hr class="__dashhr">
										<div class="__overflow1">
											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Lagos</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Kaduna</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color2.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Kaduna</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Lagos</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color3.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Kebbi</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Kebbi</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color4.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Port Harcourt</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Lagos</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color2.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Calabar</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Calabar</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color6.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Enugu</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Enugu</p>
												</div>
											</div><div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color6.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Enugu</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Enugu</p>
												</div>
											</div><div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color6.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Enugu</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Enugu</p>
												</div>
											</div>

											<div class="row __dashrow2">
												<div class="col-md-7 col-xs-6">
													<p>
														<span><img src="assets/img/color5.svg"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Lagos</span>
													</p>
												</div>
												<div class="col-md-5 col-xs-6">
													<p class="f2 __dashpt1">Kaduna</p>
												</div>
											</div>
										</div>
									</div>
								</div>
            </div>
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
</template>

<script>
  import Nav from './includes/nav.vue';
  import Sidebar from './includes/sidebar.vue';

	export default {
      name: 'Home',
      components: {
        Nav,
        Sidebar
      }
	}
</script>

<style>

	/*dashboard page*/


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

  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}
::-webkit-scrollbar-thumb {
    border-radius: 1px;
    background-color: #a7a7a7;
}
::-webkit-scrollbar-track {
    border-radius: 50px;
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
}

  .__dash3 {
    /* box-shadow: 0px 0px 16px 0px rgba(241, 239, 239, 1); */
    border-radius: 4px;
    height: 349px;
    padding-bottom: 5%;
    background-color: #ffffff;
    border: 1px solid #8888881f;
    border-radius: 6px;
}

.__dashpt {
      font-size: 14px;
    color: #26acf5;
    text-transform: uppercase;
}

.__dashrow1 {
    padding: 0px 20px 0px;
    /* margin-top: 10px; */
}

.__dashhr {
    margin-top: 1px;
    margin-bottom: 1px;
    border: 1px solid #ddf6ff;
}

.__overflow1 {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 280px;
}

.__dashrow2 {
    padding: 10px 20px 0px;
    /* margin-top: 10px; */
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
