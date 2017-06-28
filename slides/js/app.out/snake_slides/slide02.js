// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.slide02');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('snake_slides.syntax_highlight');
snake_slides.slide02.dark_green = "#143";
snake_slides.slide02.light_green = "#175";
snake_slides.slide02.dark_purple = "#449";
snake_slides.slide02.light_purple = "#6ad";
snake_slides.slide02.dark_red = "#944";
snake_slides.slide02.light_red = "#f8c";
snake_slides.slide02.piece_keys = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null);
snake_slides.slide02.positions = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null),cljs.core.cst$kw$b1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),cljs.core.cst$kw$b2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null);
snake_slides.slide02.pieces = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null),cljs.core.cst$kw$b1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(8)], null)], null),cljs.core.cst$kw$b2,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7)], null)], null)], null);
snake_slides.slide02.piece_abs_coords = (function snake_slides$slide02$piece_abs_coords(piece){
var vec__15001 = (snake_slides.slide02.positions.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide02.positions.cljs$core$IFn$_invoke$arity$1(piece) : snake_slides.slide02.positions.call(null,piece));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15001,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__15001,cx,cy){
return (function (p__15004){
var vec__15005 = p__15004;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15005,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + x),(cy + y)], null);
});})(vec__15001,cx,cy))
,(snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1(piece) : snake_slides.slide02.pieces.call(null,piece)));
});
snake_slides.slide02.app = (function (){var G__15008 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$piece,null,cljs.core.cst$kw$index,null,cljs.core.cst$kw$board,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15008) : cljs.core.atom.call(null,G__15008));
})();
snake_slides.slide02.rows = (20);
snake_slides.slide02.cols = (10);
snake_slides.slide02.empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide02.cols,(0)));
snake_slides.slide02.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide02.rows,snake_slides.slide02.empty_row));
snake_slides.slide02.data_row = (function snake_slides$slide02$data_row(piece){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app)))))?"active-row-534ed":""),cljs.core.cst$kw$onMouseEnter,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$piece,piece);
})], null),"'(",(function (){var iter__7972__auto__ = (function snake_slides$slide02$data_row_$_iter__15041(s__15042){
return (new cljs.core.LazySeq(null,(function (){
var s__15042__$1 = s__15042;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15042__$1);
if(temp__4657__auto__){
var s__15042__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15042__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__15042__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__15044 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__15043 = (0);
while(true){
if((i__15043 < size__7971__auto__)){
var vec__15059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__15043);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(0),null);
var vec__15062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15062,(1),null);
cljs.core.chunk_append(b__15044,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (i__15043,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$index,index);
});})(i__15043,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__))
], null),(function (){var pad = ((function (i__15043,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__){
return (function (p1__15009_SHARP_){
if((p1__15009_SHARP_ < (0))){
return p1__15009_SHARP_;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15009_SHARP_)].join('');
}
});})(i__15043,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__))
;
var fmt = ((function (i__15043,pad,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__){
return (function (p1__15010_SHARP_){
return snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pad(p1__15010_SHARP_)], 0));
});})(i__15043,pad,vec__15059,index,vec__15062,x,y,c__7970__auto__,size__7971__auto__,b__15044,s__15042__$2,temp__4657__auto__))
;
return cljs.core._conj((function (){var x__8026__auto__ = fmt(x);
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = fmt(y);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," ]"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})()," [");
})()], null));

