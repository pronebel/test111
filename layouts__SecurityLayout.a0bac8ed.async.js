(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0jlH":function(p,i,e){"use strict";e.r(i);var E=e("fWQN"),c=e("mtLc"),O=e("yKVA"),M=e("879j"),h=e("q1tI"),u=e.n(h),D=e("/MKj"),v=e("95SA"),P=e("WHYC"),l=e("s4NR"),L=e.n(l),C=e("c+yx"),f=function(a){Object(O.a)(t,a);var o=Object(M.a)(t);function t(){var s;Object(E.a)(this,t);for(var _=arguments.length,r=new Array(_),n=0;n<_;n++)r[n]=arguments[n];return s=o.call.apply(o,[this].concat(r)),s.state={isReady:!1},s}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var _=this.props.dispatch;_&&_({type:"user/fetchCurrent"})}},{key:"render",value:function(){var _=this.state.isReady,r=this.props,n=r.children,y=r.loading,d=r.currentUser,m=C.b?!0:d&&d.userid,R=Object(l.stringify)({redirect:window.location.href});return!m&&y||!_?u.a.createElement(v.a,null):m?n:u.a.createElement(P.a,{to:"/user/login?".concat(R)})}}]),t}(u.a.Component);i.default=Object(D.c)(function(a){var o=a.user,t=a.loading;return{currentUser:o.currentUser,loading:t.models.user}})(f)}}]);