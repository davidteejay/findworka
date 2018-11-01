<template>
	<div class="dashboard">
		<Nav/>
		<Sidebar active="dashboard"/>
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
                  <h4 class="number">105</h4>
                  <h6>
                    Total<br>
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
                  <h4 class="number">105</h4>
                  <h6>
                    Total<br>
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
                  <h4 class="number">105</h4>
                  <h6>
                    Total<br>
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
                  <h4 class="number">105</h4>
                  <h6>
                    Total<br>
                    Projects
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <table class="curr-projects z-depth-1">
            
          </table>
        </div>
        <div class="col s12 m4 l3"></div>
      </div>
    </div>
	</div>
</template>

<script>
  import Nav from './includes/nav.vue';
  import Sidebar from './includes/sidebar.vue';

	export default {
      name: 'Home',
      components: {
        Nav,
        Sidebar
      }
	}
</script>