var G__15071 = (i__15043 + (1));
i__15043 = G__15071;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15044),snake_slides$slide02$data_row_$_iter__15041(cljs.core.chunk_rest(s__15042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15044),null);
}
} else {
var vec__15065 = cljs.core.first(s__15042__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15065,(0),null);
var vec__15068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15065,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15068,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15068,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$index,index);
});})(vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__))
], null),(function (){var pad = ((function (vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__){
return (function (p1__15009_SHARP_){
if((p1__15009_SHARP_ < (0))){
return p1__15009_SHARP_;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15009_SHARP_)].join('');
}
});})(vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__))
;
var fmt = ((function (pad,vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__){
return (function (p1__15010_SHARP_){
return snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pad(p1__15010_SHARP_)], 0));
});})(pad,vec__15065,index,vec__15068,x,y,s__15042__$2,temp__4657__auto__))
;
return cljs.core._conj((function (){var x__8026__auto__ = fmt(x);
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = fmt(y);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," ]"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})()," [");
})()], null),snake_slides$slide02$data_row_$_iter__15041(cljs.core.rest(s__15042__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1(piece) : snake_slides.slide02.pieces.call(null,piece))));
})()," )"], null);
});
snake_slides.slide02.data_row_noevent = (function snake_slides$slide02$data_row_noevent(piece){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece)].join(''),cljs.core.cst$kw$class,""], null),"'(",(function (){var iter__7972__auto__ = (function snake_slides$slide02$data_row_noevent_$_iter__15104(s__15105){
return (new cljs.core.LazySeq(null,(function (){
var s__15105__$1 = s__15105;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__15105__$1);
if(temp__4657__auto__){
var s__15105__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15105__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__15105__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__15107 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__15106 = (0);
while(true){
if((i__15106 < size__7971__auto__)){
var vec__15122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__15106);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15122,(0),null);
var vec__15125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15122,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15125,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15125,(1),null);
cljs.core.chunk_append(b__15107,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (i__15106,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$index,index);
});})(i__15106,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__))
], null),(function (){var pad = ((function (i__15106,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__){
return (function (p1__15072_SHARP_){
if((p1__15072_SHARP_ < (0))){
return p1__15072_SHARP_;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15072_SHARP_)].join('');
}
});})(i__15106,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__))
;
var fmt = ((function (i__15106,pad,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__){
return (function (p1__15073_SHARP_){
return snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pad(p1__15073_SHARP_)], 0));
});})(i__15106,pad,vec__15122,index,vec__15125,x,y,c__7970__auto__,size__7971__auto__,b__15107,s__15105__$2,temp__4657__auto__))
;
return cljs.core._conj((function (){var x__8026__auto__ = fmt(x);
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = fmt(y);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," ]"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})()," [");
})()], null));

