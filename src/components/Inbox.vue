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
		          	</ul>
		          
		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Inbox</h1>

		          	<div class="__nxtmilestone">
						<div class="row">
							<div class="col-md-3 col-sm-3 __msgcol3">
								<div class="__dashm">
									<p class="__dashnewmsg">
										<a href="">New Message</a>
									</p>
									<p class="__dasp">New</p>
									<p class="__dasp">Sents</p>
									<p class="__dasp">Trash</p>
									<p class="__dasp">Draft</p>
								</div>
								<div class="__dashm">
									<p class="__dastag">Tags</p>
									<p>
										<span><img src="assets/msgt.svg" class="__dasimt"></span>
										<span class="__dasp">&nbsp; &nbsp;Transactions</span>
									</p>
									<p>
										<span><img src="assets/msgs.svg" class="__dasimt"></span>
										<span class="__dasp">&nbsp; &nbsp;Support</span>
									</p>
									<p>
										<span><img src="assets/msgi.svg" class="__dasimt"></span>
										<span class="__dasp">&nbsp; &nbsp;Inquiries</span>
									</p>
								</div>
							</div>
							<div class="col-md-4 col-sm-4 __daspos">
								<div class="__dasposs">
									<span class="__dassearc"><img src="assets
										/dasims.svg"></span>
									<input type="search" name="" id="input" class="form-control __dasminp" value="" required="required" title="" placeholder="Search messages or name">
								</div>

								<div class="__dashscro">
									<div class="__dasseapractive">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractivea">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractive1">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractive2">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">

									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">
									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">
									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">
									<div class="__dasseapractive3">
										<div class="row">
											<div class="col-md-2 col-xs-2">
												<img src="assets/avatar.png" class="__dashimgasr1 img-circle">
											</div>
											<div class="col-md-10 col-xs-10">
												<p style="margin-bottom: 0px;">
													<span class="f3 __actr">Olagunju Tunde</span>
													<span class="f2 __actr1">Mar 15</span>
												</p>
												<p class="f2">Lorem baby ipsum dolor dolor sit amet</p>
											</div>
										</div>
									</div>
									<hr class="__dashhr">
								</div>
							</div>
							<div class="col-md-5 col-sm-5 __msgcol5">
								<div class="__msgcol5r">
									<div class="row">
										<div class="col-md-2 col-xs-2">
											<img src="assets/img/avatar.png" class="__dashimgasr1 img-circle">
										</div>
										<div class="col-md-7 col-xs-6">
											<p class="f3 __msgtext">Nemi Banigo</p>
										</div>
										<div class="col-md-3 col-xs-4">
											<p class="f2 __msgtext1">Mar 15 2018</p>
										</div>
									</div>
								</div>
								<hr class="__dashhr">
								<div class="__dashmchat">
									<div class="row">
								  		<div class="col-md-10">
								  			<p class="f2 __out">Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today?</p><span class="time-left">11:00</span>
										</div>
								  		<div class="col-md-2"></div>
								  	</div>

								  	<div class="row">
								    	<div class="col-md-2"></div>
								    	<div class="col-md-10">
								    		<p class="f2 __in">Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!</p>
										    <span class="time-right">11:01</span>
								    	</div>
								    </div>

								    <div class="row">
								  		<div class="col-md-10">
								  			<p class="__out">Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today?</p><span class="time-left">11:00</span>
										</div>
								  		<div class="col-md-2"></div>
								  	</div>

								  	<div class="row">
								    	<div class="col-md-2"></div>
								    	<div class="col-md-10">
								    		<p class="__in">Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!</p>
										    <span class="time-right">11:01</span>
								    	</div>
								    </div>

								    <div class="row">
								  		<div class="col-md-10">
								  			<p class="__out">Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today? Hello. How are you today?</p><span class="time-left">11:00</span>
										</div>
								  		<div class="col-md-2"></div>
								  	</div>

								  	<div class="row">
								    	<div class="col-md-2"></div>
								    	<div class="col-md-10">
								    		<p class="__in">Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!Hey! I'm fine. Thanks for asking!</p>
										    <span class="time-right">11:01</span>
								    	</div>
								    </div>
								</div>
								<div class="__msgcol5r1">
									<textarea name="" id="input" class="form-control" rows="3" required="" placeholder="Click here to reply"></textarea><br>
									<button type="submit" class="btn  __makep" style="float: right;">Send</button>
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

	/*inbox*/
	.__msgcol3 {
    padding-right: 0px;
	}
	
	.__dashm {
    padding: 20px;
	}

	.__dastag{
	  color: #4d4f5c;
	  font-size: 12px;
	}

	.__dasimt{
	  margin-bottom: 3px;
	}


	.__daspos{
  padding: 0px;
  border-left: 1px solid #eee;
    border-right: 1px solid #eee;
    background-color: #ffffff;
}
.__dasposs{
  position: relative;
  padding: 20px;
}
.__dassearc{
  position: absolute;
  top: 26px;
  left: 30px;
}

