(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("d3b7")},"6ea2":function(t,e,n){"use strict";n("f7f7")},"7fe4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",[n("h1",[t._v("System Usability Scale Calculator")]),n("p",{attrs:{className:"mag"}},[n("span",[t._v(t._s(t.mag))]),t._v(" magnitude")]),n("p",{attrs:{className:"location"}},[t._v(t._s(t.location))]),n("p",{attrs:{className:"time"}},[t._v(t._s(t.time))]),t._m(0)])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{className:"tux"}},[n("img",{attrs:{src:"https://cdn.markadkins.design/images/ma_portfolio_logo_light.svg",alt:"Mark Adkins Design."}})])}],o=(n("4ea9"),n("bc3a")),i=n.n(o),s={name:"app",data:function(){return{location:"",mag:0,time:"",local:"localhost"===location.hostname}},methods:{getEarthquake:function(){var t=this,e=this.local?"http://localhost:3000/earthquakes/latest":"/api/earthquakes/latest";i.a.get(e).then((function(e){t.location=e.data.properties.place,t.mag=e.data.properties.mag,t.time=new Date(e.data.properties.time).toUTCString()}))["catch"]((function(t){console.log(t)}))}},mounted:function(){this.getEarthquake()}},l=s,c=(n("6ea2"),n("f08f")),u=Object(c["a"])(l,a,r,!1,null,"f323abc4",null);e["a"]=u.exports},f7f7:function(t,e,n){}});
//# sourceMappingURL=app.fe071524.js.map