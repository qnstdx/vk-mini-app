(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},198:function(e,t,a){e.exports=a(311)},302:function(e,t,a){},311:function(e,t,a){"use strict";a.r(t);a(199),a(251);var n=a(0),c=a.n(n),r=a(67),i=a.n(r),l=a(39),o=a.n(l),s=a(68),u=a.n(s),m=a(104),p=a(49),d=a(114),f=a.n(d),E=a(113),b=a.n(E),h=(a(279),a(47)),g=a.n(h),k=a(48),v=a.n(k),w=a(108),j=a.n(w),O=a(69),y=a.n(O),x=a(105),P=a.n(x),U=a(107),_=a.n(U),A=a(106),C=a.n(A),I=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(y.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(P.a,{before:n.photo_200?c.a.createElement(C.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(y.a,{title:"Navigation Example"},c.a.createElement(_.a,null,c.a.createElement(j.a,{size:"xl",level:"1",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},K=a(70),S=a(112),V=a.n(S),N=a(109),W=a.n(N),z=a(110),B=a.n(z),J=a(111),T=a.n(J),D=(a(302),Object(K.b)()),F=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(V.a,{onClick:e.go,"data-to":"home"},D===K.a?c.a.createElement(W.a,null):c.a.createElement(B.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},G=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),s=l[0],d=l[1],E=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(p.a)(E,2),g=h[0],k=h[1];Object(n.useEffect)(function(){function e(){return(e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),k(null);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}o.a.subscribe(function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}}),function(){e.apply(this,arguments)}()},[]);var v=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:g},c.a.createElement(I,{id:"home",fetchedUser:s,go:v}),c.a.createElement(F,{id:"persik",go:v}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(G,null),document.getElementById("root"))}},[[198,1,2]]]);
//# sourceMappingURL=main.04a27b9b.chunk.js.map