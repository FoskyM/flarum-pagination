(()=>{var t={n:a=>{var n=a&&a.__esModule?()=>a.default:()=>a;return t.d(n,{a:n}),n},d:(a,n)=>{for(var i in n)t.o(n,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:n[i]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a);const n=flarum.core.compat["admin/app"];var i=t.n(n);i().initializers.add("lrysia/pagination",(function(){i().extensionData.for("lrysia-pagination").registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.CanUserPref"),setting:"LrysiaPagination.CanUserPref",type:"boolean"}).registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.PaginationFirst"),help:i().translator.trans("Lrysia-DLP.admin.settings.pagination.PaginationFirst-Help"),setting:"LrysiaPagination.PaginationFirst",type:"boolean"}).registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.NavBarPosition"),setting:"LrysiaPagination.NavBarPosition",options:{above:i().translator.trans("Lrysia-DLP.admin.settings.pagination.Position.Above"),under:i().translator.trans("Lrysia-DLP.admin.settings.pagination.Position.Under"),both:i().translator.trans("Lrysia-DLP.admin.settings.pagination.Position.Both")},type:"select"}).registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.PerPage"),setting:"LrysiaPagination.PerPage",type:"number",min:1,max:50}).registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.PerIndexInit"),setting:"LrysiaPagination.PerIndexInit",type:"number",min:1,max:50}).registerSetting({label:i().translator.trans("Lrysia-DLP.admin.settings.pagination.PerLoadMore"),setting:"LrysiaPagination.PerLoadMore",type:"number",min:1,max:50})}))})(),module.exports=a})();
//# sourceMappingURL=admin.js.map