var G__15134 = (i__15106 + (1));
i__15106 = G__15134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15107),snake_slides$slide02$data_row_noevent_$_iter__15104(cljs.core.chunk_rest(s__15105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15107),null);
}
} else {
var vec__15128 = cljs.core.first(s__15105__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15128,(0),null);
var vec__15131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15128,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("piece"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(piece),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$index,index);
});})(vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__))
], null),(function (){var pad = ((function (vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__){
return (function (p1__15072_SHARP_){
if((p1__15072_SHARP_ < (0))){
return p1__15072_SHARP_;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15072_SHARP_)].join('');
}
});})(vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__))
;
var fmt = ((function (pad,vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__){
return (function (p1__15073_SHARP_){
return snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pad(p1__15073_SHARP_)], 0));
});})(pad,vec__15128,index,vec__15131,x,y,s__15105__$2,temp__4657__auto__))
;
return cljs.core._conj((function (){var x__8026__auto__ = fmt(x);
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = fmt(y);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," ]"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})()," [");
})()], null),snake_slides$slide02$data_row_noevent_$_iter__15104(cljs.core.rest(s__15105__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,(snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide02.pieces.cljs$core$IFn$_invoke$arity$1(piece) : snake_slides.slide02.pieces.call(null,piece))));
})()," )"], null);
});
snake_slides.slide02.code = rum.core.build_defc((function (){
var G__15135 = "div";
var G__15136 = ({"className": "code-cb62a"});
var G__15137 = (function (){var G__15139 = "pre";
var G__15140 = null;
var G__15141 = (function (){var attrs15138 = snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; TRY IT: mouse over the pieces."], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs15138))?sablono.interpreter.attributes(attrs15138):null),((cljs.core.map_QMARK_(attrs15138))?cljs.core.PersistentVector.fromArray(["\n","\n\n","(",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)))," snake\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row(cljs.core.cst$kw$body);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {")),"\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; Add snake's head\n"], 0))),"> (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["assoc"], 0)))," snake ",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["conj"], 0)))," [",sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(4)], 0)))," ",sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(6)], 0))),"] (",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," snake))) ","\n\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row_noevent(cljs.core.cst$kw$b1);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {")),"\n\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; Remove snake's tail\n"], 0))),"> (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["assoc"], 0)))," snake ",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["drop-last"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," snake))) ","\n\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row_noevent(cljs.core.cst$kw$b2);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {"))], true):cljs.core.PersistentVector.fromArray([sablono.interpreter.interpret(attrs15138),"\n","\n\n","(",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)))," snake\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row(cljs.core.cst$kw$body);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {")),"\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; Add snake's head\n"], 0))),"> (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["assoc"], 0)))," snake ",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["conj"], 0)))," [",sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(4)], 0)))," ",sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(6)], 0))),"] (",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," snake))) ","\n\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row_noevent(cljs.core.cst$kw$b1);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {")),"\n\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; Remove snake's tail\n"], 0))),"> (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["assoc"], 0)))," snake ",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["drop-last"], 0)))," (",sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":body"], 0)))," snake))) ","\n\n",sablono.interpreter.interpret(cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$body)].join('')], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.slide02.data_row_noevent(cljs.core.cst$kw$b2);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," })\n"),x__8026__auto____$1);
})()," "),x__8026__auto__);
})(),"  {"))], true)));
})();
return React.createElement(G__15139,G__15140,G__15141);
})();
return React.createElement(G__15135,G__15136,G__15137);
}),null,"code");
snake_slides.slide02.cell_size = cljs.core.quot((600),snake_slides.slide02.rows);
snake_slides.slide02.piece_index = (function snake_slides$slide02$piece_index(x,y){
return cljs.core.some(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15142_SHARP_){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__15147){
var vec__15148 = p__15147;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15148,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(px,x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(py,y))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15142_SHARP_,i], null);
} else {
return null;
}
}),snake_slides.slide02.piece_abs_coords(p1__15142_SHARP_)));
}),cljs.core.keys(snake_slides.slide02.pieces)));
});
snake_slides.slide02.canvas_mouse = (function snake_slides$slide02$canvas_mouse(e){
var canvas = snake_slides.slide02.global_canvas;
var rect = canvas.getBoundingClientRect();
var x = (e.clientX - rect.left);
var y = (e.clientY - rect.top);
var col = cljs.core.quot(x,snake_slides.slide02.cell_size);
var row = cljs.core.quot(y,snake_slides.slide02.cell_size);
var vec__15154 = snake_slides.slide02.piece_index(col,row);
var piece = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154,(1),null);
if(cljs.core.truth_((function (){var and__7172__auto__ = piece;
if(cljs.core.truth_(and__7172__auto__)){
return index;
} else {
return and__7172__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$piece,piece);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide02.app,cljs.core.assoc,cljs.core.cst$kw$index,index);
} else {
return null;
}
});
snake_slides.slide02.draw_cell_BANG_ = (function snake_slides$slide02$draw_cell_BANG_(ctx,p__15157,is_piece,is_index,is_center){
var vec__15161 = p__15157;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(1),null);
ctx.fillStyle = (cljs.core.truth_(is_index)?snake_slides.slide02.dark_purple:(cljs.core.truth_(is_piece)?snake_slides.slide02.dark_green:"transparent"
));

ctx.strokeStyle = (cljs.core.truth_(is_index)?snake_slides.slide02.light_purple:(cljs.core.truth_(is_piece)?snake_slides.slide02.light_green:"#888"
));

ctx.lineWidth = (2);

var rx = (snake_slides.slide02.cell_size * x);
var ry = (snake_slides.slide02.cell_size * y);
var rs = snake_slides.slide02.cell_size;
var cx = (snake_slides.slide02.cell_size * (x + 0.5));
var cy = (snake_slides.slide02.cell_size * (y + 0.5));
var cr = (snake_slides.slide02.cell_size / (4));
ctx.fillRect(rx,ry,rs,rs);

ctx.strokeRect(rx,ry,rs,rs);

if(cljs.core.truth_(is_center)){
ctx.beginPath();

ctx.arc(cx,cy,cr,(0),((2) * Math.PI));

ctx.fill();

return ctx.stroke();
} else {
return null;
}
});
snake_slides.slide02.draw_piece_BANG_ = (function snake_slides$slide02$draw_piece_BANG_(ctx,piece){
var is_piece = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(piece,cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app))));
var index = (function (){var and__7172__auto__ = is_piece;
if(and__7172__auto__){
return cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app)));
} else {
return and__7172__auto__;
}
})();
var center = (snake_slides.slide02.positions.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide02.positions.cljs$core$IFn$_invoke$arity$1(piece) : snake_slides.slide02.positions.call(null,piece));
var seq__15184_15204 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,snake_slides.slide02.piece_abs_coords(piece)));
var chunk__15185_15205 = null;
var count__15186_15206 = (0);
var i__15187_15207 = (0);
while(true){
if((i__15187_15207 < count__15186_15206)){
var vec__15188_15208 = chunk__15185_15205.cljs$core$IIndexed$_nth$arity$2(null,i__15187_15207);
var i_15209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15188_15208,(0),null);
var c_15210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15188_15208,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15209,index)){
} else {
snake_slides.slide02.draw_cell_BANG_(ctx,c_15210,is_piece,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15209,index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15209,(0)));
}

