// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect(cljs.core.cst$kw$init,mixins);
var will_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_mount,cljs.core.cst$kw$before_DASH_render], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect(cljs.core.cst$kw$wrap_DASH_render,mixins);
var wrapped_render = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (init,will_mount,render__$1,wrap_render){
return (function (p1__14775_SHARP_,p2__14774_SHARP_){
return (p2__14774_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__14774_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__14775_SHARP_) : p2__14774_SHARP_.call(null,p1__14775_SHARP_));
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_mount,cljs.core.cst$kw$after_DASH_render], null),mixins);
var did_remount = rum.util.collect(cljs.core.cst$kw$did_DASH_remount,mixins);
var should_update = rum.util.collect(cljs.core.cst$kw$should_DASH_update,mixins);
var will_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$will_DASH_update,cljs.core.cst$kw$before_DASH_render], null),mixins);
var did_update = rum.util.collect_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$did_DASH_update,cljs.core.cst$kw$after_DASH_render], null),mixins);
var will_unmount = rum.util.collect(cljs.core.cst$kw$will_DASH_unmount,mixins);
var child_context = rum.util.collect(cljs.core.cst$kw$child_DASH_context,mixins);
var class_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,rum.util.collect(cljs.core.cst$kw$class_DASH_properties,mixins));
var G__14789 = cljs.core.clj__GT_js(rum.util.filter_vals(cljs.core.some_QMARK_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$displayName,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$getChildContext,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$componentWillMount],[((cljs.core.empty_QMARK_(did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_(will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = (function (){var G__14790 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14790) : cljs.core.deref.call(null,G__14790));
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_state,(next_props[":rum/initial-state"])], 0));
var next_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14777_SHARP_,p2__14776_SHARP_){
return (p2__14776_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p2__14776_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,p1__14777_SHARP_) : p2__14776_SHARP_.call(null,old_state,p1__14777_SHARP_));
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_(next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = (function (){var G__14791 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14791) : cljs.core.deref.call(null,G__14791));
})();
var new_state = (function (){var G__14792 = (next_state[":rum/state"]);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14792) : cljs.core.deref.call(null,G__14792));
})();
var or__7184__auto__ = cljs.core.some(((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14778_SHARP_){
return (p1__14778_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__14778_SHARP_.cljs$core$IFn$_invoke$arity$2(old_state,new_state) : p1__14778_SHARP_.call(null,old_state,new_state));
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state(this$);
var vec__14793 = (function (){var G__14796 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
return (wrapped_render.cljs$core$IFn$_invoke$arity$1 ? wrapped_render.cljs$core$IFn$_invoke$arity$1(G__14796) : wrapped_render.call(null,G__14796));
})();
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(1),null);
cljs.core.vreset_BANG_(state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = (function (){var G__14797 = rum.core.state(this$);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14797) : cljs.core.deref.call(null,G__14797));
})();
return cljs.core.clj__GT_js(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__14779_SHARP_){
return (p1__14779_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__14779_SHARP_.cljs$core$IFn$_invoke$arity$1(state) : p1__14779_SHARP_.call(null,state));
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_(new_state,rum.util.call_all(cljs.core._deref(new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((props[":rum/initial-state"]),cljs.core.cst$kw$rum_SLASH_react_DASH_component,this$),init,cljs.core.array_seq([props], 0));
return ({":rum/state": cljs.core.volatile_BANG_(state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_(did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_(will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_(rum.core.state(this$),rum.util.call_all(cljs.core._deref(rum.core.state(this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props], 0))));
return React.createClass(G__14789);
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class(render,mixins,display_name);
var key_fn = cljs.core.first(rum.util.collect(cljs.core.cst$kw$key_DASH_fn,mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__14798__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null), "key": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(key_fn,args)});
return React.createElement(class$,props);
};
var G__14798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14799__i = 0, G__14799__a = new Array(arguments.length -  0);
while (G__14799__i < G__14799__a.length) {G__14799__a[G__14799__i] = arguments[G__14799__i + 0]; ++G__14799__i;}
  args = new cljs.core.IndexedSeq(G__14799__a,0,null);
} 
return G__14798__delegate.call(this,args);};
G__14798.cljs$lang$maxFixedArity = 0;
G__14798.cljs$lang$applyTo = (function (arglist__14800){
var args = cljs.core.seq(arglist__14800);
return G__14798__delegate(args);
});
G__14798.cljs$core$IFn$_invoke$arity$variadic = G__14798__delegate;
return G__14798;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__14801__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_args,args], null)});
return React.createElement(class$,props);
};
var G__14801 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14802__i = 0, G__14802__a = new Array(arguments.length -  0);
while (G__14802__i < G__14802__a.length) {G__14802__a[G__14802__i] = arguments[G__14802__i + 0]; ++G__14802__i;}
  args = new cljs.core.IndexedSeq(G__14802__a,0,null);
} 
return G__14801__delegate.call(this,args);};
G__14801.cljs$lang$maxFixedArity = 0;
G__14801.cljs$lang$applyTo = (function (arglist__14803){
var args = cljs.core.seq(arglist__14803);
return G__14801__delegate(args);
});
G__14801.cljs$core$IFn$_invoke$arity$variadic = G__14801__delegate;
return G__14801;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_(mixins)){
var class$ = (function (props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__14808__delegate = function (args){
var G__14806 = class$;
var G__14807 = ({":rum/args": args});
return React.createElement(G__14806,G__14807);
};
var G__14808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14809__i = 0, G__14809__a = new Array(arguments.length -  0);
while (G__14809__i < G__14809__a.length) {G__14809__a[G__14809__i] = arguments[G__14809__i + 0]; ++G__14809__i;}
  args = new cljs.core.IndexedSeq(G__14809__a,0,null);
} 
return G__14808__delegate.call(this,args);};
G__14808.cljs$lang$maxFixedArity = 0;
G__14808.cljs$lang$applyTo = (function (arglist__14810){
var args = cljs.core.seq(arglist__14810);
return G__14808__delegate(args);
});
G__14808.cljs$core$IFn$_invoke$arity$variadic = G__14808__delegate;
return G__14808;
})()
;})(class$,_))
;
return cljs.core.with_meta(ctor,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rum_SLASH_class,class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(render_body,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,state,cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(render_body,cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor(render,mixins,display_name);
});
rum.core.schedule = (function (){var or__7184__auto__ = (function (){var and__7172__auto__ = typeof window !== 'undefined';
if(and__7172__auto__){
var or__7184__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
var or__7184__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__7184__auto____$1)){
return or__7184__auto____$1;
} else {
var or__7184__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__7184__auto____$2)){
return or__7184__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__7172__auto__;
}
})();
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return ((function (or__7184__auto__){
return (function (p1__14811_SHARP_){
return setTimeout(p1__14811_SHARP_,(16));
});
;})(or__7184__auto__))
}
})();
rum.core.batch = (function (){var or__7184__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
var or__7184__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__7184__auto____$1)){
return or__7184__auto____$1;
} else {
return ((function (or__7184__auto____$1,or__7184__auto__){
return (function (f,a){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(a) : f.call(null,a));
});
;})(or__7184__auto____$1,or__7184__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_(rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__14818 = cljs.core.seq(queue);
var chunk__14820 = null;
var count__14821 = (0);
var i__14822 = (0);
while(true){
if((i__14822 < count__14821)){
var comp = chunk__14820.cljs$core$IIndexed$_nth$arity$2(null,i__14822);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14824 = seq__14818;
var G__14825 = chunk__14820;
var G__14826 = count__14821;
var G__14827 = (i__14822 + (1));
seq__14818 = G__14824;
chunk__14820 = G__14825;
count__14821 = G__14826;
i__14822 = G__14827;
continue;
} else {
var G__14828 = seq__14818;
var G__14829 = chunk__14820;
var G__14830 = count__14821;
var G__14831 = (i__14822 + (1));
seq__14818 = G__14828;
chunk__14820 = G__14829;
count__14821 = G__14830;
i__14822 = G__14831;
continue;
}
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14818);
if(temp__4657__auto__){
var seq__14818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14818__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__14818__$1);
var G__14832 = cljs.core.chunk_rest(seq__14818__$1);
var G__14833 = c__8003__auto__;
var G__14834 = cljs.core.count(c__8003__auto__);
var G__14835 = (0);
seq__14818 = G__14832;
chunk__14820 = G__14833;
count__14821 = G__14834;
i__14822 = G__14835;
continue;
} else {
var comp = cljs.core.first(seq__14818__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__14836 = cljs.core.next(seq__14818__$1);
var G__14837 = null;
var G__14838 = (0);
var G__14839 = (0);
seq__14818 = G__14836;
chunk__14820 = G__14837;
count__14821 = G__14838;
i__14822 = G__14839;
continue;
} else {
var G__14840 = cljs.core.next(seq__14818__$1);
var G__14841 = null;
var G__14842 = (0);
var G__14843 = (0);
seq__14818 = G__14840;
chunk__14820 = G__14841;
count__14821 = G__14842;
i__14822 = G__14843;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue));
cljs.core.vreset_BANG_(rum.core.render_queue,rum.core.empty_queue);

return (rum.core.batch.cljs$core$IFn$_invoke$arity$2 ? rum.core.batch.cljs$core$IFn$_invoke$arity$2(rum.core.render_all,queue) : rum.core.batch.call(null,rum.core.render_all,queue));
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core.render_queue) : cljs.core.deref.call(null,rum.core.render_queue)))){
(rum.core.schedule.cljs$core$IFn$_invoke$arity$1 ? rum.core.schedule.cljs$core$IFn$_invoke$arity$1(rum.core.render) : rum.core.schedule.call(null,rum.core.render));
} else {
}

