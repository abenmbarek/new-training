define((function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";function o(e,t,n,o,r,i,a,s){var c=typeof(e=e||{}).default;"object"!==c&&"function"!==c||(e=e.default);var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId=i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(e,t){return l.call(t),d(e,t)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:u}}n.d(t,"a",(function(){return o}))},,function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t,o="object"==typeof self&&self&&self.Object===Object&&self,r=n||o||Function("return this")(),i=Object.prototype,a=0,s=i.toString,c=r.Symbol,l=c?c.prototype:void 0,u=l?l.toString:void 0;function d(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return u?u.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}e.exports=function(e){var t,n=++a;return(null==(t=e)?"":d(t))+n}}).call(this,n(8))},,function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"}));return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";function o(e,t){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=i[0],s={id:e+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}n.r(t),n.d(t,"default",(function(){return f}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,l=!1,u=function(){},d=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,r){l=n,d=r||{};var a=o(e,t);return h(a),function(t){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}t?h(a=o(e,t)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}}function h(e){for(var t=0;t<e.length;t++){var n=e[t],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(m(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(m(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(l)return u;o.parentNode.removeChild(o)}if(p){var r=c++;o=s||(s=b()),t=y.bind(null,o,r,!1),n=y.bind(null,o,r,!0)}else o=b(),t=x.bind(null,o),n=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else n()}}var v,g=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function y(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function x(e,t){var n=t.css,o=t.media,r=t.sourceMap;if(o&&e.setAttribute("media",o),d.ssrId&&e.setAttribute("data-vue-ssr-id",t.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},function(e,t,n){var o=n(7);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(5).default)("353aa25a",o,!1,{})},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'\n.custom-checkbox > .checkbox-label[data-v-e69ac3ae] {\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #0b0c0c;\n  display: block;\n  margin-bottom: 5px;\n}\n.custom-checkbox > .checkbox[data-v-e69ac3ae] {\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 16px;\n  font-size: 1rem;\n  line-height: 1.25;\n  box-sizing: border-box;\n  width: 100%;\n  height: 40px;\n  height: 2.5rem;\n  margin-top: 0;\n  padding: 5px;\n  border: 2px solid #0b0c0c;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n.custom-checkbox > input[data-v-e69ac3ae]:focus {\n  outline: 3px dashed #fd0;\n  outline-offset: 0;\n  box-shadow: inset 0 0 0 2px;\n}\n.custom-checkbox[data-v-e69ac3ae] {\n  font-family: Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 400;\n  font-size: 1.6rem;\n  line-height: 1.25;\n  display: block;\n  position: relative;\n  min-height: 40px;\n  margin-bottom: 10px;\n  padding-left: 40px;\n  clear: left;\n}\n.custom-checkbox > input[type="checkbox"][data-v-e69ac3ae] {\n  -webkit-font-smoothing: antialiased;\n  cursor: pointer;\n  position: absolute;\n  z-index: 1;\n  top: -2px;\n  left: -2px;\n  width: 44px;\n  height: 44px;\n  margin: 0;\n  opacity: 0;\n}\n.custom-checkbox > .checkbox-label[data-v-e69ac3ae] {\n  font-size: inherit;\n  font-family: inherit;\n  line-height: inherit;\n  display: inline-block;\n  margin-bottom: 0;\n  padding: 8px 15px 5px;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n.custom-checkbox > label[data-v-e69ac3ae]::before {\n  content: "";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  border: 2px solid currentColor;\n  background: transparent;\n}\n.custom-checkbox > input[type="checkbox"]:focus + label[data-v-e69ac3ae]::before {\n  border-width: 4px;\n  outline: 3px dashed #228bec;\n}\n.custom-checkbox > label[data-v-e69ac3ae]::after {\n  box-sizing: content-box;\n  content: "";\n  position: absolute;\n  top: 11px;\n  left: 9px;\n  width: 18px;\n  height: 7px;\n  transform: rotate(-45deg);\n  border: solid;\n  border-width: 0 0 5px 5px;\n  border-top-color: transparent;\n  opacity: 0;\n  background: transparent;\n}\n.custom-checkbox > input[type="checkbox"]:checked + label[data-v-e69ac3ae]::after {\n  opacity: 1;\n}\n@media only screen and (min-width: 40rem) {\nlabel[data-v-e69ac3ae],\n  input[data-v-e69ac3ae],\n  .custom-checkbox[data-v-e69ac3ae] {\n    font-size: 19px;\n    font-size: 1.9rem;\n    line-height: 1.31579;\n}\n}\n',""])},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},,,function(e,t,n){"use strict";n.r(t);var o={props:{label:{required:!0,type:String},done:{default:!1,type:Boolean},id:{required:!0,type:String}},data:function(){return{isDone:this.done,idKey:this.id}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{attrs:{id:e.idKey,type:"checkbox"},domProps:{checked:e.isDone}}),e._v(" "),n("label",{attrs:{for:e.idKey}},[e._v(e._s(e.idKey)+" : "+e._s(e.label)+" ")])])};r._withStripped=!0;var i=n(0);var a=function(e){n(6)},s=Object(i.a)(o,r,[],!1,a,"data-v-e69ac3ae",null);s.options.__file="src/main/webapp/vue-app/portletOne/components/ToDoItem.vue";var c=s.exports,l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy.trim",value:e.label,expression:"label",modifiers:{lazy:!0,trim:!0}}],staticClass:"input__lg",attrs:{id:"new-todo-input",type:"text",name:"new-todo",autocomplete:"off"},domProps:{value:e.label},on:{change:function(t){e.label=t.target.value.trim()},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("button",{staticClass:"btn btn__primary btn__lg",attrs:{type:"submit"}},[e._v("\n    Add\n  ")])])};l._withStripped=!0;var u=Object(i.a)({data:function(){return{label:""}},methods:{onSubmit:function(){""!==this.label&&(this.$emit("todo-added",this.label),this.label="")}}},l,[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"label-wrapper"},[t("label",{staticClass:"label__lg",attrs:{for:"new-todo-input"}},[this._v("\n      What needs to be done?\n    ")])])}],!1,null,null,null);u.options.__file="src/main/webapp/vue-app/portletOne/components/ToDoForm.vue";var d=u.exports,p=n(2),f=n.n(p),h={name:"App",components:{ToDoItem:c,ToDoForm:d},data:function(){return{ToDoItems:[{id:f()("todo-"),label:"Learn Vue",done:!1},{id:f()("todo-"),label:"Create a Vue project with the CLI",done:!0},{id:f()("todo-"),label:"Have fun",done:!0},{id:f()("todo-"),label:"Create a to-do list",done:!1}],listArray:[]}},mounted:function(){var e=this;fetch("http://localhost:8080/portal/rest/demo/listClients",{method:"GET"}).then((function(e){if(e&&e.ok)return e.json();throw new Error("Response code indicates a server error",e)})).then((function(t){console.log(t),e.listArray=t}))},methods:{addToDo:function(e){this.ToDoItems.push({id:f()("todo-"),label:e,done:!1})}}},b=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"center",attrs:{id:"app"}},[t("h1",[this._v("To-Do List")]),this._v(" "),t("to-do-form",{on:{"todo-added":this.addToDo}}),this._v(" "),t("ul",{staticClass:"stack-large",attrs:{"aria-labelledby":"list-summary"}},this._l(this.listArray,(function(e){return t("li",{key:e.id},[t("to-do-item",{attrs:{id:e.id,label:e.name}})],1)})),0)],1)};b._withStripped=!0;var m=Object(i.a)(h,b,[],!1,null,null,null);m.options.__file="src/main/webapp/vue-app/portletOne/components/app.vue";var v=m.exports,g=(n(14),{"to-do-form":d,"to-do-item ":c});for(var y in g)Vue.component(y,g[y]);Vue.use(Vuetify);var x=new Vuetify({dark:!0,iconfont:""}),_=eXo&&eXo.env&&eXo.env.portal&&eXo.env.portal.language||"en",w=eXo.env.portal.context+"/"+eXo.env.portal.rest+"/i18n/bundle/locale.addon.VuetifySample-"+_+".json";if(exoi18n.loadLanguageAsync(_,w).then((function(e){new Vue({render:function(e){return e(v)},i18n:e,vuetify:x}).$mount("#vuetify_webpack_sample")})),extensionRegistry){var k=extensionRegistry.loadComponents("sample");k&&k.length>0&&k.forEach((function(e){Vue.component(e.componentName,e.componentOptions)}))}},,,function(e,t){}])}));