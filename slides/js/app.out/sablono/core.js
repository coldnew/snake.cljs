// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14077__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14074 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14075 = cljs.core.seq(vec__14074);
var first__14076 = cljs.core.first(seq__14075);
var seq__14075__$1 = cljs.core.next(seq__14075);
var tag = first__14076;
var body = seq__14075__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14078__i = 0, G__14078__a = new Array(arguments.length -  0);
while (G__14078__i < G__14078__a.length) {G__14078__a[G__14078__i] = arguments[G__14078__i + 0]; ++G__14078__i;}
  args = new cljs.core.IndexedSeq(G__14078__a,0,null);
} 
return G__14077__delegate.call(this,args);};
G__14077.cljs$lang$maxFixedArity = 0;
G__14077.cljs$lang$applyTo = (function (arglist__14079){
var args = cljs.core.seq(arglist__14079);
return G__14077__delegate(args);
});
G__14077.cljs$core$IFn$_invoke$arity$variadic = G__14077__delegate;
return G__14077;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7972__auto__ = (function sablono$core$update_arglists_$_iter__14086(s__14087){
return (new cljs.core.LazySeq(null,(function (){
var s__14087__$1 = s__14087;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14087__$1);
if(temp__4657__auto__){
var s__14087__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14087__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__14087__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__14089 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__14088 = (0);
while(true){
if((i__14088 < size__7971__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__14088);
cljs.core.chunk_append(b__14089,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14092 = (i__14088 + (1));
i__14088 = G__14092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14089),sablono$core$update_arglists_$_iter__14086(cljs.core.chunk_rest(s__14087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14089),null);
}
} else {
var args = cljs.core.first(s__14087__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14086(cljs.core.rest(s__14087__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14100 = arguments.length;
var i__8298__auto___14101 = (0);
while(true){
if((i__8298__auto___14101 < len__8297__auto___14100)){
args__8304__auto__.push((arguments[i__8298__auto___14101]));

var G__14102 = (i__8298__auto___14101 + (1));
i__8298__auto___14101 = G__14102;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((0) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8305__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7972__auto__ = (function sablono$core$iter__14094(s__14095){
return (new cljs.core.LazySeq(null,(function (){
var s__14095__$1 = s__14095;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14095__$1);
if(temp__4657__auto__){
var s__14095__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14095__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__14095__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__14097 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__14096 = (0);
while(true){
if((i__14096 < size__7971__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__14096);
cljs.core.chunk_append(b__14097,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14103 = (i__14096 + (1));
i__14096 = G__14103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),sablono$core$iter__14094(cljs.core.chunk_rest(s__14095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14097),null);
}
} else {
var style = cljs.core.first(s__14095__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14094(cljs.core.rest(s__14095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14093){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14093));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14108 = goog.dom.getDocument().body;
var G__14109 = (function (){var G__14110 = "script";
var G__14111 = ({"src": src});
return goog.dom.createDom(G__14110,G__14111);
})();
return goog.dom.appendChild(G__14108,G__14109);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14112 = (function sablono$core$link_to14112(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14115 = arguments.length;
var i__8298__auto___14116 = (0);
while(true){
if((i__8298__auto___14116 < len__8297__auto___14115)){
args__8304__auto__.push((arguments[i__8298__auto___14116]));

var G__14117 = (i__8298__auto___14116 + (1));
i__8298__auto___14116 = G__14117;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((1) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14112.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8305__auto__);
});

sablono.core.link_to14112.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to14112.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14112.cljs$lang$applyTo = (function (seq14113){
var G__14114 = cljs.core.first(seq14113);
var seq14113__$1 = cljs.core.next(seq14113);
return sablono.core.link_to14112.cljs$core$IFn$_invoke$arity$variadic(G__14114,seq14113__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14112);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14118 = (function sablono$core$mail_to14118(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14125 = arguments.length;
var i__8298__auto___14126 = (0);
while(true){
if((i__8298__auto___14126 < len__8297__auto___14125)){
args__8304__auto__.push((arguments[i__8298__auto___14126]));

var G__14127 = (i__8298__auto___14126 + (1));
i__8298__auto___14126 = G__14127;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((1) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14118.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8305__auto__);
});

sablono.core.mail_to14118.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14121){
var vec__14122 = p__14121;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14122,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7184__auto__ = content;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14118.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14118.cljs$lang$applyTo = (function (seq14119){
var G__14120 = cljs.core.first(seq14119);
var seq14119__$1 = cljs.core.next(seq14119);
return sablono.core.mail_to14118.cljs$core$IFn$_invoke$arity$variadic(G__14120,seq14119__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14118);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14128 = (function sablono$core$unordered_list14128(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7972__auto__ = (function sablono$core$unordered_list14128_$_iter__14135(s__14136){
return (new cljs.core.LazySeq(null,(function (){
var s__14136__$1 = s__14136;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14136__$1);
if(temp__4657__auto__){
var s__14136__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14136__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__14136__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__14138 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__14137 = (0);
while(true){
if((i__14137 < size__7971__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__14137);
cljs.core.chunk_append(b__14138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14141 = (i__14137 + (1));
i__14137 = G__14141;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14138),sablono$core$unordered_list14128_$_iter__14135(cljs.core.chunk_rest(s__14136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14138),null);
}
} else {
var x = cljs.core.first(s__14136__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14128_$_iter__14135(cljs.core.rest(s__14136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14128);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14142 = (function sablono$core$ordered_list14142(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7972__auto__ = (function sablono$core$ordered_list14142_$_iter__14149(s__14150){
return (new cljs.core.LazySeq(null,(function (){
var s__14150__$1 = s__14150;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14150__$1);
if(temp__4657__auto__){
var s__14150__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14150__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__14150__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__14152 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__14151 = (0);
while(true){
if((i__14151 < size__7971__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__14151);
cljs.core.chunk_append(b__14152,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14155 = (i__14151 + (1));
i__14151 = G__14155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14152),sablono$core$ordered_list14142_$_iter__14149(cljs.core.chunk_rest(s__14150__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14152),null);
}
} else {
var x = cljs.core.first(s__14150__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14142_$_iter__14149(cljs.core.rest(s__14150__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14142);
/**
 * Create an image element.
 */
sablono.core.image14156 = (function sablono$core$image14156(var_args){
var args14157 = [];
var len__8297__auto___14160 = arguments.length;
var i__8298__auto___14161 = (0);
while(true){
if((i__8298__auto___14161 < len__8297__auto___14160)){
args14157.push((arguments[i__8298__auto___14161]));

var G__14162 = (i__8298__auto___14161 + (1));
i__8298__auto___14161 = G__14162;
continue;
} else {
}
break;
}

var G__14159 = args14157.length;
switch (G__14159) {
case 1:
return sablono.core.image14156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14157.length)].join('')));

}
});

sablono.core.image14156.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image14156.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14156.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14156);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14164_SHARP_,p2__14165_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14164_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14165_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14166_SHARP_,p2__14167_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14166_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__14167_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7184__auto__ = value;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14168 = (function sablono$core$color_field14168(var_args){
var args14169 = [];
var len__8297__auto___14236 = arguments.length;
var i__8298__auto___14237 = (0);
while(true){
if((i__8298__auto___14237 < len__8297__auto___14236)){
args14169.push((arguments[i__8298__auto___14237]));

var G__14238 = (i__8298__auto___14237 + (1));
i__8298__auto___14237 = G__14238;
continue;
} else {
}
break;
}

var G__14171 = args14169.length;
switch (G__14171) {
case 1:
return sablono.core.color_field14168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14169.length)].join('')));

}
});

sablono.core.color_field14168.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.color_field14168.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.color_field14168.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.color_field14168.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14168);

/**
 * Creates a date input field.
 */
sablono.core.date_field14172 = (function sablono$core$date_field14172(var_args){
var args14173 = [];
var len__8297__auto___14240 = arguments.length;
var i__8298__auto___14241 = (0);
while(true){
if((i__8298__auto___14241 < len__8297__auto___14240)){
args14173.push((arguments[i__8298__auto___14241]));

var G__14242 = (i__8298__auto___14241 + (1));
i__8298__auto___14241 = G__14242;
continue;
} else {
}
break;
}

var G__14175 = args14173.length;
switch (G__14175) {
case 1:
return sablono.core.date_field14172.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14172.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14173.length)].join('')));

}
});

sablono.core.date_field14172.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.date_field14172.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.date_field14172.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.date_field14172.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14172);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14176 = (function sablono$core$datetime_field14176(var_args){
var args14177 = [];
var len__8297__auto___14244 = arguments.length;
var i__8298__auto___14245 = (0);
while(true){
if((i__8298__auto___14245 < len__8297__auto___14244)){
args14177.push((arguments[i__8298__auto___14245]));

var G__14246 = (i__8298__auto___14245 + (1));
i__8298__auto___14245 = G__14246;
continue;
} else {
}
break;
}

var G__14179 = args14177.length;
switch (G__14179) {
case 1:
return sablono.core.datetime_field14176.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14176.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14177.length)].join('')));

}
});

sablono.core.datetime_field14176.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.datetime_field14176.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.datetime_field14176.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.datetime_field14176.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14176);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14180 = (function sablono$core$datetime_local_field14180(var_args){
var args14181 = [];
var len__8297__auto___14248 = arguments.length;
var i__8298__auto___14249 = (0);
while(true){
if((i__8298__auto___14249 < len__8297__auto___14248)){
args14181.push((arguments[i__8298__auto___14249]));

var G__14250 = (i__8298__auto___14249 + (1));
i__8298__auto___14249 = G__14250;
continue;
} else {
}
break;
}

var G__14183 = args14181.length;
switch (G__14183) {
case 1:
return sablono.core.datetime_local_field14180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14181.length)].join('')));

}
});

sablono.core.datetime_local_field14180.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.datetime_local_field14180.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.datetime_local_field14180.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.datetime_local_field14180.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14180);

/**
 * Creates a email input field.
 */
sablono.core.email_field14184 = (function sablono$core$email_field14184(var_args){
var args14185 = [];
var len__8297__auto___14252 = arguments.length;
var i__8298__auto___14253 = (0);
while(true){
if((i__8298__auto___14253 < len__8297__auto___14252)){
args14185.push((arguments[i__8298__auto___14253]));

var G__14254 = (i__8298__auto___14253 + (1));
i__8298__auto___14253 = G__14254;
continue;
} else {
}
break;
}

var G__14187 = args14185.length;
switch (G__14187) {
case 1:
return sablono.core.email_field14184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14185.length)].join('')));

}
});

sablono.core.email_field14184.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.email_field14184.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.email_field14184.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.email_field14184.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14184);

/**
 * Creates a file input field.
 */
sablono.core.file_field14188 = (function sablono$core$file_field14188(var_args){
var args14189 = [];
var len__8297__auto___14256 = arguments.length;
var i__8298__auto___14257 = (0);
while(true){
if((i__8298__auto___14257 < len__8297__auto___14256)){
args14189.push((arguments[i__8298__auto___14257]));

var G__14258 = (i__8298__auto___14257 + (1));
i__8298__auto___14257 = G__14258;
continue;
} else {
}
break;
}

var G__14191 = args14189.length;
switch (G__14191) {
case 1:
return sablono.core.file_field14188.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14188.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14189.length)].join('')));

}
});

sablono.core.file_field14188.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.file_field14188.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.file_field14188.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.file_field14188.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14188);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14192 = (function sablono$core$hidden_field14192(var_args){
var args14193 = [];
var len__8297__auto___14260 = arguments.length;
var i__8298__auto___14261 = (0);
while(true){
if((i__8298__auto___14261 < len__8297__auto___14260)){
args14193.push((arguments[i__8298__auto___14261]));

var G__14262 = (i__8298__auto___14261 + (1));
i__8298__auto___14261 = G__14262;
continue;
} else {
}
break;
}

var G__14195 = args14193.length;
switch (G__14195) {
case 1:
return sablono.core.hidden_field14192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14193.length)].join('')));

}
});

sablono.core.hidden_field14192.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.hidden_field14192.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.hidden_field14192.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.hidden_field14192.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14192);

/**
 * Creates a month input field.
 */
sablono.core.month_field14196 = (function sablono$core$month_field14196(var_args){
var args14197 = [];
var len__8297__auto___14264 = arguments.length;
var i__8298__auto___14265 = (0);
while(true){
if((i__8298__auto___14265 < len__8297__auto___14264)){
args14197.push((arguments[i__8298__auto___14265]));

var G__14266 = (i__8298__auto___14265 + (1));
i__8298__auto___14265 = G__14266;
continue;
} else {
}
break;
}

var G__14199 = args14197.length;
switch (G__14199) {
case 1:
return sablono.core.month_field14196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14197.length)].join('')));

}
});

sablono.core.month_field14196.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.month_field14196.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.month_field14196.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.month_field14196.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14196);

/**
 * Creates a number input field.
 */
sablono.core.number_field14200 = (function sablono$core$number_field14200(var_args){
var args14201 = [];
var len__8297__auto___14268 = arguments.length;
var i__8298__auto___14269 = (0);
while(true){
if((i__8298__auto___14269 < len__8297__auto___14268)){
args14201.push((arguments[i__8298__auto___14269]));

var G__14270 = (i__8298__auto___14269 + (1));
i__8298__auto___14269 = G__14270;
continue;
} else {
}
break;
}

var G__14203 = args14201.length;
switch (G__14203) {
case 1:
return sablono.core.number_field14200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14201.length)].join('')));

}
});

sablono.core.number_field14200.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.number_field14200.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.number_field14200.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.number_field14200.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14200);

/**
 * Creates a password input field.
 */
sablono.core.password_field14204 = (function sablono$core$password_field14204(var_args){
var args14205 = [];
var len__8297__auto___14272 = arguments.length;
var i__8298__auto___14273 = (0);
while(true){
if((i__8298__auto___14273 < len__8297__auto___14272)){
args14205.push((arguments[i__8298__auto___14273]));

var G__14274 = (i__8298__auto___14273 + (1));
i__8298__auto___14273 = G__14274;
continue;
} else {
}
break;
}

var G__14207 = args14205.length;
switch (G__14207) {
case 1:
return sablono.core.password_field14204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14205.length)].join('')));

}
});