return cljs.core._vreset_BANG_(rum.core.render_queue,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
var G__14847 = component;
var G__14848 = ({"key": key});
var G__14849 = null;
return React.cloneElement(G__14847,G__14848,G__14849);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
var G__14853 = component;
var G__14854 = ({"ref": ref});
var G__14855 = null;
return React.cloneElement(G__14853,G__14854,G__14855);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
var G__14857 = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
return ReactDOM.findDOMNode(G__14857);
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name(key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
var G__14859 = rum.core.ref(state,cljs.core.name(key));
return ReactDOM.findDOMNode(G__14859);
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$should_DASH_update,(function (old_state,new_state){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(old_state),cljs.core.cst$kw$rum_SLASH_args.cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args14860 = [];
var len__8297__auto___14863 = arguments.length;
var i__8298__auto___14864 = (0);
while(true){
if((i__8298__auto___14864 < len__8297__auto___14863)){
args14860.push((arguments[i__8298__auto___14864]));

var G__14865 = (i__8298__auto___14864 + (1));
i__8298__auto___14864 = G__14865;
continue;
} else {
}
break;
}

var G__14862 = args14860.length;
switch (G__14862) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14860.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.cst$kw$rum_SLASH_local);
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$will_DASH_mount,(function (state){
var local_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(initial) : cljs.core.atom.call(null,initial));
var component = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch(local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(component);
});})(local_state,component))
);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$init,(function (state,props){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$rum$reactive_SLASH_key,cljs.core.random_uuid());
}),cljs.core.cst$kw$wrap_DASH_render,(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_14867 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);

