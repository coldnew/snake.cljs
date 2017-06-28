// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('rum.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
}),keys);
}),cljs.core.array_seq([mixins], 0)));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14397 = arguments.length;
var i__8298__auto___14398 = (0);
while(true){
if((i__8298__auto___14398 < len__8297__auto___14397)){
args__8304__auto__.push((arguments[i__8298__auto___14398]));

var G__14399 = (i__8298__auto___14398 + (1));
i__8298__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((2) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8305__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,fn){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq14394){
var G__14395 = cljs.core.first(seq14394);
var seq14394__$1 = cljs.core.next(seq14394);
var G__14396 = cljs.core.first(seq14394__$1);
var seq14394__$2 = cljs.core.next(seq14394__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__14395,G__14396,seq14394__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
