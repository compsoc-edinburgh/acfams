import{S as e,i as a,s as t,e as o,a as r,t as s,c as l,b as n,d as c,f as i,g as u,h,j as d,k as f,l as p,m,n as g,o as y,p as v,q as b,r as w,u as x,v as E,w as k,x as $,y as S,z as I,A as T,B as L,C as N,D as A,E as P,F as D,G as W,H as O}from"./client.682e1843.js";function R(e,a,t){const o=e.slice();return o[5]=a[t],o}function V(e){let a,t,g,y,v,b,w,x,E,k=e[5].display+"";return{c(){a=o("input"),y=r(),v=o("label"),b=s(k),this.h()},l(e){a=l(e,"INPUT",{type:!0,name:!0,value:!0,id:!0,class:!0}),y=n(e),v=l(e,"LABEL",{for:!0,class:!0});var t=c(v);b=i(t,k),t.forEach(u),this.h()},h(){h(a,"type","radio"),h(a,"name",e[2]),a.__value=t=e[5].label,a.value=a.__value,h(a,"id",g=e[2]+"-"+e[5].label),h(a,"class","hidden"),e[4][0].push(a),h(v,"for",w=e[2]+"-"+e[5].label),h(v,"class","appearance-none block bg-gray-200 text-gray-700 rounded py-3 px-4\n        leading-tight m-1 hover:bg-gray-400 flex-grow focus:outline-none\n        focus:bg-white text-center cursor-pointer font-bold svelte-6o58p1")},m(t,o){d(t,a,o),a.checked=a.__value===e[0],d(t,y,o),d(t,v,o),f(v,b),x||(E=p(a,"change",e[3]),x=!0)},p(e,o){4&o&&h(a,"name",e[2]),2&o&&t!==(t=e[5].label)&&(a.__value=t,a.value=a.__value),6&o&&g!==(g=e[2]+"-"+e[5].label)&&h(a,"id",g),1&o&&(a.checked=a.__value===e[0]),2&o&&k!==(k=e[5].display+"")&&m(b,k),6&o&&w!==(w=e[2]+"-"+e[5].label)&&h(v,"for",w)},d(t){t&&u(a),e[4][0].splice(e[4][0].indexOf(a),1),t&&u(y),t&&u(v),x=!1,E()}}}function B(e){let a,t=e[1],r=[];for(let a=0;a<t.length;a+=1)r[a]=V(R(e,t,a));return{c(){a=o("div");for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){a=l(e,"DIV",{class:!0});var t=c(a);for(let e=0;e<r.length;e+=1)r[e].l(t);t.forEach(u),this.h()},h(){h(a,"class","flex flex-row flex-wrap")},m(e,t){d(e,a,t);for(let e=0;e<r.length;e+=1)r[e].m(a,null)},p(e,[o]){if(7&o){let s;for(t=e[1],s=0;s<t.length;s+=1){const l=R(e,t,s);r[s]?r[s].p(l,o):(r[s]=V(l),r[s].c(),r[s].m(a,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},i:g,o:g,d(e){e&&u(a),y(r,e)}}}function j(e,a,t){let{options:o}=a,{name:r}=a,{value:s=""}=a;return e.$set=e=>{"options"in e&&t(1,o=e.options),"name"in e&&t(2,r=e.name),"value"in e&&t(0,s=e.value)},[s,o,r,function(){s=this.__value,t(0,s)},[[]]]}class C extends e{constructor(e){super(),a(this,e,j,B,t,{options:1,name:2,value:0})}}function q(e){let a,t,m,g,y,b,w,x,E,k;return{c(){a=o("div"),t=o("label"),m=s("What's your spouse's name?"),g=r(),y=o("input"),b=r(),w=o("p"),x=s("Remember, they'll need to fill in this form as well"),this.h()},l(e){a=l(e,"DIV",{class:!0});var o=c(a);t=l(o,"LABEL",{class:!0,for:!0});var r=c(t);m=i(r,"What's your spouse's name?"),r.forEach(u),g=n(o),y=l(o,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),b=n(o),w=l(o,"P",{class:!0});var s=c(w);x=i(s,"Remember, they'll need to fill in this form as well"),s.forEach(u),o.forEach(u),this.h()},h(){h(t,"class","block text-gray-700 text-lg mb-2 focus:font-bold\n                active:font-bold"),h(t,"for","spouse-name"),h(y,"class","appearance-none block w-full bg-gray-200 text-gray-700\n                border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n                focus:outline-none focus:bg-white focus:border-gray-500"),h(y,"id","spouse-name"),h(y,"type","text"),h(y,"placeholder","Alan Turing"),h(w,"class","text-gray-600 text-xs mt-2"),h(a,"class","w-full px-3 mb-6")},m(o,r){d(o,a,r),f(a,t),f(t,m),f(a,g),f(a,y),v(y,e[5]),f(a,b),f(a,w),f(w,x),E||(k=p(y,"input",e[31]),E=!0)},p(e,a){32&a[0]&&y.value!==e[5]&&v(y,e[5])},d(e){e&&u(a),E=!1,k()}}}function G(e){let a,t,p,m,g,y,v;return{c(){a=o("div"),t=o("h2"),p=b("svg"),m=b("path"),g=r(),y=o("span"),v=s("Saving..."),this.h()},l(e){a=l(e,"DIV",{class:!0});var o=c(a);t=l(o,"H2",{});var r=c(t);p=l(r,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0,stroke:!0},1);var s=c(p);m=l(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),c(m).forEach(u),s.forEach(u),g=n(r),y=l(r,"SPAN",{class:!0});var h=c(y);v=i(h,"Saving..."),h.forEach(u),r.forEach(u),o.forEach(u),this.h()},h(){h(m,"stroke-linecap","round"),h(m,"stroke-linejoin","round"),h(m,"stroke-width","2"),h(m,"d","M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"),h(p,"xmlns","http://www.w3.org/2000/svg"),h(p,"fill","none"),h(p,"viewBox","0 0 24 24"),h(p,"class","w-8 h-8 inline-block text-white"),h(p,"stroke","currentColor"),h(y,"class","text-2xl ml-2 align-middle text-white"),h(a,"class","fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-75 grid\n      items-center justify-center align-middle z-20")},m(e,o){d(e,a,o),f(a,t),f(t,p),f(p,m),f(t,g),f(t,y),f(y,v)},d(e){e&&u(a)}}}function H(e){let a,t,m,g,y,O,R,V,B,j,H,_,U,Y,M,F,z,J,X,K,Q,Z,ee,ae,te,oe,re,se,le,ne,ce,ie,ue,he,de,fe,pe,me,ge,ye,ve,be,we,xe,Ee,ke,$e,Se,Ie,Te,Le,Ne,Ae,Pe,De,We,Oe,Re,Ve,Be,je,Ce,qe,Ge,He,_e,Ue,Ye,Me,Fe,ze,Je,Xe,Ke,Qe,Ze,ea,aa,ta,oa,ra,sa,la,na,ca,ia,ua,ha,da,fa,pa,ma,ga,ya,va,ba,wa,xa,Ea,ka,$a,Sa,Ia,Ta,La,Na,Aa,Pa,Da,Wa,Oa,Ra,Va,Ba,ja,Ca,qa,Ga,Ha,_a,Ua,Ya,Ma,Fa,za,Ja,Xa,Ka,Qa,Za,et,at,tt,ot,rt,st,lt,nt,ct,it,ut,ht,dt,ft,pt,mt,gt,yt,vt,bt,wt,xt,Et,kt,$t,St,It,Tt,Lt,Nt,At,Pt,Dt,Wt,Ot,Rt,Vt,Bt,jt,Ct,qt,Gt,Ht,_t,Ut,Yt,Mt,Ft,zt,Jt,Xt,Kt,Qt,Zt,eo,ao,to,oo,ro,so,lo,no,co,io,uo,ho,fo,po,mo,go,yo,vo,bo,wo,xo,Eo,ko,$o,So,Io,To,Lo;function No(a){e[28].call(null,a)}let Ao={name:"year-select",options:e[16]};function Po(a){e[30].call(null,a)}void 0!==e[3]&&(Ao.value=e[3]),aa=new C({props:Ao}),P.push(()=>D(aa,"value",No));let Do={name:"needs-match",options:[{label:"yes",display:"Yes"},{label:"no",display:"No"}]};void 0!==e[9]&&(Do.value=e[9]),pa=new C({props:Do}),P.push(()=>D(pa,"value",Po));let Wo="yes"===e[9]&&q(e);function Oo(a){e[33].call(null,a)}let Ro={name:"needs-match",options:[{label:"Physical",display:"In person"},{label:"Virtual",display:"Virtual"},{label:"Physical or Virtual",display:"Both"}]};function Vo(a){e[34].call(null,a)}void 0!==e[7]&&(Ro.value=e[7]),Oa=new C({props:Ro}),P.push(()=>D(Oa,"value",Oo));let Bo={name:"data-consent",options:[{label:"yes",display:"Yes"},{label:"no",display:"No"}]};void 0!==e[8]&&(Bo.value=e[8]),uo=new C({props:Bo}),P.push(()=>D(uo,"value",Vo));let jo=e[10]&&G();return{c(){a=o("main"),t=o("h1"),m=s("Ac"),g=o("span"),y=s("Fams"),O=r(),R=o("div"),V=o("section"),B=o("h2"),j=s("CompSoc family, we have a big announcement for you!"),H=r(),_=o("p"),U=s("We’ve been working hard to make plans for the upcoming year that\n        accommodate all of you, and part of this plan is to introduce Academic\n        Families!"),Y=r(),M=o("p"),F=s("This is where students in older years ‘adopt’ freshers, and it’s a great\n        way of helping the community, meeting new people, and having a good time\n        together! We’re keeping it simple for now, with students in year 2 or\n        above as the parents, and freshers as the children."),z=r(),J=o("p"),X=s("Anyone in CompSoc is welcome to join, and you can even propose to your\n        AcFam spouse-to-be!"),K=r(),Q=o("p"),Z=s("To sign up as a parent all you need to do is fill out this form by the "),ee=o("strong"),ae=s("20th\n          of September"),te=o("strong"),oe=r(),re=o("p"),se=s("If you would like to ask any questions about becoming a parent or for\n        help with the form please email "),le=o("a"),ne=s("hello@comp-soc.com"),ce=s("."),ie=r(),ue=o("section"),he=o("form"),de=o("div"),fe=o("input"),pe=r(),me=o("img"),ve=r(),be=o("div"),we=r(),xe=o("div"),Ee=o("div"),ke=b("svg"),$e=b("path"),Se=r(),Ie=o("p"),Te=s("We require a picture of you"),Ne=r(),Ae=o("div"),Pe=o("label"),De=s("What's your name?"),We=r(),Oe=o("input"),Re=r(),Ve=o("div"),Be=o("label"),je=s("What's your email?"),Ce=r(),qe=o("input"),Ge=r(),He=o("div"),_e=o("label"),Ue=s("What's your student number?"),Ye=r(),Me=o("input"),Fe=r(),ze=o("div"),Je=o("label"),Xe=s("Which year will you be in "),Ke=o("strong"),Qe=s("September 2020"),Ze=s("?"),ea=r(),w(aa.$$.fragment),oa=r(),ra=o("div"),sa=o("label"),la=s("What's your degree program?"),na=r(),ca=o("input"),ia=r(),ua=o("div"),ha=o("label"),da=s("Have you already found a spouse?"),fa=r(),w(pa.$$.fragment),ga=r(),ya=o("p"),va=s("If you haven't found a spouse yet we'll find you a match"),ba=r(),Wo&&Wo.c(),wa=r(),xa=o("div"),Ea=o("label"),ka=s("Tell us a bit about yourself"),$a=r(),Sa=o("textarea"),Ia=r(),Ta=o("p"),La=s("This will help us match you with a spouse and children, and it'll be\n            send to your future children to help them get to know you"),Na=r(),Aa=o("div"),Pa=o("label"),Da=s("With the COVID-19 pandemic, we know that many students are studying\n            virtually this year. So we can support you with this, what types of\n            events would you be willing to attend or organise?"),Wa=r(),w(Oa.$$.fragment),Va=r(),Ba=o("p"),ja=s("Don't worry, this isn't a final commitment — if your\n            circumstances change just let us know"),Ca=r(),qa=o("div"),Ga=o("h3"),Ha=s("Your data"),_a=r(),Ua=o("p"),Ya=s("We'll store your data for the duration of the academic families\n            program this year"),Ma=r(),Fa=o("h4"),za=s("Your name, email, picture, and student number"),Ja=r(),Xa=o("ul"),Ka=o("li"),Qa=s("We'll use these to verify your CompSoc membership and contact you\n              about academic families"),Za=r(),et=o("li"),at=s("We'll also provide your "),tt=o("strong"),ot=s("name"),rt=s(", "),st=o("strong"),lt=s("email"),nt=s(",\n              and "),ct=o("strong"),it=s("picture"),ut=s(" to your academic child (or children) once\n              matched"),ht=r(),dt=o("li"),ft=s("We won't use your details to send marketing emails, or any other\n              emails unrelated to academic families"),pt=r(),mt=o("h4"),gt=s("Your year of study, degree program and other information you've\n            provided us"),yt=r(),vt=o("ul"),bt=o("li"),wt=s("We'll use this information to help us match you with a spouse,\n              and/or children"),xt=r(),Et=o("li"),kt=s("Your "),$t=o("strong"),St=s("degree program"),It=s(", "),Tt=o("strong"),Lt=s("year of study"),Nt=s(",\n              and "),At=o("strong"),Pt=s("bio"),Dt=s(" will also be provided to your future academic\n              children to help them get to know you"),Wt=r(),Ot=o("h4"),Rt=s("Your rights"),Vt=s("\n          Under the GDPR, you have certain rights with regards to your data (See "),Bt=o("a"),jt=s("Rights of the Data Subject"),Ct=s("\n          for a full list). Some important ones are the right to:\n          "),qt=o("ul"),Gt=o("li"),Ht=o("strong"),_t=s("request a copy of your data"),Ut=r(),Yt=o("li"),Mt=o("strong"),Ft=s("correct any of your data that's innacurate"),zt=r(),Jt=o("li"),Xt=o("strong"),Kt=s("request deletion of your data"),Qt=s(" (although that will\n              prevent you participating in academic families this year)"),Zt=r(),eo=o("p"),ao=s("Please contact "),to=o("a"),oo=s("techsec@comp-soc.com"),ro=s(" with any queries"),so=r(),lo=o("div"),no=o("label"),co=s("Do you consent to us using your data as outlined above?"),io=r(),w(uo.$$.fragment),fo=r(),po=o("p"),mo=s("If you have any questions or concerns, please email "),go=o("a"),yo=s("techsec@comp-soc.com"),vo=r(),bo=o("div"),wo=o("button"),xo=s("Submit"),$o=r(),jo&&jo.c(),So=x(),this.h()},l(e){a=l(e,"MAIN",{class:!0});var o=c(a);t=l(o,"H1",{class:!0});var r=c(t);m=i(r,"Ac"),g=l(r,"SPAN",{class:!0});var s=c(g);y=i(s,"Fams"),s.forEach(u),r.forEach(u),O=n(o),R=l(o,"DIV",{class:!0});var h=c(R);V=l(h,"SECTION",{class:!0});var d=c(V);B=l(d,"H2",{class:!0});var f=c(B);j=i(f,"CompSoc family, we have a big announcement for you!"),f.forEach(u),H=n(d),_=l(d,"P",{});var p=c(_);U=i(p,"We’ve been working hard to make plans for the upcoming year that\n        accommodate all of you, and part of this plan is to introduce Academic\n        Families!"),p.forEach(u),Y=n(d),M=l(d,"P",{});var v=c(M);F=i(v,"This is where students in older years ‘adopt’ freshers, and it’s a great\n        way of helping the community, meeting new people, and having a good time\n        together! We’re keeping it simple for now, with students in year 2 or\n        above as the parents, and freshers as the children."),v.forEach(u),z=n(d),J=l(d,"P",{});var b=c(J);X=i(b,"Anyone in CompSoc is welcome to join, and you can even propose to your\n        AcFam spouse-to-be!"),b.forEach(u),K=n(d),Q=l(d,"P",{});var w=c(Q);Z=i(w,"To sign up as a parent all you need to do is fill out this form by the "),ee=l(w,"STRONG",{});var k=c(ee);ae=i(k,"20th\n          of September"),te=l(k,"STRONG",{}),c(te).forEach(u),k.forEach(u),w.forEach(u),oe=n(d),re=l(d,"P",{});var $=c(re);se=i($,"If you would like to ask any questions about becoming a parent or for\n        help with the form please email "),le=l($,"A",{href:!0});var S=c(le);ne=i(S,"hello@comp-soc.com"),S.forEach(u),ce=i($,"."),$.forEach(u),d.forEach(u),ie=n(h),ue=l(h,"SECTION",{class:!0});var I=c(ue);he=l(I,"FORM",{class:!0,name:!0});var T=c(he);de=l(T,"DIV",{class:!0});var L=c(de);fe=l(L,"INPUT",{type:!0,accept:!0,class:!0}),pe=n(L),me=l(L,"IMG",{class:!0,src:!0,alt:!0}),ve=n(L),be=l(L,"DIV",{class:!0,style:!0}),c(be).forEach(u),we=n(L),xe=l(L,"DIV",{class:!0});var N=c(xe);Ee=l(N,"DIV",{});var A=c(Ee);ke=l(A,"svg",{xmlns:!0,fill:!0,viewBox:!0,stroke:!0},1);var P=c(ke);$e=l(P,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0},1),c($e).forEach(u),P.forEach(u),A.forEach(u),N.forEach(u),Se=n(L),Ie=l(L,"P",{class:!0});var D=c(Ie);Te=i(D,"We require a picture of you"),D.forEach(u),L.forEach(u),Ne=n(T),Ae=l(T,"DIV",{class:!0});var W=c(Ae);Pe=l(W,"LABEL",{class:!0,for:!0});var C=c(Pe);De=i(C,"What's your name?"),C.forEach(u),We=n(W),Oe=l(W,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),W.forEach(u),Re=n(T),Ve=l(T,"DIV",{class:!0});var q=c(Ve);Be=l(q,"LABEL",{class:!0,for:!0});var G=c(Be);je=i(G,"What's your email?"),G.forEach(u),Ce=n(q),qe=l(q,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),q.forEach(u),Ge=n(T),He=l(T,"DIV",{class:!0});var ge=c(He);_e=l(ge,"LABEL",{class:!0,for:!0});var ye=c(_e);Ue=i(ye,"What's your student number?"),ye.forEach(u),Ye=n(ge),Me=l(ge,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),ge.forEach(u),Fe=n(T),ze=l(T,"DIV",{class:!0});var Le=c(ze);Je=l(Le,"LABEL",{class:!0});var ta=c(Je);Xe=i(ta,"Which year will you be in "),Ke=l(ta,"STRONG",{});var ma=c(Ke);Qe=i(ma,"September 2020"),ma.forEach(u),Ze=i(ta,"?"),ta.forEach(u),ea=n(Le),E(aa.$$.fragment,Le),Le.forEach(u),oa=n(T),ra=l(T,"DIV",{class:!0});var Ra=c(ra);sa=l(Ra,"LABEL",{class:!0,for:!0});var ho=c(sa);la=i(ho,"What's your degree program?"),ho.forEach(u),na=n(Ra),ca=l(Ra,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),Ra.forEach(u),ia=n(T),ua=l(T,"DIV",{class:!0});var Eo=c(ua);ha=l(Eo,"LABEL",{class:!0});var ko=c(ha);da=i(ko,"Have you already found a spouse?"),ko.forEach(u),fa=n(Eo),E(pa.$$.fragment,Eo),ga=n(Eo),ya=l(Eo,"P",{class:!0});var Io=c(ya);va=i(Io,"If you haven't found a spouse yet we'll find you a match"),Io.forEach(u),Eo.forEach(u),ba=n(T),Wo&&Wo.l(T),wa=n(T),xa=l(T,"DIV",{class:!0});var To=c(xa);Ea=l(To,"LABEL",{class:!0,for:!0});var Lo=c(Ea);ka=i(Lo,"Tell us a bit about yourself"),Lo.forEach(u),$a=n(To),Sa=l(To,"TEXTAREA",{class:!0,id:!0,placeholder:!0}),c(Sa).forEach(u),Ia=n(To),Ta=l(To,"P",{class:!0});var No=c(Ta);La=i(No,"This will help us match you with a spouse and children, and it'll be\n            send to your future children to help them get to know you"),No.forEach(u),To.forEach(u),Na=n(T),Aa=l(T,"DIV",{class:!0});var Ao=c(Aa);Pa=l(Ao,"LABEL",{class:!0});var Po=c(Pa);Da=i(Po,"With the COVID-19 pandemic, we know that many students are studying\n            virtually this year. So we can support you with this, what types of\n            events would you be willing to attend or organise?"),Po.forEach(u),Wa=n(Ao),E(Oa.$$.fragment,Ao),Va=n(Ao),Ba=l(Ao,"P",{class:!0});var Do=c(Ba);ja=i(Do,"Don't worry, this isn't a final commitment — if your\n            circumstances change just let us know"),Do.forEach(u),Ao.forEach(u),Ca=n(T),qa=l(T,"DIV",{class:!0});var Oo=c(qa);Ga=l(Oo,"H3",{});var Ro=c(Ga);Ha=i(Ro,"Your data"),Ro.forEach(u),_a=n(Oo),Ua=l(Oo,"P",{});var Vo=c(Ua);Ya=i(Vo,"We'll store your data for the duration of the academic families\n            program this year"),Vo.forEach(u),Ma=n(Oo),Fa=l(Oo,"H4",{});var Bo=c(Fa);za=i(Bo,"Your name, email, picture, and student number"),Bo.forEach(u),Ja=n(Oo),Xa=l(Oo,"UL",{});var Co=c(Xa);Ka=l(Co,"LI",{});var qo=c(Ka);Qa=i(qo,"We'll use these to verify your CompSoc membership and contact you\n              about academic families"),qo.forEach(u),Za=n(Co),et=l(Co,"LI",{});var Go=c(et);at=i(Go,"We'll also provide your "),tt=l(Go,"STRONG",{});var Ho=c(tt);ot=i(Ho,"name"),Ho.forEach(u),rt=i(Go,", "),st=l(Go,"STRONG",{});var _o=c(st);lt=i(_o,"email"),_o.forEach(u),nt=i(Go,",\n              and "),ct=l(Go,"STRONG",{});var Uo=c(ct);it=i(Uo,"picture"),Uo.forEach(u),ut=i(Go," to your academic child (or children) once\n              matched"),Go.forEach(u),ht=n(Co),dt=l(Co,"LI",{});var Yo=c(dt);ft=i(Yo,"We won't use your details to send marketing emails, or any other\n              emails unrelated to academic families"),Yo.forEach(u),Co.forEach(u),pt=n(Oo),mt=l(Oo,"H4",{});var Mo=c(mt);gt=i(Mo,"Your year of study, degree program and other information you've\n            provided us"),Mo.forEach(u),yt=n(Oo),vt=l(Oo,"UL",{});var Fo=c(vt);bt=l(Fo,"LI",{});var zo=c(bt);wt=i(zo,"We'll use this information to help us match you with a spouse,\n              and/or children"),zo.forEach(u),xt=n(Fo),Et=l(Fo,"LI",{});var Jo=c(Et);kt=i(Jo,"Your "),$t=l(Jo,"STRONG",{});var Xo=c($t);St=i(Xo,"degree program"),Xo.forEach(u),It=i(Jo,", "),Tt=l(Jo,"STRONG",{});var Ko=c(Tt);Lt=i(Ko,"year of study"),Ko.forEach(u),Nt=i(Jo,",\n              and "),At=l(Jo,"STRONG",{});var Qo=c(At);Pt=i(Qo,"bio"),Qo.forEach(u),Dt=i(Jo," will also be provided to your future academic\n              children to help them get to know you"),Jo.forEach(u),Fo.forEach(u),Wt=n(Oo),Ot=l(Oo,"H4",{});var Zo=c(Ot);Rt=i(Zo,"Your rights"),Zo.forEach(u),Vt=i(Oo,"\n          Under the GDPR, you have certain rights with regards to your data (See "),Bt=l(Oo,"A",{href:!0});var er=c(Bt);jt=i(er,"Rights of the Data Subject"),er.forEach(u),Ct=i(Oo,"\n          for a full list). Some important ones are the right to:\n          "),qt=l(Oo,"UL",{});var ar=c(qt);Gt=l(ar,"LI",{});var tr=c(Gt);Ht=l(tr,"STRONG",{});var or=c(Ht);_t=i(or,"request a copy of your data"),or.forEach(u),tr.forEach(u),Ut=n(ar),Yt=l(ar,"LI",{});var rr=c(Yt);Mt=l(rr,"STRONG",{});var sr=c(Mt);Ft=i(sr,"correct any of your data that's innacurate"),sr.forEach(u),rr.forEach(u),zt=n(ar),Jt=l(ar,"LI",{});var lr=c(Jt);Xt=l(lr,"STRONG",{});var nr=c(Xt);Kt=i(nr,"request deletion of your data"),nr.forEach(u),Qt=i(lr," (although that will\n              prevent you participating in academic families this year)"),lr.forEach(u),ar.forEach(u),Zt=n(Oo),eo=l(Oo,"P",{});var cr=c(eo);ao=i(cr,"Please contact "),to=l(cr,"A",{href:!0,class:!0});var ir=c(to);oo=i(ir,"techsec@comp-soc.com"),ir.forEach(u),ro=i(cr," with any queries"),cr.forEach(u),Oo.forEach(u),so=n(T),lo=l(T,"DIV",{class:!0});var ur=c(lo);no=l(ur,"LABEL",{class:!0});var hr=c(no);co=i(hr,"Do you consent to us using your data as outlined above?"),hr.forEach(u),io=n(ur),E(uo.$$.fragment,ur),fo=n(ur),po=l(ur,"P",{class:!0});var dr=c(po);mo=i(dr,"If you have any questions or concerns, please email "),go=l(dr,"A",{href:!0,class:!0});var fr=c(go);yo=i(fr,"techsec@comp-soc.com"),fr.forEach(u),dr.forEach(u),ur.forEach(u),vo=n(T),bo=l(T,"DIV",{class:!0});var pr=c(bo);wo=l(pr,"BUTTON",{type:!0,disabled:!0,class:!0});var mr=c(wo);xo=i(mr,"Submit"),mr.forEach(u),pr.forEach(u),T.forEach(u),I.forEach(u),h.forEach(u),o.forEach(u),$o=n(e),jo&&jo.l(e),So=x(),this.h()},h(){h(g,"class","text-gray-900"),h(t,"class","font-display text-4xl sm:text-5xl text-center text-primary mt-20"),h(B,"class","text-center"),h(le,"href","mailto:hello@comp-soc.com"),h(V,"class","prose sm:prose-md md:prose-lg p-4 pt-16 max-w-2xl mx-auto lg:m-0\n        lg:sticky lg:top-0 w-full lg:ml-auto"),h(fe,"type","file"),h(fe,"accept","image/*"),h(fe,"class","hidden"),h(me,"class","rounded-full w-40 h-40 object-cover"),me.src!==(ge=e[14]||"/avatar.svg")&&h(me,"src",ge),h(me,"alt",ye=e[0]+"'s image'"),h(be,"class","absolute bg-blue-500 h-40 w-40 top-0 left-0 rounded-full"),k(be,"transform","scale("+e[13]/100+")"),k(be,"transition","transform .2s"),h($e,"stroke-linecap","round"),h($e,"stroke-linejoin","round"),h($e,"stroke-width","2"),h($e,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),h(ke,"xmlns","http://www.w3.org/2000/svg"),h(ke,"fill","none"),h(ke,"viewBox","0 0 24 24"),h(ke,"stroke","currentColor"),h(xe,"class","text-white bg-gray-600 rounded-full h-10 w-10 z-10 absolute\n              bottom-0 right-0"),h(Ie,"class","text-gray-600 text-xs mt-2"),h(de,"class",Le="bg-white shadow rounded-full sm:mx-auto grid h-40 w-40\n            justify-center items-center mb-6 border-white cursor-pointer "+e[12]+" relative"),h(Pe,"class","block text-gray-700 text-lg mb-2 focus:font-bold\n              active:font-bold"),h(Pe,"for","name"),h(Oe,"class","appearance-none block w-full bg-gray-200 text-gray-700\n              border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n              focus:outline-none focus:bg-white focus:border-gray-500"),h(Oe,"id","name"),h(Oe,"type","text"),h(Oe,"placeholder","Ada Lovelace"),h(Ae,"class","w-full px-3 mb-6"),h(Be,"class","block text-gray-700 text-lg mb-2"),h(Be,"for","email"),h(qe,"class","appearance-none block w-full bg-gray-200 text-gray-700\n              border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n              focus:outline-none focus:bg-white focus:border-gray-500"),h(qe,"id","email"),h(qe,"type","email"),h(qe,"placeholder","ada@lovelace.com"),h(Ve,"class","w-full px-3 mb-6"),h(_e,"class","block text-gray-700 text-lg mb-2"),h(_e,"for","student-number"),h(Me,"class","appearance-none block w-full bg-gray-200 text-gray-700\n              border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n              focus:outline-none focus:bg-white focus:border-gray-500"),h(Me,"id","student-number"),h(Me,"type","text"),h(Me,"placeholder","s1234567"),h(He,"class","w-full px-3 mb-6"),h(Je,"class","block text-gray-700 text-lg mb-2"),h(ze,"class","w-full px-3 mb-6"),h(sa,"class","block text-gray-700 text-lg mb-2"),h(sa,"for","degree-program"),h(ca,"class","appearance-none block w-full bg-gray-200 text-gray-700\n              border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n              focus:outline-none focus:bg-white focus:border-gray-500"),h(ca,"id","degree-program"),h(ca,"type","text"),h(ca,"placeholder","BSc Computer Science"),h(ra,"class","w-full px-3 mb-6"),h(ha,"class","block text-gray-700 text-lg mb-2"),h(ya,"class","text-gray-600 text-xs mt-2"),h(ua,"class","w-full px-3 mb-6"),h(Ea,"class","block text-gray-700 text-lg mb-2 focus:font-bold\n              active:font-bold"),h(Ea,"for","bio"),h(Sa,"class","appearance-none block w-full bg-gray-200 text-gray-700\n              border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight\n              focus:outline-none focus:bg-white focus:border-gray-500\n              resize-none h-32"),h(Sa,"id","bio"),h(Sa,"placeholder","Hobbies, interests, academic focus etc..."),h(Ta,"class","text-gray-600 text-xs mt-2"),h(xa,"class","w-full px-3 mb-6"),h(Pa,"class","block text-gray-700 text-lg mb-2"),h(Ba,"class","text-gray-600 text-xs mt-2"),h(Aa,"class","w-full px-3 mb-6"),h(Bt,"href","https://gdpr.eu/tag/chapter-3/"),h(to,"href","mailto:techsec@comp-soc.com"),h(to,"class","text-primary"),h(qa,"class","prose px-3"),h(no,"class","block text-gray-700 text-lg mb-2"),h(go,"href","mailto:techsec@comp-soc.com"),h(go,"class","text-primary"),h(po,"class","text-gray-600 text-xs mt-2"),h(lo,"class","w-full px-3 mb-6 mt-8"),h(wo,"type","submit"),wo.disabled=Eo=!e[15],h(wo,"class",ko=(e[15]?"bg-primary cursor-pointer":"bg-gray-400 cursor-not-allowed")+"\n              appearance-none block rounded py-3 px-4 leading-tight flex-grow focus:outline-none\n              text-center font-bold text-white"),h(bo,"class","w-full px-3 mb-6 mt-8 flex"),h(he,"class","w-full"),h(he,"name","parent"),h(ue,"class","p-4 pt-4 lg:pt-16 max-w-2xl mx-auto w-full lg:m-0 lg:mr-auto pb-32"),h(R,"class","grid grid-cols-1 lg:grid-cols-2"),h(a,"class","overflow-x-hidden")},m(o,r){d(o,a,r),f(a,t),f(t,m),f(t,g),f(g,y),f(a,O),f(a,R),f(R,V),f(V,B),f(B,j),f(V,H),f(V,_),f(_,U),f(V,Y),f(V,M),f(M,F),f(V,z),f(V,J),f(J,X),f(V,K),f(V,Q),f(Q,Z),f(Q,ee),f(ee,ae),f(ee,te),f(V,oe),f(V,re),f(re,se),f(re,le),f(le,ne),f(re,ce),f(R,ie),f(R,ue),f(ue,he),f(he,de),f(de,fe),e[22](fe),f(de,pe),f(de,me),f(de,ve),f(de,be),f(de,we),f(de,xe),f(xe,Ee),f(Ee,ke),f(ke,$e),f(de,Se),f(de,Ie),f(Ie,Te),f(he,Ne),f(he,Ae),f(Ae,Pe),f(Pe,De),f(Ae,We),f(Ae,Oe),v(Oe,e[0]),f(he,Re),f(he,Ve),f(Ve,Be),f(Be,je),f(Ve,Ce),f(Ve,qe),v(qe,e[1]),f(he,Ge),f(he,He),f(He,_e),f(_e,Ue),f(He,Ye),f(He,Me),v(Me,e[2]),f(he,Fe),f(he,ze),f(ze,Je),f(Je,Xe),f(Je,Ke),f(Ke,Qe),f(Je,Ze),f(ze,ea),$(aa,ze,null),f(he,oa),f(he,ra),f(ra,sa),f(sa,la),f(ra,na),f(ra,ca),v(ca,e[4]),f(he,ia),f(he,ua),f(ua,ha),f(ha,da),f(ua,fa),$(pa,ua,null),f(ua,ga),f(ua,ya),f(ya,va),f(he,ba),Wo&&Wo.m(he,null),f(he,wa),f(he,xa),f(xa,Ea),f(Ea,ka),f(xa,$a),f(xa,Sa),v(Sa,e[6]),f(xa,Ia),f(xa,Ta),f(Ta,La),f(he,Na),f(he,Aa),f(Aa,Pa),f(Pa,Da),f(Aa,Wa),$(Oa,Aa,null),f(Aa,Va),f(Aa,Ba),f(Ba,ja),f(he,Ca),f(he,qa),f(qa,Ga),f(Ga,Ha),f(qa,_a),f(qa,Ua),f(Ua,Ya),f(qa,Ma),f(qa,Fa),f(Fa,za),f(qa,Ja),f(qa,Xa),f(Xa,Ka),f(Ka,Qa),f(Xa,Za),f(Xa,et),f(et,at),f(et,tt),f(tt,ot),f(et,rt),f(et,st),f(st,lt),f(et,nt),f(et,ct),f(ct,it),f(et,ut),f(Xa,ht),f(Xa,dt),f(dt,ft),f(qa,pt),f(qa,mt),f(mt,gt),f(qa,yt),f(qa,vt),f(vt,bt),f(bt,wt),f(vt,xt),f(vt,Et),f(Et,kt),f(Et,$t),f($t,St),f(Et,It),f(Et,Tt),f(Tt,Lt),f(Et,Nt),f(Et,At),f(At,Pt),f(Et,Dt),f(qa,Wt),f(qa,Ot),f(Ot,Rt),f(qa,Vt),f(qa,Bt),f(Bt,jt),f(qa,Ct),f(qa,qt),f(qt,Gt),f(Gt,Ht),f(Ht,_t),f(qt,Ut),f(qt,Yt),f(Yt,Mt),f(Mt,Ft),f(qt,zt),f(qt,Jt),f(Jt,Xt),f(Xt,Kt),f(Jt,Qt),f(qa,Zt),f(qa,eo),f(eo,ao),f(eo,to),f(to,oo),f(eo,ro),f(he,so),f(he,lo),f(lo,no),f(no,co),f(lo,io),$(uo,lo,null),f(lo,fo),f(lo,po),f(po,mo),f(po,go),f(go,yo),f(he,vo),f(he,bo),f(bo,wo),f(wo,xo),d(o,$o,r),jo&&jo.m(o,r),d(o,So,r),Io=!0,To||(Lo=[p(fe,"change",e[20]),p(me,"load",e[23]),p(de,"click",e[18]),p(de,"dragenter",S(I(e[21]))),p(de,"dragover",S(I(e[21]))),p(de,"dragleave",S(I(e[24]))),p(de,"drop",S(I(e[19]))),p(Oe,"input",e[25]),p(qe,"input",e[26]),p(Me,"input",e[27]),p(ca,"input",e[29]),p(Sa,"input",e[32]),p(wo,"click",I(e[17]))],To=!0)},p(e,a){(!Io||16384&a[0]&&me.src!==(ge=e[14]||"/avatar.svg"))&&h(me,"src",ge),(!Io||1&a[0]&&ye!==(ye=e[0]+"'s image'"))&&h(me,"alt",ye),(!Io||8192&a[0])&&k(be,"transform","scale("+e[13]/100+")"),(!Io||4096&a[0]&&Le!==(Le="bg-white shadow rounded-full sm:mx-auto grid h-40 w-40\n            justify-center items-center mb-6 border-white cursor-pointer "+e[12]+" relative"))&&h(de,"class",Le),1&a[0]&&Oe.value!==e[0]&&v(Oe,e[0]),2&a[0]&&qe.value!==e[1]&&v(qe,e[1]),4&a[0]&&Me.value!==e[2]&&v(Me,e[2]);const t={};!ta&&8&a[0]&&(ta=!0,t.value=e[3],W(()=>ta=!1)),aa.$set(t),16&a[0]&&ca.value!==e[4]&&v(ca,e[4]);const o={};!ma&&512&a[0]&&(ma=!0,o.value=e[9],W(()=>ma=!1)),pa.$set(o),"yes"===e[9]?Wo?Wo.p(e,a):(Wo=q(e),Wo.c(),Wo.m(he,wa)):Wo&&(Wo.d(1),Wo=null),64&a[0]&&v(Sa,e[6]);const r={};!Ra&&128&a[0]&&(Ra=!0,r.value=e[7],W(()=>Ra=!1)),Oa.$set(r);const s={};!ho&&256&a[0]&&(ho=!0,s.value=e[8],W(()=>ho=!1)),uo.$set(s),(!Io||32768&a[0]&&Eo!==(Eo=!e[15]))&&(wo.disabled=Eo),(!Io||32768&a[0]&&ko!==(ko=(e[15]?"bg-primary cursor-pointer":"bg-gray-400 cursor-not-allowed")+"\n              appearance-none block rounded py-3 px-4 leading-tight flex-grow focus:outline-none\n              text-center font-bold text-white"))&&h(wo,"class",ko),e[10]?jo||(jo=G(),jo.c(),jo.m(So.parentNode,So)):jo&&(jo.d(1),jo=null)},i(e){Io||(T(aa.$$.fragment,e),T(pa.$$.fragment,e),T(Oa.$$.fragment,e),T(uo.$$.fragment,e),Io=!0)},o(e){L(aa.$$.fragment,e),L(pa.$$.fragment,e),L(Oa.$$.fragment,e),L(uo.$$.fragment,e),Io=!1},d(t){t&&u(a),e[22](null),N(aa),N(pa),Wo&&Wo.d(),N(Oa),N(uo),t&&u($o),jo&&jo.d(t),t&&u(So),To=!1,A(Lo)}}}function _(e,a,t){let o,r,s,l,n,c,i,u,h,d;let f=!1;let p,m,g=0,y="";const v=async e=>{let a=e.target.files[0];if(!a)return;const o=await(await fetch("https://image-worker.compsoc.workers.dev",{headers:{"Content-Type":a.type}})).json(),r=new FileReader,s=new XMLHttpRequest;s.upload.addEventListener("progress",e=>{e.lengthComputable&&(t(13,g=Math.round(100*e.loaded/e.total)),console.log(g))},!1),s.upload.addEventListener("load",e=>{t(13,g=100),t(14,y=o.access)},!1),s.open("PUT",o.signed),s.setRequestHeader("x-amz-acl","public-read"),s.setRequestHeader("Content-Type",a.type),s.overrideMimeType(a.type),r.onload=function(e){s.send(e.target.result)},r.readAsArrayBuffer(a)};let b;return e.$$.update=()=>{16735&e.$$.dirty[0]&&t(15,b="yes"===h&&o&&y&&r&&s&&l&&n&&i)},[o,r,s,l,n,c,i,u,h,d,f,p,m,g,y,b,[{label:"2nd",display:"2nd"},{label:"3rd",display:"3rd"},{label:"4th",display:"4th"},{label:"5th",display:"5th"}],async()=>{t(10,f=!0);(await fetch("https://slack-injest.compsoc.workers.dev",{method:"POST",body:JSON.stringify({text:`\n*Picture*: ${y}\n*Name*: ${o}\n*Email*: ${r}\n*Student Number*: ${s}\n*Year of Study*: ${l}\n*Degree Program*: ${n}\n*Needs a spouse*: ${"no"===d?"Yes":`No (paired with "${c}")`}\n*Bio*: ${i}\n*Events*: ${u}\n        `,icon_url:y,username:o,attachments:[{fallback:"JSON",color:"good",fields:[{title:"JSON",value:JSON.stringify({picture:y,name:o,email:r,studentNumber:s,yearOfStudy:l,degreeProgram:n,needsMatch:"no"===d,spouseName:c,bio:i,eventsPreference:u}),short:!1}]}]})})).ok&&(t(10,f=!1),O("/success"))},e=>{t(12,m="border-blue-500"),console.log(e),p.click()},e=>{const a=e.dataTransfer.files;v({target:{files:a}})},v,e=>{console.log(e),t(12,m="border-blue-500")},function(e){P[e?"unshift":"push"](()=>{p=e,t(11,p)})},()=>100===g?setTimeout(()=>t(13,g=0),500):null,()=>t(12,m=""),function(){o=this.value,t(0,o)},function(){r=this.value,t(1,r)},function(){s=this.value,t(2,s)},function(e){l=e,t(3,l)},function(){n=this.value,t(4,n)},function(e){d=e,t(9,d)},function(){c=this.value,t(5,c)},function(){i=this.value,t(6,i)},function(e){u=e,t(7,u)},function(e){h=e,t(8,h)}]}export default class extends e{constructor(e){super(),a(this,e,_,H,t,{},[-1,-1])}}