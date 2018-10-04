<template>
<div>
   <router-link to="/" class="__dashlogoimg" >
			    <!-- <center> -->
					  <span>h</span>
						<img src="../../assets/o.png">&nbsp;&nbsp;
						<span>rus</span>
					<!-- </center> -->
				</router-link>
<ul class="nav nav-sidebar">
			            <!-- <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li> -->


    <li :class="{active: classObject('dashboard')}"><router-link to="/" class="" ><span class="icon icon-home icon-sm"></span>
&nbsp;&nbsp;DASHBOARD</router-link></li>

    <li :class="{active: classObject('projects')}"><router-link to="/project" ><span class="icon icon-briefcase icon-sm"></span>
&nbsp;&nbsp;PROJECTS</router-link></li>
    <li :class="{active: classObject('transactions')}"><router-link to="/transactions" ><span class="icon icon-credit-card icon-sm"></span>
&nbsp;&nbsp;TRANSACTIONS</router-link></li>
    <li :class="{active: classObject('leads')}"><router-link to="/lead" ><span class="icon icon-settings icon-sm"></span>
&nbsp;&nbsp;LEADS</router-link></li>
    <li :class="{active: classObject('milestones')}"><router-link to="/milestone" >MILESTONES</router-link></li>
    <li :class="{active: classObject('talents')}"><router-link to="/talent" >TALENTS</router-link></li>
  </ul>
</div>

  </template>

  <script>
  export default {
    name: 'Sidebar',
    props: {
      active: {
        type: String,
        default: ''
      }
    },
    methods: {
      classObject: function(curr){
        if (this.active === curr) return true
        return false
      }
    }
  }
  </script>

<style>

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

.sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1000000000;
    display: block;
    padding: 15px 20px;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background-color: #ffffff;
    border-right: 1px solid #eee;
}

@media (max-width: 767px){
  .sidebar {
    width: 100vw;
    height: 100vh;
    left: calc(-100% - 5px);
  }
}

.sidebar.opened {
  animation: open .5s linear forwards;
}

@keyframes open {
  from {
    left: calc(-100% - 5px);
  } to {
    left: 0;
  }
}

/* Sidebar navigation */
.nav-sidebar {
  margin-top: 50px;
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

.nav-sidebar > li > a {
  padding-right: 20px;
  padding-left: 20px;
  text-decoration: none;
  margin-bottom: 10px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
  color: #00aeef !important;
  border-right: 4px solid #00aeef;
  background-color: #ffffff !important;
}
</style>
