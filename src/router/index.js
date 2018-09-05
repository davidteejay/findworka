import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Viewallproject from '@/components/Viewallproject'
import Project from '@/components/Project'
import Lead from '@/components/Lead'
import LeadPage from '@/components/LeadPage'
import Talent from '@/components/Talent'
import AvaliableTalent from '@/components/AvaliableTalent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewallproject',
      name: 'Viewallproject',
      component: Viewallproject
    },
    
    {
      path: '/project',
      name: 'Project',
      component: Project
    },

    {
      path: '/lead',
      name: 'Lead',
      component: Lead
    },

    {
      path: '/leadpage',
      name: 'LeadPage',
      component: LeadPage
    },

    {
      path: '/talent',
      name: 'Talent',
      component: Talent
    },

    {
      path: '/avaliabletalent',
      name: 'AvaliableTalent',
      component: AvaliableTalent
    }
  ]
})
