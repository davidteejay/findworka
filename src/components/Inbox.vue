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
									<div class="avatar"></div>
									<div>
										<h6>{{ thread.recipient }}</h6>
										<p>{{ thread.messages[thread.messages.length - 1].message }}</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col m8 l7">
							<div v-if="activeThread !== ''" class="message-container">
								<div class="top-bar box-head">
									<div class="avatar"></div>
									<h5 v-if="activeThread !== ''">{{ threads[activeThread - 1].recipient }}</h5>
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

export default {
  components: {
    Sidebar, Nav
	},
	data(){
		return {
			threads: [
				{
					id: 1,
					recipient: 'Abimbola Odugbesan',
					messages: [
						{
							message: 'How far',
							time: '11:55',
							type: 'incoming'
						}, {
							message: 'Hello',
							time: '11:57',
							type: 'outgoing'
						}, {
							message: 'Hi',
							time: '11:58',
							type: 'incoming'
						}
					]
				}, {
					id: 2,
					recipient: '\'Tunde Yusuf',
					messages: [
						{
							message: 'Yo',
							time: '11:55',
							type: 'incoming'
						}, {
							message: 'Watsup',
							time: '11:57',
							type: 'outgoing'
						}
					]
				}
			],
			activeThread: '',
			messages: [],
			message: ''
		}
	},
	methods: {
		selectThread: function(id){
			let thread = this.threads[id]
			this.activeThread = thread.id
			this.messages = thread.messages
		},
		isActive: function(key){
			if (this.activeThread === key + 1) return true
			return false
		},
		sendMessage: function(){
			let { activeThread, threads, messages, message } = this

			function pad(n) { return (n < 10) ? ("0" + n) : n; }
			let newMessage = {
				message,
				time: `${new Date().getHours()}:${pad(new Date().getMinutes())}`,
				type: 'outgoing'
			}

			let currThread = threads[activeThread - 1]
			let currMessages = currThread.messages
			currMessages.push(newMessage)
			currThread.messages = currMessages
			threads[activeThread - 1] = currThread

			this.threads = threads
			this.message = ''
		}
	}
}
</script>
