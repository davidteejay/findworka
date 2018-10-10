<template>
	<div>

		<Nav/>

	    <div class="container-fluid">
	      	<div class="row">
		        <div class="col-sm-3 col-md-2 sidebar">
		          	<Sidebar active="milestones"/>

		        </div>
	        	<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
		          	<h1 class="page-header __dashp">Add Milestone</h1>

		          	<div class="row">
		          		<div class="col-md-8">
		          			<div class="__nxtmilestone">
								<form action="" method="POST" role="form">
									<div class="form-group">
										<label for="">Title</label>
										<input type="text" class="form-control" id="" placeholder="">
									</div>

									<div class="form-group">
										<label for="">Description</label>
										<textarea name="" id="input" class="form-control" rows="2" ></textarea>
									</div>

									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label for="">Start Date</label>
												<input type="text" class="form-control" id="" placeholder="">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label for="">End Date</label>
												<input type="text" class="form-control" id="" placeholder="">
											</div>
										</div>
									</div>

		                    		<div class="form-group">
		                    			<label for="">Status</label>
		                    			<select name="" id="input" class="form-control" >
		                    				<option value=""></option>
		                    			</select>
		                    		</div>

		                    		<div class="form-group">
		                    			<label for="">Tasks</label><br>
                              <span style="color: red">{{ message }}</span>
                              <div style="margin: 10px 0; display: flex; justify-content: space-between" v-for="(task, i) in tasks" :key="i">
		                    			  <input :class="singleObject" class="form-control input" v-model="tasks[i]" type="text" id="" placeholder="">
                                <span :class="noRemove" class="remove" @click="removeTask(i)">&times;</span>
                              </div>
		                    		</div>

                            <div style="text-align: right; padding-bottom: 10px">
                                <span style="cursor:pointer;color: green" @click="addTask()">Add Task</span>
                              </div>
			                    	<div class="row">
										<div class="col-md-12" style="text-align: center">
											<button class="btn btn-next"><i class="fa fa-paper-plane"></i> Done</button>
										</div>

						            </div>
								</form>


							</div>
		          		</div>
		          	</div>
		        </div>
	      	</div>
	    </div>
	</div>
</template>

<script>
import Nav from "./includes/nav";
import Sidebar from "./includes/sidebar";

export default {
  name: 'Milestone',
  data(){
    return {
      tasks: [""],
      message: ''
    }
  },
  computed: {
    singleObject: function(){
      return {
        singleObject: this.tasks.length === 1,
      }
    },
    noRemove: function(){
      return {
        noRemove: this.tasks.length === 1
      }
    }
  },
  methods: {
    addTask: function(){
      this.message = '';
      this.tasks.push("");
    },
    removeTask: function(index){
      if (this.tasks.length > 1) this.tasks.splice(index, 1);
      else this.message = "You must add at least one task"
    }
  },
	components: {
		Nav,
		Sidebar,
	},
};
</script>

<style>
/*project page*/
.remove {
  width: 34px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 22px;
  color: red;
  cursor: pointer;
}

.noRemove {
  display: none;
}

.__dashp {
  border: none !important;
  padding-left: 0 !important;
}

.input {
  width: calc(100% - 44px);
  margin-right: 10px;
}

.singleObject {
  flex: 1;
  width: 100%;
  margin-right: 0;
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
}
.card-container label.btn-default {
	width: 100%;
	border: 1px solid #efefef;
	outline: none;
	margin: 5px;
	box-shadow: 0px 8px 20px 5px rgba(241, 239, 239, 1);
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