sablono.core.password_field14204.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.password_field14204.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.password_field14204.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.password_field14204.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14204);

/**
 * Creates a range input field.
 */
sablono.core.range_field14208 = (function sablono$core$range_field14208(var_args){
var args14209 = [];
var len__8297__auto___14276 = arguments.length;
var i__8298__auto___14277 = (0);
while(true){
if((i__8298__auto___14277 < len__8297__auto___14276)){
args14209.push((arguments[i__8298__auto___14277]));

var G__14278 = (i__8298__auto___14277 + (1));
i__8298__auto___14277 = G__14278;
continue;
} else {
}
break;
}

var G__14211 = args14209.length;
switch (G__14211) {
case 1:
return sablono.core.range_field14208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14209.length)].join('')));

}
});

sablono.core.range_field14208.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.range_field14208.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.range_field14208.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.range_field14208.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14208);

/**
 * Creates a search input field.
 */
sablono.core.search_field14212 = (function sablono$core$search_field14212(var_args){
var args14213 = [];
var len__8297__auto___14280 = arguments.length;
var i__8298__auto___14281 = (0);
while(true){
if((i__8298__auto___14281 < len__8297__auto___14280)){
args14213.push((arguments[i__8298__auto___14281]));

var G__14282 = (i__8298__auto___14281 + (1));
i__8298__auto___14281 = G__14282;
continue;
} else {
}
break;
}

var G__14215 = args14213.length;
switch (G__14215) {
case 1:
return sablono.core.search_field14212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14213.length)].join('')));

}
});

