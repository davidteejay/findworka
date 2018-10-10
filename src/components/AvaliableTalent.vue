<template>
	<div>

		<Nav/>

	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="talents"/>

		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Avaliable Talents</h1>

		          	<div class="__nxtmilestone">
						<!-- <p class="__milestonenext">Select reqiured skills</p> -->

						<div class="row">
					        <div class="form-group">
					            <div class="card-container">
					                <div class="items col-xs-6 col-sm-6 col-md-4 col-lg-4">
					                    <div class="info-block block-info clearfix">
					                        <div data-toggle="buttons" class="btn-group">
					                            <label class="btn btn-default">
					                            	<div class="row">
					                            		<div class="col-md-4 col-sm-4">
					                            			<img src="../assets/img/avatar.png" class="img-rounded __cardimg">
					                            		</div>
					                            		<div class="col-md-8 col-sm-8">
					                            			<div class="__cardp">
					                            				<p>Odugbesan Abimbpola</p>
					                            				<p>
					                            					<span>HTML</span>
					                            					<span>Laravel</span>
					                            					<span>Bootstrap</span>
					                            					<span>PHP</span>
					                            				</p>
					                            				<p>Level</p>
					                            			</div>
					                            		</div>
					                            	</div>
					                                <div class="bizcontent">
					                                    <input type="checkbox" name="">
					                                    <!-- <span class="glyphicon glyphicon-ok glyphicon-lg"></span> -->
					                                </div>
					                            </label>
					                        </div>
					                    </div>
					                </div>
					                <div class="items col-xs-6 col-sm-6 col-md-4 col-lg-4">
					                    <div data-toggle="buttons" class="btn-group bizmoduleselect">
				                            <label class="btn btn-default">
				                            	<div class="row">
				                            		<div class="col-md-4 col-sm-4">
				                            			<img src="../assets/img/avatar.png" class="img-rounded __cardimg">
				                            		</div>
				                            		<div class="col-md-8 col-sm-8">
				                            			<div class="__cardp">
				                            				<p>Odugbesan Abimbpola ifeoluwa</p>
				                            				<p>
				                            					<span>HTML</span>
				                            					<span>Laravel</span>
				                            					<span>Bootstrap</span>
				                            					<span>PHP</span>
				                            					<span>PHP</span>
				                            				</p>
				                            				<p>Level</p>
				                            			</div>
				                            		</div>
				                            	</div>
				                                <div class="bizcontent">
				                                    <input type="checkbox" name="">
				                                    <!-- <span class="glyphicon glyphicon-ok glyphicon-lg"></span> -->
				                                </div>
				                            </label>
				                        </div>
					                </div>
					                <div class="items col-xs-6 col-sm-6 col-md-4 col-lg-4">
					                    <div class="info-block block-info clearfix">
					                        <div data-toggle="buttons" class="btn-group bizmoduleselect">
					                            <label class="btn btn-default" style="">
					                            	<div class="row">
					                            		<div class="col-md-4 col-sm-4">
					                            			<img src="../assets/img/avatar.png" class="img-rounded __cardimg">
					                            		</div>
					                            		<div class="col-md-8 col-sm-8">
					                            			<div class="__cardp">
					                            				<p>Odugbesan Abimbpola</p>
					                            				<p>
					                            					<span>HTML</span>
					                            					<span>Laravel</span>
					                            					<span>Bootstrap</span>
					                            					<span>PHP</span>
					                            				</p>
					                            				<p>Level</p>
					                            			</div>
					                            		</div>
					                            	</div>
					                                <div class="bizcontent">
					                                    <input type="checkbox" name="">
					                                    <!-- <span class="glyphicon glyphicon-ok glyphicon-lg"></span> -->
					                                </div>
					                            </label>
					                        </div>
					                    </div>
					                </div>
                          <div class="col-xs-12" style="text-align: right; padding: 20px 0; padding-right: 20px !important">
                            <router-link to="/avaliabletalent" class="btn __projectbtn">Assign Dev</router-link>
                          </div>
					                <br><br>
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
import Nav from "./includes/nav.vue";
import Sidebar from "./includes/sidebar.vue";

export default {
	components: {
		Nav,
		Sidebar
	}
};
</script>

<style>
/*project page*/

.__dashlogoimg span {
	text-transform: uppercase !important;
	font-size: 22px;
	letter-spacing: 0.4rem;
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

.__dashdropdown a:hover {
	color: #9d9d9d !important;
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
	padding: 11px 30px;
}

.__milestonenext {
	font-size: 20px;
	/*font-weight: 600;*/
}

.__milestonenextp {
	font-size: 13px;
}

.__milestonecheck {
	padding-left: 10px;
}

.__dashp {
	color: #4a4a4a;
	font-size: 30px;
	padding: 11px 30px 1px;
	/* font-weight: 600; */
}

.card-container {
	margin: 20px 0 0 0;
}
.card-container label.btn-default.active {
	background-color: #007ba7;
	outline: none;
	color: #fff;
	border: #007ba7;
}
.card-container label.btn-default {
	width: 100%;
	outline: none;
	margin: 5px;
	box-shadow: 0px 1px 8px 0 rgba(241, 239, 239, 1);
  transition: all .5s;
	/*box-shadow:5px 8px 8px 0 #ccc;*/
}

.card-container label.btn-default:hover {
  transform: translateY(-4px) scale(1.02);
	z-index: 999;
}
.card-container label .bizcontent {
	width: 100%;
}
.card-container .btn-group {
	/*width:90%*/
}
.card-container .btn span.glyphicon {
	opacity: 0;
}
.card-container .btn.active span.glyphicon {
	opacity: 1;
}

.__cardp {
	text-align: left;
}
.__cardp p {
	white-space: pre-wrap;
	margin-bottom: 0;
}
.__cardp p:nth-child(1) {
	white-space: pre-wrap;
	margin-bottom: 0;
	font-size: 14px;
}

.__cardp p:nth-child(2) {
	white-space: pre-wrap;
	margin-bottom: 0;
	font-size: 10px;
}
.__cardp p:nth-child(3) {
	white-space: pre-wrap;
	margin-bottom: 0;
	font-size: 10px;
}

.__cardimg {
	width: 80px;
}

.__projectbtn {
	background: #26acf5;
	color: #fff !important;
}

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

a,
a:active,
a:hover,
a:focus,
a:visited {
	text-decoration: none;
	/* background: transparent; */
	outline: none;
	color: inherit;
}

.__dashdropdown a:hover {
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
