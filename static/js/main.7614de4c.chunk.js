(this.webpackJsonptodofullstack2=this.webpackJsonptodofullstack2||[]).push([[0],{109:function(e,t,a){e.exports=a(249)},117:function(e,t,a){},118:function(e,t,a){},217:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){},220:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){},248:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),o=a.n(r),s=a(14),i=a(9),u=(a(117),function(e){var t=e.children,a=e.title,n=e.onClick,r=function(e){e.target===e.currentTarget&&n(!1)};return c.a.createElement("div",{className:"modal",onClick:function(e){return r(e)}},c.a.createElement("div",{className:"modal-wrapper"},c.a.createElement("span",{className:"modal-close icon icon-close",onClick:function(e){return r(e)}},c.a.createElement(c.a.Fragment,null)),c.a.createElement("div",{className:"modal-body"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h1",null,a)),c.a.createElement("div",{className:"modal-content"},t))))}),l=a(48),d=a.n(l),m=a(251),f=a(250),E=a(8),p=a.n(E),v=(a(118),function(e){var t=e.children,a=e.type,n=e.className,r=e.onClick,o=p()("btn",n);return c.a.createElement("button",{className:o,onClick:r,type:a},t)}),O=function(e){return e||"number"===typeof e?void 0:"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435!"},T=a(54),h=function(e){var t=e.children,a=e.touched,n=e.error,r=a&&n;return c.a.createElement("div",{className:p()("wrap-field",{error:r})},t,r&&c.a.createElement("label",{className:"error-label"},n))},b=function(e){var t=e.input,a=e.meta,n=e.type,r=Object(T.a)(e,["input","meta","type"]);return c.a.createElement(h,a,c.a.createElement("input",Object.assign({},t,{type:n},r)))},k=Object(f.a)({form:"addTodoForm"})((function(e){var t=e.handleSubmit;return c.a.createElement("form",{onSubmit:t,className:"form form-add-todo"},c.a.createElement(m.a,{name:"todoTitle",type:"text",component:b,validate:[O],autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0435\u043b"}),c.a.createElement(v,{type:"submit"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),N=a(252),L=function(e){var t=e.sumLists,a=e.createTodoList,r=function(){return d()().format("DD.MM.YYYY HH:mm:ss")},o=Object(n.useState)(r),s=Object(i.a)(o,2),l=s[0],m=s[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),p=E[0],v=E[1];setInterval((function(){return m(r)}),1e3);return c.a.createElement("div",{className:"todos-front__header"},c.a.createElement("div",{className:"todos-front__header_position_right"},c.a.createElement(N.a,{in:p,timeout:700,mountOnEnter:!0,unmountOnExit:!0,classNames:"modal-animate"},c.a.createElement(u,{title:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u0434\u0435\u043b",onClick:v},c.a.createElement(k,{onSubmit:function(e){var t=e.todoTitle;a({title:t}),v(!1)}}))),c.a.createElement("span",{onClick:function(){return v(!0)},className:"icon icon-plus"},c.a.createElement(c.a.Fragment,null))),c.a.createElement("div",{className:"todos-front__header_position_left"},c.a.createElement("div",{className:"todos-time"},l),c.a.createElement("div",{className:"todos-description"},"\u0412\u0441\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u043e\u0432 \u0434\u0435\u043b",c.a.createElement("strong",null," ".concat(t)))))},S=(a(217),function(e){var t=e.onClick,a=e.className,n=void 0===a?"":a,r=p()("icon",n);return c.a.createElement("span",{className:r,onClick:t},c.a.createElement(c.a.Fragment,null))}),j=(a(218),function(e){var t=e.createdAt,a=e.tasks,n=e.title,r=e._id,o=e.removeTodoList,s=e.getTasks;return c.a.createElement("div",{className:"todos-list__item",onClick:function(){return s(r,n)}},c.a.createElement("div",{className:"todos-list__item-content"},c.a.createElement("span",{className:"todo-title"},n),c.a.createElement("div",{className:"todos-list__item-info"},c.a.createElement("span",null,"\u0421\u043e\u0437\u0434\u0430\u043d ".concat(d()(t).format("DD.MM.YYYY \u0432 HH:mm:ss")," ")),c.a.createElement("span",{className:"sum-tasks"},"\u0417\u0430\u0434\u0430\u043d\u0438\u0439 - ".concat(a.length)))),c.a.createElement(S,{className:"icon-close",onClick:function(e){return function(e,t){e.stopPropagation(),o(t,n)}(e,r)}}))}),C=(a(219),function(){return c.a.createElement("div",{className:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))}),y=a(254),_=(a(220),function(e){var t=e.todoLists,a=e.getTasks,n=e.removeTodoList;return c.a.createElement("div",{className:p()("todos-front__main",{"empty-lists":t&&0===t.length})},t?0===t.length?c.a.createElement("div",{className:"todos-list__item empty-list"},"\u0421\u043f\u0438\u0441\u043a\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"):c.a.createElement(y.a,{className:"todos-list"},t.map((function(e){return c.a.createElement(N.a,{key:e._id,timeout:1500,classNames:"item"},c.a.createElement(j,Object.assign({},e,{key:e._id,getTasks:a,removeTodoList:n})))}))):c.a.createElement(C,null))}),D=function(e){var t=e.todoLists,a=e.funcs;return c.a.createElement("div",{className:"todos-front"},c.a.createElement(L,{sumLists:t?t.length:0,createTodoList:a.createTodoList}),c.a.createElement(_,{todoLists:t,removeTodoList:a.removeTodoList,getTasks:a.getTasks}))},g=a(5),I=a.n(g),x=a(52),w=x.create({baseURL:"https://drunik-todolist.herokuapp.com/todolists/"}),A=function(){var e;return I.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.awrap(w.get());case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}))},F=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I.a.awrap(w.delete(e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},H=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I.a.awrap(w.post(null,e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},R=function(e,t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(w.put(e,{title:t}));case 2:return a=n.sent,console.log(a),n.abrupt("return",a.data);case 5:case"end":return n.stop()}}))},V=x.create({baseURL:"https://drunik-todolist.herokuapp.com/tasks/"}),M=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I.a.awrap(V.post(null,e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},B=function(e){var t;return I.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,I.a.awrap(V.delete(e));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}))},K=function(e,t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(V.put(e,t));case 2:return a=n.sent,n.abrupt("return",a.data);case 4:case"end":return n.stop()}}))},Y=a(17),P=a.n(Y),G="/TODO/SEARCH",J="/TODO/FILTER",W=function(e,t,a,n,c){e({type:"/TODO/SET-CHIP",chip:{type:t,title:a,id:n,headerChip:c}}),setTimeout((function(){e({type:"/TODO/REMOVE-CHIP",chipId:n})}),3e3)},U={fetchTodoLists:function(){return function(e){A().then((function(t){e({type:"/TODO/SET-TODO-LISTS",todoLists:t}),W(e,"success","\u0421\u043f\u0438\u0441\u043a\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b",P()(),"\u0412\u0441\u0435 \u0441\u043f\u0441\u0438\u0441\u043a\u0438")})).catch((function(t){t=JSON.parse(JSON.stringify(t)),W(e,"error",t.message,P()(),t.name)}))}},removeTodoList:function(e,t){return function(a){var n;return I.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,I.a.awrap(F(e));case 3:n=c.sent,a({type:"/TODO/REMOVE-TODO-LIST",todoId:e}),W(a,"success",n.status,P()(),t),c.next=11;break;case 8:c.prev=8,c.t0=c.catch(0),console.log(c.t0);case 11:case"end":return c.stop()}}),null,null,[[0,8]])}},createTodoList:function(e){return function(t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(H(e));case 2:a=n.sent,t({type:"/TODO/ADD-TODO-LIST",todoList:a}),W(t,"success","\u0421\u043f\u0438\u0441\u043e\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d",P()(),a.title);case 5:case"end":return n.stop()}}))}},editTodoList:function(e,t){return function(a){return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I.a.awrap(R(e,t));case 3:a({type:"/TODO/EDIT-TODO-LIST",todoList:{_id:e,title:t}}),W(a,"success","\u0421\u043f\u0438\u0441\u043e\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d",P()()),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}},getTasks:function(e,t){return function(a){a({type:"/TODO/GET-TASKS",todoId:e,todoTitle:t}),a({type:"CHANGE-ACTIVE-CARD-SIDE",isActiveCardSide:!0}),W(a,"success","\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d",P()(),"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f")}},createTask:function(e){return function(t){var a;return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(M(e));case 2:a=n.sent,t({type:"/TODO/ADD-TASK",newTask:a}),W(t,"success","\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e",P()(),a.title);case 5:case"end":return n.stop()}}))}},removeTask:function(e,t){return function(a){return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(B(e));case 2:a({type:"/TODO/REMOVE-TASK",taskId:e}),W(a,"success","\u0417\u0430\u0434\u0430\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e",P()(),t);case 4:case"end":return n.stop()}}))}},editTask:function(e,t){return function(a){return I.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,I.a.awrap(K(e,t));case 2:a({type:"/TODO/EDIT-TASK",taskId:e,editTaskData:t}),W(a,"success","\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0437\u0430\u0434\u0430\u043d\u0438\u0438 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b",P()());case 4:case"end":return n.stop()}}))}},changeActiveCardSide:function(e){return function(t){t({type:"/TODO/CHANGE-ACTIVE-CARD-SIDE",isActiveCardSide:e})}},searchTasks:function(e,t){return function(a){return a({type:G,todoId:e,searchString:t})}},handleFilters:function(e){return function(t){return t({type:J,filter:e})}},removeChip:function(e){return function(t){return t({type:"/TODO/REMOVE-CHIP",chipId:e})}}},q=function(e){return e.todo.isActiveCardSide},X=function(e){return e.todo.chips},z=function(e){return e.todo.todoLists},Q=function(e){return e.todo.activeTasks},Z=function(e){return e.todo.activeList},$=function(e){return e.todo.todoTitle},ee=function(e){return e.todo.filter},te=Object(s.b)((function(e){return{todoLists:z(e),activeTasks:Q(e)}}),U)((function(e){var t=e.todoLists,a=e.fetchTodoLists,r=e.removeTodoList,o=e.createTodoList,s=e.getTasks;return Object(n.useEffect)((function(){return a()}),[a]),c.a.createElement(D,{todoLists:t,funcs:{removeTodoList:r,getTasks:s,createTodoList:o}})})),ae=a(6),ne=(a(69),Object(f.a)({form:"searchForm"})((function(e){var t=e.change,a=e.onBlur,n=e.className,r=p()("form","form-search",n);return c.a.createElement("form",{className:r},c.a.createElement(m.a,{name:"search",component:b,type:"text",onBlur:a,autoFocus:!0,onChange:t,placeholder:"\u041f\u043e\u0438\u0441\u043a"}))}))),ce=(a(238),function(e){var t=e.searchTasks,a=e.todoId,r=e.setIsActiveSearch,o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],l=s[1],d=Object(n.useState)(!0),m=Object(i.a)(d,2),f=m[0],E=m[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),O=v[0],T=v[1];return c.a.createElement("div",{className:"search"},c.a.createElement(N.a,{in:u,classNames:"search",onEnter:function(){return E(!1)},onExited:function(){E(!0),window.innerWidth<576&&r(!1)},mountOnEnter:!0,unmountOnExit:!0,timeout:500},c.a.createElement(ne,{onChange:function(e){var n=e.search;t(a,n),T(n)},initialValues:{search:O},onBlur:function(){return l(!1)}})),f&&c.a.createElement(S,{className:"icon-search",onClick:function(){l(!0),window.innerWidth<576&&r(!0)}}))}),re=(a(239),function(e){var t=e.onHandleFilters,a=e.className,n=function(e,a){document.querySelectorAll(".filter .btn").forEach((function(e){return e.classList.remove("active")})),e.target.classList.add("active"),t(a)},r=p()("filter btn-group",{"hide-filter":a});return c.a.createElement("div",{className:r},c.a.createElement(v,{className:"active",onClick:function(e){return n(e,"all")}},"\u0412\u0441\u0435"),c.a.createElement(v,{onClick:function(e){return n(e,"active")}},"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"),c.a.createElement(v,{onClick:function(e){return n(e,"done")}},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"))}),oe=Object(f.a)({form:"editTodoTitleForm"})((function(e){var t=e.handleSubmit,a=e.setIsEditMode,n=e.onBlur;return c.a.createElement("form",{onSubmit:t,className:"form form-todo-title"},c.a.createElement(m.a,{name:"todoTitle",component:b,type:"text",onBlur:n,autoFocus:!0,validate:[O]}),c.a.createElement(S,{className:"icon icon-floppy-o",onClick:t}),c.a.createElement(S,{className:"icon icon-share-square-o",onClick:function(){return a(!1)}}),c.a.createElement(v,{type:"submit",className:"hide"}))})),se=Object(f.a)({form:"addTaskForm"})((function(e){var t=e.handleSubmit,a=e.onBlur;return c.a.createElement("form",{className:"form form-add-task",onSubmit:t},c.a.createElement(m.a,{name:"taskTitle",type:"text",component:b,onBlur:a,validate:[O],autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u043b\u0430"}),c.a.createElement(v,{type:"submit",className:"hide"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),ie=(a(240),function(e){var t=e.createTask,a=e.todoId,r=e.setIsHideTitleTodo,o=Object(n.useState)(!1),s=Object(i.a)(o,2),u=s[0],l=s[1],d=Object(n.useState)(!0),m=Object(i.a)(d,2),f=m[0],E=m[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),O=v[0],T=v[1];return c.a.createElement("div",{className:"add-task"},c.a.createElement(N.a,{in:u,classNames:"add-task",onEnter:function(){return E(!1)},onExited:function(){E(!0),window.innerWidth<700&&r(!1)},mountOnEnter:!0,unmountOnExit:!0,timeout:500},c.a.createElement(se,{onSubmit:function(e){var n=e.taskTitle;l(!1),T(""),t({title:n,todoId:a})},initialValues:{taskTitle:O},onChange:function(e){var t=e.taskTitle;T(t)},onBlur:function(){return l(!1)}})),f&&c.a.createElement(S,{className:"icon-plus",onClick:function(){l(!0),window.innerWidth<700&&r(!0)}}))}),ue=(a(241),function(e){var t=e.todoTitle,a=e.todoId,r=e.createTask,o=e.editTodoList,s=e.changeActiveCardSide,u=Object(n.useState)(!1),l=Object(i.a)(u,2),d=l[0],m=l[1],f=Object(n.useState)(!1),E=Object(i.a)(f,2),p=E[0],v=E[1],O=Object(n.useState)(!0),T=Object(i.a)(O,2),h=T[0],b=T[1];return c.a.createElement("div",{className:"todos-back__header"},c.a.createElement(S,{className:"icon-home",onClick:function(){s(!1),v(!1)}}),!d&&c.a.createElement(N.a,{in:p,classNames:"todos-back__header",onEnter:function(){return b(!1)},onExited:function(){return b(!0)},mountOnEnter:!0,unmountOnExit:!0,timeout:200},c.a.createElement(oe,{initialValues:{todoTitle:t},setIsEditMode:v,onSubmit:function(e){var t=e.todoTitle;o(a,t),v(!1)}})),!d&&h&&c.a.createElement("div",{className:"todos-back__header-title",onClick:function(){return v(!0)}},c.a.createElement("h1",null,t),c.a.createElement(S,{className:"icon icon-pencil"})),c.a.createElement(ie,{createTask:r,todoId:a,setIsHideTitleTodo:m}))}),le=a(53),de=(a(242),function(e){var t=e.id,a=e.checked,n=e.type,r=e.name,o=e.onChange;return c.a.createElement("div",{className:"checkbox-custom"},c.a.createElement("input",{type:n,name:r,onChange:o,id:t,checked:a,className:"checkbox-custom__input"}),c.a.createElement("label",{htmlFor:t,className:"checkbox-custom__label"},c.a.createElement(c.a.Fragment,null)))}),me=Object(f.a)((function(e){return{form:e.id}}))((function(e){var t=e.handleSubmit,a=e.form,n=e.onBlur;return c.a.createElement("form",{onSubmit:t,className:"form form-edit-task"},c.a.createElement(m.a,{name:a,component:b,type:"text",onBlur:n,autoFocus:!0,validate:[O]}),c.a.createElement(v,{type:"submit",className:"hide"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))})),fe=(a(243),function(e){var t=e._id,a=e.title,r=e.done,o=e.important,s=e.removeTask,u=e.editTask,l=Object(n.useState)(!1),d=Object(i.a)(l,2),m=d[0],f=d[1],E=Object(n.useState)(!0),v=Object(i.a)(E,2),O=v[0],T=v[1],h=Object(n.useState)(a),b=Object(i.a)(h,2),k=b[0],L=b[1];return c.a.createElement("div",{className:p()("todos-task",{done:r})},c.a.createElement(N.a,{in:m,classNames:"add-task",onEnter:function(){return T(!1)},onExited:function(){return T(!0)},mountOnEnter:!0,unmountOnExit:!0,timeout:500},c.a.createElement(me,{form:t,onBlur:function(){return f(!1)},onChange:function(e){return L(e[t])},onSubmit:function(e){u(t,{title:e[t]}),f(!m)},initialValues:Object(le.a)({},t,k)})),O&&c.a.createElement("div",{className:"todos-task-left-block"},c.a.createElement(de,{id:t,type:"checkbox",onChange:function(){return u(t,{done:!r})},name:"task",checked:r}),c.a.createElement("span",{className:p()("task-title",{important:o},{done:r})},a)),c.a.createElement("div",{className:"icon-group"},O&&c.a.createElement(S,{className:p()("icon-pencil",{active:m},{disabled:m}),onClick:function(){return f(!0)}}),c.a.createElement(S,{className:p()("icon-exclamation",{active:o}),onClick:function(){return u(t,{important:!o})}}),c.a.createElement(S,{className:"icon-trash-o",onClick:function(){return s(t)}})))}),Ee=(a(244),function(e){var t=e.tasks,a=e.funcs;return c.a.createElement("div",{className:"todos-tasks"},c.a.createElement(y.a,null,t.map((function(e){return c.a.createElement(N.a,{key:e._id,timeout:200,classNames:"item"},c.a.createElement(fe,Object.assign({key:e._id},e,{editTask:a.editTask,handleFilters:a.handleFilters,removeTask:a.removeTask})))}))),0===t.length&&c.a.createElement("div",{className:"todos-task task-empty"},"\u0417\u0430\u043f\u0438\u0441\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442"))}),pe=(a(245),function(e){var t=e.activeList,a=e.todoTitle,r=e.filter,o=e.funcs,s=Object(n.useState)(!1),u=Object(i.a)(s,2),l=u[0],d=u[1];if(!t)return c.a.createElement(C,null);var m=function(e){var t=e.tasks;switch(r){case"active":return t.filter((function(e){return!e.done}));case"done":return t.filter((function(e){return e.done}));default:return t}}(t);return c.a.createElement("div",{className:"todos-back"},c.a.createElement(ue,{todoTitle:a,todoId:t._id,createTask:o.createTask,editTodoList:o.editTodoList,changeActiveCardSide:o.changeActiveCardSide}),c.a.createElement("div",{className:"todos-back__main"},c.a.createElement("div",{className:"search-filter-block"},c.a.createElement(ce,{setIsActiveSearch:d,todoId:t._id,searchTasks:o.searchTasks}),c.a.createElement(re,{searchTasks:o.searchTasks,className:l,onHandleFilters:function(e){return o.handleFilters(e)},todoId:t._id})),c.a.createElement(Ee,{tasks:m,funcs:o})))}),ve=Object(s.b)((function(e){return{activeList:Z(e),todoTitle:$(e),filter:ee(e)}}),U)((function(e){var t=e.activeList,a=e.todoTitle,n=e.filter,r=Object(T.a)(e,["activeList","todoTitle","filter"]);return c.a.createElement(pe,{activeList:t,todoTitle:a,filter:n,funcs:Object(ae.a)({},r)})})),Oe=function(e){var t=e.type,a=e.id,n=e.title,r=e.headerChip,o=e.removeChip;return c.a.createElement("div",{className:p()("chip",t)},c.a.createElement(S,{onClick:function(){return o(a)},className:"icon-close"}),r&&c.a.createElement("h3",null,r),c.a.createElement("p",null,n))},Te=(a(246),function(e){var t=e.chips,a=e.removeChip;return c.a.createElement(y.a,{className:"container-chips"},t.map((function(e){return c.a.createElement(N.a,{key:e.id,timeout:500,classNames:"chip"},c.a.createElement(Oe,Object.assign({removeChip:a},e)))})))}),he=function(e){var t=e.isActiveCardSide,a=e.chips,n=e.removeChip;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Te,{chips:a,removeChip:n}),c.a.createElement("div",{className:"todos"},c.a.createElement("div",{className:p()("todos_wrap",{"active-back":t})},c.a.createElement(te,null),c.a.createElement(ve,null))))},be=a(7),ke=a(107),Ne=a(38),Le={todoLists:null,activeList:null,isActiveCardSide:!1,todoTitle:"",filter:"all",chips:[]},Se=a(253),je=Object(be.c)({todo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.todoLists,c=t.todoId,r=t.todoList,o=t.todoTitle,s=t.isActiveCardSide,i=t.newTask,u=t.taskId,l=t.editTaskData,d=t.searchString,m=t.filter,f=t.chip,E=t.chipId;switch(a){case"/TODO/SET-CHIP":return Object(ae.a)({},e,{chips:[].concat(Object(Ne.a)(e.chips),[f])});case"/TODO/REMOVE-CHIP":return Object(ae.a)({},e,{chips:e.chips.filter((function(e){return e.id!==E}))});case"/TODO/SET-TODO-LISTS":return Object(ae.a)({},e,{todoLists:n});case"/TODO/ADD-TODO-LIST":return Object(ae.a)({},e,{todoLists:[].concat(Object(Ne.a)(e.todoLists),[r])});case"/TODO/EDIT-TODO-LIST":return Object(ae.a)({},e,{todoLists:e.todoLists.map((function(e){return e._id===r._id&&(e.title=r.title),e})),activeList:e.todoLists.filter((function(e){return e._id===r._id}))[0],todoTitle:r.title});case"/TODO/REMOVE-TODO-LIST":return Object(ae.a)({},e,{todoLists:e.todoLists.filter((function(e){return e._id!==c}))});case"/TODO/GET-TASKS":return Object(ae.a)({},e,{activeList:e.todoLists.filter((function(e){return e._id===c}))[0],isActiveCardSide:!e.isActiveCardSide,todoTitle:o});case"/TODO/CHANGE-ACTIVE-CARD-SIDE":return Object(ae.a)({},e,{isActiveCardSide:s});case"/TODO/ADD-TASK":return Object(ae.a)({},e,{todoLists:e.todoLists.map((function(e){return i.todoId===e._id?Object(ae.a)({},e,{tasks:[].concat(Object(Ne.a)(e.tasks),[i])}):e})),activeList:Object(ae.a)({},e.activeList,{tasks:[].concat(Object(Ne.a)(e.activeList.tasks),[i])})});case"/TODO/REMOVE-TASK":return Object(ae.a)({},e,{todoLists:e.todoLists.map((function(e){return Object(ae.a)({},e,{tasks:e.tasks.filter((function(e){return e._id!==u}))})})),activeList:Object(ae.a)({},e.activeList,{tasks:e.activeList.tasks.filter((function(e){return e._id!==u}))})});case"/TODO/EDIT-TASK":return Object(ae.a)({},e,{todoLists:e.todoLists.map((function(e){return Object(ae.a)({},e,{tasks:e.tasks.map((function(e){return e._id===u?Object(ae.a)({},e,{},l):e}))})})),activeList:Object(ae.a)({},e.activeList,{tasks:e.activeList.tasks.map((function(e){return e._id===u?Object(ae.a)({},e,{},l):e}))})});case G:var p=e.todoLists.filter((function(e){return e._id===c}))[0];return d&&(p=Object(ae.a)({},p,{tasks:p.tasks.filter((function(e){return e.title.toLowerCase().indexOf(d.toLowerCase())>-1}))})),Object(ae.a)({},e,{activeList:p});case J:return Object(ae.a)({},e,{filter:m});default:return e}},form:Se.a}),Ce=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d)(Object(be.a)(ke.a)),ye=Object(be.e)(je,Ce),_e=function(e){return c.a.createElement(he,e)};_e=Object(s.b)((function(e){return{isActiveCardSide:q(e),chips:X(e)}}),U)(_e);a(247),a(248);o.a.render(c.a.createElement((function(){return c.a.createElement(s.a,{store:ye},c.a.createElement(_e,null))}),null),document.getElementById("root"))},69:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.7614de4c.chunk.js.map