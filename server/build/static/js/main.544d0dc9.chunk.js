(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),s=(a(57),a(1)),l=a(50),c=a(17),m=a.n(c),d=a(3);var u=function(){return o.a.createElement("nav",{id:"navbar"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"menu"},o.a.createElement("li",{id:"navbar-logo"},o.a.createElement("a",{href:"/"},o.a.createElement("div",{id:"title"},o.a.createElement("span",{className:"logo-text-2"},"acm"),o.a.createElement("span",{className:"logo-text-1"},"-w | newberg")))),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(m.a,{offset:"100",id:"home-tab",href:"#home"},"home")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(m.a,{offset:"100",href:"#team"},"our board")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(m.a,{offset:"100",href:"#challenges"},"innovation")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(m.a,{offset:"100",href:"#faq"},"code jam faq")),o.a.createElement("li",{className:"navbar-item"},o.a.createElement(m.a,{offset:"100",id:"sponsors-tab",href:"#sponsors"},"sponsors")))))},p=a(18),h=a(19),f=a(21),g=a(20),v=a(22),b=a(44),E=a.n(b),y=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"home"},o.a.createElement("img",{className:"logo scale-in-center",src:E.a,alt:"codejam large text"}),o.a.createElement("div",{className:"rowC"},o.a.createElement("div",{id:"date-text"},"Check back in 2023 for our next Code Jam!",o.a.createElement("br",null),"George Fox University")))}}]),t}(o.a.Component),w=a(45),k=a.n(w);var x={color:"#ffcf3f",fontSize:"3rem",fontWeight:"bold",textAlign:"center",marginBottom:"1rem",marginTop:"2rem"},N=function(){return o.a.createElement("div",{id:"about"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",{style:x},"Welcome to ACM-W!"),o.a.createElement("div",{className:"about-video center",style:{paddingTop:"50px"}},o.a.createElement(k.a,{controls:"true",url:"https://www.youtube.com/watch?v=t1JBBZinH3Q",height:"100%",width:"100%"})),o.a.createElement("div",{style:{paddingTop:"100px"}},o.a.createElement("p",{className:"intro center"},"Our goal as a part of ACM-W is to create a community within our Computer Science and Information Systems department. Even though we are a chapter focusing on women inclusion in tech, we want to provide a positive environment for everyone."))))},C=a(46),j=a.n(C),O=(a(87),a(88),["#edf5ee","#edf5ee","#edf5ee","#edf5ee"]);function A(){for(var e=[];e.length<O.length&&e.length!==d.e.length;){var t=Math.floor(Math.random()*d.e.length);-1===e.indexOf(t)&&e.push(t)}return e}var q=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).updateDimensions=function(){a.setState({width:window.innerWidth})},a.state={arr:[],width:0},a}return Object(v.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({arr:A()})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this,t=3;window.innerWidth<768.68&&(t=1);var a={className:"center",centerMode:!0,infinite:!0,slidesToShow:t,swipeToSlide:!0,focusOnSelect:!0,speed:500};return o.a.createElement("div",{className:"project-card"},o.a.createElement(j.a,Object.assign({ref:function(t){return e.slider=t}},a),d.e.map(function(e,t){var a=O[t%3];return o.a.createElement(T,{color:a,title:e.title,text:e.description,url:e.url})})))}}]),t}(o.a.Component),T=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{key:this.props.title,className:"grid-item",style:{backgroundColor:this.props.color},onClick:this.props.onClick},o.a.createElement("p",{className:"title"},this.props.title),o.a.createElement("p",{className:"text"},this.props.text),this.props.url&&o.a.createElement("p",{style:{width:"100%",marginBottom:"5%"}},o.a.createElement("a",{className:"url arrowlink",href:this.props.url},"View more")))}}]),t}(o.a.Component),W=function(){return o.a.createElement("div",{id:"projects"},o.a.createElement("h1",{className:"section-heading"},"Past Projects"),o.a.createElement(q,null))},S=[a(89)],M=function(e){var t=e.q,a=e.a,n=e.link,r=e.textBefore,i=e.textIn,s=e.textAfter,l=e.i;return o.a.createElement("div",{className:"faq-item",key:t+a},o.a.createElement("h2",{className:"section-subheading faq-question"},o.a.createElement("img",{alt:"faq plus",className:"faq-plus",src:S[l%S.length],style:{height:30}}),t),o.a.createElement("p",{className:"faq-answer"},n?o.a.createElement(o.a.Fragment,null,r,o.a.createElement("a",{href:n},i),s):a))},I=function(){return o.a.createElement("div",{id:"faq"},o.a.createElement("h1",{className:"section-heading"},"code jam faq"),o.a.createElement("div",{className:"faq-container"},d.d.map(function(e,t){return o.a.createElement(M,Object.assign({},e,{i:t}))})),o.a.createElement("br",null))},D={biggest:[{link:"https://silverpine.com",img:a(90)},{link:"https://cs.georgefox.edu/faculty",img:a(91)}],big:[{link:"https://www.georgefox.edu/offices/student-government/index.html",img:a(92)}]},B=function(e){return o.a.createElement("div",{className:"level level-".concat(e)},D[e].map(function(e){return o.a.createElement("a",{id:"gov",href:e.link,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{key:e.img,src:e.img,alt:"sponsor"}))}))};var F=function(){return o.a.createElement("div",{id:"sponsors",className:"container"},B("biggest"),B("big"),o.a.createElement("a",{href:"mailto:acm.gfu@gmail.com?Subject=ACM%20Sponsorship%20Interest",className:"apply-button"},"become a sponsor!"))};function J(e){return o.a.createElement("div",{className:"challenge"},o.a.createElement("img",{src:e.logo,alt:e.name+" logo"}),o.a.createElement("h1",null,e.name),o.a.createElement("p",null,e.description))}var P=function(){return o.a.createElement("div",{id:"challenges"},o.a.createElement("div",{className:"stripe accent-orange"}),o.a.createElement("h1",{className:"section-heading"},"innovation at fox"),o.a.createElement("div",{className:"section-intro"},d.c),o.a.createElement("div",{className:"container"},d.b.map(function(e,t){return o.a.createElement(J,{name:e.name,logo:e.logo,description:e.description,key:t})})))},H=a(48),G=a(51),U=a(47);a(93);function L(){return o.a.createElement(o.a.Fragment,null,d.a.map(function(e,t){return o.a.createElement(G.a,{key:t},o.a.createElement("img",{src:e.image,alt:e.name,className:"grid-item-image"}),o.a.createElement("h3",{className:"member-name"},e.name),e.email?o.a.createElement("p",{className:"member-email"},o.a.createElement("a",{href:"mailto:".concat(e.email)},e.email)):null,o.a.createElement("p",{className:"member-pos"},e.pos))}))}var V=function(){return o.a.createElement("div",{id:"team",className:"container"},o.a.createElement("h1",{className:"section-heading",id:"sub-heading"},"2022-23 Board of Directors"),o.a.createElement(U.a,{fluid:!0},o.a.createElement(H.a,{style:{width:"100%"}},o.a.createElement(L,null))))};a(95),a(97);function z(){return o.a.createElement("div",null,o.a.createElement(u,null),o.a.createElement(y,null),o.a.createElement(N,null),o.a.createElement(V,null),o.a.createElement(P,null),o.a.createElement(I,null),o.a.createElement(W,null),o.a.createElement(F,null))}function R(e){var t=e.from,a=e.to;return o.a.createElement(s.a,{exact:!0,path:t,component:function(){return window.location=a,null}})}i.a.render(o.a.createElement(function(){return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement(s.c,null,o.a.createElement(R,{from:"/sponsors",to:"https://forms.gle/EMv7CcD2MxFEh6RUA"}),o.a.createElement(R,{from:"/code-of-conduct",to:"https://github.com/HarryZ10/website/blob/website-2022/CODE-OF-CONDUCT"}),o.a.createElement(R,{from:"/privacy-policy",to:"https://github.com/HarryZ10/website/blob/website-2022/PRIVACY-POLICY.md"}),o.a.createElement(s.a,{exact:!0,path:"/",component:z}))))},null),document.getElementById("root"))},3:function(e){e.exports={a:[{name:"Harry",pos:"President",email:"harry@foxacmw.com",image:"team/harry.jpg"},{name:"Cassie",pos:"Executive Vice President",image:"team/tbd.jpg"},{name:"Alex",pos:"Associate VP of Finance",image:"team/tbd.jpg"},{name:"Dominick",pos:"Associate VP of Partnerships",image:"team/tbd.jpg"}],c:"Code Jam 2.0, the second iteration, is founded by George Fox University's first Premier Hackathon organization. Our theme this year is about starting a non-profit: addressing deeply impactful issues and designing creative, unique solutions. We\u2019ve identified five global and technological challenges that we think have tons of potential for innovation. Across each of these challenges, we\u2019ve scaffolded resources like potential project ideas and toolkits, and more to help get you get started. There isn't a strict guideline for what you should work on, but here are some of our focus areas:",b:[{name:"health",logo:"images/challenges/health.png",description:"Giving nutrition & wellness for all people"},{name:"sustainability",logo:"images/challenges/sustain.png",description:"Providing a clean home for all"},{name:"education",logo:"images/challenges/ed.png",description:"Offering a learning mind to expand our thinking"},{name:"Social Change",logo:"images/challenges/social-change.png",description:"Maintaining and advocating for justice for all"},{name:"Accessibility",logo:"images/challenges/non-profit.png",description:"Caring for those who are often overlooked"}],e:[{title:"Book Lend",description:"Trey, Adam, and Ethan developed a book lending platform that provides students the functionality to share books throughout the student body. They utilized Node.js for our REST API and PostgreSQL for our database. Lastly, they used HTML, Bootstrap, and JavaScript."},{title:"Voluntime",url:"https://github.com/voluntime",description:"The Code Jam 2022 winning project was developed by Trey, Adam, Rylan, and Blake. Voluntime creates a community of organizations and individuals who are passionate about volunteering. The project was made open-source and is available on GitHub."},{title:"Shortest Path Across Campus",url:"https://shortestpath.herokuapp.com/",description:"Alex, Daniel, Connor, and Dominic created a web application that uses Dijkstra's algorithm to find the shortest path between two points on campus. They used HTML, CSS, JavaScript, and Bootstrap for the front end and used SVGs to create and manipulate the map."},{title:"Bruin Dashboard",url:"https://bruin-dashboard.netlify.app",description:"Harry, Nicolle, and Josh developed a dashboard for the Bruin community to keep track of GFU events, weather, and NYT articles. They used HTML, CSS, and JavaScript, using the React framework. They used the New York Times and OpenWeatherMap API to collect the data, using Material-UI to display it."}],d:[{q:"What if I don\u2019t know how to code?",a:"The Code Jam event is the perfect time and place to learn. We provide starter code repositories, as well as beginner-friendly workshops and mentors to help you build something you can be proud of."},{q:"Can I get a grade boost in my computer science classes?",a:"This is a huge opportunity for you to gain a +1-3% boost in your grade. The application of that boost is up to each computer science professor's discretion. Feel free to email your professor to discuss extra credit for participating in the Code Jam."},{q:"What is this 'hacker culture'? What is a hackathon?",a:"A hackathon is where you turn your fun ideas into real projects. We provide a help desk, mentors, fun activities, speakers, workshops, food, friends, and so much more. You take care of hacking; we\u2019ll take care of you."},{q:"Is the Code Jam going to be in-person or virtual?",a:"We are planning for the Code Jam to be an in-person and unmasked event. All in-person plans are however subject to change with evolving public health guidance explicitly from the George Fox Administration."},{q:"Are masks required to attend?",a:"We are following George Fox University's public health guidance, dropping the mask mandate as soon as George Fox does. However, we will continue to provide well-fitting N-95 masks to participants who want one for self-protection."},{q:"I don't have experience with projects, can I still participate?",a:"Absolutely, project experience can be a monumental opportunity for you to apply your technical skills and develop innovative and creative ideas."},{q:"What if I don\u2019t have a team or idea?",a:"Not a problem! The ACM-W leadership team will consider your application and help you form a team of two to four other hackers. We will also provide design thinking handouts to help you get started with an idea 2-3 days before the hacking starts."},{q:"What can I build?",a:"We accept anything, really. iOS, android, web, mobile, gaming, VR...you name it, we\u2019ll support it, as long as it can be properly presented and judged via Gitlab and Devpost."},{q:"What is the cost?",a:"Nothing! It's all free and accessible for hackers. It\u2019s our pleasure to bring in our resources, workshops, free food, swag, and prizes. Thus, we're committed to making all ACM events accessible and free!"},{link:"https://github.com/FoxHacks/policies",q:"What is the ACM-W code of conduct?",textBefore:"ACM abides by ",textIn:"this Code of Conduct",textAfter:", adapted from the Hack Code of Conduct, and the GFU community lifestyle agreement that you may have also signed. Every Code Jam applicant must agree to these policies to be considered for participation. ACM-W is and will be a safe place where everyone is welcome."},{link:"mailto:acm.gfu@gmail.com",q:"I have some other question!",textBefore:"Email us at ",textIn:"acm.gfu@gmail.com",textAfter:". We gotchu. <3"}]}},44:function(e,t,a){e.exports=a.p+"static/media/codejam-text.891fa2c0.png"},52:function(e,t,a){e.exports=a(100)},89:function(e,t,a){e.exports=a.p+"static/media/faq1.87c41b01.svg"},90:function(e,t,a){e.exports=a.p+"static/media/silverpine.5bfe24c2.png"},91:function(e,t,a){e.exports=a.p+"static/media/georgefox.5ba50be1.png"},92:function(e,t,a){e.exports=a.p+"static/media/asc.4f07e521.png"},95:function(e,t,a){var n=a(96);n.keys().forEach(n)},96:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=96},97:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.544d0dc9.chunk.js.map