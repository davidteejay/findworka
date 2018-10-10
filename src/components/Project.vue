<template>
	<div>
		<Nav/>
	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="projects"/>
		        </div>
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div class="__traccard">
								<div class="row">
									<div class="col-md-4 col-sm-4">
										<div class="__prcard __pr_first">
											<div class="row">
												<div class="col-md-7 col-sm-7 col-xs-7">
													<p class="f2">Start Date</p>
													<p class="f2">20/02/2018</p>
												</div>
												<div class="col-md-5 col-sm-5 col-xs-5">
													<div class="__prcard1">
														<span><i class="icon icon-calendar"></i></span>
														<!-- <img src="../assets/img/clock.svg"> -->
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4 col-sm-4">
										<div class="__prcard __pr_second">
											<div class="row">
												<div class="col-md-7 col-sm-7 col-xs-7">
													<p class="f2">Delivery Date</p>
													<p class="f2">20/10/2018</p>
												</div>
												<div class="col-md-5 col-sm-5 col-xs-5">
													<div class="__prcard1">
														<span><i class="icon icon-calendar"></i></span>
														<!-- <img src="../assets/img/clock.svg"> -->
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-4 col-sm-4">
										<div class="__prcard __pr_third">
											<div class="row">
												<div class="col-md-7 col-sm-7 col-xs-7">
													<p class="f2">Milestone</p>
													<p class="f2">1/3</p>
												</div>
												<div class="col-md-5 col-xs-5 col-xs-5">
													<div class="__prcard1">
														<span><i class="icon icon-calendar"></i></span>
														<!-- <img src="../assets/img/clock.svg"> -->
													</div>
												</div>
											</div>
										</div>
									</div>
								</div><br><br>
          </div>
		  <div class="row">
			  <div class="col-sm-12 col-md-8">
				  <div id="calendar"></div>
			  </div>
			  <div id="eventModal" class="mymodal" style="display: none;">
				  <div class="content">
					  <div>
						  <h3 style="float:left; margin: 0">MoneyService Transfer</h3>
						  <button style="float:right" class="close" id="eventClose">&times;</button>
						  <div class="clearfix"></div>
						  <div style="padding: 15px"></div>
					  </div>					  
					  <p style="margin: 0; padding: 5px 0" class="check">
						  <input type="checkbox" checked>
						  <span class="checkmark project"></span>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item 1
					  </p>
					  <p style="border-top: 1px solid #ccc; margin: 0; padding: 5px 0" class="check">
						  <input type="checkbox" checked>
						  <span class="checkmark project"></span>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item 1
					  </p>
					  <p style="border-top: 1px solid #ccc; margin: 0; padding: 5px 0" class="check">
						  <input type="checkbox" checked>
						  <span class="checkmark project"></span>
						  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Item 1
					  </p>
					  <p style="padding: 10px 0; padding-top: 30px;"><button class="btn btn-primary">View</button>&nbsp;<button class="btn btn-primary">Accept and Make Payment</button>&nbsp;<button class="btn btn-primary" id="feedback">Feedback</button></p>
					  <div class="feedback" style="padding: 10px 0; display: none">
						  <textarea style="resize: none; width: 100%; min-height: 50px"></textarea>
						  <button class="btn btn-primary" style="float: right">Send</button>
					  </div>
				  </div>
			  </div>
			  <div class="col-sm-12 col-md-4">
				<div class="__dasmenmsg">
					<div class="__dashmsg">
							<div class="__dash">
								<div class=" __pdashrow">
									<div class="row">
										<p class="f2 __dashpt">Name of people working on the Project</p>
									</div>
								</div>
								<hr class="__dashhr">
								<div class="__overflow">
									<div class="row __dashrow">
										<div class="col-xs-12">
											<p>
												<span><img src="../assets/img/avatar.png" style="width: 40px;"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Ali Oseni</span>
											</p>
										</div>
									</div>
									<div class="row __dashrow">
										<div class="col-xs-12">
											<p>
												<span><img src="../assets/img/avatar.png" style="width: 40px;"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Odugbesan Abimbola</span>
											</p>
										</div>
									</div>
									<div class="row __dashrow">
										<div class="col-xs-12">
											<p>
												<span><img src="../assets/img/avatar.png" style="width: 40px;"></span>&nbsp;&nbsp;&nbsp;<span class="f2 __dashpt1">Tunde Yusuf</span>
											</p>
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
import Sidebar from "./includes/sidebar.vue";
import Nav from "./includes/nav.vue";
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.css';

