<template>
	<div class="inbox">
		<Nav/>
		<Sidebar active="inbox"/>
		<div class="content">
			<div class="z-depth-1">
					<div class="row">
						<div class="col m4 m5">
							<div class="top-bar search-box">
								<form class="input-cover">
									<span>
										<i class="fa fa-search"></i>
									</span>
									<input type="search" class="browser-default" placeholder="Search...">
								</form>
							</div>
							<div class="thread-pane">
								<div class="thread" :class="{active: isActive(i)}" v-for="(thread, i) in threads" :key="i" @click="selectThread(i)">
									<div>
										<img src="../assets/img/avatar.png" height="50px" width="50px">
									</div>
									<div>
										<h6>{{ thread.receiver.id === userId ? thread.sender.first_name : thread.receiver.first_name }}
											<span>
												{{ thread.receiver.id === userId ? thread.sender.last_name : thread.receiver.last_name }}
											</span>
										</h6>
										<p>{{ thread.messages[thread.messages.length - 1].message }}</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col m8 l7">
							<div v-if="activeThread !== ''" class="message-container">
								<div class="top-bar box-head">
									
									<div>
										<img src="../assets/img/avatar.png" height="50px" width="50px">
									</div>
									<h5 v-if="activeThread !== ''">
										{{ threads[activeThread].receiver.first_name }} 
										<span>
											{{ threads[activeThread].receiver.last_name }}
										</span>
									</h5>
								</div>							
								<div class="message-pane">
									<div v-for="(message, i) in messages" :key="i" class="message-cover" :class="message.type">
										<div class="message">
											{{ message.message }}
										</div>
										<div class="time">
											{{ message.time }}
											
										</div>
									</div>
								</div>
								<form @submit.prevent="sendMessage" class="send-message">
									<div class="input-cover">
										<input class="browser-default" v-model="message">
									</div>
									<div class="btn-cover">
										<button type="submit" class="btn z-depth-0">
											<i class="fa fa-send"></i>
										</button>
									</div>
								</form>
							</div>
							<div v-else-if="activeThread === ''" class="not-select valign-wrapper">
									<div class="valign center">
										<h6>Select a thread to continue</h6>
									</div>
								</div>
						</div>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import Sidebar from './includes/sidebar';
import Nav from './includes/nav';
import constants from './includes/constants'
import axios from 'axios'
import moment from 'moment'

const { API_URL } = constants
export default {
  components: {
    Sidebar, Nav
	},
	data(){
		return {
			threads: [],
			activeThread: '',
			messages: [],
			message: '',
			userId: 0
		}
	},
	methods: {
		selectThread: function(id){
			console.log(id)
			let thread = this.threads[id]
			this.activeThread = id

			let messages = thread.messages
			

			for (let message of messages){
				message.type = message.senderId === this.userId ? 'outgoing' : 'incoming'
				
				let newTime =  new Date(message.created_at)
				console.log('fg' + newTime)
				/*let times = moment().subtract(6, 'newTime').calendar()*/
				let times = moment().startOf('newTime').fromNow()
				message.time = times
			}

			this.messages = messages
		},

		isActive: function(key){
			if (this.activeThread === key) return true
			return false
		},

		sendMessage: function(){
			const { token } = JSON.parse(sessionStorage.userData)
			const threadId = this.threads[this.activeThread].id
			const projectId = this.threads[this.activeThread].projectId
			console.log(threadId)

			axios
				.post(`${API_URL}/inbox/sendMessage`, {
					senderId: this.userId,
					threadId,
					projectId,
					message: this.message
				}, {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res =>{
					console.log(res.data)
					res = res.data
					if (res.error) M.toast({ html: 'Something went wrong. Please check your internet connection and try again' })
					else {
						this.fetchThreads(token, this.userId)
						this.selectThread(this.activeThread)
					}
				})			
		},

		fetchThreads: function(token, id){
			axios
				.get(`${API_URL}/inbox/getThreads?userId=${id}`, {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
				.then(res => {
					console.log(res.data)
					res = res.data
					if (res.error) M.toast({ html: 'Something went wrong. Please check your internet connection and try again' })
					else {
						this.threads = res.data
					}
				})
				.catch(err => console.error(err))
		},


	},



	mounted() {
		const userData = sessionStorage.userData
		if (!userData) this.$router.push('/')
		const { token, id } = JSON.parse(userData)
		this.userId = id

		this.fetchThreads(token, id)
	},

}
</script>
