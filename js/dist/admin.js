(()=>{var n={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return n.d(a,{a}),a},d:(t,a)=>{for(var i in a)n.o(a,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:a[i]})},o:(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r:n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};(()=>{"use strict";n.r(t);const a=flarum.core.compat["admin/app"];var i=n.n(a);i().initializers.add("foskym/flarum-pagination",(function(){i().extensionData.for("foskym-pagination").registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.canUserPref"),setting:"foskym-pagination.canUserPref",type:"boolean"}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.paginationOnLoading"),help:i().translator.trans("foskym-pagination.admin.settings.pagination.paginationOnLoading-Help"),setting:"foskym-pagination.paginationOnLoading",type:"boolean"}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.cacheDiscussions"),help:i().translator.trans("foskym-pagination.admin.settings.pagination.cacheDiscussions-Help"),setting:"foskym-pagination.cacheDiscussions",type:"boolean"}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.paginationPosition"),setting:"foskym-pagination.paginationPosition",options:{above:i().translator.trans("foskym-pagination.admin.settings.pagination.position.above"),under:i().translator.trans("foskym-pagination.admin.settings.pagination.position.under"),both:i().translator.trans("foskym-pagination.admin.settings.pagination.position.both")},type:"select"}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.perPage"),setting:"foskym-pagination.perPage",type:"number",min:1,max:50}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.perIndexInit"),setting:"foskym-pagination.perIndexInit",type:"number",min:1,max:50}).registerSetting({label:i().translator.trans("foskym-pagination.admin.settings.pagination.perLoadMore"),setting:"foskym-pagination.perLoadMore",type:"number",min:1,max:50})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map