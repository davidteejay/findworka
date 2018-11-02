<template>
	<div class="milestone">
		<Nav/>
		<Sidebar active="projects"/>
	    <div class="content">
			
		</div>
	</div>
</template>

<script>
import Nav from "./includes/nav";
import Sidebar from "./includes/sidebar";

export default {
  name: 'Milestone',
	components: {
		Nav,
		Sidebar,
	},
};
</script>