var G__15211 = seq__15184_15204;
var G__15212 = chunk__15185_15205;
var G__15213 = count__15186_15206;
var G__15214 = (i__15187_15207 + (1));
seq__15184_15204 = G__15211;
chunk__15185_15205 = G__15212;
count__15186_15206 = G__15213;
i__15187_15207 = G__15214;
continue;
} else {
var temp__4657__auto___15215 = cljs.core.seq(seq__15184_15204);
if(temp__4657__auto___15215){
var seq__15184_15216__$1 = temp__4657__auto___15215;
if(cljs.core.chunked_seq_QMARK_(seq__15184_15216__$1)){
var c__8003__auto___15217 = cljs.core.chunk_first(seq__15184_15216__$1);
var G__15218 = cljs.core.chunk_rest(seq__15184_15216__$1);
var G__15219 = c__8003__auto___15217;
var G__15220 = cljs.core.count(c__8003__auto___15217);
var G__15221 = (0);
seq__15184_15204 = G__15218;
chunk__15185_15205 = G__15219;
count__15186_15206 = G__15220;
i__15187_15207 = G__15221;
continue;
} else {
var vec__15191_15222 = cljs.core.first(seq__15184_15216__$1);
var i_15223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191_15222,(0),null);
var c_15224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15191_15222,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15223,index)){
} else {
snake_slides.slide02.draw_cell_BANG_(ctx,c_15224,is_piece,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15223,index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_15223,(0)));
}

var G__15225 = cljs.core.next(seq__15184_15216__$1);
var G__15226 = null;
var G__15227 = (0);
var G__15228 = (0);
seq__15184_15204 = G__15225;
chunk__15185_15205 = G__15226;
count__15186_15206 = G__15227;
i__15187_15207 = G__15228;
continue;
}
} else {
}
}
break;
}

var seq__15194 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,snake_slides.slide02.piece_abs_coords(piece)));
var chunk__15195 = null;
var count__15196 = (0);
var i__15197 = (0);
while(true){
if((i__15197 < count__15196)){
var vec__15198 = chunk__15195.cljs$core$IIndexed$_nth$arity$2(null,i__15197);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15198,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index)){
snake_slides.slide02.draw_cell_BANG_(ctx,c,is_piece,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));
} else {
}

var G__15229 = seq__15194;
var G__15230 = chunk__15195;
var G__15231 = count__15196;
var G__15232 = (i__15197 + (1));
seq__15194 = G__15229;
chunk__15195 = G__15230;
count__15196 = G__15231;
i__15197 = G__15232;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15194);
if(temp__4657__auto__){
var seq__15194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15194__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__15194__$1);
var G__15233 = cljs.core.chunk_rest(seq__15194__$1);
var G__15234 = c__8003__auto__;
var G__15235 = cljs.core.count(c__8003__auto__);
var G__15236 = (0);
seq__15194 = G__15233;
chunk__15195 = G__15234;
count__15196 = G__15235;
i__15197 = G__15236;
continue;
} else {
var vec__15201 = cljs.core.first(seq__15194__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15201,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index)){
snake_slides.slide02.draw_cell_BANG_(ctx,c,is_piece,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));
} else {
}

