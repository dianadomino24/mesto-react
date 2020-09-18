(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),l=(a(13),a(1)),s=a(5),i=a(6),p=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(s.a)(this,e),this.baseUrl=a,this.headers=n}return Object(i.a)(e,[{key:"getItems",value:function(e){return fetch(this.baseUrl.concat(e),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createItem",value:function(e,t){return fetch(this.baseUrl.concat(t),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeItem",value:function(e,t){return fetch(this.baseUrl.concat(t),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"replaceItem",value:function(e,t){return fetch(this.baseUrl.concat(e).concat("/".concat(t)),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteItem",value:function(e,t){return fetch(this.baseUrl.concat(e).concat("/".concat(t)),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/".concat("cohort-14","/"),headers:{authorization:"3829caf2-6683-412f-9e00-d0870fcd1817","Content-Type":"application/json"}}),u=a(7),m=a.n(u);var _=function(){return c.a.createElement("header",{className:"header page__header section"},c.a.createElement("a",{href:"#",className:"logo header__logo"},c.a.createElement("img",{className:"logo__image",src:m.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto"})))},d=a(2);function f(e){return c.a.createElement("li",{className:"places__item"},c.a.createElement("figure",{className:"place"},c.a.createElement("button",{className:e.owner._id===e.currentUserId?"link place__delete-button":"link place__delete-button place__delete-button_disabled"}),c.a.createElement("img",{src:e.link,alt:e.name,className:"place__image",onClick:function(){e.onCardClick(e.card)}}),c.a.createElement("div",{className:"place__wrapper"},c.a.createElement("h2",{className:"place__name"},e.name," "),c.a.createElement("button",{className:"place__like-button-container"},c.a.createElement("div",{className:e.owner._id===e.currentUserId?"place__like-button place__like-button_active":"place__like-button"}),c.a.createElement("div",{className:"place__like-counter"},e.likes.length)))))}var h=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.userName,o=e.userDescription,l=e.userAvatar,s=e.cards,i=e.currentUserId,p=e.handleCardClick;return Object(d.a)(e,["onEditProfile","onAddPlace","onEditAvatar","userName","userDescription","userAvatar","cards","currentUserId","handleCardClick"]),c.a.createElement("main",{className:"content page__content section"},c.a.createElement("section",{className:"profile section"},c.a.createElement("div",{className:"profile__image",onClick:n,style:{backgroundImage:"url(".concat(l,")")}}),c.a.createElement("div",{className:"profile__info"},c.a.createElement("div",{className:"profile__name-wrap"},c.a.createElement("h1",{className:"profile__name"},r),c.a.createElement("button",{className:"link profile__edit-button",onClick:t})),c.a.createElement("p",{className:"profile__job"},o)),c.a.createElement("button",{className:"link profile__add-button",onClick:a})),c.a.createElement("section",{className:"places section"},c.a.createElement("ul",{className:"places__list"},c.a.createElement("li",{className:"places__empty-list"},"\u041d\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u043c\u0435\u0441\u0442"),s.map((function(e){return c.a.createElement(f,Object.assign({key:e._id,currentUserId:i,onCardClick:p,card:e},e))})))))};var E=function(){return c.a.createElement("footer",{className:"footer section page__footer"},c.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var b=function(e){var t=e.title,a=e.name,n=e.buttonText,r=e.isOpen,o=e.onClose,l=e.children;return Object(d.a)(e,["title","name","buttonText","isOpen","onClose","children"]),r&&window.addEventListener("keydown",(function(e){return function(e){"Escape"===e.key&&o()}(e)})),c.a.createElement("section",{className:"popup popup_type_".concat(a," ").concat(r?"popup_opened":""),onClick:function(e){e.target===e.currentTarget&&o()}},c.a.createElement("div",{className:"popup__container"},c.a.createElement("button",{className:"link popup__close-button",onClick:o}),c.a.createElement("form",{className:"popup__form popup__form_type_".concat(a),noValidate:!0,name:a},c.a.createElement("h2",{className:"popup__title"},t),c.a.createElement("fieldset",{className:"popup__fieldset"},l,c.a.createElement("button",{className:"link popup__save-button",autoFocus:!0,type:"submit"},n)))))};var N=function(e){return e.card?(window.addEventListener("keydown",(function(t){return function(t){"Escape"===t.key&&e.onClose()}(t)})),c.a.createElement("section",{className:"popup popup_opened popup_type_picture-zoom",onClick:function(t){t.target===t.currentTarget&&e.onClose()}},c.a.createElement("div",{className:"popup__container-pic-zoom"},c.a.createElement("button",{className:"link popup__close-button",onClick:e.onClose}),c.a.createElement("figure",{className:"picture-zoom"},c.a.createElement("img",{src:e.card.link,alt:e.card.name,className:"picture-zoom__img"}),c.a.createElement("p",{className:"picture-zoom__title"},e.card.name))))):""};var k=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),f=d[0],k=d[1],g=Object(n.useState)(),v=Object(l.a)(g,2),j=v[0],y=v[1],O=Object(n.useState)("\u0416\u0430\u043a \u0418\u0432 \u041a\u0443\u0441\u0442\u043e"),C=Object(l.a)(O,2),w=C[0],I=C[1],U=Object(n.useState)("\u041c\u043e\u0440\u0435\u043f\u043b\u0430\u0432\u0430\u0442\u0435\u043b\u044c"),x=Object(l.a)(U,2),P=x[0],S=x[1],T=Object(n.useState)([]),A=Object(l.a)(T,2),L=A[0],z=A[1],q=Object(n.useState)(),F=Object(l.a)(q,2),D=F[0],J=F[1],M=Object(n.useState)(),B=Object(l.a)(M,2),W=B[0],H=B[1];function R(){k(!1),r(!1),u(!1),H()}return Object(n.useEffect)((function(){p.getItems("users/me").then((function(e){J(e._id),function(e){y(e.avatar),I(e.name),S(e.about)}(e)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){p.getItems("cards").then((function(e){var t=e.map((function(e){return{name:e.name,link:e.link,_id:e._id,likes:e.likes,owner:e.owner}}));z(t)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"page__container"},c.a.createElement(_,null),c.a.createElement(h,{onEditProfile:function(){r(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){k(!0)},userAvatar:j,userName:w,userDescription:P,cards:L,currentUserId:D,handleCardClick:function(e){H(e)}}),c.a.createElement(E,null),c.a.createElement(b,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a,onClose:R,children:c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"popup__label"},c.a.createElement("input",{type:"text",name:"profile-name",placeholder:"\u0418\u043c\u044f",id:"profile-name",className:"input popup__input popup__input_type_name",required:!0,minLength:"2",maxLength:"40"}),c.a.createElement("span",{className:"popup__input-error js-popup__input-error_type_profile"})),c.a.createElement("label",{className:"popup__label"},c.a.createElement("input",{type:"text",name:"profile-job",id:"profile-job",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",className:"input popup__input popup__input_type_job",required:!0,minLength:"2",maxLength:"200"}),c.a.createElement("span",{className:"popup__input-error js-popup__input-error_type_profile"})))}),c.a.createElement(b,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:i,onClose:R,children:c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"popup__label"},c.a.createElement("input",{type:"text",name:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place-name",className:"input popup__input popup__input_type_place-name",required:!0,minLength:"2",maxLength:"30"}),c.a.createElement("span",{className:"popup__input-error"})),c.a.createElement("label",{className:"popup__label"},c.a.createElement("input",{type:"url",name:"place-pic",id:"place-pic",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"input popup__input popup__input_type_place-pic",required:!0}),c.a.createElement("span",{className:"popup__input-error"})))}),c.a.createElement(b,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:f,onClose:R,children:c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{className:"popup__label"},c.a.createElement("input",{type:"url",name:"avatar",id:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"input popup__input popup__input_type_avatar",required:!0}),c.a.createElement("span",{className:"popup__input-error"})))}),c.a.createElement(b,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"card-delete",buttonText:"\u0414\u0430",isOpen:!1,onClose:R,children:c.a.createElement(c.a.Fragment,null)}),c.a.createElement(N,{card:W,onClose:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/logo.a56cd5e0.svg"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.2e8ff384.chunk.js.map