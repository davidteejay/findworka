<template>
	<div class="milestone">
		<Nav/>
		<Sidebar active="leads"/>
	    <div class="content">
	    	<div class="container-fluid">

		    	<div class="milestonediv">
		    		<p class="milestonedivp">Create new milestone</p>
		    		<div class="row">
					    <form class="col s12">
					      	<div class="row __row">
						        <div class="input-field __inputf col s12">
						          <input placeholder="Title"  type="text" class="__input validateinput ">
						        </div>
					      	</div>
					      	<div class="row __row">
						        <div class="input-field __inputf col s12">
						        	<textarea id="textarea1" class="__input1" placeholder="Description"></textarea>
						        </div>
					      	</div>
					      	<div class="row __row">
						        <div class="input-field __inputf col s6">
						          <input placeholder="Start Date" id="" type="text" class="__input validateinput ">
						        </div>
						        <div class="input-field __inputf col s6">
						          <input placeholder="End Date" id="last_name" type="text" class="__input input validate">
						        </div>
					      	</div>
					      	<div class="row __row">
						        <div class="input-field __inputf col s12">
						          <input placeholder="Status"  type="text" class="__input validateinput ">
						        </div>
					      	</div>
					      	<div class="row __row">
					      		<div  v-for="(task, i) in tasks" :key="i">
											<div class="input-field __inputf col s11">
						          <input placeholder="Task"  type="text" :class="singleObject" class="__input validateinput " v-model="tasks[i]" >
						          
						        </div>

						        <div class="col s1">
						        	<p :class="noRemove" class="remove" @click="removeTask(i)">&times;</p>
						        </div>
										</div>
						        
					      	</div><span id="message"> {{message}} </span>
					      	<div class="row">
						        <p class="right" id="task"  @click="addTask()"> &plus;Add task </p>
					      	</div>

					      	<div class="row __row">
					      		<div class="input-field __inputf col s5 m5"></div>
						        <div class="input-field col s2 m2">
						          <button class="waves-effect waves-light btn btn-blue center-align __createbtn">Create</button>
						        </div>
						        <div class="input-field col s5 m5"></div>
					      	</div>
					   	</form>
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
