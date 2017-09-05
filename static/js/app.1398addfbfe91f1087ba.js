webpackJsonp([1],Array(32).concat([function(t,e,s){"use strict";var r=s(0),n=s(157),o=s(154),a=s(71),i=s(68),c=s(70),u=s(69),d=s(72),l=s(73);r.a.use(n.a),r.a.use(o.a);var h=window.location.host,f={get:function(t){return console.log("prefix",h),window.localStorage.getItem(h+t)},set:function(t,e){console.log("prefix",h),window.localStorage.setItem(h+t,e)},rm:function(t){window.localStorage.removeItem(h+t)}},m=new n.a.Store({state:{apiKey:"256fb33e0fa1570e3528e737f00996db",oauthToken:f.get("oauthToken"),showList:!1,showCard:!1,showSearch:!1,showBoardSettings:!1},getters:{apiKey:function(t){return t.apiKey},oauthToken:function(t){return t.oauthToken},showList:function(t){return t.showList},showCard:function(t){return t.showCard},showSearch:function(t){return t.showSearch},showBoardSettings:function(t){return t.showBoardSettings},isLoggedIn:function(t){return!!t.oauthToken}},actions:{logIn:function(t,e){f.set("oauthToken",e),t.commit("logIn",e)},logOut:function(t){f.rm("oauthToken"),t.commit("logIn",void 0)},setShowList:function(t){t.commit("showList",!0),t.commit("showCard",!1),t.commit("showSearch",!1),t.commit("showBoardSettings",!1)},setShowCard:function(t){t.commit("showList",!1),t.commit("showCard",!0),t.commit("showSearch",!1),t.commit("showBoardSettings",!1)},setShowSearch:function(t){t.commit("showList",!1),t.commit("showCard",!1),t.commit("showSearch",!0),t.commit("showBoardSettings",!1)},setShowBoardSettings:function(t,e){t.commit("showList",!1),t.commit("showCard",!1),t.commit("showSearch",!1),t.commit("showBoardSettings",!0)}},mutations:{logIn:function(t,e){t.oauthToken=e},showList:function(t,e){t.showList=e},showCard:function(t,e){t.showCard=e},showSearch:function(t,e){t.showSearch=e},showBoardSettings:function(t,e){t.showBoardSettings=e}},modules:{members:a.a,boards:i.a,lists:c.a,cards:u.a,organizations:d.a,search:l.a}});e.a=m},,,,,,,,,,,,,,,,,function(t,e,s){var r=s(1)(s(66),s(143),null,null,null);t.exports=r.exports},function(t,e,s){"use strict";var r=s(0),n=s(155),o=s(32),a=s(49),i=s.n(a),c=s(132),u=s.n(c),d=s(133),l=s.n(d),h=s(128),f=s.n(h);r.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"wiki",component:l.a},{path:"/boards",name:"boards",component:f.a},{path:"/boards/:boardId",name:"board",component:l.a},{path:"/card/:cardId",name:"card",component:l.a},{path:"/search",name:"search",component:i.a},{path:"/settings",name:"settings",component:u.a},{path:"/token=:token",name:"login",component:l.a,beforeEnter:function(t,e,s){o.a.dispatch("logIn",t.params.token),s({name:"boards"})}}]})},,function(t,e,s){function r(t){s(118)}var n=s(1)(s(53),s(150),r,null,null);t.exports=n.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(s(0),s(129)),n=s.n(r);e.default={name:"app",components:{NavBar:n.a},computed:{boardName:function(){return this.$store.getters.boardName},isLoggedIn:function(){return this.$store.getters.isLoggedIn},needsLogin:function(){return this.$store.getters.boardIsPrivate&&!this.$store.getters.isLoggedIn}},methods:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(0);e.default={name:"search",data:function(){return{selected:0,dropdownClass:"dropdown",tileWidth:3}},computed:{boardsByOrga:function(){if(this.$store.getters["members/members"].me){var t={};return this.$store.getters["members/members"].me.boards.forEach(function(e){var s=e.idOrganization||"me";t[s]||(t[s]=[]),t[s].push(e)}),t}return console.log("dispatching..."),this.$store.dispatch("members/get","me"),!1},organizations:function(){var t=this;return function(e){return t.$store.getters["organizations/organizations"][e]?t.$store.getters["organizations/organizations"][e].organization.displayName:e}}},methods:{organizationName:function(t){return console.log("id!",this.$store.getters["organizations/organizations"]),this.$store.getters["organizations/organizations"][t]?this.$store.getters["organizations/organizations"][t].name:t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(130),n=s.n(r),o=s(131),a=s.n(o);e.default={data:function(){return{toggled:!1}},computed:{navbarBurgerClass:function(){return this.toggled?"navbar-burger is-active":"navbar-burger"},navbarMenuClass:function(){return this.toggled?"navbar-menu is-active":"navbar-menu"}},methods:{toggle:function(){this.toggled=!this.toggled}},components:{LoginButton:n.a,LogoutButton:a.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{authUrl:function(){return"https://trello.com/1/authorize?expiration=never&scope=read,write&callback_method=fragment&name=wkki&key="+this.$store.getters.apiKey+"&return_url="+window.location.origin}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{logOut:function(){this.$store.dispatch("logOut")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{version:"2.3.2"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(s(0),s(134)),n=s.n(r),o=s(139),a=s.n(o),i=s(136),c=s.n(i),u=s(49),d=s.n(u),l=s(135),h=s.n(l);e.default={name:"board",components:{Board:n.a,Card:c.a,List:a.a,SearchResults:d.a,BoardSettings:h.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(0);e.default={name:"menu",data:function(){return{showInput:!1,newList:"",searchStr:""}},computed:{activeList:function(){return this.$store.getters["lists/current"]},board:function(){return this.$store.getters["boards/current"]?this.$store.getters["boards/current"]:[{name:"loading..."}]},isEditable:function(){if(this.$store.getters["boards/current"]){var t=this.$store.getters["boards/current"].board.id;return this.$store.getters["boards/isEditable"](t)}}},methods:{fetchList:function(t){this.$store.dispatch("lists/setCurrent",t),this.$store.dispatch("setShowList",!0)},toggleShowInput:function(){this.showInput=!this.showInput},addList:function(){this.$store.dispatch("boards/addList",{name:this.newList,boardId:this.$store.getters["boards/current"].board.id}),this.showInput=!1,this.newList=""},search:function(){console.log(this.searchStr),this.$store.dispatch("search/search",{query:this.searchStr,boardId:this.$store.getters["boards/current"].board.id}),this.$store.dispatch("setShowSearch",!0)}},mounted:function(){this.$route.params.boardId&&(this.$store.dispatch("boards/setCurrent",this.$route.params.boardId),this.$store.dispatch("cards/setCurrent",!1))}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(0);e.default={name:"settings",components:{},computed:{},methods:{},mounted:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(s(0),s(119)),n=s.n(r),o=s(138),a=s.n(o),i=s(137),c=s.n(i),u=new n.a.Converter({});e.default={name:"item",components:{EditItem:a.a,BreadCrumbs:c.a},computed:{card:function(){return this.$store.getters["cards/current"]?this.$store.getters["cards/current"].card:(console.log("no card yet..."),!1)},isEditable:function(){var t=this.$store.getters["boards/current"].board.id;return this.$store.getters["boards/isEditable"](t)},edit:function(){return!(!this.$store.getters["cards/current"]||!this.isEditable)&&this.$store.getters["cards/current"].edit}},methods:{convert:function(t){return u.makeHtml(t)||"[no text]"},toggleEdit:function(){if(this.$store.getters["cards/current"]&&this.$store.getters["cards/current"].card){var t=this.$store.getters["cards/current"];t.edit=!t.edit,this.$store.dispatch("cards/alter",t)}}},mounted:function(){if(this.$route.params.cardId){var t=this.$route.params.cardId;this.$store.dispatch("cards/setCurrent",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],methods:{listName:function(t){if(this.$store.getters["lists/lists"][t]){return this.$store.getters["lists/lists"][t].list.name}return"loading"},showList:function(t){this.$store.dispatch("lists/setCurrent",t),this.$store.dispatch("setShowList",!0)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(0);e.default={name:"editItem",data:function(){return{changes:!1}},computed:{input:function(){return this.$store.getters["cards/current"].card.desc}},methods:{update:function(t){this.changes=!0;var e=this.$store.getters["cards/current"];e.card.desc=t.target.value,this.$store.dispatch("cards/alter",e)},save:function(){this.$store.dispatch("cards/commit",this.$store.getters["cards/current"]),this.changes=!1}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(0);e.default={name:"menu",data:function(){return{showInput:!1,newCard:""}},computed:{list:function(){return this.$store.getters["lists/current"]?this.$store.getters["lists/current"].cards:[{name:"loading..."}]},listSorted:function(){if(this.$store.getters["lists/current"]){var t={};return this.$store.getters["lists/current"].cards.forEach(function(e){var s=e.name[0].toLowerCase();t[s]||(t[s]=[]),t[s].push(e)}),t}return!1},isEditable:function(){var t=this.$store.getters["boards/current"].board.id;return this.$store.getters["boards/isEditable"](t)},showList:function(){return this.$store.getters.showList}},methods:{toggleShowInput:function(){this.showInput=!this.showInput},addCard:function(){this.$store.dispatch("lists/addCard",{name:this.newCard,listId:this.$store.getters["lists/current"].list.id}),this.showInput=!1,this.newCard=""},goToCard:function(t){this.$store.dispatch("setShowList",!1),this.$store.dispatch("setShowCard",!0),this.$store.dispatch("cards/setCurrent",t),this.$router.push({name:"card",params:{boardId:this.$route.params.boardId,cardId:t}})}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{fetchList:function(t){this.$store.dispatch("lists/setCurrent",t),this.$store.dispatch("setShowList",!0)},listName:function(t){return this.$store.getters["lists/lists"][t]?this.$store.getters["lists/lists"][t].list.name:"loading..."},goToCard:function(t){this.$store.dispatch("setShowCard",!0),this.$store.dispatch("cards/setCurrent",t),this.$router.push({name:"card",params:{cardId:t}})}},mounted:function(){console.log(this.$route.query.query),this.$store.dispatch("search/search",this.$route.query.query)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(0),n=s(52),o=s.n(n),a=s(50),i=s(32);s(51),r.a.config.productionTip=!1,new r.a({el:"#app",store:i.a,router:a.a,render:function(t){return t(o.a)}})},function(t,e,s){"use strict";var r=s(13),n=s.n(r),o=s(16),a=s.n(o),i=s(11),c=s.n(i),u=s(6),d=s.n(u),l=s(12),h=s.n(l),f=s(0),m="https://trello.com/1",p=function t(e,s,r,n){h()(this,t),this.id=e,this.board=s,this.lists=r,this.members=n},g=function(t,e,s){var r=[m,"boards",t].join("/"),n=[m,"boards",t,"lists"].join("/"),o=[m,"boards",t,"members"].join("/"),i=d()({key:e,token:s},{}),u=d()({key:e,token:s},{fields:"all"});return c.a.all([f.a.http.get(r,{params:i}),f.a.http.get(n,{params:i}),f.a.http.get(o,{params:u})]).then(function(e){var s=a()(e,3),r=s[0],n=s[1],o=s[2];return console.log("fetch board",r.status,n.status,o),new p(t,r.body,n.body,o.body)},function(e){var s=a()(e,3),r=s[0],n=s[1],o=s[2];console.log("fetch board",r.status,n.status,o);var i=new p(t,r.body,n.body,o.body);return i.error=!0,i})},v=function(t,e){return console.log("get board",e),e&&!t.getters.boards[e]?g(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){t.commit("addBoard",e),e.board.idOrganization&&(t.dispatch("organizations/get",e.board.idOrganization,{root:!0}),e.lists.forEach(function(e){t.dispatch("lists/get",e,{root:!0})}))}):new c.a(function(s){s(t.getters.boards[e])})};e.a={namespaced:!0,state:{boards:{},current:!1},getters:{boards:function(t){return t.boards},current:function(t,e,s,r){return t.current&&t.boards[t.current]?t.boards[t.current]:(console.log("no current board"),!1)},isEditable:function(t,e,s,r){return function(e){if(t.current&&t.boards[t.current]&&r["members/myBoards"]){var s=r["members/myBoards"].find(function(t){return t.id===e});return console.log("isOneOfMyBoards",!!s,e),!!s}}}},actions:{fetch:function(t,e){return g(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){t.commit("addBoard",e)})},get:function(t,e){v(t,e)},setCurrent:function(t,e){v(t,e).then(function(s){console.log("set current board to",e),t.commit("current",e),t.rootGetters.oauthToken&&!t.rootGetters["members/me"]&&t.dispatch("members/get","me",{root:!0})})},addList:function(t,e){var s=e.name,r=e.boardId,n=[m,"lists"].join("/"),o=d()({key:t.rootGetters.apiKey,token:t.rootGetters.oauthToken},{name:s,idBoard:r});f.a.http.post(n,o).then(function(){t.dispatch("fetch",r)})}},mutations:{addBoard:function(t,e){t.boards=d()({},t.boards,n()({},e.id,e))},current:function(t,e){t.current=e}}}},function(t,e,s){"use strict";var r=s(13),n=s.n(r),o=s(11),a=s.n(o),i=s(6),c=s.n(i),u=s(12),d=s.n(u),l=s(0),h="https://trello.com/1",f=function t(e,s){d()(this,t),this.id=e,this.card=s,this.edit=!1},m=function(t,e,s){var r=[h,"cards",t].join("/"),n=c()({key:e,token:s},{});return l.a.http.get(r,{params:n}).then(function(e){return console.log(e.status),new f(t,e.body)},function(e){console.log(e.status);var s=new f(t,e.body);return s.error=!0,s})},p=function(t,e){return console.log("get card",e),e&&!t.getters.cards[e]?m(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){return t.commit("addCard",e),t.dispatch("lists/get",e.card.idList,{root:!0}),e}):new a.a(function(s){s(t.getters.cards[e])})};e.a={namespaced:!0,state:{cards:{},current:!1},getters:{cards:function(t){return t.cards},current:function(t){return t.current&&t.cards[t.current]?t.cards[t.current]:(console.log("no current card"),!1)}},actions:{fetch:function(t,e){return m(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){t.commit("addCard",e)})},get:function(t,e){p(t,e)},setCurrent:function(t,e){p(t,e).then(function(s){if(e){var r=s.card.idList;t.dispatch("lists/setCurrent",r,{root:!0})}t.commit("current",e),console.log("set current card to",e)})},alter:function(t,e){t.commit("addCard",e)},commit:function(t,e){var s=[h,"cards",e.card.id].join("/"),r=[h,"cards",e.card.id,"actions","comments"].join("/"),n=c()({key:t.rootGetters.apiKey,token:t.rootGetters.oauthToken},{desc:e.card.desc}),o=c()({key:t.rootGetters.apiKey,token:t.rootGetters.oauthToken},{text:e.card.desc});return a.a.all([l.a.http.put(s,n),l.a.http.post(r,o)])}},mutations:{addCard:function(t,e){t.cards=c()({},t.cards,n()({},e.id,e))},current:function(t,e){t.current=e}}}},function(t,e,s){"use strict";var r=s(13),n=s.n(r),o=s(16),a=s.n(o),i=s(11),c=s.n(i),u=s(6),d=s.n(u),l=s(12),h=s.n(l),f=s(0),m="https://trello.com/1",p=function t(e,s,r){h()(this,t),this.id=e,this.list=s,this.cards=r},g=function(t,e,s){console.log("fetching list with ",t,e,s);var r=[m,"lists",t].join("/"),n=[m,"lists",t,"cards"].join("/"),o=d()({key:e,token:s},{});return c.a.all([f.a.http.get(n,{params:o}),f.a.http.get(r,{params:o})]).then(function(e){var s=a()(e,2),r=s[0],n=s[1];return console.log("fetch list",r.status,n.status),new p(t,n.body,r.body)},function(e){var s=a()(e,2),r=s[0],n=s[1],o=new p(t,n.body,r.body);return o.error=!0,o})},v=function(t,e){return console.log("get list",e),e&&!t.getters.lists[e]?g(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){return t.commit("addList",e),e}):new c.a(function(s){s(t.getters.lists[e])})};e.a={namespaced:!0,state:{lists:{},current:!1},getters:{lists:function(t){return t.lists},current:function(t){return t.current&&t.lists[t.current]?t.lists[t.current]:(console.log("no current list"),!1)}},actions:{fetch:function(t,e){return g(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){return t.commit("addList",e),e})},get:function(t,e){v(t,e)},setCurrent:function(t,e){v(t,e).then(function(s){console.log("set current list to",e),t.commit("current",e);var r=s.list.idBoard;t.dispatch("boards/setCurrent",r,{root:!0})})},addCard:function(t,e){var s=e.name,r=e.listId,n=[m,"cards"].join("/"),o=d()({key:t.rootGetters.apiKey,token:t.rootGetters.oauthToken},{name:s,idList:r});f.a.http.post(n,o).then(function(){t.dispatch("fetch",r)})}},mutations:{addList:function(t,e){t.lists=d()({},t.lists,n()({},e.id,e))},current:function(t,e){t.current=e}}}},function(t,e,s){"use strict";var r=s(13),n=s.n(r),o=s(16),a=s.n(o),i=s(11),c=s.n(i),u=s(6),d=s.n(u),l=s(12),h=s.n(l),f=s(0),m=function t(e,s,r){h()(this,t),this.username=e,this.member=s,this.boards=r},p=function(t,e,s){var r=["https://trello.com/1","members",t].join("/"),n=["https://trello.com/1","members",t,"boards?filter=open"].join("/"),o=d()({key:e,token:s},{});return c.a.all([f.a.http.get(r,{params:o}),f.a.http.get(n,{params:o})]).then(function(e){var s=a()(e,2),r=s[0],n=s[1];return console.log("fetch member",r.status,n.status),new m(t,r.body,n.body)},function(e){var s=a()(e,2),r=s[0],n=s[1],o=new m(t,r.body,n.body);return o.error=!0,o})},g=function(t,e){return console.log("get member",e),e&&!t.getters.members[e]?p(e,t.rootGetters.apiKey,t.rootGetters.oauthToken):new c.a(function(s){s(t.getters.members[e])})};e.a={namespaced:!0,state:{members:{},current:!1},getters:{members:function(t){return t.members},current:function(t){return t.current&&t.members[t.current]?t.members[t.current]:(console.log("no current member"),!1)},myBoards:function(t){return t.members.me?t.members.me.boards:[]}},actions:{fetch:function(t,e){return p(e,t.rootGetters.apiKey,t.rootGetters.oauthToken)},get:function(t,e){g(t,e).then(function(e){t.commit("addMember",e),e.member.idOrganizations&&e.member.idOrganizations.forEach(function(e){t.dispatch("organizations/get",e,{root:!0})})})},setCurrent:function(t,e){t.dispatch("get",e),t.commit("current",e)}},mutations:{addMember:function(t,e){t.members=d()({},t.members,n()({},e.username,e))},current:function(t,e){t.current=e}}}},function(t,e,s){"use strict";var r=s(13),n=s.n(r),o=s(16),a=s.n(o),i=s(11),c=s.n(i),u=s(6),d=s.n(u),l=s(12),h=s.n(l),f=s(0),m=function t(e,s,r){h()(this,t),this.id=e,this.organization=s,this.boards=r},p=function(t,e,s){var r=["https://trello.com/1","organizations",t].join("/"),n=["https://trello.com/1","organizations",t,"boards"].join("/"),o=d()({key:e,token:s},{});return c.a.all([f.a.http.get(r,{params:o}),f.a.http.get(n,{params:o})]).then(function(e){var s=a()(e,2),r=s[0],n=s[1];return console.log("fetch organization",r.status,n.status),new m(t,r.body,n.body)},function(e){var s=a()(e,2),r=s[0],n=s[1],o=new m(t,r.body,n.body);return o.error=!0,o})},g=function(t,e){return e&&!t.getters.organizations[e]?p(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){return t.commit("addOrganization",e),e}):new c.a(function(s){s(t.getters.organizations[e])})};e.a={namespaced:!0,state:{organizations:{},current:!1},getters:{organizations:function(t){return t.organizations},current:function(t){return!(!t.current||!t.organizations[t.current])&&t.organizations[t.current]}},actions:{fetch:function(t,e){return p(e,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){t.commit("addOrganization",e)})},get:function(t,e){g(t,e)},setCurrent:function(t,e){t.dispatch("get",e),t.commit("current",e)}},mutations:{addOrganization:function(t,e){t.organizations=d()({},t.organizations,n()({},e.id,e))},current:function(t,e){t.current=e}}}},function(t,e,s){"use strict";var r=s(6),n=s.n(r),o=s(0),a=function(t,e,s,r){var a=["https://trello.com/1","search"].join("/");t+=" is:open";var i=n()({key:s,token:r},{query:t,idBoards:e});return o.a.http.get(a,{params:i}).then(function(t){return console.log("search res",t.status),t.body},function(t){return console.log("search res",t.status),t.body})};e.a={namespaced:!0,state:{result:{}},getters:{result:function(t){return t.result}},actions:{search:function(t,e){var s=e.query,r=e.boardId;return a(s,r,t.rootGetters.apiKey,t.rootGetters.oauthToken).then(function(e){t.commit("setResult",e),e.cards.forEach(function(e){t.dispatch("cards/get",e.id,{root:!0})})})}},mutations:{setResult:function(t,e){t.result=n()({},e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,,,function(t,e,s){t.exports=s.p+"static/img/fontawesome-webfont.912ec66.svg"},function(t,e,s){t.exports=s.p+"static/fonts/fontawesome-webfont.674f50d.eot"},function(t,e,s){t.exports=s.p+"static/fonts/fontawesome-webfont.674f50d.eot"},function(t,e,s){t.exports=s.p+"static/fonts/fontawesome-webfont.b06871f.ttf"},function(t,e,s){t.exports=s.p+"static/fonts/fontawesome-webfont.af7ae50.woff2"},function(t,e,s){t.exports=s.p+"static/fonts/fontawesome-webfont.fee66e7.woff"},function(t,e,s){var r=s(1)(s(54),s(149),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(55),s(151),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(56),s(140),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(57),s(153),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(58),s(147),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(59),s(152),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(60),s(148),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(61),s(145),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(62),s(142),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(63),s(141),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(64),s(146),null,null,null);t.exports=r.exports},function(t,e,s){var r=s(1)(s(65),s(144),null,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("a",{staticClass:" navbar-item button is-info is-outlined",attrs:{href:t.authUrl,target:"_blank"}},[t._v("login with trello")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[s("ul",[s("li",[s("a",{on:{click:function(e){t.showList(t.card.idList)}}},[t._v(t._s(t.listName(t.card.idList)))])]),t._v(" "),s("li",{staticClass:"is-active"},[s("a",{attrs:{href:"#"}},[t._v(t._s(t.card.name))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.getters.showCard?s("div",{staticClass:"item"},[t.card?[s("BreadCrumbs",{attrs:{card:t.card}}),t._v(" "),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("section",{staticClass:"hero is-light"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"content"},[s("div",{domProps:{innerHTML:t._s(t.convert(t.card.desc))}})])])])]),t._v(" "),t.edit?s("div",{staticClass:"column"},[s("EditItem")],1):t._e()]),t._v(" "),s("div",{staticClass:"level"},[s("a",{attrs:{href:t.card.url}},[t._v("go to Card")]),s("br"),t._v(" "),t.isEditable?s("button",{staticClass:"button",on:{click:function(e){t.toggleEdit()}}},[t._v("edit Card")]):t._e()]),t._v("\n\n    latest activity: "+t._s(t.card.dateLastActivity)+"\n  ")]:void 0],2):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.getters.showSearch?s("div",{staticClass:"results"},[s("h2",{staticClass:"title is-2"},[t._v('results for "'+t._s(t.$store.getters["search/result"].options.terms[0].text)+'"')]),t._v(" "),s("ul",[t.$store.getters["search/result"].cards.length>0?t._l(t.$store.getters["search/result"].cards,function(e){return s("li",[s("div",{staticClass:"box"},[s("a",{on:{click:function(s){t.fetchList(e.idList)}}},[t._v(t._s(t.listName(e.idList)))]),t._v(" /\n          "),s("a",{on:{click:function(s){t.goToCard(e.id)}}},[t._v(t._s(e.name))])])])}):[t._v("\n      - nothing found -\n    ")]],2)]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showList&&t.listSorted?s("div",{staticClass:"column"},[s("div",{staticClass:"columns is-multiline"},t._l(Object.keys(t.listSorted).sort(),function(e){return s("div",{staticClass:"column"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v(t._s(e))])])]),t._v(" "),s("tbody",t._l(t.listSorted[e],function(e){return s("tr",[s("td",[s("a",{on:{click:function(s){t.goToCard(e.id)}}},[t._v(t._s(e.name))])])])}))]),t._v(" "),t.showInput?s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newCard,expression:"newCard"}],staticClass:"input ",attrs:{type:"text",placeholder:"new card"},domProps:{value:t.newCard},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addCard(e)},input:function(e){e.target.composing||(t.newCard=e.target.value)}}})]):t._e()])})),t._v(" "),t.isEditable?s("a",{staticClass:"button",on:{click:function(e){t.toggleShowInput()}}},[t._v("add card")]):t._e()]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.getters["boards/current"]&&t.$store.getters.showBoardSettings?s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h4",{staticClass:"title is-4"},[t._v("members")]),t._v(" "),s("table",{staticClass:"table"},[t._m(0),t._v(" "),s("tbody",t._l(t.$store.getters["boards/current"].members,function(e){return s("tr",[s("td",[t._v(t._s(e.username))]),t._v(" "),s("td",[t._v(t._s(e.memberType))])])}))]),t._v("\n      "+t._s(t.$store.getters["boards/current"].board)+"\n    ")])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("member")]),t._v(" "),s("th",[t._v("type")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[s("textarea",{staticClass:"textarea",attrs:{placeholder:""},domProps:{value:t.input},on:{input:t.update}})]),t._v(" "),s("button",{staticClass:"button",attrs:{disabled:!t.changes},on:{click:function(e){t.save()}}},[t._v("save")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",[s("li",[t._v("wkki "+t._s(t.version))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"field"},[s("div",{staticClass:"control"},[t.$store.getters["boards/current"]?s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchStr,expression:"searchStr"}],staticClass:"input",attrs:{type:"text",placeholder:"search in board"},domProps:{value:t.searchStr},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.search()},input:function(e){e.target.composing||(t.searchStr=e.target.value)}}})]):t._e()])]),t._v(" "),t._l(Object.keys(t.board.lists).sort(),function(e){return s("p",{staticClass:"field"},[s("a",{staticClass:"button is-fullwidth is-dark is-outlined",on:{click:function(s){t.fetchList(t.board.lists[e].id)}}},[t._v("\n            "+t._s(t.board.lists[e].name)+"\n          ")])])}),t._v(" "),t.showInput?s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newList,expression:"newList"}],staticClass:"input ",attrs:{type:"text",placeholder:"new list"},domProps:{value:t.newList},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.addList(e)},input:function(e){e.target.composing||(t.newList=e.target.value)}}})]):t._e(),t._v(" "),t.isEditable?s("a",{on:{click:function(e){t.toggleShowInput()}}},[s("button",{staticClass:"button is-fullwidth"},[t._v("+")])]):t._e()],2)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h3",{staticClass:"title is-3"},[t._v("Boards")]),t._v(" "),t.boardsByOrga?s("div",t._l(Object.keys(t.boardsByOrga).sort().reverse(),function(e){return s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("h4",{staticClass:"title is-4"},[t._v(t._s(t.organizations(e)))])])]),t._v(" "),s("div",{staticClass:"columns is-multiline is-10"},t._l(t.boardsByOrga[e],function(e){return s("div",{staticClass:"column is-4"},["wiki"===e.name?s("button",{staticClass:"button is-primary is-fullwidth",on:{click:function(s){t.$router.push({name:"board",params:{boardId:e.id}})}}},[t._v(t._s(e.name)+"\n          ")]):s("button",{staticClass:"button is-primary is-fullwidth is-outlined",on:{click:function(s){t.$router.push({name:"board",params:{boardId:e.id}})}}},[t._v(t._s(e.name)+"\n          ")])])}))])})):s("div",[s("h4",{staticClass:"title is-4"},[t._v("loading...")])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NavBar"),t._v(" "),s("div",{staticClass:"section"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("router-view")],1)])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),s("div",{staticClass:"navbar-item is-hidden-desktop"},[t.$store.getters["boards/current"]?s("div",{staticClass:"navbar-item"},[s("h6",{staticClass:"title is-5"},[s("a",{on:{click:function(e){t.$store.dispatch("setShowBoardSettings")}}},[t._v(t._s(t.$store.getters["boards/current"].board.name))])])]):t._e()]),t._v(" "),s("div",{class:t.navbarBurgerClass,attrs:{"data-target":"nav-menu"},on:{click:function(e){t.toggle()}}},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])]),t._v(" "),s("div",{class:t.navbarMenuClass,attrs:{id:"nav-menu"}},[s("div",{staticClass:"navbar-start"}),t._v(" "),t.$store.getters["boards/current"]?s("div",{staticClass:"navbar-item is-hidden-touch"},[s("h6",{staticClass:"title is-5"},[t._v(t._s(t.$store.getters["boards/current"].board.name))])]):t._e(),t._v(" "),t.$store.getters.isLoggedIn?s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("a",{on:{click:function(e){t.$router.push({name:"boards"})}}},[t._v("my boards")])]),t._v(" "),s("div",{staticClass:"navbar-item"},[s("LogoutButton")],1)]):s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("LoginButton")],1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"navbar-item",attrs:{href:"http://wkki.github.io"}},[s("h3",{staticClass:"title is-3"},[t._v("wkki")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[s("Board")],1),t._v(" "),s("div",{staticClass:"column"},[s("List"),t._v(" "),s("Card"),t._v(" "),s("SearchResults"),t._v(" "),s("BoardSettings")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"button",on:{click:t.logOut}},[s("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])},staticRenderFns:[]}},,,,,,function(t,e){}]),[67]);
//# sourceMappingURL=app.1398addfbfe91f1087ba.js.map