sablono.core.search_field14212.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.search_field14212.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.search_field14212.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.search_field14212.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14212);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14216 = (function sablono$core$tel_field14216(var_args){
var args14217 = [];
var len__8297__auto___14284 = arguments.length;
var i__8298__auto___14285 = (0);
while(true){
if((i__8298__auto___14285 < len__8297__auto___14284)){
args14217.push((arguments[i__8298__auto___14285]));

var G__14286 = (i__8298__auto___14285 + (1));
i__8298__auto___14285 = G__14286;
continue;
} else {
}
break;
}

var G__14219 = args14217.length;
switch (G__14219) {
case 1:
return sablono.core.tel_field14216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14217.length)].join('')));

}
});

sablono.core.tel_field14216.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.tel_field14216.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.tel_field14216.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.tel_field14216.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14216);

/**
 * Creates a text input field.
 */
sablono.core.text_field14220 = (function sablono$core$text_field14220(var_args){
var args14221 = [];
var len__8297__auto___14288 = arguments.length;
var i__8298__auto___14289 = (0);
while(true){
if((i__8298__auto___14289 < len__8297__auto___14288)){
args14221.push((arguments[i__8298__auto___14289]));

var G__14290 = (i__8298__auto___14289 + (1));
i__8298__auto___14289 = G__14290;
continue;
} else {
}
break;
}

var G__14223 = args14221.length;
switch (G__14223) {
case 1:
return sablono.core.text_field14220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14221.length)].join('')));

}
});

