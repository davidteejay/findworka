<template>
	<div class="transactions">
		<Nav hasSearch/>
		<Sidebar active="transactions"/>
	    <div class="content">
	      	<h5 class="title">Transactions</h5>
			<div class="z-depth-1">
				<div class="top-section">
					<div class="pagin">
						<span>Page</span>
						<button class="btn z-depth-0">&lsaquo;</button>
						<input type="number" value="1" class="browser-default">
						<button class="btn z-depth-0">&rsaquo;</button>
						<span>of 6 | Total of 1143 records</span>
					</div>
					<div class="date-filter">
						<button class="btn z-depth-0 dropdown-trigger" data-target="dropdown1">
							<span><i class="fa fa-calendar"></i></span>
							<span>OCTOBER 11 - NOVEMBER 11</span>
							<span><i class="fa fa-sort-down"></i></span>
						</button>
						<ul id='dropdown1' class='dropdown-content'>
							<li><a href="#!">JANUARY 11 - FEBRUARY 11</a></li>
							<li><a href="#!">FEBRUARY 11 - MARCH 11</a></li>
							<li><a href="#!">MARCH 11 - APRIL 11</a></li>
							<li><a href="#!">APRIL 11 - MAY 11</a></li>
							<li><a href="#!">MAY 11 - JUNE 11</a></li>
							<li><a href="#!">JUNE 11 - JULY 11</a></li>
							<li><a href="#!">JULY 11 - AUGUST 11</a></li>
							<li><a href="#!">AUGUST 11 - SEPTEMBER 11</a></li>
							<li><a href="#!">SEPTEMBER 11 - OCTOBER 11</a></li>
							<li><a href="#!">OCTOBER 11 - NOVEMBER 11</a></li>
							<li><a href="#!">NOVEMBER 11 - DECEMBER 11</a></li>
							<li><a href="#!">DECEMBER 11 - JANUARY 11</a></li>
						</ul>
					</div>
				</div>
				<table class="trans-table">
					<thead>
						<tr>
							<td>Time</td>
							<td>Client</td>
							<td>Type</td>
							<td>Amount</td>
							<td>Transaction ID</td>
						</tr>
					</thead>
					<tbody>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td class="incomplete">N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal">
							<td class="date">25/10/2018 14:25</td>
							<td>Raybeam Nigeria</td>
							<td>Credit Card</td>
							<td>N986,000</td>
							<td>01234567890</td>
						</tr>
						<tr @click="showModal" v-for=" transaction in transactions">
							<td class="date">{{ transaction.time}}</td>
							<td>{{ transaction.clientName}}</td>
							<td>{{ transaction.type}}</td>
							<td>{{ transaction.amount}}</td>
							<td>{{ transaction.transactionId}}</td>
						</tr>
					</tbody>
				</table>
			</div>
	    </div>
		<div id="modal1" class="modal bottom-sheet">
			<div class="modal-content">
				<div class="row">
					<div class="col m6 s12">
						<table>
							<tr>
								<td>Amount</td>
								<td>N 980,000</td>
							</tr>
							<tr>
								<td>Transaction Date</td>
								<td>October 25, 2018</td>
							</tr>
							<tr>
								<td>Client</td>
								<td>Raybeam Nigeria</td>
							</tr>
							<tr>
								<td>Narration</td>
								<td>Naviago App</td>
							</tr>
						</table>
					</div>
					<div class="col m6 s12">
						<table>
							<tr>
								<td>Transaction Type</td>
								<td>Credit Card</td>
							</tr>
							<tr>
								<td>Transaction Time</td>
								<td>9:00 pm</td>
							</tr>
							<tr>
								<td>Bank</td>
								<td>First Bank Nigeria</td>
							</tr>
							<tr>
								<td>Account Number</td>
								<td>0167550036</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Nav from './includes/nav';
import Sidebar from './includes/sidebar';
import constants from './includes/constants'
import axios from 'axios'
import moment from 'moment'
const dd = moment("2018-11-17T19:16:03.000Z").format('L')
const { API_URL } = constants
const user = JSON.parse(sessionStorage.getItem('userData'))
const token = user ? user.token : ''
axios.defaults.headers.common['Authorization'] = token;
export default {
  components: {
    Nav,
    Sidebar
  },
  data() {
  	return {
  		transactions2:[],
  		date: dd,
  		transactionst: [
  			{ time:'25/10/2018 14:25',
  			  clientName:'Raybeam Nigeria',
  			  type:'Credit card',
  			  amount:'N986,000',
  			  transactio:'01234567890'
  			}, 
  			{ time:'25/10/2018 14:25',
  			  clientName:'Jolabel Nigeria',
  			  type:'Credit card',
  			  amount:'N986,000',
  			  transactio:'01234567890'
  			},
  			 { time:'25/10/2018 14:25',
  			  clientName:'Alade Nigeria',
  			  type:'Credit card',
  			  amount:'N986,000',
  			  transactio:'01234567890'
  			},
  			 { time:'25/10/2018 14:25',
  			  clientName:'Poland Nigeria',
  			  type:'Credit card',
  			  amount:'N986,000',
  			  transactio:'01234567890'
  			},
  		],
  		pages: '',
  		currPage: '',
  		filteredTransaction: []
  	}
  },
  mounted(){
	let modal = document.querySelectorAll('.modal')
	let modalInstances = M.Modal.init(modal, {})
	
	let drp = document.querySelectorAll('.dropdown-trigger')
	let drpOptions = {
		constrainWidth: true,
		coverTrigger: false,
	}
    let drpInstances = M.Dropdown.init(drp, drpOptions)
    // this.$on('updateDetails', () => this.updateDet() )
    this.getTransactions()
  },
  methods: {
	showModal: function(){
		let elems = document.querySelector('.modal')
		let instance = M.Modal.getInstance(elems)
		instance.open()
	},
	filterByMonth: function(to, from){
		const filtered =  this.transaction.filter(function(transaction) {
		return transaction.time < to && transaction.time > from 
		});
		return filtered
	},
	filterByNumber: function(){
		const numb = this.pages
		const filtered =  this.transaction.filter(function(transaction) {
		return transaction[transaction.indexOf(transaction)] < numb
		});
		return filtered
	},
	getTransactions: function(){
		axios.get(`${API_URL}/transactions/fetchAll`,{
			headers: {
			Authorization: "Bearer " + token }
		})
		.then(
			(res) => this.transactions2 = res.data.data)
		this.$emit('updateDetails')
		//this.date = moment("2018-11-17T19:16:03.000Z")
		.catch(err => console.log(err))
	},
	updateDet: function(){
		const tr = this.transactions2
		tr.map((t) => {
			t.time = moment(t.updated_at).format('L H a')
			t.clientName = t.client.first_name
		})
		return tr
	}
	},
	computed:{
		transactions: function(){
			const tr = this.transactions2

			tr.map((t) => {
				t.time = moment(t.updated_at).format('L hh:mm ')
				t.clientName = t.client.first_name
				//t.diff = moment.duration(t.created_at- t.updated_at).humanize()
				//t.diff = moment.duration(t.created_at.diff(t.updated_at))
				//t.diff = moment.duration(moment("2015-12-4").diff(moment("2015-12-8")))
				t.diff = moment.duration(moment(t.time).diff(moment("01/17/2018 09:16"))).days()

			})
			return tr
		}
	}

  }


// document.addEventListener('DOMContentLoaded', function() {
    
// });
</script>
