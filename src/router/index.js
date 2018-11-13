import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Viewallproject from "@/components/Viewallproject";
import StartProject from "@/components/StartProject";
import Setting from "@/components/Setting";
import ProjectProgress from "@/components/ProjectProgress";
import TotalProject from "@/components/TotalProject";
import Login from "@/components/Login";
import Project from "@/components/Project";
import Lead from "@/components/Lead";
import LeadPage from "@/components/LeadPage";
import Talent from "@/components/Talent";
import AvaliableTalent from "@/components/AvaliableTalent";
import Milestone from "@/components/Milestone";
import Transaction from "@/components/Transaction";
import Inbox from "@/components/Inbox";
import NotFound from "@/components/NotFound";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: '/dashboard',
      name: "Dashboard",
      component: Home
    },
    {
      path: "/viewallproject",
      name: "Viewallproject",
      component: Viewallproject
    },

    {
      path: "/project",
      name: "Project",
      component: Project
    },

    {
      path: "/lead",
      name: "Lead",
      component: Lead
    },

    {
      path: "/leadpage",
      name: "LeadPage",
      component: LeadPage
    },

    {
      path: "/talent",
      name: "Talent",
      component: Talent
    },

    {
      path: "/availabletalent",
      name: "AvailableTalent",
      component: AvaliableTalent
    },

    {
      path: "/milestone",
      name: "Milestone",
      component: Milestone
    },

    {
      path: "/transactions",
      name: "Transaction",
      component: Transaction
    },

    {
      path: "/inbox",
      name: "Inbox",
      component: Inbox
    },

    {
      path: "/start",
      name: "StartProject",
      component: StartProject
    },

    {
      path: "/settings",
      name: "Setting",
      component: Setting
    }, 

    {
      path: "/projectprogress",
      name: "ProjectProgress",
      component: ProjectProgress
    },

    {
      path: "/totalproject",
      name: "totalproject",
      component: TotalProject
    },    
    

    {
      path: "/*",
      name: "Not Found",
      component: NotFound
    }
  ]
});
