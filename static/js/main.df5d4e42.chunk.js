(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{24:function(e,s,t){},27:function(e,s,t){},47:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(16),i=t.n(a),n=(t(24),t(6)),r=t(7),l=t(9),j=t(8),d=t(13),o=t(17),h=t.n(o),b=(t(27),t(18)),m=t(4),O=t.n(m),u=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.github,s=this.props.data.name,t=this.props.data.description;return Object(u.jsxs)("header",{id:"home",children:[Object(u.jsx)(b.a,{type:"circle",num:200,bg:!0}),Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsx)("h1",{className:"responsive-headline",children:s})}),Object(u.jsx)(O.a,{bottom:!0,duration:1200,children:Object(u.jsxs)("h3",{children:[t,"."]})}),Object(u.jsx)("hr",{}),Object(u.jsx)(O.a,{bottom:!0,duration:2e3,children:Object(u.jsx)("ul",{className:"social",children:Object(u.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})})})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(O.a,{bottom:!0,children:Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsxs)("ul",{className:"copyright",children:[Object(u.jsx)("li",{children:"\xa9 Copyright 2021 Nordic Giant"}),Object(u.jsxs)("li",{children:["Design by"," ",Object(u.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})]})]})]})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,j=this.props.data.resumedownload;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(O.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"three columns",children:Object(u.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("h2",{children:"About Me"}),Object(u.jsx)("p",{children:t}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"columns contact-details",children:[Object(u.jsx)("h2",{children:"Contact Details"}),Object(u.jsxs)("p",{className:"address",children:[Object(u.jsx)("span",{children:e}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:[c,Object(u.jsx)("br",{}),a," ",i,", ",n]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:r}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:l})]})]}),Object(u.jsx)("div",{className:"columns download",children:Object(u.jsx)("p",{children:Object(u.jsxs)("a",{href:j,className:"button",children:[Object(u.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(c.Component),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.school}),Object(u.jsxs)("p",{className:"info",children:[e.degree," ",Object(u.jsx)("span",{children:"\u2022"}),Object(u.jsx)("em",{className:"date",children:e.graduated})]}),Object(u.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.research.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.company}),Object(u.jsxs)("p",{className:"info",children:[e.title,Object(u.jsx)("span",{children:"\u2022"})," ",Object(u.jsx)("em",{className:"date",children:e.years})]}),Object(u.jsx)("p",{children:e.description}),Object(u.jsxs)("p",{className:"funding",children:["Funding: ",e.funding]})]},e.company)})),i=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(u.jsx)("em",{children:s.name})]},s.name)}));return Object(u.jsxs)("section",{id:"resume",children:[Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row education",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Education"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:Object(u.jsx)("div",{className:"row item",children:Object(u.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row work",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Work"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row research",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Research"})})}),Object(u.jsx)("div",{className:"nine columns main-col",children:a})]})}),Object(u.jsx)(O.a,{left:!0,duration:1300,children:Object(u.jsxs)("div",{className:"row skill",children:[Object(u.jsx)("div",{className:"three columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Skills"})})}),Object(u.jsxs)("div",{className:"nine columns main-col",children:[Object(u.jsx)("p",{children:s}),Object(u.jsx)("div",{className:"bars",children:Object(u.jsx)("ul",{className:"skills",children:i})})]})]})})]})}}]),t}(c.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.street,t=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(u.jsxs)("section",{id:"contact",children:[Object(u.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"row section-head",children:[Object(u.jsx)("div",{className:"two columns header-col",children:Object(u.jsx)("h1",{children:Object(u.jsx)("span",{children:"Get In Touch."})})}),Object(u.jsx)("div",{className:"ten columns",children:Object(u.jsx)("p",{className:"lead",children:n})})]})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(u.jsxs)("div",{className:"eight columns",children:[Object(u.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(u.jsxs)("fieldset",{children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(u.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(u.jsx)("span",{className:"required",children:"*"})]}),Object(u.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"submit",children:"Submit"}),Object(u.jsx)("span",{id:"image-loader",children:Object(u.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(u.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(u.jsxs)("div",{id:"message-success",children:[Object(u.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(u.jsx)("br",{})]})]})}),Object(u.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(u.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(u.jsxs)("div",{className:"widget widget_contact",children:[Object(u.jsx)("h4",{children:"Address and Phone"}),Object(u.jsxs)("p",{className:"address",children:[e,Object(u.jsx)("br",{}),s," ",Object(u.jsx)("br",{}),t,", ",c," ",a,Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:i})]})]}),Object(u.jsxs)("div",{className:"widget widget_tweets",children:[Object(u.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(u.jsxs)("ul",{id:"twitter",children:[Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:["This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum",Object(u.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(u.jsx)("b",{children:Object(u.jsx)("a",{href:"./",children:"2 Days Ago"})})]}),Object(u.jsxs)("li",{children:[Object(u.jsxs)("span",{children:["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi",Object(u.jsx)("a",{href:"./",children:"http://t.co/CGIrdxIlI3"})]}),Object(u.jsx)("b",{children:Object(u.jsx)("a",{href:"./",children:"3 Days Ago"})})]})]})]})]})})]})]})}}]),t}(c.Component),g=t(19),w=t.n(g),y=0,k=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var s="images/portfolio/"+e.image;return Object(u.jsx)("div",{className:"columns portfolio-item",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)(w.a,{alt:e.title,src:s}),Object(u.jsxs)("div",{style:{textAlign:"center"},children:[Object(u.jsx)("h2",{children:Object(u.jsx)("a",{href:e.url,children:e.title})}),Object(u.jsx)("div",{className:"languages",children:Object(u.jsxs)("p",{children:[e.languages," "]})}),Object(u.jsx)("div",{className:"years",children:Object(u.jsxs)("p",{children:[e.years," "]})}),Object(u.jsx)("b",{children:e.description})]}),Object(u.jsx)("ul",{className:"social",children:Object(u.jsxs)("a",{href:e.url,className:"button btn github-btn",children:[Object(u.jsx)("i",{className:"fa fa-github"}),"Github"]})})]})},y++)}));return Object(u.jsx)("section",{id:"portfolio",children:Object(u.jsx)(O.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",children:[Object(u.jsx)("h1",{children:"Projects"}),Object(u.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),t}(c.Component),C=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{data:this.state.resumeData.main}),Object(u.jsx)(f,{data:this.state.resumeData.main}),Object(u.jsx)(v,{data:this.state.resumeData.resume}),Object(u.jsx)(k,{data:this.state.resumeData.portfolio}),Object(u.jsx)(N,{data:this.state.resumeData.main}),Object(u.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(c.Component),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,i=s.getLCP,n=s.getTTFB;t(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(u.jsx)(C,{}),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.df5d4e42.chunk.js.map