webpackJsonp([23899280101116],{112:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var s=a(12),o=i(s),n=a(14),l=i(n),r=a(13),d=i(r),u=a(78),c=i(u),f=a(28),p=i(f),m=a(1),h=i(m),g=a(3),y=i(g),v=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},w=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!b[a]||(b[a]=!0,!1)},E=void 0,z=[];"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){z.forEach(function(t){t[0]===e.target&&e.isIntersecting&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"}));var L=function(e,t){E.observe(e),z.push([e,t])},I=function(e){var t=e.opacity,a=e.onLoad,i=e.transitionDelay,s=void 0===i?"":i,o=(0,c.default)(e,["opacity","onLoad","transitionDelay"]);return h.default.createElement("img",(0,p.default)({},o,{onLoad:a,style:{position:"absolute",top:0,left:0,transition:"opacity 0.5s",transitionDelay:s,opacity:t,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}))};I.propTypes={opacity:y.default.number,transitionDelay:y.default.string,onLoad:y.default.func};var N=function(e){function t(a){(0,o.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),s=!0,n=!0,r=!1,d=w(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,n=!1,r=!0),"undefined"==typeof window&&(s=!1,n=!1),i.state={isVisible:s,imgLoaded:n,IOSupported:r},i.handleRef=i.handleRef.bind(i),i}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&L(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,s=t.className,o=t.outerWrapperClassName,n=t.style,l=void 0===n?{}:n,r=t.sizes,d=t.resolutions,u=t.backgroundColor,c=void 0;if(c="boolean"==typeof u?"lightgray":u,r){var f=r;return h.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===l.position?"initial":"relative"}},h.default.createElement("div",{className:(s?s:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden",zIndex:1},l),ref:this.handleRef},h.default.createElement("div",{style:{width:"100%",paddingBottom:100/f.aspectRatio+"%"}}),f.base64&&h.default.createElement(I,{alt:i,title:a,src:f.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"}),c&&h.default.createElement("div",{title:a,style:{backgroundColor:c,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(I,{alt:i,title:a,srcSet:f.srcSet,src:f.src,sizes:f.sizes,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.state.IOSupported&&e.setState({imgLoaded:!0})}})))}if(d){var m=d,g=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",zIndex:1,width:m.width,height:m.height},l);return"inherit"===l.display&&delete g.display,h.default.createElement("div",{className:(o?o:"")+" gatsby-image-outer-wrapper",style:{zIndex:0,position:"absolute"===l.position?"initial":"relative"}},h.default.createElement("div",{className:(s?s:"")+" gatsby-image-wrapper",style:g,ref:this.handleRef},m.base64&&h.default.createElement(I,{alt:i,title:a,src:m.base64,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s"}),c&&h.default.createElement("div",{title:a,style:{backgroundColor:c,width:m.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:m.height}}),this.state.isVisible&&h.default.createElement(I,{alt:i,title:a,width:m.width,height:m.height,srcSet:m.srcSet,src:m.src,opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0,onLoad:function(){return e.setState({imgLoaded:!0})}})))}return null},t}(h.default.Component);N.defaultProps={fadeIn:!0,alt:""},N.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool])},t.default=N},433:function(e,t){},214:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),o=i(s),n=a(63),l=(i(n),a(43)),r=i(l),d=a(26),u=(i(d),a(112)),c=i(u);a(433),t.default=function(e){var t=e.data,a=t.allContentJson.edges[0].node.work;return o.default.createElement("section",{className:"content"},o.default.createElement(r.default,{title:"Work / Prayash Thapa"}),o.default.createElement("div",{id:"portfolio",className:"fade"},a.map(function(e){var a=e.name.toLowerCase();return o.default.createElement("article",{className:"project",key:e.name},o.default.createElement("a",{href:e.link,target:"_blank",rel:"noopener"},o.default.createElement(c.default,{title:e.name,alt:e.name,sizes:t[a].sizes})),o.default.createElement("span",{className:"project-details"},o.default.createElement("h2",{className:"project-title"},o.default.createElement("a",{href:e.link,target:"_blank",rel:"noopener"},e.name)),o.default.createElement("h3",{className:"project-description"},e.description),o.default.createElement("h4",{className:"project-tags"},e.tags)))})))};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-work-js-fecaee110404acac38a2.js.map