$(function(){
	$("#eventClose").on('click', function(){
		$("#eventModal").fadeOut()
	})

	$('#feedback').on('click', function(){
		$('.feedback').slideDown();
	})

	$('#calendar').fullCalendar({
		header: {
			left: '',
		},
		eventLimit: true,
		nowIndicator: true,
		businessHours: {
			dow: [ 1, 2, 3, 4, 5 ],
			start: '9:00',
    		end: '17:00'
		},
		events: [
			{
				title: 'Yehn yehn',
				start: '2018-10-10',
				url: '#',
				data: 'fsfsfsfs'
			}
		],
		eventClick: function(event){
			$('#eventModal').fadeIn()
		}
	})
})

export default {
	components: {
		Sidebar,
		Nav,
  },
};
</script>

<style>
.checkmark.project {
	border: 1px solid #ccc !important;
	background: transparent !important;
	height: 20px ;
	width: 20px;
	top: 7px;
	border-radius: 3px;
	opacity: .7;
}

.check .checkmark.project:after {
	width: 6px;
	height: 12px;
	border-color: #333;
	left: 6px;
	transition: all .5s;
}

.check input:checked ~ .checkmark {
    background-color: transparent !important;
}

.check input {
    position: absolute;
	z-index: 100;
    opacity: 0;
    cursor: pointer;
}

.mymodal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 100000000000;
	background-color: rgba(0, 0, 0, .4);
}

.mymodal .content {
	position: absolute;
	top: 50px;
	left: calc(50% - 200px);
	width: 400px;
	z-index: 100000000001;
	background: #fff;
	padding: 20px;
}
/*project page*/

.__dasmenmsg {
	/* margin-top: 2%; */
}

.__dashmsg {
	box-shadow: 0px 8px 20px 0px rgba(241, 239, 239, 1);
	border-radius: 4px;
	margin-top: 18px;
	border: 1px solid #b7b7b733;
}

.__dashmsgp {
	padding: 25px 30px 0px 36px;
	color: #4a4a4a;
	font-size: 16px;
	background: #ffffff;
}

.__dashhr {
	margin-top: 1px;
	margin-bottom: 1px;
	border: 1px solid #ddf6ff;
}

.__traccard {
	/* padding: 30px 30px 0px 30px;
	background-color: #ffffff; */
  	margin-top: 2%;
}

.__traccard > .row > div {
  padding-left: 10px;
  padding-right: 10px;
}

.__prcard {
	box-shadow: 0px 8px 20px 0px rgba(241, 239, 239, 1);
	/* border: 1px solid #8888881f; */
	border-radius: 6px;
	padding: 10px;
	transition: all 0.4s ease-in;
}

.__prcard.__pr_first {
    background-color: #26acf5;
}

.__prcard.__pr_second {
    background-color: orange;
}

.__prcard.__pr_third {
    background-color: lightseagreen;
}

.__prcard:hover {
	transform: translateY(-4px) scale(1.02);
	z-index: 999;
}

.__prcard p:nth-child(1) {
	font-size: 16px;
	margin-top: 10px;
	color: #fff;
}

.__prcard p:nth-child(2){
  color: #fff;
}

.__prcard1 {
	margin-top: 11px;
}

.__prcard1 span {
	font-size: 52px;
	color: #ffffff;
	padding: 4px 13px;
}

.pie-title-center {
	display: inline-block;
	position: relative;
	text-align: center;
	margin-top: 6px;
}

.pie-value {
	display: block;
	position: absolute;
	font-size: 13px;
	height: 40px;
	top: 50%;
	left: 0;
	right: 0;
	margin-top: -25px;
	line-height: 40px;
}

