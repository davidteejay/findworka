<template>
	<div>

		<Nav/>

	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="projects"/>

		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<!-- <h1 class="page-header __dashp">All Projects</h1> -->
					<div class="col-md-11">
						<div class="__dash">
							<div class="row __dashrow">
								<div class="col-md-8 col-sm-6">
									<p class="f3 __dashpt">Currents Projects</p>
								</div>
								<div class="col-md-4 col-sm-6">
									<p class="hidden-xs"><span class="f2 __dashpt1 __dashpt1on"> Status<!-- </span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<span><img src="assets/img/right-arrow1.svg"> --></span></p>
								</div>
							</div>
							<hr class="__dashhr">
							<div class="__overflow">
								<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<router-link to="/project"><span><img src="assets/img/ellipse1.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Website Development for Transafty</span></router-link>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Live</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<router-link to="/project"><span><img src="assets/img/ellipse1.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Findworka new Design</span></router-link>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Inprogres</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse2.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Findworka Dashboard</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Brief</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse3.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Schinder fit Welch</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">On Trip</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse3.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Harrowmind</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">On Trip</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse2.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Jaeger Maersk Turner Truck</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Undergoing repair</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse1.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Maesrk 30 x 30</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Avaliable</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse1.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Duble Harrowhammer</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">Avaliable</p>
												</div>
											</div>

											<div class="row __dashrow">
												<div class="col-md-8 col-sm-8">
													<p>
														<span><img src="assets/img/ellipse3.svg"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Fich Helsinki</span>
													</p>
												</div>
												<div class="col-md-4 col-sm-4">
													<p class="f2 __dashpt1 __smll">On Trip</p>
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
    components: {
      Nav, Sidebar
    }
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
