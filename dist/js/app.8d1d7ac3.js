(function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],p=0,f=[];p<u.length;p++)l=u[p],o[l]&&f.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),o=r("8a03"),a=r.n(o),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"section main-section"},[r("div",{staticClass:"container fill-length"},[r("router-view",{attrs:{darkTextColor:e.darkTextColor}})],1)])])},u=[],i=r("355a"),c=r.n(i),s={computed:{darkTextColor:function(){return{color:this.backgroundColor}}},methods:{createCallback:function(e,t){return function(){if(200===e.status&&4===e.readyState){var r=JSON.parse(e.responseText);t.imageURL=r.logoURL,t.backgroundColor=new c.a(r.mainColor).toRGB(),t.accentColor=r.accentColor}else 200!==e.status&&4===e.readyState&&console.log("REQUEST FAILED")}}}},p=s,f=(r("034f"),r("5c64"),r("2877")),d=Object(f["a"])(p,l,u,!1,null,null,null);d.options.__file="App.vue";var v=d.exports,m=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("AddMemory",{attrs:{darkTextColor:e.darkTextColor}}),r("p",[e._v("\n    components go here\n  ")])],1)},b=[],h={props:["darkTextColor"]},y=h,g=Object(f["a"])(y,_,b,!1,null,null,null);g.options.__file="HomePage.vue";var x=g.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},k=[],T={props:["darkTextColor"]},O=T,j=Object(f["a"])(O,C,k,!1,null,null,null);j.options.__file="MemoriesPage.vue";var w=j.exports;n["default"].use(m["a"]);var M=new m["a"]({routes:[{path:"/",name:"HomePage",component:x},{path:"/memories",name:"Memories",component:w}]}),P=M,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title",style:e.darkTextColor},[e._v("\n    AddMemory page componet\n  ")])])},E=[],A={props:["darkTextColor"]},$=A,R=Object(f["a"])($,S,E,!1,null,null,null);R.options.__file="AddMemory.vue";var J=R.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",{staticClass:"title",style:e.darkTextColor},[e._v("\n    Memory table page componet\n  ")])])},U=[],H={props:["darkTextColor"]},B=H,D=Object(f["a"])(B,L,U,!1,null,null,null);D.options.__file="MemoryTable.vue";var F=D.exports;n["default"].use(a.a),n["default"].config.productionTip=!1,n["default"].component("AddMemory",J),n["default"].component("Memories",F),new n["default"]({router:P,render:function(e){return e(v)}}).$mount("#app")},"5c64":function(e,t,r){"use strict";var n=r("c2ae"),o=r.n(n);o.a},"64a9":function(e,t,r){},c2ae:function(e,t,r){}});
//# sourceMappingURL=app.8d1d7ac3.js.map