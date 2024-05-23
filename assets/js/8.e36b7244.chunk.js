(window.zigpollEmbedJsonP=window.zigpollEmbedJsonP||[]).push([[8],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"FETCHING_DATA",function(){return c}),n.d(t,"FETCHED_DATA",function(){return d}),n.d(t,"SET_USER",function(){return u}),n.d(t,"RESET_USER",function(){return p}),n.d(t,"CLEAR_USER_METADATA",function(){return b}),n.d(t,"fetchData",function(){return g});var i=n(10),o=n(310),a=n(32),r=(n(69),n(1)),s=n(2),l=n(0),c="FETCHING_DATA",d="FETCHED_DATA",u="SET_USER",p="RESET_USER",b="CLEAR_USER_METADATA";var O=window.parent.Zigpoll||{};function f(e,t){var n,a=Object(i.a)({},t().user),r=a.id;a.metadata;O.user&&Object.keys(O.user).length&&(n=!0);var s=Object(i.a)({},O.user);s.metadata;return s.customId=!1,s.id&&(s.customId=!0,window.Zigpoll.customParticipantId=!0),n&&!Object(o.a)(a,s)?(s.customId||r||(s.id=Object(l.Q)()),r&&!s.customId&&(s.id=r,a.customId&&(s.customId=!0,window.Zigpoll.customParticipantId=!0)),r!==s.id&&a.customId&&s.customId&&e({type:p}),s.id||(s.id=Object(l.Q)()),e({type:u,user:s}),!0):r?void 0:(s.id=Object(l.Q)(),e({type:u,user:s}),!0)}function g(){return function(e,t){var n;f(e,t);n=Object(l.L)(t().user);var o=Object(l.K)();return e({type:c}),Object(r.c)("".concat(s.d,"/data"),{accountId:Object(s.a)(),pollId:Object(s.c)(),pollIdentifierStub:Object(l.t)(),activityId:Object(s.b)(),participant:n,metadata:o,pageViews:sessionStorage.getItem("zigpoll-page-views"),sessions:localStorage.getItem("zigpoll-sessions"),lang:Object(l.g)(),path:window.parent.location.pathname,href:window.parent.document.location.href,referrer:function(){if(window.sessionStorage)return sessionStorage.getItem("zigpoll-original-referrer")}()}).then(function(e){return e.json()}).then(function(n){if(n.error)console.error(n.error),Object(a.a)(window.Zigpoll.onload)&&window.Zigpoll.onload("[Zigpoll] ".concat(n.error));else if(n.warning)console.warn("[Zigpoll] ".concat(n.warning)),Object(a.a)(window.Zigpoll.onload)&&window.Zigpoll.onload(n.warning);else{if(n&&n.poll&&n.poll.settings&&(n.poll.settings.resetSessions&&n.poll.settings.allowResubmissions&&(e({type:p}),f(e,t)),n.poll.settings.anonMode)){var o=window.Zigpoll.user||{};window.Zigpoll.user={id:o.id,metadata:{}},window.Zigpoll.precursorEvent=void 0,e({type:b}),setTimeout(function(){var e=window.Zigpoll.metadata||{};window.Zigpoll.metadata={href:e.href}},1e3)}e(function(e){if(e.metadata)try{var t=window.Zigpoll.metadata||{};window.Zigpoll.metadata=Object(i.a)({},e.metadata,t)}catch(n){console.log(n)}return e.precursorEvent&&(window.Zigpoll.precursorEvent=e.precursorEvent),{type:d,data:e}}(n))}}).catch(function(e){return console.log(e)})}}},170:function(e,t,n){"use strict";n.r(t),n.d(t,"SUBMITTING_EMAIL",function(){return s}),n.d(t,"SUBMITTED_EMAIL",function(){return l}),n.d(t,"submitEmail",function(){return c});var i=n(1),o=n(2),a=n(0),r=n(11),s="SUBMITTING_EMAIL",l="SUBMITTED_EMAIL";function c(e,t){return function(n,c){var d=c(),u=Object(a.y)(d);if(!u.loading){var p=d.embed,b=d.account,O=d.user,f=p.poll._id,g=Object(a.L)(O),w=Object(a.K)(),j=Object(a.s)(p.poll);return n(function(e,t){return{type:s,pollId:t,slideId:e}}(e,f)),Object(i.c)("".concat(o.d,"/email"),{pollId:f,pollIdentifier:j,slideId:e,accountId:b._id,participant:g,metadata:w,email:t,browserSessionId:window.Zigpoll.browserSessionId,href:window.parent.document.location.href}).then(function(e){return e.json()}).then(function(i){i.error?console.log(i.error):(n(function(e,t,n){return{type:l,email:e,pollId:n,slideId:t}}(t,e,f)),n(Object(r.notify)()),n(Object(r.onSubmission)()),Object(a.P)(b,"Zigpoll","Poll Submission","".concat(u.handle," : ").concat(t),u.handle,t))}).catch(function(e){return console.log(e)})}console.log("[Zigpoll] Slide is loading. Will not submit")}}},171:function(e,t,n){"use strict";n.r(t),n.d(t,"SUBMITTING_FORM",function(){return s}),n.d(t,"SUBMITTED_FORM",function(){return l}),n.d(t,"submitForm",function(){return c});var i=n(1),o=n(2),a=n(0),r=n(11),s="SUBMITTING_FORM",l="SUBMITTED_FORM";function c(e,t){return function(n,c){var d=c(),u=Object(a.y)(d);if(!u.loading){var p=d.embed,b=d.account,O=d.user;t.map(function(e){e.href=window.parent.location.href,delete e.valid});var f=Object(a.L)(O),g=Object(a.K)(),w=Object(a.s)(p.poll);return n(function(e,t){return{type:s,pollId:t,slideId:e}}(e,p.poll._id)),Object(i.c)("".concat(o.d,"/form"),{slideId:e,pollId:p.poll._id,pollIdentifier:w,accountId:b._id,participant:f,metadata:g,formInputs:t,browserSessionId:window.Zigpoll.browserSessionId,href:window.parent.document.location.href}).then(function(e){return e.json()}).then(function(i){if(i.error)console.log(i.error);else{n(function(e,t,n){return{type:l,pollId:t,slideId:e,formInputs:n}}(e,p.poll._id,t)),n(Object(r.notify)()),n(Object(r.onSubmission)());var o,s=[];t.forEach(function(e){var t=e.label,n=e.value,i=void 0===n?"Not Submitted":n;s.push("".concat(t,": ").concat(i))}),o=s.join(", "),Object(a.P)(b,"Zigpoll","Poll Submission","".concat(u.handle," : ").concat(o),u.handle,o)}}).catch(function(e){return console.log(e)})}console.log("[Zigpoll] Slide is loading. Will not submit")}}},92:function(e,t,n){"use strict";n.r(t);var i=n(5),o=n.n(i),a=n(38),r=n(80),s=n(53),l=n.n(s),c=n(34),d=n(192),u=n(299),p=n(193),b=n.n(p),O=n(196),f=n(10),g=n(11),w=n(118);function j(){l()(window).width()<=600&&l()("#smile-ui-container").show()}var E=n(99),m=n(61),S=n(70),I=n(58),v=n(77),T=n(78),h=n(197),_=n.n(h),R=n(54),C=n(62),y=n(35),A=n(170),D=n(171),N=n(0),Z=null,L=null,M=null;function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t[e._id])return e;var n=t[e._id];n.title&&(e.title=n.title),n.subtitle&&(e.subtitle=n.subtitle),n.copy&&(e.copy=n.copy),n.leftLabel&&(e.leftLabel=n.leftLabel),n.rightLabel&&(e.rightLabel=n.rightLabel),n.answers&&e.answers&&(e.answers=e.answers.map(function(e){return e.untranslatedTitle=e.title,e.title=n.answers[e.handle]||e.title,e})),n.actions&&e.actions&&(e.actions=e.actions.map(function(e){return e.title=n.actions[e.handle]||e.title,e})),n.rewardBanner&&e.rewardBanner&&(e.rewardBanner=n.rewardBanner),n.rewardCode&&e.rewardCode&&(e.rewardCode=n.rewardCode)}function k(e){window.Zigpoll.uncompiledCache=window.Zigpoll.uncompiledCache||{},e&&e.forEach(function(e){F(e)})}function P(e,t){try{return _.a.compile(e)(t)}catch(n){return e}}function F(e){try{if(e){window.Zigpoll.uncompiledSlides=window.Zigpoll.uncompiledSlides||{};var t=window.Zigpoll.uncompiledSlides[e._id];t||(t=Object(I.a)(e),window.Zigpoll.uncompiledSlides[e._id]=t);var n=window.Zigpoll.templateVariables||{},i=window.Zigpoll.submittedResponses||{},o=Object(f.a)({},i,n);if(0===Object.keys(o).length)return;e.title&&(e.title=P(t.title,o)),e.subtitle&&(e.subtitle=P(t.subtitle,o)),e.copy&&(e.copy=P(t.copy,o)),e.leftLabel&&(e.leftLabel=P(t.leftLabel,o)),e.rightLabel&&(e.rightLabel=P(t.rightLabel,o)),e.placeholder&&(e.placeholder=P(t.placeholder,o)),e.actions&&(e.actions=t.actions.map(function(e){return{title:P(e.title,o),link:P(e.link,o),redirect:P(e.redirect,o),onClick:e.onClick,backgroundColor:e.backgroundColor,icon:e.icon}}))}}catch(a){console.warn("[Zigpoll] Error with your slide templates. See details below:"),console.warn(a)}}function B(){var e=encodeURI(window.location.href.split("?")[0]),t="".concat(Object(N.Q)(),"-").concat(e,"-").concat(Date.now());sessionStorage.setItem("zigpoll-browser-session-id",t),window.Zigpoll.browserSessionId=t}function H(e){try{if(e)return B();var t=sessionStorage.getItem("zigpoll-browser-session-id");if(t){var n=t.split("-"),i=Object(S.a)(n,3),o=(i[0],i[1]),a=i[2],r=encodeURI(window.location.href.split("?")[0]),s=!1;return-1!==o.indexOf("thank_you")&&-1!==r.indexOf("orders")&&(s=!0),r!==o&&!1===s?B():(Date.now()-a)/1e3>600?B():void(window.Zigpoll.browserSessionId=t)}return B()}catch(l){console.warn("[Zigpoll] Error generating session id."),window.Zigpoll.browserSessionId=Object(N.Q)()}}function G(e,t){if(t&&e&&e.slides&&!e.settings.allowResubmissions&&window.Zigpoll.customParticipantId){var n,i,o=Object(N.s)(e),a=!1,r=[],s=e.curSlideId||!1,l=["copy","reward","action"];if(t&&t.responses){e.slides[0];var c=0;!function s(d){if(!(++c>100)&&d){var u=e.slides.findIndex(function(e){return e._id===d._id}),p=d.type,b=-1!==l.indexOf(p),O=d._id,f=t.responses["".concat(O,"-").concat(o)];if("copy"!==p&&"reward"!==p&&"action"!==p&&void 0===n&&(n=u),u!==n||f||(i=!0),!i)return f?(f.raw,-1!==["question","star-rating","binary","range","satisfaction","legal-consent","dropdown","country","slider"].indexOf(p)?d.submittedAnswer=f.raw.response:-1!==["checkbox","inline-multiple-choice","image-choice","rank"].indexOf(p)?d.submittedAnswers=f.raw.responses:-1!==["short-answer","long-answer","file-upload","date"].indexOf(p)?d.submittedResponse=f.raw.response:"form"===p?d.submittedFormInputs=f.raw.responses:"email-capture"===p&&(d.submittedEmail=f.raw.response.value),d.trackedPresentation=!0,d.trackedEngagement=!0,d.trackedReply=!0,r.push(d._id),a=d):b&&(r.push(d._id),d.trackedPresentation=!0,d.trackedEngagement=!0),b||f||(i=!0),s(Object(N.o)(e,d))}}(e.slides[0])}if(r.pop(),a){var d=Object(N.o)(e,a);d||(d=a),s?d.trackedPresentation=!0:(e.curSlideId=d._id,e.prevSlideIds=r)}t.timeline&&Object.keys(t.timeline).length&&(e.trackedPresentation=!0,e.submissionsComplete=Object(N.a)(e),e.completed=e.submissionsComplete),t.timeline&&t.timeline.hide&&(e.hidden=!0)}}function x(e,t){return t?[e,t]:[e]}var K=Object(c.c)({embed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,canRender:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.FETCHED_DATA:return t.data&&t.data.poll&&t.data.poll.slides&&0!==t.data.poll.slides.length?Object(f.a)({},e,{loaded:!0,poll:t.data.poll}):Object(f.a)({},e,{loaded:!1,poll:t.data.poll});case g.RENDER:return Object(f.a)({},e,{canRender:!0});case g.CLOSE:return j(),Object(f.a)({},e,{active:!1,autoNextTimeout:!1});case g.TOGGLE_ACTIVE:return e.active?j():l()(window).width()<=600&&l()("#smile-ui-container").hide(),Object(f.a)({},e,{active:!e.active,autoNextTimeout:!1});case g.RESET:return{loaded:!1};case g.TRIGGER_AUTO_NEXT_TIMEOUT:return Object(f.a)({},e,{autoNextTimeout:t.timeout});case g.NEXT_SLIDE:case g.PREV_SLIDE:return Object(f.a)({},e,{autoNextTimeout:!1});default:return e}},account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.FETCHING_DATA:return Object(f.a)({},e);case w.FETCHED_DATA:return e.lastModified===t.data.account.lastModified&&void 0!==e.visibilitySettings?Object(f.a)({},e):Object(f.a)({},t.data.account);default:return e}},polls:function(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;switch(o.type){case w.FETCHED_DATA:if(Z=o.data.poll,L=Object(N.s)(Z),function(e,t,n){M=Object(N.B)(e,t),n.forEach(function(e){U(e,M)})}(o.data.account,o.data.poll,o.data.poll.slides),k(o.data.poll.slides),i[L]&&i[L].lastModified===o.data.poll.lastModified&&!i[L].settings.allowResubmissions&&!N.F){(e=Object(f.a)({},i[L])).slides=o.data.poll.slides.map(function(t){var n=Object(v.a)(e.slides,function(e){return e._id===t._id});return delete e.slides[n].loading,Object(f.a)({},e.slides[n],t)}),e.settings=o.data.poll.settings,e.displaySettings=o.data.poll.displaySettings,e.pageDisplaySettings=o.data.poll.pageDisplaySettings,e.visibilitySettings=o.data.poll.visibilitySettings,e.languageSettings=o.data.poll.languageSettings;var a=e.idx;if(void 0!==a){var r=e.slides[a];r||(r=e.slides[0]),e.prevSlideIds=[],e.slides.forEach(function(t,n){n<a&&e.prevSlideIds.push(t._id)}),e.curSlideId=r._id,e.idx=void 0}return G(e,o.data.participant),Object(g.gatherResponses)(e),k(e.slides),H(),Object(f.a)({},i,Object(m.a)({},L,e))}return(e={})[L]=Object(f.a)({},o.data.poll,{prevSlideIds:[]}),i[L]||G(e[L],o.data.participant),e[L].curSlideId||(e[L].curSlideId=o.data.poll.slides[0]._id),H(!0),Object(f.a)({},i,e);case g.TRACK_OPEN:var s=(e=Object(f.a)({},i[L])).clientOpenCount||0;return e.clientOpenCount=++s,Object(f.a)({},i,Object(m.a)({},L,e));case g.TRACK_LOCAL_CLOSE:var l=(e=Object(f.a)({},i[L])).clientCloseCount||0;return e.clientCloseCount=++l,Object(f.a)({},i,Object(m.a)({},L,e));case g.TRACK_LOCAL_HIDE:var c=(e=Object(f.a)({},i[L])).clientHideCount||0;return e.clientHideCount=++c,o.markAsHidden&&(e.hidden=!0),Object(f.a)({},i,Object(m.a)({},L,e));case g.SET_RENDER_COUNT:return e=i[L],o.clientHideCount&&(e.clientHideCount=o.clientHideCount,e.hidden=!0),o.clientCloseCount&&(e.clientCloseCount=o.clientCloseCount),o.clientOpenCount&&(e.clientOpenCount=o.clientOpenCount),Object(f.a)({},i,Object(m.a)({},L,e));case g.TRACK_ENGAGEMENT:return(e=Object(f.a)({},i[L])).trackedEngagement=!0,t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].trackedEngagement=!0,Object(f.a)({},i,Object(m.a)({},L,e));case g.TRACK_PRESENTATION:return(e=Object(f.a)({},i[L])).trackedPresentation=!0,t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].trackedPresentation=!0,Object(f.a)({},i,Object(m.a)({},L,e));case g.TRACK_REPLY:return(e=Object(f.a)({},i[L])).trackedReply=!0,t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].trackedReply=!0,Object(f.a)({},i,Object(m.a)({},L,e));case g.NEXT_SLIDE:return(e=Object(f.a)({},i[L])).prevSlideIds.push(e.curSlideId),e.curSlideId=o.slideId,Object(f.a)({},i,Object(m.a)({},L,e));case g.PREV_SLIDE:return(e=Object(f.a)({},i[L])).curSlideId=e.prevSlideIds.pop(),Object(f.a)({},i,Object(m.a)({},L,e));case g.SET_COMPLETED:return(e=Object(f.a)({},i[L])).completed=!0,Object(f.a)({},i,Object(m.a)({},L,e));case C.SUBMITTING_ANSWER:case y.SUBMITTING_RESPONSE:case A.SUBMITTING_EMAIL:case D.SUBMITTING_FORM:case y.FETCHING_RESPONSES:case C.REFRESHING_ANSWERS:return e=Object(f.a)({},i[L]),t=e.slides,Object(T.a)(t,function(e){return e._id===o.slideId}).loading=!0,Object(f.a)({},i,Object(m.a)({},L,e));case C.SUBMITTED_ANSWER:return U(o.slide,M),F(o.slide),e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slide._id}),t[n]=Object(f.a)({},t[n],o.slide),t[n].loading=void 0,e.submissionsComplete=Object(N.a)(e),setTimeout(function(){return k(t)},0),Object(f.a)({},i,Object(m.a)({},L,e));case C.REFRESHED_ANSWERS:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].answers=o.answers,t[n].loading=!1,Object(f.a)({},i,Object(m.a)({},L,e));case y.SUBMITTED_RESPONSE:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].submittedResponse=o.response,t[n].responses,t[n].responses=o.responses,t[n].loading=void 0,e.submissionsComplete=Object(N.a)(e),setTimeout(function(){return k(t)},0),Object(f.a)({},i,Object(m.a)({},L,e));case y.FETCHED_RESPONSES:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].responses,0==o.responses.page?t[n].responses=o.responses:(o.responses.data=Object(E.a)(t[n].responses.data).concat(Object(E.a)(o.responses.data)),t[n].responses=o.responses),t[n].loading=void 0,Object(f.a)({},i,Object(m.a)({},L,e));case A.SUBMITTED_EMAIL:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].submittedEmail=o.email,t[n].loading=void 0,e.submissionsComplete=Object(N.a)(e),setTimeout(function(){return k(t)},0),Object(f.a)({},i,Object(m.a)({},L,e));case D.SUBMITTED_FORM:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),t[n].formInputs=o.formInputs,t[n].submittedFormInputs=o.formInputs,t[n].loading=void 0,e.submissionsComplete=Object(N.a)(e),setTimeout(function(){return k(t)},0),Object(f.a)({},i,Object(m.a)({},L,e));case R.RESET_SUBMISSION:return e=Object(f.a)({},i[L]),t=e.slides,n=Object(v.a)(t,function(e){return e._id===o.slideId}),delete t[n].submittedFormInputs,delete t[n].submittedEmail,delete t[n].responses,delete t[n].submittedResponse,delete t[n].submittedAnswer,delete t[n].submittedAnswers,t[n].loading=void 0,Object(g.gatherResponses)(e),Object(f.a)({},i,Object(m.a)({},L,e));case g.HIDE:return(e=Object(f.a)({},i[L])).hidden=!0,Object(f.a)({},i,Object(m.a)({},L,e));case w.RESET_USER:return{};default:return i}},user:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w.FETCHED_DATA:var i=n.data.participant||{},o=n.data.poll||{};return o.settings&&o.settings.resetSessions&&o.settings.allowResubmissions?Object(f.a)({},t):(o.settings&&o.settings.anonMode&&(delete i.metadata,delete i.handle),Object(f.a)({},t,i));case w.SET_USER:var a=Object(f.a)({},n.user);return t._id&&!a._id&&(a._id=t._id),a;case g.SET_USER_ID:var r=Object(f.a)({},t);return n._id&&(r._id=n._id),r;case g.TRACK_RENDER:case g.TRACK_OPEN:case g.TRACK_CLOSE:case g.TRACK_COMPLETE:case g.TRACK_HIDE:case g.TRACK_REPLY:n.type===g.TRACK_RENDER&&Object(N.a)(n.poll);var s=Object(f.a)({},t),l=s.timelines||{},c=Object(N.s)(n.poll),d=function(e){if(e)return e.lastTimestamp=new Date,e=function(e){if(e.type&&e.uniqueId)return e}(e)}(n.precursorEvent),u=(e=n.timelineEventType,{lastTimestamp:new Date,count:1,type:e}),p=l[c];return p=function(e,t,n){if(e){var i,o=0,a=!0,r=!1;e.forEach(function(e,s){"response"!==e.type&&"close"!==e.type&&"hide"!==e.type||(a=!1),e.type===t.type&&a&&((i=e).count=i.count+1,i.lastTimestamp=new Date,r=!0,o=s),n&&e.uniqueId===n.uniqueId&&(n=null)}),r&&!n?e[o]=i:x(t,n).forEach(function(t){t&&e.unshift(t)})}else e=x(t,n);return e}(p,u,d),l[c]=p,s.timelines=l,"response"===n.timelineEventType&&(s.hasResponded=!0),Object(f.a)({},t,s);case w.CLEAR_USER_METADATA:var b=Object(f.a)({},t);return b.metadata={},delete b.handle,Object(f.a)({},b);case w.RESET_USER:return{};default:return t}},misc:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{votes:[],renders:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.RESET_POLL_RENDERS:var n=e.pollRenders||{},i=Object(N.s)(t.poll);return t.poll&&i&&delete n[i],Object(f.a)({},e,{pollRenders:n});case g.COUNT_RENDER:var o=e.renders;o+=1;var a=Object(f.a)({},e.pollRenders)||{},r=Object(N.s)(t.poll);return t.poll&&r&&(void 0===a[r]?a[r]=1:a[r]=a[r]+1),Object(f.a)({},e,{renders:o,pollRenders:a});case g.SET_RENDER_COUNT:var s=t.renderCount,l=Object(f.a)({},e.pollRenders)||{},c=Object(N.s)(t.poll);return t.poll&&c&&(l[c]=t.renderCount),Object(f.a)({},e,{renders:s,pollRenders:l});case y.VOTE:e.votes||(e.votes=[]);var d=Object(E.a)(e.votes);return t.responseId&&d.push(t.responseId),Object(f.a)({},e,{votes:d});case w.RESET_USER:return{votes:[],renders:0};default:return e}}}),z=(Object(d.createLogger)({level:"info",collapsed:!0}),"root");if(window.localStorage&&window.localStorage["persist:root"])try{var V=window.localStorage["persist:root"],W=JSON.parse(V);W.polls&&W.misc||(z="zigpoll")}catch($){z="zigpoll"}else z="zigpoll";var Q,q={key:z,storage:b.a,blacklist:["embed"]},J=Object(u.a)(q,K);Q=Object(c.e)(J,void 0,Object(c.d)(Object(c.a)(O.a)));var X=Object(u.b)(Q),Y=o.a.lazy(function(){return n.e(4).then(n.bind(null,317))});l()(document).on("keyup",function(e){if("Escape"===e.key){var t="share.zigpoll.com"===window.parent.location.hostname||-1!==window.parent.location.href.indexOf("app.zigpoll.com/preview")||window.parent.isZigpollSharePage,n=Object(N.r)(Q.getState()).settings.selector;t||n||Q.dispatch(Object(g.close)())}}),l()(document).on("click",function(e){if(window.parent&&window.parent.Zigpoll&&window.parent.Zigpoll.metadata&&window.parent.Zigpoll.metadata.completed_poll){var t="share.zigpoll.com"===window.parent.location.hostname||-1!==window.parent.location.href.indexOf("app.zigpoll.com/preview")||window.parent.isZigpollSharePage,n=Object(N.r)(Q.getState()).settings.selector;t||n||Q.dispatch(Object(g.close)())}}),window.Zigpoll.refresh=function(){try{Q.dispatch({type:g.RESET}),window.Zigpoll.DOMRefresh()}catch($){console.log("Error with refresh"),console.log($)}};t.default=function(e){return o.a.createElement(a.a,{store:Q},o.a.createElement(r.a,{loading:null,persistor:X},o.a.createElement(i.Suspense,{fallback:null},o.a.createElement(Y,null))))}}}]);
//# sourceMappingURL=8.e36b7244.chunk.js.map