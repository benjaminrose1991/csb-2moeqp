parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"wgsO":[function(require,module,exports) {
var e,t=[{category:"Development",pictureSrc:"src/images/development_icon.png",subQuests:[{name:"Sub-Quest 1",info:"This is the first task of the TIC Quest. It is a simple task that will be completed by the user.",tasks:[{name:"task 1",taskId:"1"},{name:"task 2",taskId:"2"}]}]}],n=[];function a(){e=window.localStorage,c(),o()}function c(){e.getItem("tasksCompleted")?n=e.getItem("tasksCompleted").split(","):e.setItem("tasksCompleted",n)}function r(t){if(n.includes(t)){var a=n.filter(function(e){return e!==t});n=a,console.log(a)}else n.push(t);e.setItem("tasksCompleted",n)}function m(e){return n.includes(e)}function o(){i()}function i(){t.forEach(function(e){var t=E(e);s(e.subQuests,t)})}function s(e,t){e.forEach(function(e,n){var a=document.createElement("div");a.className="connectingLine",a.innerHTML="&nbsp;";var c=f(e);return t.append(a),t.append(c),c})}function u(e){var t=document.createElement("div"),n=document.createElement("h3"),a=document.createElement("hr"),c=document.createElement("p");return t.className="infoContainer",c.className="taskInfo",a.className="horizontalLine",n.innerText="Info",c.innerText=e.info,t.append(n),t.append(a),t.append(c),t}function d(e){var t=document.createElement("div"),n=document.createElement("h2"),a=document.createElement("hr"),c=k(e.tasks);return t.className="taskContainer",a.className="horizontalLine",n.innerText="Tasks",t.append(n),t.append(a),t.append(c),t}function l(e){var t=document.createElement("div"),n=document.createElement("progress");return n.max=e.tasks.length,n.value=v(e.tasks),t.className="progressBarContainer",t.append(n),t}function p(e){var t=document.createElement("div");t.className="taskCard";var n=u(e),a=d(e),c=l(e);return t.append(n),t.append(a),t.append(c),t}function f(e){var t=document.createElement("div"),n=document.createElement("h2"),a=p(e);return t.className="team",n.innerText=e.name,t.append(n),t.append(a),t}function v(e){return e.filter(function(e){return n.includes(e.taskId)}).length}function k(e){var t=document.createElement("div");return t.className="taskList",e.forEach(function(n){var a=document.createElement("div");a.className="taskListItem";var c=document.createElement("p"),o=document.createElement("input");o.type="checkbox",o.onclick=function(){r(n.taskId),v(e)},c.innerText=n.name,o.checked=m(n.taskId),a.append(c),a.append(o),t.append(a)}),t}function E(e){var t=h();return g(t),I(t,e),C(t),document.getElementById("teams-container").append(t.teamContainer),t.teamContainer}function h(){return{teamContainer:document.createElement("div"),team:document.createElement("div"),teamHeading:document.createElement("h2"),teamPicture:document.createElement("img")}}function g(e){e.teamContainer.className="team-container",e.teamPicture.className="categoryIcon",e.team.className="team"}function I(e,t){e.teamHeading.innerText=t.category,e.teamPicture.src=t.pictureSrc,e.teamPicture.width=100}function C(e){e.team.append(e.teamHeading),e.team.append(e.teamPicture),e.teamContainer.append(e.team)}window.onDocumentLoad=a();
},{}]},{},["wgsO"], null)
//# sourceMappingURL=/csb-2moeqp/main.0850b077.js.map