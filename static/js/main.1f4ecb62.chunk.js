(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(5),s=c.n(n),r=c(2),o=c(1),i=(c(10),c(11),c(4)),a=c.n(i),l=(c(12),c(0)),d=function(e){var t=e.todos,c=e.changeUser,n=e.selectedUserId,s=Object(o.useState)(""),i=Object(r.a)(s,2),d=i[0],u=i[1],j=Object(o.useState)([]),b=Object(r.a)(j,2),h=b[0],O=b[1],p=Object(o.useState)(""),m=Object(r.a)(p,2),f=m[0],x=m[1];return Object(o.useEffect)((function(){var e=d.toLowerCase();O(t.filter((function(t){if(!t.title.includes(e))return!1;switch(f){case"all":default:return!0;case"active":return!t.completed;case"completed":return t.completed}})))}),[d,f,t]),Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter text",value:d,onChange:function(e){return u(e.target.value)}}),Object(l.jsxs)("select",{value:f,onChange:function(e){return x(e.target.value)},children:[Object(l.jsx)("option",{value:"all",children:" All "}),Object(l.jsx)("option",{value:"active",children:" Active "}),Object(l.jsx)("option",{value:"completed",children:" Completed "})]}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list",children:h.map((function(e){return Object(l.jsxs)("li",{className:a()("TodoList__item",{"TodoList__item--unchecked":!e.completed},{"TodoList__item--checked":e.completed}),children:[Object(l.jsxs)("label",{htmlFor:"".concat(e.id),children:[Object(l.jsx)("input",{type:"checkbox",id:"".concat(e.id),checked:e.completed,readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),Object(l.jsx)("button",{className:a()("TodoList__user-button",{"TodoList__user-button--selected":n===e.userId},"button"),type:"button",onClick:function(){c(e.userId)},children:"User#".concat(e.userId)})]},e.id)}))})})]})},u=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){return e.json()}))},j=(c(14),function(e){var t=e.userId,c=e.clearUser,n=Object(o.useState)(),s=Object(r.a)(n,2),i=s[0],a=s[1];return Object(o.useEffect)((function(){(function(e){return u("/users/".concat(e))})(t).then((function(e){return a(e)}))}),[t]),Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsxs)("span",{children:["Selected user:",null===i||void 0===i?void 0:i.id]})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:null===i||void 0===i?void 0:i.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:null===i||void 0===i?void 0:i.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:null===i||void 0===i?void 0:i.phone}),Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){return c(0)},children:"Clear"})]})}),b=function(){var e=Object(o.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),i=Object(r.a)(s,2),a=i[0],b=i[1];return Object(o.useEffect)((function(){u("/todos").then((function(e){return b(e)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(d,{todos:a,changeUser:n,selectedUserId:c})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(j,{userId:c,clearUser:n}):"No user selected"})})]})};s.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.1f4ecb62.chunk.js.map