var G__15237 = cljs.core.next(seq__15194__$1);
var G__15238 = null;
var G__15239 = (0);
var G__15240 = (0);
seq__15194 = G__15237;
chunk__15195 = G__15238;
count__15196 = G__15239;
i__15197 = G__15240;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.slide02.draw_food_BANG_ = (function snake_slides$slide02$draw_food_BANG_(ctx,p__15241){
var vec__15245 = p__15241;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15245,(1),null);
ctx.fillStyle = snake_slides.slide02.dark_red;

ctx.strokeStyle = snake_slides.slide02.light_red;

return snake_slides.slide02.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false,false,false);
});
snake_slides.slide02.draw_snake_BANG_ = (function snake_slides$slide02$draw_snake_BANG_(ctx,p__15248){
var vec__15252 = p__15248;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15252,(1),null);
ctx.fillStyle = snake_slides.slide02.dark_purple;

ctx.strokeStyle = snake_slides.slide02.light_purple;

return snake_slides.slide02.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false,false,false);
});
snake_slides.slide02.draw_board_BANG_ = (function snake_slides$slide02$draw_board_BANG_(ctx,p__15255){
var vec__15259 = p__15255;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15259,(1),null);
ctx.fillStyle = "#222";

ctx.strokeStyle = "#888";

return snake_slides.slide02.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false,false,false);
});
snake_slides.slide02.draw_canvas_BANG_ = (function snake_slides$slide02$draw_canvas_BANG_(canvas){
var ctx = canvas.getContext("2d");
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.app) : cljs.core.deref.call(null,snake_slides.slide02.app)));
ctx.fillStyle = "#222";

ctx.fillRect((0),(0),(snake_slides.slide02.cell_size * snake_slides.slide02.cols),(snake_slides.slide02.cell_size * snake_slides.slide02.rows));

var seq__15294_15326 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__15299_15327 = null;
var count__15300_15328 = (0);
var i__15301_15329 = (0);
while(true){
if((i__15301_15329 < count__15300_15328)){
var y_15330 = chunk__15299_15327.cljs$core$IIndexed$_nth$arity$2(null,i__15301_15329);
var seq__15302_15331 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.cols));
var chunk__15303_15332 = null;
var count__15304_15333 = (0);
var i__15305_15334 = (0);
while(true){
if((i__15305_15334 < count__15304_15333)){
var x_15335 = chunk__15303_15332.cljs$core$IIndexed$_nth$arity$2(null,i__15305_15334);
var v_15336 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_15330,x_15335], null));
var vec__15306_15337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15335,((5) + y_15330)], null);
var x1_15338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15306_15337,(0),null);
var y1_15339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15306_15337,(1),null);
var G__15309_15340 = v_15336;
switch (G__15309_15340) {
case (0):
snake_slides.slide02.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15338,y1_15339], null));

break;
case (1):
snake_slides.slide02.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15338,y1_15339], null));

break;
case (2):
snake_slides.slide02.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15338,y1_15339], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__15342 = seq__15302_15331;
var G__15343 = chunk__15303_15332;
var G__15344 = count__15304_15333;
var G__15345 = (i__15305_15334 + (1));
seq__15302_15331 = G__15342;
chunk__15303_15332 = G__15343;
count__15304_15333 = G__15344;
i__15305_15334 = G__15345;
continue;
} else {
var temp__4657__auto___15346 = cljs.core.seq(seq__15302_15331);
if(temp__4657__auto___15346){
var seq__15302_15347__$1 = temp__4657__auto___15346;
if(cljs.core.chunked_seq_QMARK_(seq__15302_15347__$1)){
var c__8003__auto___15348 = cljs.core.chunk_first(seq__15302_15347__$1);
var G__15349 = cljs.core.chunk_rest(seq__15302_15347__$1);
var G__15350 = c__8003__auto___15348;
var G__15351 = cljs.core.count(c__8003__auto___15348);
var G__15352 = (0);
seq__15302_15331 = G__15349;
chunk__15303_15332 = G__15350;
count__15304_15333 = G__15351;
i__15305_15334 = G__15352;
continue;
} else {
var x_15353 = cljs.core.first(seq__15302_15347__$1);
var v_15354 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_15330,x_15353], null));
var vec__15310_15355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15353,((5) + y_15330)], null);
var x1_15356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310_15355,(0),null);
var y1_15357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310_15355,(1),null);
var G__15313_15358 = v_15354;
switch (G__15313_15358) {
case (0):
snake_slides.slide02.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15356,y1_15357], null));

break;
case (1):
snake_slides.slide02.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15356,y1_15357], null));

