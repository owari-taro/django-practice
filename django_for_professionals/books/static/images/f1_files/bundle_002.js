(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{cOLG:function(e,t,s){"use strict";s.r(t),s.d(t,"HomeTimeline",(function(){return mt}));var a=s("KEM+"),i=s.n(a),n=s("ERkP"),o=s("v6aA"),r=s("es0u"),c=s("wM4e"),l=s("hqKg"),h=s("QK5w"),m=s("G6rE"),u=s("oEGd");const p=Object(l.createSelector)(h.a,m.e.selectLoggedInUser,c.g,c.b,((e,t,s,a)=>({isInitialScreen:!e,loggedInUserAvatarURI:t&&t.profile_image_url_https,loggedInUserName:t&&t.name,useLatest:s,configurationFetchStatus:a})));var d=Object(u.c)(p),_=s("s14A"),T=s("dwig"),f=s("v//M"),v=s("0+qk");s("kYxP");const b=(e,{inactivityThresholdMs:t,lastFrustrationEventTimestamp:s=0})=>{const a=60*e.getNumberValue("home_timeline_latest_timeline_min_time_to_autoswitch_minutes",720)*1e3,i=60*e.getNumberValue("home_timeline_latest_timeline_autoswitch_half_life_minutes",20160)*1e3,n=t||a;return Math.max(a,n*Math.pow(2,(s-Date.now())/i))},w=(e,t)=>{const s=60*e.getNumberValue("home_timeline_latest_timeline_max_time_to_autoswitch_minutes",10080)*1e3,a=e.getNumberValue("home_timeline_latest_timeline_autoswitch_threshold_multiplier",2);return Math.min(s,a*t)},E=(e,{useLatest:t,lastActiveOnLatestTimestamp:s,inactivityThresholdMs:a,lastFrustrationEventTimestamp:i})=>{if(e.isTrue("home_timeline_latest_timeline_switch_enabled")&&t){return(({lastActiveOnLatestTimestamp:e,inactivityThresholdMs:t})=>Date.now()-e>t)({lastActiveOnLatestTimestamp:s,inactivityThresholdMs:b(e,{inactivityThresholdMs:a,lastFrustrationEventTimestamp:i})})}return!1};var g=s("1YZw"),y=s("rxPX"),S=Object(y.a)().propsFromState((()=>({inactivityThresholdMs:c.d,autoSwitchTimestamp:c.a,lastFrustrationEventTimestamp:c.f}))).propsFromActions((()=>({addToast:g.b,updateAutoSwitchTimestamp:c.h,updateBehavior:c.i,updateInactivityThresholdMs:c.j,updateLastFrustrationEventTimestamp:c.l}))).withAnalytics(),L=s("3XMw"),M=s.n(L),F=s("/yvb"),I=s("yZDr"),A=s("JGUy");var x=({accessibilityLabel:e,hoverLabel:t,renderMenu:s,onPress:a})=>{const i=n.createElement(I.a,null),o=Object(A.a)();return n.createElement(F.a,{accessibilityLabel:e,hoverLabel:{label:t},icon:i,onPress:a,pullRight:!0,renderMenu:s,type:o})},C=s("mjJ+"),O=s("rHpw"),P=s("Lsrn"),R=s("k/Ka");const k=(e={})=>Object(R.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[P.a.root,e.style],viewBox:"0 0 36 36"},n.createElement("g",null,n.createElement("path",{d:"M27.325 20.595c0 7.333-5.913 13.278-13.206 13.278S.912 27.928.912 20.595 6.825 7.317 14.12 7.317s13.205 5.944 13.205 13.278",fill:"#71C9F8"}),n.createElement("path",{d:"M24.576 20.682c0 5.802-4.678 10.506-10.45 10.506-5.77 0-10.448-4.704-10.448-10.506s4.678-10.506 10.45-10.506c5.77 0 10.448 4.704 10.448 10.506",fill:"#97E3FF"}),n.createElement("path",{d:"M18.98 20.94l-3.86-.583v-6.215c0-.552-.45-1-1-1s-1 .448-1 1v7.076c0 .06.023.112.033.17.007.042.012.082.025.123.026.084.063.158.11.23.022.038.044.075.072.11.05.06.11.11.173.158.042.03.08.06.128.086.065.034.133.055.204.074.04.01.072.035.114.04l4.704.71c.05.01.1.012.15.012.487 0 .914-.355.988-.85.08-.548-.295-1.058-.84-1.14z",fill:"#005FD1"}),n.createElement("path",{d:"M24.553 20.682c0 5.79-4.68 10.5-10.434 10.5S3.683 26.47 3.683 20.68c0-2.953 1.227-5.707 3.31-7.665l.674 1.127c.38.635 1.227.668 1.524.06l1.153-2.36 1.312-2.687c.24-.49-.104-1.067-.65-1.088l-2.988-.116-2.625-.1c-.678-.027-1.05.735-.67 1.37l.804 1.344C2.613 13.065.883 16.736.883 20.683c0 7.333 5.937 13.298 13.234 13.298s13.234-5.964 13.234-13.297h-2.8z",fill:"#1DA1F2"}),n.createElement("path",{d:"M35 13.36h-1.467v-1.34c0-.552-.448-1-1-1s-1 .448-1 1v1.34h-1.467c-.552 0-1 .45-1 1s.448 1 1 1h1.467v1.342c0 .552.448 1 1 1s1-.448 1-1v-1.34H35c.552 0 1-.45 1-1s-.448-1-1-1z",fill:"#FFAD1F"}),n.createElement("path",{d:"M28.646 4.138h-2.01v-2.01c0-.552-.448-1-1-1s-1 .448-1 1v2.01h-2.01c-.552 0-1 .448-1 1s.448 1 1 1h2.01v2.01c0 .552.448 1 1 1s1-.448 1-1v-2.01h2.01c.552 0 1-.448 1-1s-.447-1-1-1z",fill:"#F6809A"})));k.metadata={width:36,height:36};var j=k;const D=(e={})=>Object(R.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[P.a.root,e.style],viewBox:"0 0 36 36"},n.createElement("g",null,n.createElement("path",{d:"M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z",fill:"#61BCF6"}),n.createElement("path",{d:"M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z",fill:"#F16888"}),n.createElement("path",{d:"M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z",fill:"#FD9E1A"})));D.metadata={width:36,height:36};var z=D,N=s("3JQt"),U=s("M2x3");const H=M.a.j681ac0d,W=M.a.g8220472,B=M.a.ccdd3766,J=M.a.g2657de3,q=M.a.d126cb7c,G=M.a.c41ecf3c,V=M.a.d18aa6d4,$=M.a.bc52b0cd,K=M.a.j6382fe9,Q=M.a.f89f6785,X=M.a.e4acfd11;class Y extends n.PureComponent{constructor(...e){super(...e),i()(this,"_renderActionMenu",(e=>{const{useLatest:t}=this.props,s=t?V:G,a=t?j:z;return n.createElement(C.a,{DescriptionIcon:a,description:s,descriptionStyle:Z.description,isFixed:!0,items:this._getActionMenuItems(),onCloseRequested:e})})),i()(this,"_getActionMenuItems",(()=>{const{useLatest:e}=this.props,t=e?X:Q;return[{text:e?$:K,onClick:this._handleTimelineSwitch,Icon:N.a,subText:t},{link:"/settings/content_preferences",text:H,onClick:this._handleContentPreferences,Icon:U.a}]})),i()(this,"_handleTimelineSwitch",(e=>{const{onToggle:t}=this.props;e(),t()})),i()(this,"_handleContentPreferences",(e=>{const{onContentPreferencesSelect:t}=this.props;e(),t()}))}render(){const{useLatest:e,onPress:t}=this.props,s=e?W:B,a=e?q:J;return n.createElement(x,{accessibilityLabel:s,hoverLabel:a,onPress:t,renderMenu:this._renderActionMenu})}}const Z=O.a.create((e=>({description:{fontSize:e.fontSizes.headline1,color:e.colors.text,textAlign:"center",fontWeight:e.fontWeights.bold}})));var ee=Y,te=s("aWzz");const se=M.a.e4c6d14c,ae=M.a.bffa2da7;class ie extends n.Component{constructor(...e){super(...e),i()(this,"_handleToggle",(()=>{const{updateBehavior:e,useLatest:t,addToast:s,analytics:a,updateInactivityThresholdMs:i,inactivityThresholdMs:n,autoSwitchTimestamp:o,updateAutoSwitchTimestamp:r,updateLastFrustrationEventTimestamp:c,lastFrustrationEventTimestamp:l}=this.props;this.context.viewport.scrollToTop();if(((e,t)=>{if(!t)return!1;const s=1e3*e.getNumberValue("home_timeline_latest_timeline_threshold_to_increase_autoswitch_seconds",60);return Date.now()-t<s})(this.context.featureSwitches,o)){const e=b(this.context.featureSwitches,{inactivityThresholdMs:n,lastFrustrationEventTimestamp:l});i({inactivityThresholdMs:w(this.context.featureSwitches,e)}),c({lastFrustrationEventTimestamp:Date.now()})}let h={};if(o){h={duration_ms:Date.now()-o}}a.scribe({component:"customize",element:t?"see_top":"see_latest",action:"click",data:h}),o&&r({autoSwitchTimestamp:null});const m=t?se:ae;e({useLatest:!t}).then((()=>{s({text:m})}))})),i()(this,"_handleSwitchPress",(()=>{const{analytics:e}=this.props;e.scribe({section:"navigation_bar",element:"customize_button",action:"click"})})),i()(this,"_handleContentPreferencesSelect",(()=>{const{analytics:e}=this.props;e.scribe({component:"customize",element:"see_preferences",action:"click"})}))}render(){const{useLatest:e}=this.props;return n.createElement(ee,{onContentPreferencesSelect:this._handleContentPreferencesSelect,onPress:this._handleSwitchPress,onToggle:this._handleToggle,useLatest:e})}}i()(ie,"contextTypes",{viewport:te.object,featureSwitches:te.any});var ne=S(ie),oe=s("2dXj"),re=Object(y.a)().propsFromState((()=>({loggedInUser:m.e.selectLoggedInUser}))).adjustStateProps((({loggedInUser:e})=>({userAvatarURI:e&&e.profile_image_url_https,userName:e&&e.name}))),ce=s("N5qz"),le=s("MWbm"),he=s("cHvH"),me=s("5mJL"),ue=s("DNho"),pe=s("XP29"),de=s("t62R"),_e=s("cjZk"),Te=s("3rWK"),fe=s("ll3R"),ve=s("pNJr"),be=s("J0mu");const we=M.a.g34f2c63({verb:""}),Ee=M.a.e349147b,ge=O.a.create((e=>({root:{backgroundColor:e.colors.cellBackground,paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.spaces.space8},avatarColumn:{flexGrow:1,minWidth:e.spaces.space32,maxWidth:e.spaces.space48},avatar:{width:"100%"},body:{flexDirection:"column",flexGrow:1},fakeInput:{paddingTop:`calc(${e.spaces.space12} + ${e.spaces.space2})`,paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space2},toolbar:{alignItems:"center",flexDirection:"row",justifyContent:"space-between",marginRight:e.spaces.space2,marginTop:`calc(${e.spaces.space16} + ${e.spaces.space2})`},toolbarSection:{alignItems:"center",flexDirection:"row"},iconContainer:{marginLeft:-e.spacesPx.space2},icon:{color:e.colors.primary,height:"1.5em",marginRight:e.spaces.space12,marginLeft:`calc(${e.spaces.space4} + ${e.spaces.space1})`,width:"1.5em"},firstIcon:{marginLeft:0},lastIcon:{marginRight:0},tweetButton:{marginLeft:e.spaces.space12}})));var ye=re((({userAvatarURI:e})=>n.createElement(he.a,null,(({windowWidth:t})=>{const s=!ce.a.isOneColumnSquishedLayout(t);return n.createElement(me.a,{avatarCell:n.createElement(ue.a.Consumer,null,(({avatarSize:t})=>n.createElement(pe.a,{size:t,style:ge.avatar,uri:e}))),avatarCellStyle:ge.avatarColumn,cellStyle:ge.body,style:ge.root},n.createElement(de.c,{color:"gray600",numberOfLines:1,size:"large",style:ge.fakeInput},Ee),n.createElement(le.a,{style:ge.toolbar},n.createElement(le.a,{style:[ge.toolbarSection,ge.iconContainer]},n.createElement(_e.a,{style:[ge.icon,ge.firstIcon]}),n.createElement(Te.a,{style:ge.icon}),s?n.createElement(fe.a,{style:ge.icon}):null,n.createElement(ve.a,{style:ge.icon}),s?n.createElement(be.a,{style:[ge.icon,ge.lastIcon]}):null),n.createElement(le.a,{style:ge.toolbarSection},n.createElement(F.a,{disabled:!0,style:ge.tweetButton,type:"primary"},we))))})))),Se=s("zb92"),Le=Object(Se.a)({loader:()=>(oe.a.preload()||Promise.resolve()).then((()=>Promise.all([s.e(0),s.e(3),s.e(10),s.e(7),s.e(70)]).then(s.bind(null,"M5JI")))),renderPlaceholder:()=>n.createElement(ye,null)});const Me=()=>window.performance&&"function"==typeof window.performance.now;var Fe=s("yoO3"),Ie=s("aeN7"),Ae=Object(y.a)().propsFromState((()=>({inactivityThresholdMs:c.d,lastActiveOnLatestTimestamp:c.e,lastFrustrationEventTimestamp:c.f}))).propsFromActions((()=>({addToast:g.b,updateAutoSwitchTimestamp:c.h,updateBehavior:c.i,updateLastActiveOnLatestTimestamp:c.k}))).withAnalytics(),xe=s("QIgh"),Ce=s("8UdT"),Oe=s("iu0J"),Pe=s("AP4B");var Re={...Object(xe.a)({tweetDismissable:!0,shouldSelfThreadIncludeAvatar:!0}),...Pe.a,[Ce.b.EventSummary]:Object(Oe.a)({errorContext:"HOME_TIMELINE_SCREEN"})},ke=s("MDbM"),je=s("FIs5");const De=M.a.d2c66f1f,ze=M.a.c3fbf1da,Ne=M.a.bf17ded9;var Ue=({onImpression:e})=>n.createElement(je.a,{buttonLink:"/i/connect_people",buttonText:Ne,header:De,message:ze,onImpression:e}),He=s("EUHl"),We=s("7BdX"),Be=s("fTQJ"),Je=s("WA1W"),qe=s("oQhu"),Ge=s("/NU0");const Ve=M.a.f089620b,$e=M.a.e4c6d14c,Ke={count:void 0},Qe=Object(qe.a)(((e,t,s)=>e&&t?Object(Je.a)(s):Object(Je.b)(s)));class Xe extends n.Component{constructor(e,t){super(e,t),i()(this,"_handleEntriesRendered",(({entries:e,fetchStatus:t})=>{const{isInitialScreen:s,recordTTFT:a,useLatest:i,updateLastActiveOnLatestTimestamp:n}=this.props;if(t===ke.a.FAILED&&(this._shouldRecordTTFT=!1),this._shouldRecordTTFT&&s&&e.length){const t=e.some((({type:e})=>e===Ce.b.Tweet));this._shouldRecordTTFT=!1,t&&a()}if(this._latestTimelineSwitchEnabled&&i){n(Date.now())}})),i()(this,"_renderEmptyTimeline",(()=>n.createElement(Ue,{onImpression:this._handleEmptyHtlImpression}))),i()(this,"_handleEmptyHtlImpression",(()=>{const{analytics:e}=this.props;e.scribe({component:"empty_message",action:"impression"})})),this._shouldRecordTTFT=!0,this._latestTimelineSwitchEnabled=this.context.featureSwitches.isTrue("home_timeline_latest_timeline_switch_enabled"),this._checkIsAutoSwitchRequired()}componentDidMount(){this._requiresAutoSwitch&&(this._performAutoSwitch(),this._requiresAutoSwitch=!1)}render(){if(this._requiresAutoSwitch)return null;const{useLatest:e,timelineRef:t}=this.props,s=Qe(this._latestTimelineSwitchEnabled,e,this.context.featureSwitches);return n.createElement(Be.a,{entryConfiguration:Re,fetchTopOptions:Ke,module:s,newTweetsPillMode:He.a.URT,onEntriesRendered:this._handleEntriesRendered,prerollDisplayLocation:We.e.TIMELINE_HOME,renderEmptyState:this._renderEmptyTimeline,timelineRef:t,title:Ve})}_performAutoSwitch(){const{updateBehavior:e,addToast:t,analytics:s,updateAutoSwitchTimestamp:a,lastActiveOnLatestTimestamp:i,inactivityThresholdMs:n,lastFrustrationEventTimestamp:o}=this.props,r=Object(Ge.a)(i)?((e,{lastActiveOnLatestTimestamp:t,inactivityThresholdMs:s,lastFrustrationEventTimestamp:a})=>({duration_ms:Date.now()-t,event_value:b(e,{inactivityThresholdMs:s,lastFrustrationEventTimestamp:a})}))(this.context.featureSwitches,{lastActiveOnLatestTimestamp:i,inactivityThresholdMs:n,lastFrustrationEventTimestamp:o}):void 0;s.scribe({action:"automatic_switch_to_home",data:r}),a({autoSwitchTimestamp:Date.now()}),e({useLatest:!1}).then((()=>{t({text:$e})}))}_checkIsAutoSwitchRequired(){const{useLatest:e,lastActiveOnLatestTimestamp:t,inactivityThresholdMs:s,lastFrustrationEventTimestamp:a}=this.props;this._requiresAutoSwitch=!!Object(Ge.a)(t)&&E(this.context.featureSwitches,{useLatest:e,lastActiveOnLatestTimestamp:t,inactivityThresholdMs:s,lastFrustrationEventTimestamp:a})}}i()(Xe,"defaultProps",{recordTTFT:Ie.e}),i()(Xe,"contextType",o.a);var Ye=Ae(Xe),Ze=s("7JQg"),et=s("VS6U"),tt=s("Es6L"),st=s("LsPn"),at=s("aITJ"),it=s("0yYu"),nt=s("mw9i");const ot=M.a.i5f7b6b8,rt=M.a.d126cb7c,ct=M.a.ha8209bb,lt={page:"home"},ht={page:"home_latest"};class mt extends n.Component{constructor(e,t){super(e,t),i()(this,"_unmounted",!1),i()(this,"_renderTimeline",(()=>{const{useLatest:e,isInitialScreen:t}=this.props;return n.createElement(_.a,null,n.createElement(Ye,{isInitialScreen:t,timelineRef:this._setTimelineRef,useLatest:e}))})),i()(this,"_renderPrimaryContent",(()=>{const{history:e,location:t,configurationFetchStatus:s}=this.props,a=n.createElement(v.a,{history:e});return n.createElement(n.Fragment,null,Object(tt.a)()?n.createElement(n.Fragment,null,n.createElement(Le,{history:e,location:t}),n.createElement(it.a,null)):null,n.createElement(T.a,{component:nt.a,fab:a},at.b.isKaiOS()?n.createElement(st.a,{leftText:ot,onLeftClick:this._handleSoftLeftClick}):null,n.createElement(f.a,{fetchStatus:s,render:this._renderTimeline})))})),i()(this,"_handleSoftLeftClick",(()=>{const{history:e}=this.props;e.push("/account")})),i()(this,"_handleTabRefresh",(()=>{this._timeline&&this._timeline.refreshOrGoTop()})),i()(this,"_handleWindowFocus",(()=>{this._timeline&&this._timeline.fetchTop({onlyIfStale:!0})})),i()(this,"_setTimelineRef",(e=>{this._timeline=e})),this._latestTimelineSwitchEnabled=this.context.featureSwitches.isTrue("home_timeline_latest_timeline_switch_enabled")}componentDidMount(){if(window.addEventListener("focus",this._handleWindowFocus),this.context.featureSwitches.isTrue("responsive_web_framerate_tracking_home_enabled")){const e=`home${at.b.isDesktopOS()?"":"_mobile"}`;(Me()?s.e(289).then(s.bind(null,"Iid0")).then((({default:e})=>e)):Promise.resolve(void 0)).then((t=>{!this._unmounted&&t&&(this._fpsTracking=t({reportNamespace:e}))}))}}componentWillUnmount(){this._unmounted=!0,window.removeEventListener("focus",this._handleWindowFocus),this._fpsTracking&&this._fpsTracking.stop()}render(){const{useLatest:e,history:t}=this.props,s=this._latestTimelineSwitchEnabled?n.createElement(ne,{useLatest:e}):void 0,a=this._latestTimelineSwitchEnabled&&e?rt:ct;return n.createElement(Ze.b,{namespace:this._getScribeNamespace()},n.createElement(Fe.a,null,n.createElement(et.a,{history:t,onTabRefresh:this._handleTabRefresh,primaryContent:this._renderPrimaryContent,rightControl:s,sidebarContent:n.createElement(r.a,null),title:a})))}_getScribeNamespace(){const{useLatest:e}=this.props;return e?ht:lt}}i()(mt,"contextType",o.a);t.default=d(mt)}}]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.HomeTimeline.7fae7175.js.map