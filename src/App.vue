<template>
    <!-- <div id="app">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-view/>
    </div> -->

    <div>

          <!-- <router-link to="/">Dashboard</router-link>
          <router-link to="/login">Lead</router-link>
          <router-link to="/project">Project</router-link>
          <router-link to="/milestone">Milestone</router-link>
          <router-link to="/talent">Talents</router-link> -->

        <transition name="fade">
              <router-view/>
          </transition>
    </div>
</template>

<script>
export default {

}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>