break;
case (2):
snake_slides.slide02.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15356,y1_15357], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__15360 = cljs.core.next(seq__15302_15347__$1);
var G__15361 = null;
var G__15362 = (0);
var G__15363 = (0);
seq__15302_15331 = G__15360;
chunk__15303_15332 = G__15361;
count__15304_15333 = G__15362;
i__15305_15334 = G__15363;
continue;
}
} else {
}
}
break;
}

var G__15364 = seq__15294_15326;
var G__15365 = chunk__15299_15327;
var G__15366 = count__15300_15328;
var G__15367 = (i__15301_15329 + (1));
seq__15294_15326 = G__15364;
chunk__15299_15327 = G__15365;
count__15300_15328 = G__15366;
i__15301_15329 = G__15367;
continue;
} else {
var temp__4657__auto___15368 = cljs.core.seq(seq__15294_15326);
if(temp__4657__auto___15368){
var seq__15294_15369__$1 = temp__4657__auto___15368;
if(cljs.core.chunked_seq_QMARK_(seq__15294_15369__$1)){
var c__8003__auto___15370 = cljs.core.chunk_first(seq__15294_15369__$1);
var G__15371 = cljs.core.chunk_rest(seq__15294_15369__$1);
var G__15372 = c__8003__auto___15370;
var G__15373 = cljs.core.count(c__8003__auto___15370);
var G__15374 = (0);
seq__15294_15326 = G__15371;
chunk__15299_15327 = G__15372;
count__15300_15328 = G__15373;
i__15301_15329 = G__15374;
continue;
} else {
var y_15375 = cljs.core.first(seq__15294_15369__$1);
var seq__15295_15376 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide02.cols));
var chunk__15296_15377 = null;
var count__15297_15378 = (0);
var i__15298_15379 = (0);
while(true){
if((i__15298_15379 < count__15297_15378)){
var x_15380 = chunk__15296_15377.cljs$core$IIndexed$_nth$arity$2(null,i__15298_15379);
var v_15381 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_15375,x_15380], null));
var vec__15314_15382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15380,((5) + y_15375)], null);
var x1_15383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314_15382,(0),null);
var y1_15384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15314_15382,(1),null);
var G__15317_15385 = v_15381;
switch (G__15317_15385) {
case (0):
snake_slides.slide02.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15383,y1_15384], null));

break;
case (1):
snake_slides.slide02.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15383,y1_15384], null));

break;
case (2):
snake_slides.slide02.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15383,y1_15384], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__15387 = seq__15295_15376;
var G__15388 = chunk__15296_15377;
var G__15389 = count__15297_15378;
var G__15390 = (i__15298_15379 + (1));
seq__15295_15376 = G__15387;
chunk__15296_15377 = G__15388;
count__15297_15378 = G__15389;
i__15298_15379 = G__15390;
continue;
} else {
var temp__4657__auto___15391__$1 = cljs.core.seq(seq__15295_15376);
if(temp__4657__auto___15391__$1){
var seq__15295_15392__$1 = temp__4657__auto___15391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15295_15392__$1)){
var c__8003__auto___15393 = cljs.core.chunk_first(seq__15295_15392__$1);
var G__15394 = cljs.core.chunk_rest(seq__15295_15392__$1);
var G__15395 = c__8003__auto___15393;
var G__15396 = cljs.core.count(c__8003__auto___15393);
var G__15397 = (0);
seq__15295_15376 = G__15394;
chunk__15296_15377 = G__15395;
count__15297_15378 = G__15396;
i__15298_15379 = G__15397;
continue;
} else {
var x_15398 = cljs.core.first(seq__15295_15392__$1);
var v_15399 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_15375,x_15398], null));
var vec__15318_15400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_15398,((5) + y_15375)], null);
var x1_15401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318_15400,(0),null);
var y1_15402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318_15400,(1),null);
var G__15321_15403 = v_15399;
switch (G__15321_15403) {
case (0):
snake_slides.slide02.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15401,y1_15402], null));

break;
case (1):
snake_slides.slide02.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15401,y1_15402], null));

break;
case (2):
snake_slides.slide02.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_15401,y1_15402], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__15405 = cljs.core.next(seq__15295_15392__$1);
var G__15406 = null;
var G__15407 = (0);
var G__15408 = (0);
seq__15295_15376 = G__15405;
chunk__15296_15377 = G__15406;
count__15297_15378 = G__15407;
i__15298_15379 = G__15408;
continue;
}
} else {
}
}
break;
}

