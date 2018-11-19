<template>
	<div class="dashboard">
		<Nav/>
		<Sidebar active="dashboard"/>
    <Loader v-bind:active="loading"/>
    <div class="content">
      <div class="row">
        <div class="col s12 m8 l9">
          <div class="row summary">
            <div class="col s12 m6 l3">
              <div class="card z-depth-1 hoverable">
                <div class="icon">
                  <img src="/static/img/project.svg" alt="">
                </div>
                <div class="text">
                  <h4 class="number">{{ all }}</h4>
                  <h6>
                    Total<br>
                    Projects
                  </h6>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="card z-depth-1 hoverable" @click="progress">
                <div class="icon">
                  <img src="/static/img/project.svg" alt="">
                </div>
                <div class="text">
                  <h4 class="number">{{ inprogress }}</h4>
                  <h6>
                    Projects<br>
                    InProgress
                  </h6>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="card z-depth-1 hoverable">
                <div class="icon">
                  <img src="/static/img/project.svg" alt="">
                </div>
                <div class="text">
                  <h4 class="number">{{ complete }}</h4>
                  <h6>
                    Completed<br>
                    Projects
                  </h6>
                </div>
              </div>
            </div>
            <div class="col s12 m6 l3">
              <div class="card z-depth-1 hoverable">
                <div class="icon">
                  <img src="/static/img/project.svg" alt="">
                </div>
                <div class="text">
                  <h4 class="number">{{ trans }}</h4>
                  <h6>
                    Completed<br>
                    Transactions
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <table cellspacing="0" class="curr-projects z-depth-1">
            <thead>
              <tr>
                <td>Current Projects</td>
                <td>Status</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Android & IOS Build for <b>Bigi Nigeria</b></td>
                <td class="completed">Completed</td>
              </tr>
              <tr>
                <td>Android & IOS Build for <b>Bigi Nigeria</b></td>
                <td class="in-progress">In Progress</td>
              </tr>
              <tr>
                <td>Android & IOS Build for <b>Bigi Nigeria</b></td>
                <td class="pending">Pending</td>
              </tr>
              <tr>
                <td>Android & IOS Build for <b>Bigi Nigeria</b></td>
                <td class="cancelled">Completed</td>
              </tr>
            </tbody>
          </table>
          <div class="more">
            <p><a href="#"><i>View More</i></a></p>
          </div>
          <table cell-spacing="0" class="up-projects z-depth-1">
            <thead>
              <tr>
                <td colspan="3">Upcoming Projects</td>
              </tr>
            </thead>
            <tbody class="up-body">
              <tr>
                <td>
                  <div class="up-flex">
                    <div class="avatar"></div>
                    <div class="title">
                      <h6><b>Ray Beam Nigeria</b></h6>
                      <i>iOS / Android Build</i>
                    </div>
                  </div>
                </td>
                <td>Lagos, Nigeria</td>
                <td>March, 2018</td>
              </tr>
              <tr>
                <td>
                  <div class="up-flex">
                    <div class="avatar"></div>
                    <div class="title">
                      <h6><b>Ray Beam Nigeria</b></h6>
                      <i>iOS / Android Build</i>
                    </div>
                  </div>
                </td>
                <td>Lagos, Nigeria</td>
                <td>March, 2018</td>
              </tr>
              <tr>
                <td>
                  <div class="up-flex">
                    <div class="avatar"></div>
                    <div class="title">
                      <h6><b>Ray Beam Nigeria</b></h6>
                      <i>iOS / Android Build</i>
                    </div>
                  </div>
                </td>
                <td>Lagos, Nigeria</td>
                <td>March, 2018</td>
              </tr>
            </tbody>
          </table>
          <div class="more">
            <p><a href="#"><i>View More</i></a></p>
          </div>
        </div>
        <div class="col s12 m4 l3">
          
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import Nav from './includes/nav.vue';
  import Sidebar from './includes/sidebar.vue';
  import Loader from './includes/Loader.vue'
  import axios from 'axios'
  import constants from './includes/constants.js'

  const { API_URL } = constants

	export default {
      name: 'Home',
      components: {
        Nav,
        Sidebar,
        Loader
      },
      mounted(){
        const userData = sessionStorage.getItem('userData')
        if (!userData) this.$router.push('/')

        const { token } = JSON.parse(sessionStorage.userData)
        axios
          .get(`${API_URL}/projects/fetchAll`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          .then(res => {
            res = res.data
            console.log(res)
            if (res.error) M.toast({ html: '<span>Something went wrong. Please check your internet connection and try again</span>' })
            else {
              this.all = res.data.length

              const inP = res.data.filter(datum => datum.status === 'in-progress')
              this.inprogress = inP.length

              const comp = res.data.filter(datum => datum.status === 'completed')
              this.complete = comp.length

              axios
                .get(`${API_URL}/transactions/fetchAll`, {
                  headers: {
                    'Authorization': `Bearer ${token}`
                  }
                })
                .then(res => {
                  res = res.data
                  console.log(res)
                  if (res.error) M.toast({ html: '<span>Something went wrong. Please check your internet connection and try again</span>' })
                    else {
                      this.trans = res.data.length

                      this.loading = false
                    }
                })
            }
          })
          .catch(err => console.error(err))
      },
      data(){
        return {
          loading: true,
          all: 0,
          inprogress: 0,
          complete: 0,
          trans: 0
        }
      },
      methods: {
        progress: function(){
          this.$router.push('/projects/in-progress')
        }
      }
	}
</script>
