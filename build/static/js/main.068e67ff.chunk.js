(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(7),i=n.n(a),s=(n(17),n(8)),l=n(2),o=n(5),j=(n(18),n(0)),r=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)(""),o=Object(l.a)(s,2),r=o[0],d=o[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),x=b[0],O=b[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:r,date:new Date(x)};e.onSaveExpenseData(n),i(""),d(""),O("")},children:[Object(j.jsxs)("div",{className:"new-expense__controls",children:[Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:a,onChange:function(e){i(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Amount"}),Object(j.jsx)("input",{type:"number",min:"0.5",step:"0.5",value:r,onChange:function(e){d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"new-expense__control",children:[Object(j.jsx)("label",{children:"Date"}),Object(j.jsx)("input",{type:"date",min:"2019-01-01",max:"2050-12-31",value:x,onChange:function(e){O(e.target.value)}})]})]}),Object(j.jsxs)("div",{className:"new-expense__actions",children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},d=(n(20),function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1];return Object(j.jsxs)("div",{className:"new-expense",children:[!a&&Object(j.jsx)("button",{onClick:function(){i(!0)},children:"Add New Expense"}),a&&Object(j.jsx)(r,{onSaveExpenseData:function(t){var n=Object(o.a)(Object(o.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),i(!1)},onCancel:function(){i(!1)}})]})}),u=(n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(j.jsxs)("div",{className:"expense-date",children:[Object(j.jsx)("div",{className:"expense-date__month",children:t}),Object(j.jsx)("div",{className:"expense-date__year",children:c}),Object(j.jsx)("div",{className:"expense-date__day",children:n})]})}),b=(n(22),function(e){var t="card "+e.className;return Object(j.jsx)("div",{className:t,children:e.children})}),x=(n(23),function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(b,{className:"expense-item",children:[Object(j.jsx)(u,{date:e.date}),Object(j.jsxs)("div",{className:"expense-item__description",children:[Object(j.jsx)("h2",{children:e.title}),Object(j.jsxs)("div",{className:"expense-item__price",children:["Rs. ",e.amount]})]})]})})}),O=(n(24),function(e){return Object(j.jsx)("div",{className:"expenses-filter",children:Object(j.jsxs)("div",{className:"expenses-filter__control",children:[Object(j.jsx)("label",{children:"Filter by year"}),Object(j.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(j.jsx)("option",{value:"2040",children:"2040"}),Object(j.jsx)("option",{value:"2039",children:"2039"}),Object(j.jsx)("option",{value:"2038",children:"2038"}),Object(j.jsx)("option",{value:"2037",children:"2037"}),Object(j.jsx)("option",{value:"2036",children:"2036"}),Object(j.jsx)("option",{value:"2035",children:"2035"}),Object(j.jsx)("option",{value:"2034",children:"2034"}),Object(j.jsx)("option",{value:"2033",children:"2033"}),Object(j.jsx)("option",{value:"2032",children:"2032"}),Object(j.jsx)("option",{value:"2031",children:"2031"}),Object(j.jsx)("option",{value:"2030",children:"2030"}),Object(j.jsx)("option",{value:"2029",children:"2029"}),Object(j.jsx)("option",{value:"2028",children:"2028"}),Object(j.jsx)("option",{value:"2027",children:"2027"}),Object(j.jsx)("option",{value:"2026",children:"2026"}),Object(j.jsx)("option",{value:"2025",children:"2025"}),Object(j.jsx)("option",{value:"2024",children:"2024"}),Object(j.jsx)("option",{value:"2023",children:"2023"}),Object(j.jsx)("option",{value:"2022",children:"2022"}),Object(j.jsx)("option",{value:"2021",children:"2021"}),Object(j.jsx)("option",{value:"2020",children:"2020"}),Object(j.jsx)("option",{value:"2019",children:"2019"})]})]})})}),p=(n(25),function(e){var t=Object(c.useState)("2020"),n=Object(l.a)(t,2),a=n[0],i=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===a})),o=Object(j.jsx)("p",{children:"No expenses found."});return s.length>0&&(o=s.map((function(e){return Object(j.jsx)(x,{title:e.title,amount:e.amount,date:e.date},e.id)}))),Object(j.jsx)("div",{children:Object(j.jsxs)(b,{className:"expenses",children:[Object(j.jsx)(O,{selected:a,onChangeFilter:function(e){i(e)}}),o]})})}),h=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("expenses");for(var t in e=e?JSON.parse(e):[{id:"e1",title:"Toilet Paper",amount:50,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:5e4,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:1e4,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}])e[t].date=new Date(e[t].date);a(e)}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{onAddExpense:function(e){a((function(t){var n=[e].concat(Object(s.a)(t));return localStorage.setItem("expenses",JSON.stringify(n)),n}))}}),Object(j.jsx)(p,{items:n})]})};i.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(h,{}))}],[[26,1,2]]]);
//# sourceMappingURL=main.068e67ff.chunk.js.map