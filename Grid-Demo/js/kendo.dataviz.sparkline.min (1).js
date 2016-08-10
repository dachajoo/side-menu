/** 
 * Kendo UI v2016.2.714 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2016 Telerik AD. All rights reserved.                                                                                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
!function(e,define){define("util/main.min",["kendo.core.min"],e)}(function(){return function(){function e(e){return typeof e!==F}function n(e,n){var i=t(n);return O.round(e*i)/i}function t(e){return e?O.pow(10,e):1}function i(e,n,t){return O.max(O.min(e,t),n)}function r(e){return e*E}function o(e){return e/E}function a(e){return"number"==typeof e&&!isNaN(e)}function s(n,t){return e(n)?n:t}function u(e){return e*e}function d(e){var n,t=[];for(n in e)t.push(n+e[n]);return t.sort().join("")}function l(e){var n,t=2166136261;for(n=0;e.length>n;++n)t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t^=e.charCodeAt(n);return t>>>0}function h(e){return l(d(e))}function c(e){var n,t=e.length,i=L,r=U;for(n=0;t>n;n++)r=O.max(r,e[n]),i=O.min(i,e[n]);return{min:i,max:r}}function f(e){return c(e).min}function p(e){return c(e).max}function m(e){return g(e).min}function v(e){return g(e).max}function g(e){var n,t,i,r=L,o=U;for(n=0,t=e.length;t>n;n++)i=e[n],null!==i&&isFinite(i)&&(r=O.min(r,i),o=O.max(o,i));return{min:r===L?void 0:r,max:o===U?void 0:o}}function _(e){return e?e[e.length-1]:void 0}function b(e,n){return e.push.apply(e,n),e}function w(e){return W.template(e,{useWithBlock:!1,paramName:"d"})}function y(n,t){return e(t)&&null!==t?" "+n+"='"+t+"' ":""}function x(e){var n,t="";for(n=0;e.length>n;n++)t+=y(e[n][0],e[n][1]);return t}function k(n){var t,i,r="";for(t=0;n.length>t;t++)i=n[t][1],e(i)&&(r+=n[t][0]+":"+i+";");return""!==r?r:void 0}function A(e){return"string"!=typeof e&&(e+="px"),e}function C(e){var n,t,i=[];if(e)for(n=W.toHyphens(e).split("-"),t=0;n.length>t;t++)i.push("k-pos-"+n[t]);return i.join(" ")}function M(n){return""===n||null===n||"none"===n||"transparent"===n||!e(n)}function S(e){for(var n={1:"i",10:"x",100:"c",2:"ii",20:"xx",200:"cc",3:"iii",30:"xxx",300:"ccc",4:"iv",40:"xl",400:"cd",5:"v",50:"l",500:"d",6:"vi",60:"lx",600:"dc",7:"vii",70:"lxx",700:"dcc",8:"viii",80:"lxxx",800:"dccc",9:"ix",90:"xc",900:"cm",1e3:"m"},t=[1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],i="";e>0;)t[0]>e?t.shift():(i+=n[t[0]],e-=t[0]);return i}function z(e){var n,t,i,r,o;for(e=e.toLowerCase(),n={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3},t=0,i=0,r=0;e.length>r;++r){if(o=n[e.charAt(r)],!o)return null;t+=o,o>i&&(t-=2*i),i=o}return t}function N(e){var n=Object.create(null);return function(){var t,i="";for(t=arguments.length;--t>=0;)i+=":"+arguments[t];return i in n?n[i]:e.apply(this,arguments)}}function T(e){for(var n,t,i=[],r=0,o=e.length;o>r;)n=e.charCodeAt(r++),n>=55296&&56319>=n&&o>r?(t=e.charCodeAt(r++),56320==(64512&t)?i.push(((1023&n)<<10)+(1023&t)+65536):(i.push(n),r--)):i.push(n);return i}function j(e){return e.map(function(e){var n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|1023&e),n+=String.fromCharCode(e)}).join("")}var O=Math,W=window.kendo,D=W.deepExtend,E=O.PI/180,L=Number.MAX_VALUE,U=-Number.MAX_VALUE,F="undefined",K=Date.now;K||(K=function(){return(new Date).getTime()}),D(W,{util:{MAX_NUM:L,MIN_NUM:U,append:b,arrayLimits:c,arrayMin:f,arrayMax:p,defined:e,deg:o,hashKey:l,hashObject:h,isNumber:a,isTransparent:M,last:_,limitValue:i,now:K,objectKey:d,round:n,rad:r,renderAttr:y,renderAllAttr:x,renderPos:C,renderSize:A,renderStyle:k,renderTemplate:w,sparseArrayLimits:g,sparseArrayMin:m,sparseArrayMax:v,sqr:u,valueOrDefault:s,romanToArabic:z,arabicToRoman:S,memoize:N,ucs2encode:j,ucs2decode:T}}),W.drawing.util=W.util,W.dataviz.util=W.util}(),window.kendo},"function"==typeof define&&define.amd?define:function(e,n,t){(t||n)()}),function(e,define){define("util/text-metrics.min",["kendo.core.min","util/main.min"],e)}(function(){!function(e){function n(){return{width:0,height:0,baseline:0}}function t(e,n,t){return h.current.measure(e,n,t)}function i(e,n){var t=[];if(e.length>0&&document.fonts){try{t=e.map(function(e){return document.fonts.load(e)})}catch(i){o.logToConsole(i)}Promise.all(t).then(n,n)}else n()}var r=document,o=window.kendo,a=o.Class,s=o.util,u=s.defined,d=a.extend({init:function(e){this._size=e,this._length=0,this._map={}},put:function(e,n){var t=this,i=t._map,r={key:e,value:n};i[e]=r,t._head?(t._tail.newer=r,r.older=t._tail,t._tail=r):t._head=t._tail=r,t._length>=t._size?(i[t._head.key]=null,t._head=t._head.newer,t._head.older=null):t._length++},get:function(e){var n=this,t=n._map[e];return t?(t===n._head&&t!==n._tail&&(n._head=t.newer,n._head.older=null),t!==n._tail&&(t.older&&(t.older.newer=t.newer,t.newer.older=t.older),t.older=n._tail,t.newer=null,n._tail.newer=t,n._tail=t),t.value):void 0}}),l=e("<div style='position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;padding: 0 !important; margin: 0 !important; border: 0 !important;line-height: normal !important; visibility: hidden !important; white-space: nowrap!important;' />")[0],h=a.extend({init:function(e){this._cache=new d(1e3),this._initOptions(e)},options:{baselineMarkerSize:1},measure:function(t,i,o){var a,d,h,c,f,p,m,v;if(!t)return n();if(a=s.objectKey(i),d=s.hashKey(t+a),h=this._cache.get(d),h)return h;c=n(),f=o?o:l,p=this._baselineMarker().cloneNode(!1);for(m in i)v=i[m],u(v)&&(f.style[m]=v);return e(f).text(t),f.appendChild(p),r.body.appendChild(f),(t+"").length&&(c.width=f.offsetWidth-this.options.baselineMarkerSize,c.height=f.offsetHeight,c.baseline=p.offsetTop+this.options.baselineMarkerSize),c.width>0&&c.height>0&&this._cache.put(d,c),f.parentNode.removeChild(f),c},_baselineMarker:function(){return e("<div class='k-baseline-marker' style='display: inline-block; vertical-align: baseline;width: "+this.options.baselineMarkerSize+"px; height: "+this.options.baselineMarkerSize+"px;overflow: hidden;' />")[0]}});h.current=new h,o.util.TextMetrics=h,o.util.LRUCache=d,o.util.loadFonts=i,o.util.measureText=t}(window.kendo.jQuery)},"function"==typeof define&&define.amd?define:function(e,n,t){(t||n)()}),function(e,define){define("util/base64.min",["util/main.min"],e)}(function(){return function(){function e(e){var t,i,r,a,s,u,d,l="",h=0;for(e=n(e);e.length>h;)t=e.charCodeAt(h++),i=e.charCodeAt(h++),r=e.charCodeAt(h++),a=t>>2,s=(3&t)<<4|i>>4,u=(15&i)<<2|r>>6,d=63&r,isNaN(i)?u=d=64:isNaN(r)&&(d=64),l=l+o.charAt(a)+o.charAt(s)+o.charAt(u)+o.charAt(d);return l}function n(e){var n,t,i="";for(n=0;e.length>n;n++)t=e.charCodeAt(n),128>t?i+=r(t):2048>t?(i+=r(192|t>>>6),i+=r(128|63&t)):65536>t&&(i+=r(224|t>>>12),i+=r(128|t>>>6&63),i+=r(128|63&t));return i}var t=window.kendo,i=t.deepExtend,r=String.fromCharCode,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i(t.util,{encodeBase64:e,encodeUTF8:n})}(),window.kendo},"function"==typeof define&&define.amd?define:function(e,n,t){(t||n)()}),function(e,define){define("mixins/observers.min",["kendo.core.min"],e)}(function(){return function(e){var n=Math,t=window.kendo,i=t.deepExtend,r=e.inArray,o={observers:function(){return this._observers=this._observers||[]},addObserver:function(e){return this._observers?this._observers.push(e):this._observers=[e],this},removeObserver:function(e){var n=this.observers(),t=r(e,n);return-1!=t&&n.splice(t,1),this},trigger:function(e,n){var t,i,r=this._observers;if(r&&!this._suspended)for(i=0;r.length>i;i++)t=r[i],t[e]&&t[e](n);return this},optionsChange:function(e){e=e||{},e.element=this,this.trigger("optionsChange",e)},geometryChange:function(){this.trigger("geometryChange",{element:this})},suspend:function(){return this._suspended=(this._suspended||0)+1,this},resume:function(){return this._suspended=n.max((this._suspended||0)-1,0),this},_observerField:function(e,n){this[e]&&this[e].removeObserver(this),this[e]=n,n.addObserver(this)}};i(t,{mixins:{ObserversMixin:o}})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,n,t){(t||n)()}),function(e,define){define("kendo.dataviz.sparkline.min",["kendo.dataviz.chart.min"],e)}(function(){return function(e,n){function t(e){return"number"==typeof e?[e]:e}var i=window.kendo,r=i.dataviz,o=r.ui.Chart,a=i.data.ObservableArray,s=r.SharedTooltip,u=i.deepExtend,d=e.isArray,l=e.proxy,h=r.inArray,c=Math,f="k-",p=150,m=150,v="bar",g="bullet",_="pie",b="leave",w=[v,g],y=o.extend({init:function(n,i){var r=this,s=r.stage=e("<span />"),l=i||{};n=e(n).addClass(f+"sparkline").empty().append(s),r._initialWidth=c.floor(n.width()),l=t(l),(d(l)||l instanceof a)&&(l={seriesDefaults:{data:l}}),l.series||(l.series=[{data:t(l.data)}]),u(l,{seriesDefaults:{type:l.type}}),(h(l.series[0].type,w)||h(l.seriesDefaults.type,w))&&(l=u({},{categoryAxis:{crosshair:{visible:!1}}},l)),o.fn.init.call(r,n,l)},options:{name:"Sparkline",chartArea:{margin:2},axisDefaults:{visible:!1,majorGridLines:{visible:!1},valueAxis:{narrowRange:!0}},seriesDefaults:{type:"line",area:{line:{width:.5}},bar:{stack:!0},padding:2,width:.5,overlay:{gradient:null},highlight:{visible:!1},border:{width:0},markers:{size:2,visible:!1}},tooltip:{visible:!0,shared:!0},categoryAxis:{crosshair:{visible:!0,tooltip:{visible:!1}}},legend:{visible:!1},transitions:!1,pointWidth:5,panes:[{clip:!1}]},_modelOptions:function(){var n,t,i=this,r=i.options,o=i._initialWidth,a=i.stage;return i.stage.children().hide(),t=e("<span>&nbsp;</span>"),i.stage.append(t),n=u({width:o?o:i._autoWidth(),height:a.height(),transitions:r.transitions},r.chartArea,{inline:!0,align:!1}),a.css({width:n.width,height:n.height}),t.remove(),i.stage.children().show(),i.surface.resize(),n},_createTooltip:function(){var e,n=this,t=n.options,i=n.element;return e=n._sharedTooltip()?new x(i,n._plotArea,t.tooltip):o.fn._createTooltip.call(n),e.bind(b,l(n._tooltipleave,n)),e},_surfaceWrap:function(){return this.stage},_autoWidth:function(){var e,n,t,i=this,o=i.options,a=r.getSpacing(o.chartArea.margin),s=o.series,u=i.dataSource.total(),d=0;for(n=0;s.length>n;n++){if(t=s[n],t.type===v)return p;if(t.type===g)return m;if(t.type===_)return i.stage.height();t.data&&(d=c.max(d,t.data.length))}return e=c.max(u,d)*o.pointWidth,e>0&&(e+=a.left+a.right),e}}),x=s.extend({options:{animation:{duration:0}},_anchor:function(e,n){var t=s.fn._anchor.call(this,e,n),i=this._measure();return t.y=-i.height-this.options.offset,t},_hideElement:function(){this.element&&this.element.hide().remove()}});r.ui.plugin(y),u(r,{SparklineSharedTooltip:x})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(e,n,t){(t||n)()});
//# sourceMappingURL=kendo.dataviz.sparkline.min.js.map
