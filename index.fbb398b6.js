var e,t;function n(e,t){let n=null;switch(e){case 0:n=document.getElementById(t);break;case 1:n=document.getElementsByClassName(t)[0];break;case 2:n=document.getElementsByTagName(t)[0];break;case 3:n=document.querySelector(t)}if(null===n)throw Error(`Element not found: ${t}`);return n}(t=e||(e={}))[t.ID=0]="ID",t[t.CLASS=1]="CLASS",t[t.TAG=2]="TAG",t[t.SELECTOR=3]="SELECTOR";const o=n(e.ID,"taskbar-status-time");function a(){let e=new Date;e.setHours(e.getHours()),o.innerText=e.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric"})}setInterval(()=>{a()},1e3),a();const i=n(e.ID,"taskbar-status-icons");!function(e){let t=document.createElement("a");t.href=e.link,t.target="_blank",t.innerHTML=`<img src="${e.icon}" alt="${e.name}">`,t.title=e.name,i.appendChild(t)}(new class{name;link;icon;constructor(e,t,n){this.name=e,this.link=t,this.icon=n}}("GitHub Repository","https://github.com/JordanViknar/JordanViknar.github.io","https://www.cdnlogo.com/logos/g/69/github-icon.svg"));
//# sourceMappingURL=index.fbb398b6.js.map