var G__15409 = cljs.core.next(seq__15294_15369__$1);
var G__15410 = null;
var G__15411 = (0);
var G__15412 = (0);
seq__15294_15326 = G__15409;
chunk__15299_15327 = G__15410;
count__15300_15328 = G__15411;
i__15301_15329 = G__15412;
continue;
}
} else {
}
}
break;
}

var seq__15322 = cljs.core.seq(snake_slides.slide02.piece_keys);
var chunk__15323 = null;
var count__15324 = (0);
var i__15325 = (0);
while(true){
if((i__15325 < count__15324)){
var p = chunk__15323.cljs$core$IIndexed$_nth$arity$2(null,i__15325);
snake_slides.slide02.draw_piece_BANG_(ctx,p);

var G__15413 = seq__15322;
var G__15414 = chunk__15323;
var G__15415 = count__15324;
var G__15416 = (i__15325 + (1));
seq__15322 = G__15413;
chunk__15323 = G__15414;
count__15324 = G__15415;
i__15325 = G__15416;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15322);
if(temp__4657__auto__){
var seq__15322__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15322__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__15322__$1);
var G__15417 = cljs.core.chunk_rest(seq__15322__$1);
var G__15418 = c__8003__auto__;
var G__15419 = cljs.core.count(c__8003__auto__);
var G__15420 = (0);
seq__15322 = G__15417;
chunk__15323 = G__15418;
count__15324 = G__15419;
i__15325 = G__15420;
continue;
} else {
var p = cljs.core.first(seq__15322__$1);
snake_slides.slide02.draw_piece_BANG_(ctx,p);

var G__15421 = cljs.core.next(seq__15322__$1);
var G__15422 = null;
var G__15423 = (0);
var G__15424 = (0);
seq__15322 = G__15421;
chunk__15323 = G__15422;
count__15324 = G__15423;
i__15325 = G__15424;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.slide02.canvas_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide02.global_canvas = canvas;

canvas.width = (snake_slides.slide02.cols * snake_slides.slide02.cell_size);

canvas.height = (snake_slides.slide02.rows * snake_slides.slide02.cell_size);

snake_slides.slide02.draw_canvas_BANG_(canvas);

return state;
}),cljs.core.cst$kw$did_DASH_update,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide02.draw_canvas_BANG_(canvas);

return state;
})], null);
snake_slides.slide02.canvas = rum.core.build_defc((function (){
var G__15425 = "div";
var G__15426 = ({"className": "canvas-2a4d7"});
var G__15427 = (function (){var G__15428 = "canvas";
var G__15429 = ({"ref": "canvas", "style": ({"position": "relative"}), "onMouseMove": snake_slides.slide02.canvas_mouse});
return React.createElement(G__15428,G__15429);
})();
return React.createElement(G__15425,G__15426,G__15427);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide02.canvas_mixin], null),"canvas");
snake_slides.slide02.slide = rum.core.build_defc((function (){
var G__15432 = "div";
var G__15433 = null;
var G__15434 = React.createElement("h1",null,"2. Create the Snake.");
var G__15435 = sablono.interpreter.interpret((snake_slides.slide02.code.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide02.code.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide02.code.call(null)));
var G__15436 = sablono.interpreter.interpret((snake_slides.slide02.canvas.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide02.canvas.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide02.canvas.call(null)));
return React.createElement(G__15432,G__15433,G__15434,G__15435,G__15436);
}),null,"slide");
snake_slides.slide02.render = (function snake_slides$slide02$render(){
return rum.core.mount((snake_slides.slide02.slide.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide02.slide.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide02.slide.call(null)),snake_slides.slide02.slide_elm);
});
snake_slides.slide02.init = (function snake_slides$slide02$init(id){
snake_slides.slide02.slide_elm = document.getElementById(id);

snake_slides.slide02.render();

return cljs.core.add_watch(snake_slides.slide02.app,cljs.core.cst$kw$render,snake_slides.slide02.render);
});
snake_slides.slide02.resume = (function snake_slides$slide02$resume(){
return null;
});
snake_slides.slide02.stop = (function snake_slides$slide02$stop(){
return null;
});