sablono.core.text_field14220.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.text_field14220.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.text_field14220.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.text_field14220.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14220);

/**
 * Creates a time input field.
 */
sablono.core.time_field14224 = (function sablono$core$time_field14224(var_args){
var args14225 = [];
var len__8297__auto___14292 = arguments.length;
var i__8298__auto___14293 = (0);
while(true){
if((i__8298__auto___14293 < len__8297__auto___14292)){
args14225.push((arguments[i__8298__auto___14293]));

var G__14294 = (i__8298__auto___14293 + (1));
i__8298__auto___14293 = G__14294;
continue;
} else {
}
break;
}

var G__14227 = args14225.length;
switch (G__14227) {
case 1:
return sablono.core.time_field14224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14225.length)].join('')));

}
});

sablono.core.time_field14224.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.time_field14224.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.time_field14224.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.time_field14224.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14224);

/**
 * Creates a url input field.
 */
sablono.core.url_field14228 = (function sablono$core$url_field14228(var_args){
var args14229 = [];
var len__8297__auto___14296 = arguments.length;
var i__8298__auto___14297 = (0);
while(true){
if((i__8298__auto___14297 < len__8297__auto___14296)){
args14229.push((arguments[i__8298__auto___14297]));

var G__14298 = (i__8298__auto___14297 + (1));
i__8298__auto___14297 = G__14298;
continue;
} else {
}
break;
}

var G__14231 = args14229.length;
switch (G__14231) {
case 1:
return sablono.core.url_field14228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14229.length)].join('')));

}
});