.__dasseapractive{
  color: #00aeef !important;
  background-color:#d6f4ff; 
  border-left: 3px solid #ff6565;
    padding: 10px 14px 10px 20px;
    font-size: 13px;
}
.__dasseapractivea {
    /*color: #00aeef !important;*/
    /* background-color: #d6f4ff; */
    border-left: 3px solid #ff6565;
    padding: 10px 14px 10px 20px;
    font-size: 13px;
}

.__dasseapractive1{
  color: #4a4a4a !important;
  /*background-color:#d6f4ff;*/ 
  border-left: 3px solid #3b86ff;
    padding: 10px 14px 10px 20px;
    font-size: 13px;
}

.__dasseapractive2{
  color: #4a4a4a !important;
  /*background-color:#d6f4ff;*/ 
  border-left: 3px solid #a3a0fb;
    padding: 10px 14px 10px 20px;
    font-size: 13px;
}

.__dasseapractive3{
  color: #4a4a4a !important;
  /*background-color:#d6f4ff;*/ 
  /*border-left: 3px solid #a3a0fb;*/
    padding: 10px 14px 10px 20px;
    font-size: 13px;
}

.__dashscro{
  overflow-y: scroll;
  height: 60vh;
  overflow-x: hidden;
}
.__dashscro::-webkit-scrollbar {
    width: 2px;
    /*background-color: #d6f4ff;*/
}
.__dashscro::-webkit-scrollbar-thumb {
    background: #333; 
}

.__dashscro::-moz-scrollbar {
    width: 2px;
    /*background-color: #d6f4ff;*/
}
.__dashscro::-moz-scrollbar-thumb {
    background: #333; 
}

.__actr{
      font-size: 15px;
    font-weight: 900;
}

.__actr1{
  margin-left: 80px;
}

.__dashimgasr1{
  width: 40px;
}

.__dashnewmsg{
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.43);
    border: 1px solid #00aeef;
    padding: 10px 30px 10px 30px;
    background: #00aeef;
    color: #fff !important;
}
.__msgcol3{
  padding-right: 0px;
}
.__msgcol5{
  padding-left: 0px;
}
.__msgcol5r{
  padding: 20px;
  background-color: #ffffff;
}
.__msgcol5r1{
    padding: 20px 20px 20px 20px;
    background-color: #ffffff;
}

.__msgtext{
  font-size: 15px;
}
.__msgtext1{
  font-size: 11px;
}

.__dashmchat {
    overflow-y: scroll;
    height: 34vh;
    padding: 20px;
    overflow-x: hidden;
    background-color: #ffffff;
}

.__dashmchat::-webkit-scrollbar {
    width: 2px;
    /*background-color: #d6f4ff;*/
}
.__dashmchat::-webkit-scrollbar-thumb {
    background: #333; 
}

.__dashbutton {
    background: #00aeef;
    color: #fff;
    width: 80px;
    float: right;
    margin-top: 10px;
    margin-bottom: 10px;
}
.__dashbutton:hover {
    background: #00aeef;
    color: #fff;
    width: 80px;
    float: right;
    margin-top: 10px;
    margin-bottom: 10px;
}

.__dashscrod {
    overflow-y: scroll;
    height: 66vh;
    overflow-x: hidden;
}

.__dashscrod::-webkit-scrollbar {
    width: 2px;
    /*background-color: #d6f4ff;*/
}
.__dashscrod::-webkit-scrollbar-thumb {
    background: #333; 
}

	

	/*inbox page end*/

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