/** 
 * Kendo UI v2016.2.714 (http://www.telerik.com/kendo-ui)                                                                                                                                               
 * Copyright 2016 Telerik AD. All rights reserved.                                                                                                                                                      
 *                                                                                                                                                                                                      
 * Kendo UI commercial licenses may be obtained at                                                                                                                                                      
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete                                                                                                                                  
 * If you do not own a commercial license, this file shall be governed by the trial license terms.                                                                                                      
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/
!function(t,define){define("kendo.data.odata.min",["kendo.core.min"],t)}(function(){return function(t,e){function n(a,r){var d,p,c,l,u,f,y,j,m=[],T=a.logic||"and",g=a.filters;for(d=0,p=g.length;p>d;d++)a=g[d],c=a.field,y=a.value,f=a.operator,a.filters?a=n(a,r):(j=a.ignoreCase,c=c.replace(/\./g,"/"),a=i[f],r&&(a=s[f]),"isnull"===f||"isnotnull"===f?a=o.format("{0} {1} null",c,a):"isempty"===f||"isnotempty"===f?a=o.format("{0} {1} ''",c,a):a&&y!==e&&(l=t.type(y),"string"===l?(u="'{1}'",y=y.replace(/'/g,"''"),j===!0&&(c="tolower("+c+")")):u="date"===l?r?"{1:yyyy-MM-ddTHH:mm:ss+00:00}":"datetime'{1:yyyy-MM-ddTHH:mm:ss}'":"{1}",a.length>3?"substringof"!==a?u="{0}({2},"+u+")":(u="{0}("+u+",{2})","doesnotcontain"===f&&(r?(u="{0}({2},'{1}') eq -1",a="indexof"):u+=" eq false")):u="{2} {0} "+u,a=o.format(u,a,y,c))),m.push(a);return a=m.join(" "+T+" "),m.length>1&&(a="("+a+")"),a}function a(t){for(var e in t)0===e.indexOf("@odata")&&delete t[e]}var o=window.kendo,r=t.extend,i={eq:"eq",neq:"ne",gt:"gt",gte:"ge",lt:"lt",lte:"le",contains:"substringof",doesnotcontain:"substringof",endswith:"endswith",startswith:"startswith",isnull:"eq",isnotnull:"ne",isempty:"eq",isnotempty:"ne"},s=r({},i,{contains:"contains"}),d={pageSize:t.noop,page:t.noop,filter:function(t,e,a){e&&(e=n(e,a),e&&(t.$filter=e))},sort:function(e,n){var a=t.map(n,function(t){var e=t.field.replace(/\./g,"/");return"desc"===t.dir&&(e+=" desc"),e}).join(",");a&&(e.$orderby=a)},skip:function(t,e){e&&(t.$skip=e)},take:function(t,e){e&&(t.$top=e)}},p={read:{dataType:"jsonp"}};r(!0,o.data,{schemas:{odata:{type:"json",data:function(t){return t.d.results||[t.d]},total:"d.__count"}},transports:{odata:{read:{cache:!0,dataType:"jsonp",jsonp:"$callback"},update:{cache:!0,dataType:"json",contentType:"application/json",type:"PUT"},create:{cache:!0,dataType:"json",contentType:"application/json",type:"POST"},destroy:{cache:!0,dataType:"json",type:"DELETE"},parameterMap:function(t,e,n){var a,r,i,s;if(t=t||{},e=e||"read",s=(this.options||p)[e],s=s?s.dataType:"json","read"===e){a={$inlinecount:"allpages"},"json"!=s&&(a.$format="json");for(i in t)d[i]?d[i](a,t[i],n):a[i]=t[i]}else{if("json"!==s)throw Error("Only json dataType can be used for "+e+" operation.");if("destroy"!==e){for(i in t)r=t[i],"number"==typeof r&&(t[i]=r+"");a=o.stringify(t)}}return a}}}}),r(!0,o.data,{schemas:{"odata-v4":{type:"json",data:function(e){return e=t.extend({},e),a(e),e.value?e.value:[e]},total:function(t){return t["@odata.count"]}}},transports:{"odata-v4":{read:{cache:!0,dataType:"json"},update:{cache:!0,dataType:"json",contentType:"application/json;IEEE754Compatible=true",type:"PUT"},create:{cache:!0,dataType:"json",contentType:"application/json;IEEE754Compatible=true",type:"POST"},destroy:{cache:!0,dataType:"json",type:"DELETE"},parameterMap:function(t,e){var n=o.data.transports.odata.parameterMap(t,e,!0);return"read"==e&&(n.$count=!0,delete n.$inlinecount),n}}}})}(window.kendo.jQuery),window.kendo},"function"==typeof define&&define.amd?define:function(t,e,n){(n||e)()});
//# sourceMappingURL=kendo.data.odata.min.js.map
