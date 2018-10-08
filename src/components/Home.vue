<template>
	<div>
      <Nav/>
	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="dashboard"/>
		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<!-- <h1 class="page-header __dashp">Dashboard</h1> -->

		          	<div class="row">
		          		<div class="col-md-8 col-sm-7">
		          			<div class="__dash">
								  <div class="row __dashrow">
										<div class="col-md-8 col-sm-6">
											<p class="__dashpt">Current Projects</p>
										</div>
										<div class="col-md-4 col-sm-6">
											<p class="hidden-xs"><span class="__dashpt"> Status</span></p>
										</div>
									</div>
									<hr class="__dashhr">
									<div class="__overflow">
										<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														 Website Development for Transafty
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<span class="label label-success label-sm">completed</span>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														Website Development for Transafty
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<span class="label label-warning label-sm">in-progress</span>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														Website Development for Transafty
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<span class="label label-danger label-sm">cancelled</span>
												</div>
											</div>

											<a href="all_project.html" class="row __dashrow small pull-right hover-blue" style="margin-top: 5%">See all Projects</a>
									</div>
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
									<div class="__dash2">
										<div class="row __dashrow">
											<div class="col-md-3 col-xs-3">
												<p class="__dashpt">Transactions</p>
											</div>
											<div class="col-md-3 col-xs-3">
												<p class="f3 __dashpt"> Projects</p>
											</div>
											<div class="col-md-3 col-xs-3">
												<p class="f3 __dashpt">Date</p>
											</div>
											<div class="col-md-3 col-xs-3">
												<p class="f3 __dashpt">Status</p>
											</div>
										</div>
										<hr class="__dashhr">
										<div class="__overflow1">
											<div class="row __dashrow">
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">
													NGN 20,000</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Transafty</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">March 1, 2018</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Received</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">
													NGN 20,000</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Findworka</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">March 1, 2018</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Sent</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">
													NGN 20,000</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Saucecode</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">March 2, 2018</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Received</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">
													NGN 20,000</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Lunchpad</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">March 3, 2018</p>
												</div>
												<div class="col-md-3 col-xs-3">
													<p class="f2 __dashpt1">Sent</p>
												</div>
											</div>

											<div class="__dashrown1">
												<div class="row __dashrow">
													<div class="col-md-3 col-xs-3">
														<p class="f2 __dashpta">
														NGN 20,000</p>
													</div>
													<div class="col-md-3 col-xs-3">
														<p class="f2 __dashpta">Cloudinary</p>
													</div>
													<div class="col-md-3 col-xs-3">
														<p class="f2 __dashpta">March 3, 2018</p>
													</div>
													<div class="col-md-3 col-xs-3">
														<p class="f2 __dashpta">Received</p>
													</div>
												</div>
											</div>
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

.__dash2 {
    padding-bottom: 5%;
    height: 349px;
    background-color: #ffffff;
    border: 1px solid #8888881f;
    border-radius: 6px;
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

.__dashrow {
    padding: 10px 20px 0px;
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

