webpackJsonp([3],{41:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=u(74),l=n(r);t.default=function(e,t,u){return t in e?(0,l.default)(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}},52:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(){return{type:i}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1],u=s[t.type];return u?u(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.PLUS=void 0;var o=u(41),a=n(o);t.plus=r,t.default=l;var i=t.PLUS="PLUS",s=(t.actions={plus:r},(0,a.default)({},i,function(e){return e+1})),f=0},405:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(53),l=n(r),o=u(54),a=n(o),i=u(55),s=n(i),f=u(57),d=n(f),c=u(56),p=n(c),v=u(3),_=n(v),y=function(e){function t(){return(0,a.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.interval=setInterval(this.props.plus,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props.elapse;return _.default.createElement("h1",null,"Seconds Elapsed: ",e)}}]),t}(v.Component);t.default=y,y.propTypes={elapse:_.default.PropTypes.number.isRequired,plus:_.default.PropTypes.func.isRequired}},406:function(e,t,u){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=u(51),l=u(52),o=u(405),a=n(o),i={plus:l.plus},s=function(e){return{elapse:e.elapse}};t.default=(0,r.connect)(s,i)(a.default)}});