<template>
	<div class="talent">
		<Nav/>
		<Sidebar active="talents"/>
		<div class="content">
			<div class="z-depth-1">
				<h6 class="title">Select required skills</h6>
				<div class="row">
					<div class="col l2 m3 s6 skill" v-for="(skill, i) in skills" :key="i">
						<p>
							<label>
								<input type="checkbox" class="filled-in" :value="skill" v-model="checked" />
								<span>{{skill}}</span>
							</label>
						</p>
						<p @click="removeSkill(i)">
							<i class="red-text fa fa-close"></i>
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col s12">
						<span class="addTrigger" :class="{ show: !show }" @click="showAdd">
							<i class="fa fa-plus"></i>
							Add Skill
						</span>
						<form class="add" :class="{ show }" @submit.prevent="addSkill">
							<input type="text" class="browser-default" v-model="skill" placeholder="Add New Skill">
							<button type="submit" class="btn z-depth-0" >Add Skill</button>
						</form>
						<span class="red-text">{{ error }}</span>
					</div>
				</div>
				<button class="btn z-depth-0 send">Send Application</button>
			</div>
		</div>
	</div>
</template>

<script>
  import Sidebar from './includes/sidebar.vue';
  import Nav from './includes/nav.vue';

export default {
	name: 'Talent',
	data(){
		return {
			skills: ['VueJS', 'ReactJS', 'React Native', 'Angular', 'JavaScript', 'CSS', 'SASS', 'HTML', 'JAVA', 'Python', 'C++', 'PHP'],
			checked: [],
			skill: '',
			error: '',
			show: false
		}
	},
	methods: {
		addSkill: function(){
			this.error = ''

			let { checked, skill, skills } = this
			if (skill !== ''){
				if (skills.includes(skill)) this.error = 'Skill already included'
				else {
					checked.push(skill)
					skills.push(skill)
					
					this.skill = ''
					this.checked = checked
					this.skills = skills
					this.show = false
				}
			}
		},
		removeSkill: function(index){
			this.error = ''

			let { checked, skills } = this

			let skill = skills[index]
			skills.splice(index, 1)
			if (checked.includes(skill)){
				let i = checked.indexOf(skill)
				checked.splice(i, 1)
			}

			this.checked = checked
			this.skills = skills
		},
		showAdd: function(){
			this.show = true
		}
	},
	// computed: {
	// 	show: function(){
	// 		return this.show
	// 	}
	// }
    components: {
      Sidebar, Nav
    }
}
</script>