try{var comp = cljs.core.cst$kw$rum_SLASH_react_DASH_component.cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__14868 = (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(state) : render_fn.call(null,state));
var dom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(0),null);
var next_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14868,(1),null);
var new_reactions = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(rum.core._STAR_reactions_STAR_) : cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_));
var key = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14871_14883 = cljs.core.seq(old_reactions);
var chunk__14872_14884 = null;
var count__14873_14885 = (0);
var i__14874_14886 = (0);
while(true){
if((i__14874_14886 < count__14873_14885)){
var ref_14887 = chunk__14872_14884.cljs$core$IIndexed$_nth$arity$2(null,i__14874_14886);
if(cljs.core.contains_QMARK_(new_reactions,ref_14887)){
} else {
cljs.core.remove_watch(ref_14887,key);
}

var G__14888 = seq__14871_14883;
var G__14889 = chunk__14872_14884;
var G__14890 = count__14873_14885;
var G__14891 = (i__14874_14886 + (1));
seq__14871_14883 = G__14888;
chunk__14872_14884 = G__14889;
count__14873_14885 = G__14890;
i__14874_14886 = G__14891;
continue;
} else {
var temp__4657__auto___14892 = cljs.core.seq(seq__14871_14883);
if(temp__4657__auto___14892){
var seq__14871_14893__$1 = temp__4657__auto___14892;
if(cljs.core.chunked_seq_QMARK_(seq__14871_14893__$1)){
var c__8003__auto___14894 = cljs.core.chunk_first(seq__14871_14893__$1);
var G__14895 = cljs.core.chunk_rest(seq__14871_14893__$1);
var G__14896 = c__8003__auto___14894;
var G__14897 = cljs.core.count(c__8003__auto___14894);
var G__14898 = (0);
seq__14871_14883 = G__14895;
chunk__14872_14884 = G__14896;
count__14873_14885 = G__14897;
i__14874_14886 = G__14898;
continue;
} else {
var ref_14899 = cljs.core.first(seq__14871_14893__$1);
if(cljs.core.contains_QMARK_(new_reactions,ref_14899)){
} else {
cljs.core.remove_watch(ref_14899,key);
}

var G__14900 = cljs.core.next(seq__14871_14893__$1);
var G__14901 = null;
var G__14902 = (0);
var G__14903 = (0);
seq__14871_14883 = G__14900;
chunk__14872_14884 = G__14901;
count__14873_14885 = G__14902;
i__14874_14886 = G__14903;
continue;
}
} else {
}
}
break;
}

