<template>
<div>
   <div class="__dashlogoimg">
      		<center>
        		<router-link to="/" >
					<span>h</span>
					<img src="../../assets/img/o.png">&nbsp;&nbsp;
					<span>rus</span>
				</router-link>
      		</center>
    	</div>
<ul class="nav nav-sidebar">
    <li :class="{active: classObject('dashboard')}"><router-link to="/" class="" ><span class="icon icon-home icon-sm"></span>
&nbsp;&nbsp;DASHBOARD</router-link></li>

    <li :class="{active: classObject('projects')}"><router-link to="/viewallproject" ><span class="icon icon-briefcase icon-sm"></span>
&nbsp;&nbsp;PROJECTS</router-link></li>
    <li :class="{active: classObject('transactions')}"><router-link to="/transactions" ><span class="icon icon-credit-card icon-sm"></span>
&nbsp;&nbsp;TRANSACTIONS</router-link></li>
    <li :class="{active: classObject('leads')}"><router-link to="/lead" ><span class="icon icon-settings icon-sm"></span>
&nbsp;&nbsp;LEADS</router-link></li>
    <li :class="{active: classObject('inbox')}"><router-link to="/inbox">
										<span class="icon icon-envelope icon-sm"></span>
										&nbsp;&nbsp;
										INBOX
									</router-link></li>
    <li :class="{active: classObject('milestones')}"><router-link to="/milestone" >MILESTONES</router-link></li>
    <li :class="{active: classObject('talents')}"><router-link to="/talent" >TALENTS</router-link></li>
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
	methods: {
		classObject: function(curr) {
			if (this.active === curr) return true;
			return false;
		}
	}
};
</script>

<style>
.__dashlogoimg {
	padding: 10px;
}
.__dashlogoimg span {
	text-transform: uppercase !important;
	font-size: 22px;
	letter-spacing: 6px;
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
	padding: 20px;
	overflow-x: hidden;
	overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
	background-color: #ffffff;
	border-right: 1px solid #eee;
}

@media (max-width: 767px) {
	.sidebar {
		width: 100vw;
		height: 100vh;
		left: calc(-100% - 5px);
	}
}

.sidebar.opened {
	animation: open 0.5s linear forwards;
}

@keyframes open {
	from {
		left: calc(-100% - 5px);
	}
	to {
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

.navbar-nav > .open > a,
.navbar-inverse .navbar-nav > .open > a:focus,
.navbar-inverse .navbar-nav > .open > a:hover {
	color: #fff;
	background-color: transparent;
}

.nav-sidebar > li {
	margin-bottom: 10px;
}

.nav-sidebar > li > a {
	text-decoration: none;
	padding: 10px;
	padding-left: 25px;
}
.nav-sidebar > .active > a,
.nav-sidebar > .active > a:hover,
.nav-sidebar > .active > a:focus {
	color: #00aeef !important;
	border-right: 4px solid #00aeef;
	background-color: #ffffff !important;
}
</style>
