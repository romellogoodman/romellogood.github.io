(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=(t(147),t(8)),i=t.n(r),A=t(52),l=t.n(A),c=t(149),m=t.n(c),h=t(5),s=t.n(h),g=t(150),u=t.n(g),p=t(159),d=t(169),f=t.n(d),b=t(170);function E(){var e=m()(["\n  body {\n    margin: 0;\n    font-family: -apple-system,BlinkMacSystemFont,sans-serif;\n    font-weight: 400;\n    line-height: 1.25;\n    word-wrap: break-word;\n    font-kerning: normal;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  h1, h2, h3, h4, h5, h6, p {\n    margin: 0 0 1.0875rem 0;\n    padding: 0;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-top: 2.9rem;\n    line-height: 1.1;\n    color: hsla(0, 0%, 0%, 0.9);\n    font-weight: 700;\n    text-rendering: optimizeLegibility;\n  }\n\n  h1 {\n    margin: .67em 0;\n    font-size: 2em;\n  }\n\n  h2 {\n    font-size: 1.51572rem;\n  }\n\n  h3 {\n    font-size: 1.31951rem;\n  }\n\n  h4 {\n    font-size: 1rem;\n  }\n\n  h5 {\n    font-size: 0.87055rem;\n  }\n\n  h6 {\n    font-size: 0.81225rem;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]);return E=function(){return e},e}Object(p.b)(E());var w=p.a.div.withConfig({displayName:"Layout__Div",componentId:"sc-1rfznfi-0"})(["max-width:600px;margin:0 auto;padding:1.45rem 1.0875rem;.color{transition:color 0.5s ease;",";}"],function(e){return e.color&&"color: "+e.color+";"}),C=function(e){function n(n){var t;return(t=e.call(this,n)||this).state={color:"#000000"},t.getColor=t.getColor.bind(l()(l()(t))),t}i()(n,e);var t=n.prototype;return t.componentDidMount=function(){setInterval(this.getColor,1e3)},t.getColor=function(){var e,n,t,o,a,r,i,A,l=new Date,c=l.getMinutes()/59*360,m=l.getSeconds()/59,h=.75;switch(r=h*(1-m),i=h*(1-(a=6*c-(o=Math.floor(6*c)))*m),A=h*(1-(1-a)*m),o%6){case 0:e=h,n=A,t=r;break;case 1:e=i,n=h,t=r;break;case 2:e=r,n=h,t=A;break;case 3:e=r,n=i,t=h;break;case 4:e=A,n=r,t=h;break;case 5:e=h,n=r,t=i}var s=Math.round(255*e),g=Math.round(255*n),u=Math.round(255*t);this.setState({color:"rgb("+s+","+g+","+u+")"})},t.render=function(){var e=this.props.children,n=this.state.color;return a.a.createElement("div",null,a.a.createElement(u.a,null,a.a.createElement("link",{rel:"icon",href:f.a}),a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{name:"description",content:"The Personal Website of Romello Goodman."}),a.a.createElement("meta",{name:"keywords",content:"Romello Goodman"}),a.a.createElement("meta",{name:"version",content:b.a}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.a.createElement("title",null,"Romello Goodman")),a.a.createElement(w,{color:n},e))},n}(o.Component);C.propTypes={children:s.a.array};var I=C;n.default=function(){return a.a.createElement(I,null,a.a.createElement("h1",{className:"color"},"hi people!"),a.a.createElement("h3",null,"my name is ",a.a.createElement("span",{className:"color"},"Romello Goodman"),"."),a.a.createElement("a",{href:"https://github.com/romellogoodman",target:"_blank",rel:"noopener noreferrer",title:"Go to github."},a.a.createElement("h3",null,"github")))}},169:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAAAFUlEQVQ4EWNgGAWjITAaAqMhAAkBAAQQAAG+Y1MiAAAAAElFTkSuQmCC"},170:function(e){e.exports={a:"1.0.0"}}}]);
//# sourceMappingURL=component---src-pages-index-js-8c2b30342c8723b6653b.js.map