sablono.core.url_field14228.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.url_field14228.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.url_field14228.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.url_field14228.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14228);

/**
 * Creates a week input field.
 */
sablono.core.week_field14232 = (function sablono$core$week_field14232(var_args){
var args14233 = [];
var len__8297__auto___14300 = arguments.length;
var i__8298__auto___14301 = (0);
while(true){
if((i__8298__auto___14301 < len__8297__auto___14300)){
args14233.push((arguments[i__8298__auto___14301]));

var G__14302 = (i__8298__auto___14301 + (1));
i__8298__auto___14301 = G__14302;
continue;
} else {
}
break;
}

var G__14235 = args14233.length;
switch (G__14235) {
case 1:
return sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14233.length)].join('')));

}
});

sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$1 = (function (name__14061__auto__){
return sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$2(name__14061__auto__,null);
});

sablono.core.week_field14232.cljs$core$IFn$_invoke$arity$2 = (function (name__14061__auto__,value__14062__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__14061__auto__,value__14062__auto__);
});

sablono.core.week_field14232.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14232);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14304 = (function sablono$core$check_box14304(var_args){
var args14305 = [];
var len__8297__auto___14308 = arguments.length;
var i__8298__auto___14309 = (0);
while(true){
if((i__8298__auto___14309 < len__8297__auto___14308)){
args14305.push((arguments[i__8298__auto___14309]));

var G__14310 = (i__8298__auto___14309 + (1));
i__8298__auto___14309 = G__14310;
continue;
} else {
}
break;
}

var G__14307 = args14305.length;
switch (G__14307) {
case 1:
return sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14305.length)].join('')));

}
});

sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box14304.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7184__auto__ = value;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14304.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14304);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14312 = (function sablono$core$radio_button14312(var_args){
var args14313 = [];
var len__8297__auto___14316 = arguments.length;
var i__8298__auto___14317 = (0);
while(true){
if((i__8298__auto___14317 < len__8297__auto___14316)){
args14313.push((arguments[i__8298__auto___14317]));

var G__14318 = (i__8298__auto___14317 + (1));
i__8298__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var G__14315 = args14313.length;
switch (G__14315) {
case 1:
return sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14313.length)].join('')));

}
});

sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button14312.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,(function (){var or__7184__auto__ = value;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return undefined;
}
})(),cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14312.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14312);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__14321 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__14321);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14322 = (function sablono$core$select_options14322(coll){
var iter__7972__auto__ = (function sablono$core$select_options14322_$_iter__14341(s__14342){
return (new cljs.core.LazySeq(null,(function (){
var s__14342__$1 = s__14342;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14342__$1);
if(temp__4657__auto__){
var s__14342__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14342__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__14342__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__14344 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__14343 = (0);
while(true){
if((i__14343 < size__7971__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__14343);
cljs.core.chunk_append(b__14344,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14353 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14353,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14322.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14322.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14322.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14359 = (i__14343 + (1));
i__14343 = G__14359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14344),sablono$core$select_options14322_$_iter__14341(cljs.core.chunk_rest(s__14342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14344),null);
}
} else {
var x = cljs.core.first(s__14342__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14356 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14356,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14356,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14356,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),(sablono.core.select_options14322.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options14322.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options14322.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14322_$_iter__14341(cljs.core.rest(s__14342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14322);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14360 = (function sablono$core$drop_down14360(var_args){
var args14361 = [];
var len__8297__auto___14364 = arguments.length;
var i__8298__auto___14365 = (0);
while(true){
if((i__8298__auto___14365 < len__8297__auto___14364)){
args14361.push((arguments[i__8298__auto___14365]));

var G__14366 = (i__8298__auto___14365 + (1));
i__8298__auto___14365 = G__14366;
continue;
} else {
}
break;
}

var G__14363 = args14361.length;
switch (G__14363) {
case 2:
return sablono.core.drop_down14360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14360.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14361.length)].join('')));

}
});

sablono.core.drop_down14360.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14360.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down14360.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down14360.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14360);
/**
 * Creates a text area element.
 */
sablono.core.text_area14368 = (function sablono$core$text_area14368(var_args){
var args14369 = [];
var len__8297__auto___14372 = arguments.length;
var i__8298__auto___14373 = (0);
while(true){
if((i__8298__auto___14373 < len__8297__auto___14372)){
args14369.push((arguments[i__8298__auto___14373]));

var G__14374 = (i__8298__auto___14373 + (1));
i__8298__auto___14373 = G__14374;
continue;
} else {
}
break;
}

var G__14371 = args14369.length;
switch (G__14371) {
case 1:
return sablono.core.text_area14368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14369.length)].join('')));

}
});

sablono.core.text_area14368.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14368.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area14368.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,(function (){var or__7184__auto__ = value;
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area14368.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14368);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14376 = (function sablono$core$label14376(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14376);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14377 = (function sablono$core$submit_button14377(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14377);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14378 = (function sablono$core$reset_button14378(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14378);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14379 = (function sablono$core$form_to14379(var_args){
var args__8304__auto__ = [];
var len__8297__auto___14389 = arguments.length;
var i__8298__auto___14390 = (0);
while(true){
if((i__8298__auto___14390 < len__8297__auto___14389)){
args__8304__auto__.push((arguments[i__8298__auto___14390]));

var G__14391 = (i__8298__auto___14390 + (1));
i__8298__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((1) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14379.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8305__auto__);
});

sablono.core.form_to14379.cljs$core$IFn$_invoke$arity$variadic = (function (p__14382,body){
var vec__14383 = p__14382;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14383,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14383,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14386 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14387 = "_method";
var G__14388 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14386,G__14387,G__14388) : sablono.core.hidden_field.call(null,G__14386,G__14387,G__14388));
})()], null)),body));
});

sablono.core.form_to14379.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14379.cljs$lang$applyTo = (function (seq14380){
var G__14381 = cljs.core.first(seq14380);
var seq14380__$1 = cljs.core.next(seq14380);
return sablono.core.form_to14379.cljs$core$IFn$_invoke$arity$variadic(G__14381,seq14380__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14379);
