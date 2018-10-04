<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
		    <div class="container-fluid">
		        <div id="navbar">
		          	<ul class="nav navbar-nav navbar-right">
                  <li><button href="#" v-on:click="showMenu" class="toggle-menu"><i class="fa fa-bars"></i></button></li>
			            <li class="dropdown __dashdropdown">
			              	<a href="#" class="dropdown-toggle __dashdropdown-toggle" data-toggle="dropdown"><img src="../../assets/avatar.png" class="img-circle">&nbsp; &nbsp;<span>Abimbola Odugbesan</span>
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
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    showMenu: function(event){
      document.querySelector('body').style.overflowY = 'hidden';
      document.querySelector('.sidebar').classList.add('opened')
    }
  }
}
</script>

<style>
/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border-color: #eee;
  background: #ffffff;
}

.navbar-toggle:focus {
  background-color: #fff !important;
}

.navbar-toggle .icon-bar {
  background-color: #000 !important;
}

.__dashdropdown-toggle {
  text-align: right;
}

.dropdown-menu {
  position: absolute !important;
  background-color: #fff !important;
}

.__dashdropdown {
  float: right
}

.toggle-menu {
  background: transparent;
  border: none;
  position: relative;
  display: block;
  padding: 10px 15px;
  outline: none !important;
  color: #797979;
}

@media (min-width: 768px){
  .toggle-menu {
    display: none !important;
  }
}

.navbar-nav > li {
  display: inline-block !important;
}
</style>

