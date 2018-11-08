<template>
	<div class="inbox">
		<Nav/>
		<Sidebar active="inbox"/>
		<div class="content">
			<div class="z-depth-1">
					<div class="row">
						<div class="col m4 m5">
							<div class="top-bar search-box">

							</div>
							<div class="thread" v-for="(thread, i) in threads" :key="i">
								<h6>{{ thread.recipient }}</h6>
								<p>{{ thread.messages[thread.messages.length - 1].message }}</p>
							</div>
						</div>
						<div class="col m8 l7">
							<div class="top-bar box-head">
								<div class="avatar"></div>
								<h5>Abimbola Odugbesan</h5>
							</div>
							<div v-if="activeThread !== ''" class="message-pane">
								<div v-for="(message, i) in messages" :key="i" class="message-cover" :class="message.type">
									<div class="message">
										{{ message.message }}
									</div>
									<div class="time">
										{{ message.time }}
									</div>
								</div>
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
					slug: 'YYY',
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
				}
			],
			activeThread: '',
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
		}
	}
}
</script>
