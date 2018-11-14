<template>
	<nav class="white z-depth-1">
		<div class="nav-wrapper">
			<div class="search-cover" :class="{shown: hasSearch}">
				<form class="search">
					<span>
						<i class="fa fa-search"></i>
					</span>
					<input type="search" class="browser-default" placeholder="Search...">
				</form>
			</div>
			<ul>
				<li>
					<button class="dropdown-trigger drop" data-target="profileDrpDwn">
						<div>
							<h6>'Tunde Yusuf</h6>
							<p>Backend Developer</p>
						</div>
						<div class="avatar"></div>
					</button>
					<ul id='profileDrpDwn' class='dropdown-content z-depth-1'>
						<li><a href="#!"><i class="fa fa-user"></i>View Profile</a></li>
						<!-- <li><a href="" @click="logout"><i class="fa fa-sign-out-alt"></i>Log out</a></li> -->
						<li><a href="#" @click="logout"><i class="fa fa-sign-out-alt"></i>Log out</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: "Nav",
	mounted(){		
		let drp = document.querySelectorAll('.dropdown-trigger')
		let drpOptions = {
			constrainWidth: true,
			coverTrigger: false,
			alignment: 'right'
		}
		let drpInstances = M.Dropdown.init(drp, drpOptions)
	},
	props: {
		hasSearch: {
			type: Boolean,
			default: false
		}
  	},
  	methods: {
  		logout: function(){
			sessionStorage.clear();
			this.$router.push('/')
  		}
  	}
};

</script>