var seq__14875_14904 = cljs.core.seq(new_reactions);
var chunk__14876_14905 = null;
var count__14877_14906 = (0);
var i__14878_14907 = (0);
while(true){
if((i__14878_14907 < count__14877_14906)){
var ref_14908 = chunk__14876_14905.cljs$core$IIndexed$_nth$arity$2(null,i__14878_14907);
if(cljs.core.contains_QMARK_(old_reactions,ref_14908)){
} else {
cljs.core.add_watch(ref_14908,key,((function (seq__14875_14904,chunk__14876_14905,count__14877_14906,i__14878_14907,ref_14908,comp,old_reactions,vec__14868,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14867){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14875_14904,chunk__14876_14905,count__14877_14906,i__14878_14907,ref_14908,comp,old_reactions,vec__14868,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14867))
);
}

var G__14909 = seq__14875_14904;
var G__14910 = chunk__14876_14905;
var G__14911 = count__14877_14906;
var G__14912 = (i__14878_14907 + (1));
seq__14875_14904 = G__14909;
chunk__14876_14905 = G__14910;
count__14877_14906 = G__14911;
i__14878_14907 = G__14912;
continue;
} else {
var temp__4657__auto___14913 = cljs.core.seq(seq__14875_14904);
if(temp__4657__auto___14913){
var seq__14875_14914__$1 = temp__4657__auto___14913;
if(cljs.core.chunked_seq_QMARK_(seq__14875_14914__$1)){
var c__8003__auto___14915 = cljs.core.chunk_first(seq__14875_14914__$1);
var G__14916 = cljs.core.chunk_rest(seq__14875_14914__$1);
var G__14917 = c__8003__auto___14915;
var G__14918 = cljs.core.count(c__8003__auto___14915);
var G__14919 = (0);
seq__14875_14904 = G__14916;
chunk__14876_14905 = G__14917;
count__14877_14906 = G__14918;
i__14878_14907 = G__14919;
continue;
} else {
var ref_14920 = cljs.core.first(seq__14875_14914__$1);
if(cljs.core.contains_QMARK_(old_reactions,ref_14920)){
} else {
cljs.core.add_watch(ref_14920,key,((function (seq__14875_14904,chunk__14876_14905,count__14877_14906,i__14878_14907,ref_14920,seq__14875_14914__$1,temp__4657__auto___14913,comp,old_reactions,vec__14868,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14867){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render(comp);
});})(seq__14875_14904,chunk__14876_14905,count__14877_14906,i__14878_14907,ref_14920,seq__14875_14914__$1,temp__4657__auto___14913,comp,old_reactions,vec__14868,dom,next_state,new_reactions,key,_STAR_reactions_STAR_14867))
);
}

var G__14921 = cljs.core.next(seq__14875_14914__$1);
var G__14922 = null;
var G__14923 = (0);
var G__14924 = (0);
seq__14875_14904 = G__14921;
chunk__14876_14905 = G__14922;
count__14877_14906 = G__14923;
i__14878_14907 = G__14924;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(next_state,cljs.core.cst$kw$rum$reactive_SLASH_refs,new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_14867;
}});
}),cljs.core.cst$kw$will_DASH_unmount,(function (state){
var key_14925 = cljs.core.cst$kw$rum$reactive_SLASH_key.cljs$core$IFn$_invoke$arity$1(state);
var seq__14879_14926 = cljs.core.seq(cljs.core.cst$kw$rum$reactive_SLASH_refs.cljs$core$IFn$_invoke$arity$1(state));
var chunk__14880_14927 = null;
var count__14881_14928 = (0);
var i__14882_14929 = (0);
while(true){
if((i__14882_14929 < count__14881_14928)){
var ref_14930 = chunk__14880_14927.cljs$core$IIndexed$_nth$arity$2(null,i__14882_14929);
cljs.core.remove_watch(ref_14930,key_14925);

var G__14931 = seq__14879_14926;
var G__14932 = chunk__14880_14927;
var G__14933 = count__14881_14928;
var G__14934 = (i__14882_14929 + (1));
seq__14879_14926 = G__14931;
chunk__14880_14927 = G__14932;
count__14881_14928 = G__14933;
i__14882_14929 = G__14934;
continue;
} else {
var temp__4657__auto___14935 = cljs.core.seq(seq__14879_14926);
if(temp__4657__auto___14935){
var seq__14879_14936__$1 = temp__4657__auto___14935;
if(cljs.core.chunked_seq_QMARK_(seq__14879_14936__$1)){
var c__8003__auto___14937 = cljs.core.chunk_first(seq__14879_14936__$1);
var G__14938 = cljs.core.chunk_rest(seq__14879_14936__$1);
var G__14939 = c__8003__auto___14937;
var G__14940 = cljs.core.count(c__8003__auto___14937);
var G__14941 = (0);
seq__14879_14926 = G__14938;
chunk__14880_14927 = G__14939;
count__14881_14928 = G__14940;
i__14882_14929 = G__14941;
continue;
} else {
var ref_14942 = cljs.core.first(seq__14879_14936__$1);
cljs.core.remove_watch(ref_14942,key_14925);

var G__14943 = cljs.core.next(seq__14879_14936__$1);
var G__14944 = null;
var G__14945 = (0);
var G__14946 = (0);
seq__14879_14926 = G__14943;
chunk__14880_14927 = G__14944;
count__14881_14928 = G__14945;
i__14882_14929 = G__14946;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$rum$reactive_SLASH_refs,cljs.core.array_seq([cljs.core.cst$kw$rum$reactive_SLASH_key], 0));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_(rum.core._STAR_reactions_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(rum.core._STAR_reactions_STAR_),ref));

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14953 = arguments.length;
var i__8298__auto___14954 = (0);
while(true){
if((i__8298__auto___14954 < len__8297__auto___14953)){
args__8304__auto__.push((arguments[i__8298__auto___14954]));

var G__14955 = (i__8298__auto___14954 + (1));
i__8298__auto___14954 = G__14955;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((2) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8305__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__14950){
var map__14951 = p__14950;
var map__14951__$1 = ((((!((map__14951 == null)))?((((map__14951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14951):map__14951);
var options = map__14951__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.cljs$core$IFn$_invoke$arity$2(ref.path,path),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq14947){
var G__14948 = cljs.core.first(seq14947);
var seq14947__$1 = cljs.core.next(seq14947);
var G__14949 = cljs.core.first(seq14947__$1);
var seq14947__$2 = cljs.core.next(seq14947__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__14948,G__14949,seq14947__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14959 = arguments.length;
var i__8298__auto___14960 = (0);
while(true){
if((i__8298__auto___14960 < len__8297__auto___14959)){
args__8304__auto__.push((arguments[i__8298__auto___14960]));

var G__14961 = (i__8298__auto___14960 + (1));
i__8298__auto___14960 = G__14961;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((2) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8305__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq14956){
var G__14957 = cljs.core.first(seq14956);
var seq14956__$1 = cljs.core.next(seq14956);
var G__14958 = cljs.core.first(seq14956__$1);
var seq14956__$2 = cljs.core.next(seq14956__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__14957,G__14958,seq14956__$2);
});