.__pdashrow {
	padding: 10px 44px 10px;
	margin-top: 10px;
}

.__dashpt {
	font-size: 14px;
	color: #26acf5;
	text-transform: uppercase;
}

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

.table > thead > tr > th {
	vertical-align: bottom;
	border-bottom: 1px solid #ddf6ff;
	font-size: 14px;
	color: #26acf5;
	text-transform: uppercase;
	font-weight: 100;
	/* border-bottom: none; */
}

.table > tbody > tr > td {
	border-bottom: none !important;
	border-top: none !important;
	line-height: 2 !important;
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

.f-20 {
    font-size: 20px !important;
}

.__dashpt1 {
    font-size: 16px;
    color: #4a4a4a;
}

.timeline {
    width: 100%;
    position: relative;
    padding: 1px 0;
    list-style: none;
    font-weight: 300;
}

.timeline .timeline-label {
    position: relative;
    float: left;
    clear: left;
    width: 50%;
    margin-bottom: 20px;
    top: 1px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    text-align: center;
}

.timeline .timeline-label .label-primary {
    background-color: #888888;
}

.timeline .timeline-label + .timeline-item {
    margin-top: 0;
}
.timeline .timeline-item {
    position: relative;
    float: left;
    clear: left;
    width: 50%;
    margin-bottom: 20px;
    padding-left: 0;
    padding-right: 30px;
}

.timeline .timeline-item > .timeline-point.timeline-point-success {
    color: #00aeef;
    background: #00aeef;
}

.timeline .timeline-item > .timeline-point {
    color: #888888;
    background: #fff;
    right: -21px;
    width: 17px;
    height: 17px;
    margin-top: -9px;
    margin-left: 12px;
    margin-right: 12px;
    position: absolute;
    z-index: 100;
    border-width: 2px;
    border-style: solid;
    border-radius: 100%;
    line-height: 20px;
    text-align: center;
}
.timeline .timeline-item > .timeline-point {
    top: 25px;
}

.timeline .timeline-item > .timeline-event {
    background: #fff;
    border: 1px solid #8888881f;
    border-radius: 6px;
    color: #555;
    position: relative;
    float: left;
    border-radius: 10px;
    box-shadow: 0px 6px 10px 0px rgba(241, 239, 239, 1);
    padding: 5px 5px 20px 10px;
}

.timeline .timeline-item .timeline-event {
    width: 100%;
}

.timeline .timeline-item > .timeline-event .timeline-heading, .timeline .timeline-item > .timeline-event .timeline-body, .timeline .timeline-item > .timeline-event .timeline-footer {
    padding: 4px 10px;
}
.timeline .timeline-item > .timeline-event * {
    color: inherit;
}

.timeline .timeline-item > .timeline-event .timeline-heading h4 {
    font-weight: 400;
}

.timeline .timeline-item > .timeline-event .timeline-footer a {
    cursor: pointer;
    text-decoration: none;
}

.__timbtn {
    /* box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.43); */
    border: 1px solid #00aeef;
    padding: 5px 10px;
    background: #00aeef;
    color: #fff !important;
}

.timeline .timeline-item.timeline-item-right, .timeline .timeline-item:nth-of-type(even):not(.timeline-item-left) {
    float: right;
    clear: right;
}

.timeline .timeline-item.timeline-item-right, .timeline .timeline-item:nth-of-type(even):not(.timeline-item-left) {
    padding-left: 30px;
    padding-right: 0;
}

.timeline.timeline-line-dotted:before {
    border-right-style: dotted;
}

.timeline:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 50%;
    height: 100% !important;
    margin-left: 1px;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: #888888;
}
.timeline:before, .timeline:after {
    content: "";
    display: block;
}
.timeline:before {
    border-right-style: solid;
}
.timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #eee;
    left: 50%;
    margin-left: -1.5px;
}

.timeline .timeline-item.timeline-item-right > .timeline-point, .timeline .timeline-item:nth-of-type(even):not(.timeline-item-left) > .timeline-point {
    left: -20px;
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
