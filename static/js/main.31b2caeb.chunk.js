(this["webpackJsonpnew-search-github"]=this["webpackJsonpnew-search-github"]||[]).push([[0],{11:function(e,t,n){e.exports={resultContainer:"Result_resultContainer__mHDss",result:"Result_result__10kQR",initResult:"Result_initResult__2ZRse",searchIcon:"Result_searchIcon__24ZNr"}},12:function(e,t,n){e.exports={Pagination:"MyPagination_Pagination__3YBxT",paginationElement:"MyPagination_paginationElement__2XHQe",selectedPage:"MyPagination_selectedPage__1tfl2",arrow:"MyPagination_arrow__SKB2H"}},37:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(14),a=n.n(s),i=(n(37),n(38),n(9)),o=n.n(i),l=n.p+"static/media/logo.e09cf6e4.svg",u=n(6),j=n(31),d=n.n(j).a.create({baseURL:"https://api.github.com/"}),p=function(e){return d.get("users/".concat(e))},b=function(e,t,n){return d.get("users/".concat(e,"/repos?page=").concat(t,"&per_page=").concat(n))},g={user:{},repositories:[],avatar_url:"",per_page:4,page:1,portionSize:4,isSuccess:!1,startElement:1,endElement:4},_="SET_USER",h="SET_REPOSITORIES",f="SET_CURRENT_PAGE",m="SET_SUCCESS",O="SET_START",x="SET_END",v=function(e){return{type:_,user:e}},S=function(e){return{type:h,repositories:e}},E=function(e){return{type:f,currentPage:e}},P=function(e){return{type:m,isSuccess:e}},N=function(e){return{type:O,startElement:e}},R=function(e){return{type:x,endElement:e}},y=function(e,t,n){return function(r){r(P(!0)),p(e).then((function(c){r(v(c.data)),b(e,t,n).then((function(e){r(S(e.data))}))})).catch((function(e){r(v(""))}))}},C=n(3),w=n.p+"static/media/search.a491d0a9.svg",k=n(1),T=function(){var e=Object(C.c)((function(e){return e.profile.page})),t=Object(C.c)((function(e){return e.profile.per_page})),n=Object(C.b)();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("img",{className:o.a.searchIcon,src:w,alt:""}),Object(k.jsx)("input",{onKeyPress:function(r){if("Enter"===r.key){r.preventDefault();var c=r.currentTarget.value;n(y(c,e,t))}},type:"text",name:"username",placeholder:"Enter GitHub username"})]})},H=function(){return Object(k.jsxs)("div",{className:o.a.header,children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:l})}),Object(k.jsx)("div",{className:o.a.searchForm,children:Object(k.jsx)(T,{})})]})};var F=function(){return Object(k.jsx)("div",{className:o.a.headerContainer,children:Object(k.jsx)(H,{})})},I=n(2),B=n(11),U=n.n(B);var L=function(e){var t=e.image,n=e.text;return Object(k.jsxs)("div",{className:U.a.initResult,children:[Object(k.jsx)("img",{className:U.a.searchIcon,src:t,alt:""}),Object(k.jsx)("span",{children:n})]})},A=n.p+"static/media/notFound.6b254376.svg",M=n(8),D=n.n(M),G=n.p+"static/media/users.8f7ad20e.svg",z=n.p+"static/media/repListEmpty.f5075737.svg",Y=function(e){var t=e.resRepositories,n=e.resUser,r=t.map((function(e){return Object(k.jsxs)("div",{className:D.a.repositoriesBlock,children:[Object(k.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.html_url,children:e.name}),Object(k.jsx)("div",{children:e.description})]},e+e.name)}));return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:D.a.Header,children:Object(k.jsxs)("div",{children:["Repositories (",n.public_repos,")"]})}),Object(k.jsx)("div",{className:D.a.repositories,children:r})]})},K=n(12),Q=n.n(K),q=function(e){for(var t=e.page,n=e.pageCount,r=(e.productTotalCount,e.getPage),c=(e.title,e.paginationStyle,e.buttonStyle,e.selectStyle,[]),s=Object(C.b)(),a=Object(C.c)((function(e){return e.profile})),i=Math.ceil(a.user.public_repos/a.per_page),o=function(e){c.push(Object(k.jsx)("button",{className:t===e?Q.a.selectedPage:Q.a.paginationElement,onClick:function(){return function(e,t){r(e,t)}(e,n)},children:e},e))},l=1;l<=i;l++)o(l);t+4<i&&(c[t+2]=Object(k.jsx)("span",{children:"..."},t+3),c=c.filter((function(e,n){return n<t+3||n===i-1}))),t>4&&(c[1]=Object(k.jsx)("span",{children:"..."},2),c=c.filter((function(e,n){return n<2||n>t-4})));var u=a.endElement;return Object(k.jsxs)("div",{className:Q.a.Pagination,children:[Object(k.jsx)("div",{style:{marginRight:"10px"},children:"".concat(a.startElement," - ").concat(u,"  of ").concat(a.user.public_repos," items")}),Object(k.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",display:"flex"},children:Object(k.jsx)("button",{className:Q.a.arrow,disabled:t<=1,onClick:function(){r(t-1,n),s(N(a.startElement-4)),s(R(a.endElement-4))},children:"<"})}),c,Object(k.jsx)("div",{style:{marginLeft:"5px",marginRight:"5px",display:"flex"},children:Object(k.jsx)("button",{className:Q.a.arrow,disabled:t>=i,onClick:function(){r(t+1,n),s(N(a.startElement+4)),s(R(a.endElement+4))},children:">"})})]})},J=function(e){var t=e.userName,n=e.resUser,r=e.resRepositories,c=e.onPageChanged,s=Object(C.c)((function(e){return e.profile}));return Object(k.jsxs)("div",{className:D.a.gridContainer,children:[Object(k.jsxs)("div",{className:D.a.Foto,children:[Object(k.jsx)("a",{href:n.html_url,children:Object(k.jsx)("img",{className:D.a.userImg,src:n.avatar_url,alt:""})}),Object(k.jsxs)("div",{className:D.a.userName,children:[Object(k.jsx)("h3",{children:t}),Object(k.jsx)("div",{children:Object(k.jsx)("a",{href:n.html_url,rel:"noreferrer",target:"_blank",children:n.login})})]}),Object(k.jsxs)("div",{className:D.a.followingBlock,children:[Object(k.jsxs)("span",{children:[Object(k.jsx)("img",{src:G,alt:""}),n.followers," followers"]}),Object(k.jsxs)("span",{children:[Object(k.jsx)("img",{src:A,alt:""}),n.following," following"]})]})]}),r?Object(k.jsx)(Y,{resRepositories:r,resUser:n}):Object(k.jsx)(L,{text:"Repository list is empty",image:z}),Object(k.jsx)(q,{page:s.page,pageCount:s.per_page,productTotalCount:s.portionSize,getPage:c})]})},Z=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.profile})),n=Object(C.c)((function(e){return e.profile.user})),r=Object(C.c)((function(e){return e.profile.repositories})),c=Object(C.c)((function(e){return e.profile.per_page})),s=""===n.name?"User don't have name":n.name;return Object(k.jsx)("div",{className:U.a.resultContainer,children:Object(k.jsx)("div",{className:U.a.result,children:n?Object(k.jsx)(J,{userName:s,resUser:n,resRepositories:r,paginationState:t,onPageChanged:function(t){e(E(t)),e(y(n.login,t,c)),e(N(4*t-3)),e(R(4*t))}}):Object(k.jsx)(L,{text:"User not found",image:A})})})},X="/",V="/search-user",W=function(){var e=Object(C.c)((function(e){return e.profile}));return Object(k.jsx)("div",{children:e.isSuccess?Object(k.jsx)(I.a,{path:V,children:function(){return Object(k.jsx)(Z,{})}}):Object(k.jsx)(I.a,{exact:!0,path:X,component:function(){return Object(k.jsx)(L,{text:"Start with searching a GitHub user",image:w})}})})};var $=function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(F,{}),Object(k.jsx)(W,{})]})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))},te=n(16),ne=n(32),re=Object(te.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{startElement:t.startElement});case x:return Object(u.a)(Object(u.a)({},e),{},{endElement:t.endElement});case _:return Object(u.a)(Object(u.a)({},e),{},{user:t.user});case h:return Object(u.a)(Object(u.a)({},e),{},{repositories:t.repositories});case f:return Object(u.a)(Object(u.a)({},e),{},{page:t.currentPage});case m:return Object(u.a)(Object(u.a)({},e),{},{isSuccess:t.isSuccess});default:return e}}}),ce=Object(te.c)(re,Object(te.a)(ne.a));window.store=ce;var se=n(19);a.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(C.a,{store:ce,children:Object(k.jsx)(se.a,{basename:"",children:Object(k.jsx)($,{})})})}),document.getElementById("root")),ee()},8:function(e,t,n){e.exports={gridContainer:"SuccessPage_gridContainer__i210D",Foto:"SuccessPage_Foto__1vqx3",userImg:"SuccessPage_userImg__292nv",followingBlock:"SuccessPage_followingBlock__1FYb-",userName:"SuccessPage_userName__1tLbz",Header:"SuccessPage_Header__3qG2E",repositories:"SuccessPage_repositories__3lidp",repositoriesBlock:"SuccessPage_repositoriesBlock__1_3lG",arrow:"SuccessPage_arrow__vaTEp",paginationElement:"SuccessPage_paginationElement__cfS69",selectedPage:"SuccessPage_selectedPage__3He0k",disabledArrow:"SuccessPage_disabledArrow__Ki0pk"}},9:function(e,t,n){e.exports={headerContainer:"Header_headerContainer__1RAzH",header:"Header_header__2QYYm",searchIcon:"Header_searchIcon__3SNoR",searchForm:"Header_searchForm__2eSLk"}}},[[63,1,2]]]);
//# sourceMappingURL=main.31b2caeb.chunk.js.map