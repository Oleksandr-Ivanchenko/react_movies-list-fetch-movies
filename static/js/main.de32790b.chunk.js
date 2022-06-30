(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(14),c(9)),a=c(2),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=c(8),m=c(6),b=c.n(m),u=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://www.omdbapi.com/?apikey=d8fec2ef","&t=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if("True"!==(s=e.sent).Response){e.next=8;break}return e.abrupt("return",s);case 8:throw new Error("Movie not found!");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=(c(20),function(e){var t=e.addMovie,c=Object(r.useState)(null),s=Object(a.a)(c,2),i=s[0],n=s[1],d=Object(r.useState)(""),j=Object(a.a)(d,2),m=j[0],b=j[1],h=Object(r.useState)(!1),v=Object(a.a)(h,2),O=v[0],x=v[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input ".concat(O&&"is-danger"),onChange:function(e){b(e.target.value)},value:m})}),O&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"find",type:"button",className:"button is-light",onClick:function(){u(m).then((function(e){return n(e)})).catch((function(){x(!0)}))},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{disabled:O,"data-cy":"add",type:"button",className:"button is-primary",onClick:function(){i&&(t(i),n(null),b(""))},children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),i&&Object(l.jsx)(o,{movie:i})]})]})}),v=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(h,{addMovie:function(e){c.find((function(t){return t.imdbID===e.imdbID}))||s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.de32790b.chunk.js.map