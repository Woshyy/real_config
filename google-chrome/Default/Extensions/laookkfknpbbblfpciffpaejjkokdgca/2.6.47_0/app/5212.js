"use strict";(self.webpackChunkmomentum=self.webpackChunkmomentum||[]).push([[5212],{48713:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(20144),l=n(88026),d=n(51726),o=n.n(d),i=n(34952),s=n(12096),u=n(60607);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};a.Z.use(l.Z,{name:"unreactive"}),a.Z.use(o()),a.Z.use(i.InlineSvgPlugin),a.Z.prototype.$xhr=u.Z,a.Z.prototype.$e=s.Z,a.Z.directive("mobile-click",r),new a.Z({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),a.Z.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const b=a.Z},85212:(e,t,n)=>{n.r(t);var a=n(48713),l=n(12096);const d=()=>Promise.all([n.e(698),n.e(860),n.e(6299),n.e(9181),n.e(7353),n.e(2586),n.e(5067),n.e(1536),n.e(9220)]).then(n.bind(n,82962));localStorage.getItem("dev-panel:open")?i():l.Z.listenToOnce(m,"globalEvent:key:backtick",i);const o=localStorage.getObject("dev-panel:pinned-step");function i(){m.utils.loadModuleDefault(d).then((e=>{let t=document.createElement("div");t.setAttribute("id","dev-panel"),document.body.prepend(t),document.body.classList.add("showing-dev-panel"),new a.Z({render:t=>t(e)}).$mount("#dev-panel")}))}o&&m.utils.loadModuleDefault((()=>Promise.all([n.e(860),n.e(6299),n.e(203)]).then(n.bind(n,79808)))).then((e=>{e.setPinnedStepActiveOnDashLoad(o)}))}}]);