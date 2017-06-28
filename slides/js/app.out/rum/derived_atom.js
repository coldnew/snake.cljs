// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args13483 = [];
var len__8297__auto___13514 = arguments.length;
var i__8298__auto___13515 = (0);
while(true){
if((i__8298__auto___13515 < len__8297__auto___13514)){
args13483.push((arguments[i__8298__auto___13515]));

var G__13516 = (i__8298__auto___13515 + (1));
i__8298__auto___13515 = G__13516;
continue;
} else {
}
break;
}

var G__13485 = args13483.length;
switch (G__13485) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13483.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4(refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__13486 = opts;
var map__13486__$1 = ((((!((map__13486 == null)))?((((map__13486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13486):map__13486);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13486__$1,cljs.core.cst$kw$ref);
var check_equals_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13486__$1,cljs.core.cst$kw$check_DASH_equals_QMARK_,true);
var recalc = (function (){var G__13488 = cljs.core.count(refs);
switch (G__13488) {
case (1):
var vec__13489 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13489,(0),null);
return ((function (vec__13489,a,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_){
return (function (){
var G__13492 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13492) : f.call(null,G__13492));
});
;})(vec__13489,a,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__13493 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(1),null);
return ((function (vec__13493,a,b,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_){
return (function (){
var G__13496 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__13497 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13496,G__13497) : f.call(null,G__13496,G__13497));
});
;})(vec__13493,a,b,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__13498 = refs;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13498,(2),null);
return ((function (vec__13498,a,b,c,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_){
return (function (){
var G__13501 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(a) : cljs.core.deref.call(null,a));
var G__13502 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(b) : cljs.core.deref.call(null,b));
var G__13503 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(c) : cljs.core.deref.call(null,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13501,G__13502,G__13503) : f.call(null,G__13501,G__13502,G__13503));
});
;})(vec__13498,a,b,c,G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,refs));
});
;})(G__13488,map__13486,map__13486__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__13504 = ref;
var G__13505_13519 = G__13504;
var G__13506_13520 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13505_13519,G__13506_13520) : cljs.core.reset_BANG_.call(null,G__13505_13519,G__13506_13520));

return G__13504;
})():(function (){var G__13507 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13507) : cljs.core.atom.call(null,G__13507));
})());
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__13486,map__13486__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(sink) : cljs.core.deref.call(null,sink)),new_val)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(sink,new_val) : cljs.core.reset_BANG_.call(null,sink,new_val));
} else {
return null;
}
});})(map__13486,map__13486__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__13486,map__13486__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var G__13508 = sink;
var G__13509 = (recalc.cljs$core$IFn$_invoke$arity$0 ? recalc.cljs$core$IFn$_invoke$arity$0() : recalc.call(null));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13508,G__13509) : cljs.core.reset_BANG_.call(null,G__13508,G__13509));
});})(map__13486,map__13486__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__13510_13521 = cljs.core.seq(refs);
var chunk__13511_13522 = null;
var count__13512_13523 = (0);
var i__13513_13524 = (0);
while(true){
if((i__13513_13524 < count__13512_13523)){
var ref_13525__$1 = chunk__13511_13522.cljs$core$IIndexed$_nth$arity$2(null,i__13513_13524);
cljs.core.add_watch(ref_13525__$1,key,watch);

var G__13526 = seq__13510_13521;
var G__13527 = chunk__13511_13522;
var G__13528 = count__13512_13523;
var G__13529 = (i__13513_13524 + (1));
seq__13510_13521 = G__13526;
chunk__13511_13522 = G__13527;
count__13512_13523 = G__13528;
i__13513_13524 = G__13529;
continue;
} else {
var temp__4657__auto___13530 = cljs.core.seq(seq__13510_13521);
if(temp__4657__auto___13530){
var seq__13510_13531__$1 = temp__4657__auto___13530;
if(cljs.core.chunked_seq_QMARK_(seq__13510_13531__$1)){
var c__8003__auto___13532 = cljs.core.chunk_first(seq__13510_13531__$1);
var G__13533 = cljs.core.chunk_rest(seq__13510_13531__$1);
var G__13534 = c__8003__auto___13532;
var G__13535 = cljs.core.count(c__8003__auto___13532);
var G__13536 = (0);
seq__13510_13521 = G__13533;
chunk__13511_13522 = G__13534;
count__13512_13523 = G__13535;
i__13513_13524 = G__13536;
continue;
} else {
var ref_13537__$1 = cljs.core.first(seq__13510_13531__$1);
cljs.core.add_watch(ref_13537__$1,key,watch);

var G__13538 = cljs.core.next(seq__13510_13531__$1);
var G__13539 = null;
var G__13540 = (0);
var G__13541 = (0);
seq__13510_13521 = G__13538;
chunk__13511_13522 = G__13539;
count__13512_13523 = G__13540;
i__13513_13524 = G__13541;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;

