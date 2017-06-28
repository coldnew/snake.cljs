// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.size = (function quil$sketch$size(var_args){
var args15529 = [];
var len__8297__auto___15532 = arguments.length;
var i__8298__auto___15533 = (0);
while(true){
if((i__8298__auto___15533 < len__8297__auto___15532)){
args15529.push((arguments[i__8298__auto___15533]));

var G__15534 = (i__8298__auto___15533 + (1));
i__8298__auto___15533 = G__15534;
continue;
} else {
}
break;
}

var G__15531 = args15529.length;
switch (G__15531) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15529.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__15548 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__15549 = null;
var count__15550 = (0);
var i__15551 = (0);
while(true){
if((i__15551 < count__15550)){
var vec__15552 = chunk__15549.cljs$core$IIndexed$_nth$arity$2(null,i__15551);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15552,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15552,(1),null);
var temp__4657__auto___15560 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___15560)){
var handler_15561 = temp__4657__auto___15560;
(prc[cljs.core.name(processing_name)] = ((function (seq__15548,chunk__15549,count__15550,i__15551,handler_15561,temp__4657__auto___15560,vec__15552,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_15555 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_15561.cljs$core$IFn$_invoke$arity$0 ? handler_15561.cljs$core$IFn$_invoke$arity$0() : handler_15561.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15555;
}});})(seq__15548,chunk__15549,count__15550,i__15551,handler_15561,temp__4657__auto___15560,vec__15552,processing_name,quil_name))
);
} else {
}

var G__15562 = seq__15548;
var G__15563 = chunk__15549;
var G__15564 = count__15550;
var G__15565 = (i__15551 + (1));
seq__15548 = G__15562;
chunk__15549 = G__15563;
count__15550 = G__15564;
i__15551 = G__15565;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15548);
if(temp__4657__auto__){
var seq__15548__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15548__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__15548__$1);
var G__15566 = cljs.core.chunk_rest(seq__15548__$1);
var G__15567 = c__8003__auto__;
var G__15568 = cljs.core.count(c__8003__auto__);
var G__15569 = (0);
seq__15548 = G__15566;
chunk__15549 = G__15567;
count__15550 = G__15568;
i__15551 = G__15569;
continue;
} else {
var vec__15556 = cljs.core.first(seq__15548__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15556,(1),null);
var temp__4657__auto___15570__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__4657__auto___15570__$1)){
var handler_15571 = temp__4657__auto___15570__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__15548,chunk__15549,count__15550,i__15551,handler_15571,temp__4657__auto___15570__$1,vec__15556,processing_name,quil_name,seq__15548__$1,temp__4657__auto__){
return (function (){
var _STAR_applet_STAR_15559 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_15571.cljs$core$IFn$_invoke$arity$0 ? handler_15571.cljs$core$IFn$_invoke$arity$0() : handler_15571.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_15559;
}});})(seq__15548,chunk__15549,count__15550,i__15551,handler_15571,temp__4657__auto___15570__$1,vec__15556,processing_name,quil_name,seq__15548__$1,temp__4657__auto__))
);
} else {
}

var G__15572 = cljs.core.next(seq__15548__$1);
var G__15573 = null;
var G__15574 = (0);
var G__15575 = (0);
seq__15548 = G__15572;
chunk__15549 = G__15573;
count__15550 = G__15574;
i__15551 = G__15575;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__15576_SHARP_){
return (p1__15576_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15576_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__15576_SHARP_.call(null,options));
}).call(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY))))], 0));
var sketch_size = (function (){var or__7184__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
return cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.array_seq([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));

return prc.target_frame_rate = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60)) : cljs.core.atom.call(null,(60)));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__4657__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__4657__auto__)){
var proc_obj = temp__4657__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__8304__auto__ = [];
var len__8297__auto___15579 = arguments.length;
var i__8298__auto___15580 = (0);
while(true){
if((i__8298__auto___15580 < len__8297__auto___15579)){
args__8304__auto__.push((arguments[i__8298__auto___15580]));

var G__15581 = (i__8298__auto___15580 + (1));
i__8298__auto___15580 = G__15581;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((0) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__8305__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__15578 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__15578);
})();
var renderer = (function (){var or__7184__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

return host_elem.processing_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
} else {
return console.error("ERROR: Cannot create sketch. :host is not specified.");
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

quil.sketch.sketch.cljs$lang$applyTo = (function (seq15577){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15577));
});

quil.sketch.sketch_init_list = (function (){var G__15582 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15582) : cljs.core.atom.call(null,G__15582));
})();
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__15595 = quil.sketch.empty_body_QMARK_();
var seq__15589_15596 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(quil.sketch.sketch_init_list) : cljs.core.deref.call(null,quil.sketch.sketch_init_list)));
var chunk__15590_15597 = null;
var count__15591_15598 = (0);
var i__15592_15599 = (0);
while(true){
if((i__15592_15599 < count__15591_15598)){
var sk_15600 = chunk__15590_15597.cljs$core$IIndexed$_nth$arity$2(null,i__15592_15599);
if(cljs.core.truth_(add_elem_QMARK__15595)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_15600));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_15600).call(null);

var G__15601 = seq__15589_15596;
var G__15602 = chunk__15590_15597;
var G__15603 = count__15591_15598;
var G__15604 = (i__15592_15599 + (1));
seq__15589_15596 = G__15601;
chunk__15590_15597 = G__15602;
count__15591_15598 = G__15603;
i__15592_15599 = G__15604;
continue;
} else {
var temp__4657__auto___15605 = cljs.core.seq(seq__15589_15596);
if(temp__4657__auto___15605){
var seq__15589_15606__$1 = temp__4657__auto___15605;
if(cljs.core.chunked_seq_QMARK_(seq__15589_15606__$1)){
var c__8003__auto___15607 = cljs.core.chunk_first(seq__15589_15606__$1);
var G__15608 = cljs.core.chunk_rest(seq__15589_15606__$1);
var G__15609 = c__8003__auto___15607;
var G__15610 = cljs.core.count(c__8003__auto___15607);
var G__15611 = (0);
seq__15589_15596 = G__15608;
chunk__15590_15597 = G__15609;
count__15591_15598 = G__15610;
i__15592_15599 = G__15611;
continue;
} else {
var sk_15612 = cljs.core.first(seq__15589_15606__$1);
if(cljs.core.truth_(add_elem_QMARK__15595)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_15612));
} else {
}

cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_15612).call(null);

var G__15613 = cljs.core.next(seq__15589_15606__$1);
var G__15614 = null;
var G__15615 = (0);
var G__15616 = (0);
seq__15589_15596 = G__15613;
chunk__15590_15597 = G__15614;
count__15591_15598 = G__15615;
i__15592_15599 = G__15616;
continue;
}
} else {
}
}
break;
}

var G__15593 = quil.sketch.sketch_init_list;
var G__15594 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15593,G__15594) : cljs.core.reset_BANG_.call(null,G__15593,G__15594));
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
