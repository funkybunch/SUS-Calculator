(function(e){function t(t){for(var n,a,i=t[0],l=t[1],u=t[2],v=0,f=[];v<i.length;v++)a=i[v],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("d3b7")},"0e68":function(e,t,s){},"7fe4":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-continer"},[e._m(0),s("main",[s("div",{staticClass:"flex-container"},e._l(e.questions,(function(t,n){return s("div",{key:n},[s("label",{attrs:{for:"question"+n}},[e._v(e._s(n+1)+". "+e._s(t.question))]),e._m(1,!0),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"question.value",modifiers:{number:!0}}],staticClass:"slider",attrs:{type:"range",min:"1",max:"5",id:"question"+n},domProps:{value:t.value},on:{input:function(t){return e.calculateQuestionScore(n)},__r:function(s){e.$set(t,"value",e._n(s.target.value))},blur:function(t){return e.$forceUpdate()}}})])})),0)]),s("footer",{staticClass:"logo"},[s("div",{staticClass:"footer-container"},[s("div",{staticClass:"scores"},[s("div",[e._m(2),s("span",{staticClass:"score-value"},[e._v(" "+e._s(e.score)+" "),s("span",{staticClass:"score-footnote"},[e._v("Scale of 0-40")])])]),s("div",[e._m(3),s("span",{staticClass:"score-value"},[e._v(" "+e._s(e.normalizedScore)+" "),s("span",{staticClass:"score-footnote"},[e._v("Scale of 0-100")])])])]),e._m(4)])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"flex-container"},[s("img",{staticClass:"logo",attrs:{src:"https://cdn.markadkins.design/images/sus.svg"}}),s("h1",[e._v("System Usability Scale (SUS) "),s("span",[e._v("Score Calculator")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"range-labels"},[s("span",[e._v("Strongly Disagree")]),s("span",[e._v("Disagree")]),s("span",[e._v("Neutral")]),s("span",[e._v("Agree")]),s("span",[e._v("Strongly Agree")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"score"},[e._v("Total"),s("br"),e._v("Score:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"score"},[e._v("Normalized"),s("br"),e._v("Score:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("span",{staticClass:"credit"},[e._v("Calculator made with ♥ by")]),e._v(" "),s("a",{attrs:{href:"https://markadkins.design",target:"_blank"}},[s("img",{attrs:{src:"https://cdn.markadkins.design/images/ma_portfolio_logo_light.svg",alt:"Mark Adkins Design"}})])])}],o={name:"app",data:function(){return{score:0,normalizedScore:0,questions:[{question:"I think that I would like to use this system frequently.",value:3,score:2,inverted:!1},{question:"I found the system unnecessarily complex.",value:3,score:2,inverted:!0},{question:"I thought the system was easy to use.",value:3,score:2,inverted:!1},{question:"I think that I would need the support of a technical person to be able to use this system.",value:3,score:2,inverted:!0},{question:"I found the various functions in this system were well integrated.",value:3,score:2,inverted:!1},{question:"I thought there was too much inconsistency in this system.",value:3,score:2,inverted:!0},{question:"I would imagine that most people would learn to use this system very quickly.",value:3,score:2,inverted:!1},{question:"I found the system very cumbersome to use.",value:3,score:2,inverted:!0},{question:"I felt very confident using the system.",value:3,score:2,inverted:!1},{question:"I needed to learn a lot of things before I could get going with this system.",value:3,score:2,inverted:!0}],local:"localhost"===location.hostname}},methods:{calculateQuestionScore:function(e){!1===this.questions[e].inverted?this.questions[e].score=this.questions[e].value-1:this.questions[e].score=5-this.questions[e].value,this.calculateNormalizedScore()},calculateNormalizedScore:function(){for(var e=0,t=0;t<this.questions.length;t++)e+=this.questions[t].score;this.score=e,this.normalizedScore=2.5*e}},mounted:function(){this.calculateNormalizedScore()}},a=o,i=(s("fffb"),s("f08f")),l=Object(i["a"])(a,n,r,!1,null,null,null);t["a"]=l.exports},fffb:function(e,t,s){"use strict";s("0e68")}});
//# sourceMappingURL=app.73827b30.js.map