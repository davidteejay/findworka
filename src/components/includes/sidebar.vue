<template>
	<div class="sidemenu z-depth-2 opened" :class="{opened: opened}" >
   		<div class="logo list-item">
			<span class="icon open-menu" @click="openMenu()"><i class="fa fa-bars"></i></span>
			<span class="text text-title">HORUS</span>
		</div>
		<ul class="menu">
			<li :class="{active: classObject('dashboard')}" class="list-item">
				<router-link to="/dashboard">
					<span class="icon"><i class="fa fa-home"></i></span>
					<span class="text">DASHBOARD</span>
				</router-link>
			</li>
    		<li :class="{active: classObject('projects')}" class="list-item">
				<router-link to="/viewallproject">
					<span class="icon"><i class="fa fa-suitcase"></i></span>
					<span class="text">PROJECTS</span>
				</router-link>
			</li>
    		<li :class="{active: classObject('transactions')}" class="list-item">
				<router-link to="/transactions">
					<span class="icon"><i class="fa fa-credit-card"></i></span>
					<span class="text">TRANSACTIONS</span>
				</router-link>
			</li>
			<li :class="{active: classObject('inbox')}" class="list-item">
				<router-link to="/inbox">
					<span class="icon"><i class="fa fa-envelope"></i></span>
					<span class="text">INBOX <span class="badge">10</span></span>
					<!-- <span class="badge">10</span> -->
				</router-link>
			</li>
   			<li :class="{active: classObject('leads')}" class="list-item">
				<router-link to="/lead">
					<span class="icon"><i class="fa fa-project-diagram"></i></span>
					<span class="text">LEADS</span>
				</router-link>
			</li>
    		<li :class="{active: classObject('talents')}" class="list-item">
				<router-link to="/talent" >
					<span class="icon"><i class="fa fa-crop"></i></span>
					<span class="text">TALENTS</span>
				</router-link>
			</li>
			<li :class="{active: classObject('settings')}" class="list-item">
				<router-link to="/settings" >
					<span class="icon"><i class="fa fa-cog"></i></span>
					<span class="text">SETTINGS</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    active: {
      type: String,
      default: ""
    }
  },
  data(){
	  return {
		  open: false
	  }
  },
  computed: {
	  opened: function(){
		  return this.open
	  }
  },
  methods: {
    classObject: function(curr) {
      if (this.active === curr) return true;
      return false;
	},
	openMenu: function(){
		if ("ontouchstart" in document.documentElement) this.open = !this.open
	}
  }
};
</script>
