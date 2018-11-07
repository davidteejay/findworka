<template>
	<nav class="white z-depth-1">
		<div class="nav-wrapper">
			<ul>
				<li>
					<!-- <button class="dropdown-trigger drop" data-target="profileDrpDwn">
						sadasddasd
					</button>
					<ul id='profileDrpDwn' class='dropdown-content'>
				<li><a href="#!">one</a></li>
				<li><a href="#!">two</a></li>
				<li class="divider" tabindex="-1"></li>
				<li><a href="#!">three</a></li>
				<li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
				<li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
			</ul> -->
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
let elems = document.querySelectorAll('.dropdown-trigger');
let options = {
	constrainWidth: false,
	coverTrigger: false
}

M.Dropdown.init(elems, options);
export default {
	name: "Nav",
};
</script>
