// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.slide01');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('snake_slides.syntax_highlight');
snake_slides.slide01.dark_green = "#143";
snake_slides.slide01.light_green = "#175";
snake_slides.slide01.dark_purple = "#449";
snake_slides.slide01.light_purple = "#6ad";
snake_slides.slide01.dark_red = "#944";
snake_slides.slide01.light_red = "#f8c";
snake_slides.slide01.app = (function (){var G__16146 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$row,null,cljs.core.cst$kw$col,null,cljs.core.cst$kw$board,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16146) : cljs.core.atom.call(null,G__16146));
})();
snake_slides.slide01.rows = (20);
snake_slides.slide01.cols = (10);
snake_slides.slide01.empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide01.cols,(0)));
snake_slides.slide01.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide01.rows,snake_slides.slide01.empty_row));
snake_slides.slide01.data_row = (function snake_slides$slide01$data_row(row){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("row"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app)))))?"active-row-534ed":""),cljs.core.cst$kw$onMouseEnter,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$row,row);
}),cljs.core.cst$kw$onMouseLeave,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$row,null);
})], null),"[",(function (){var iter__7972__auto__ = (function snake_slides$slide01$data_row_$_iter__16153(s__16154){
return (new cljs.core.LazySeq(null,(function (){
var s__16154__$1 = s__16154;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16154__$1);
if(temp__4657__auto__){
var s__16154__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16154__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__16154__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__16156 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__16155 = (0);
while(true){
if((i__16155 < size__7971__auto__)){
var col = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__16155);
cljs.core.chunk_append(b__16156,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("row"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (i__16155,col,c__7970__auto__,size__7971__auto__,b__16156,s__16154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,col);
});})(i__16155,col,c__7970__auto__,size__7971__auto__,b__16156,s__16154__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (i__16155,col,c__7970__auto__,size__7971__auto__,b__16156,s__16154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,null);
});})(i__16155,col,c__7970__auto__,size__7971__auto__,b__16156,s__16154__$2,temp__4657__auto__))
], null),cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake_slides.slide01.empty_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8026__auto__);
})()," ")], null));

var G__16159 = (i__16155 + (1));
i__16155 = G__16159;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16156),snake_slides$slide01$data_row_$_iter__16153(cljs.core.chunk_rest(s__16154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16156),null);
}
} else {
var col = cljs.core.first(s__16154__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("row"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row),cljs.core.str.cljs$core$IFn$_invoke$arity$1("col"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''),cljs.core.cst$kw$class,(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app))))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app))))))?"active-col-d9099":null),cljs.core.cst$kw$onMouseEnter,((function (col,s__16154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,col);
});})(col,s__16154__$2,temp__4657__auto__))
,cljs.core.cst$kw$onMouseLeave,((function (col,s__16154__$2,temp__4657__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,null);
});})(col,s__16154__$2,temp__4657__auto__))
], null),cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(snake_slides.slide01.empty_board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null))], 0));
return cljs.core._conj(cljs.core.List.EMPTY,x__8026__auto__);
})()," ")], null),snake_slides$slide01$data_row_$_iter__16153(cljs.core.rest(s__16154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7972__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.cols));
})()," ]"], null);
});
snake_slides.slide01.code = rum.core.build_defc((function (){
var G__16160 = "div";
var G__16161 = ({"className": "code-cb62a"});
var G__16162 = (function (){var G__16163 = "pre";
var G__16164 = null;
var G__16165 = (function (){var G__16167 = "code";
var G__16168 = ({"id": "lang-clj"});
var G__16169 = "(";
var G__16170 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)));
var G__16171 = " rows ";
var G__16172 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["10"], 0)));
var G__16173 = ")\n";
var G__16174 = "(";
var G__16175 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)));
var G__16176 = " cols ";
var G__16177 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["10"], 0)));
var G__16178 = ")\n";
var G__16179 = "(";
var G__16180 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)));
var G__16181 = " empty-row (";
var G__16182 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["vec"], 0)));
var G__16183 = " (";
var G__16184 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["repeat"], 0)));
var G__16185 = " cols ";
var G__16186 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["0"], 0)));
var G__16187 = ")))\n";
var G__16188 = "(";
var G__16189 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)));
var G__16190 = " empty-board (";
var G__16191 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["vec"], 0)));
var G__16192 = " (";
var G__16193 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["repeat"], 0)));
var G__16194 = " rows empty-row)))\n";
return React.createElement(G__16167,G__16168,G__16169,G__16170,G__16171,G__16172,G__16173,G__16174,G__16175,G__16176,G__16177,G__16178,G__16179,G__16180,G__16181,G__16182,G__16183,G__16184,G__16185,G__16186,G__16187,G__16188,G__16189,G__16190,G__16191,G__16192,G__16193,G__16194);
})();
var G__16166 = (function (){var G__16195 = "code";
var G__16196 = null;
var G__16197 = "> empty-board\n\n";
var G__16198 = "\n";
var G__16199 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; TRY IT: mouse over the zeros."], 0)));
var G__16200 = "\n";
var G__16201 = "\n";
var G__16202 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7972__auto__ = ((function (G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16163,G__16164,G__16165,G__16160,G__16161){
return (function snake_slides$slide01$iter__16203(s__16204){
return (new cljs.core.LazySeq(null,((function (G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16163,G__16164,G__16165,G__16160,G__16161){
return (function (){
var s__16204__$1 = s__16204;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__16204__$1);
if(temp__4657__auto__){
var s__16204__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16204__$2)){
var c__7970__auto__ = cljs.core.chunk_first(s__16204__$2);
var size__7971__auto__ = cljs.core.count(c__7970__auto__);
var b__16206 = cljs.core.chunk_buffer(size__7971__auto__);
if((function (){var i__16205 = (0);
while(true){
if((i__16205 < size__7971__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7970__auto__,i__16205);
cljs.core.chunk_append(b__16206,sablono.interpreter.interpret((function (){var pred__16219 = cljs.core._EQ_;
var expr__16220 = row;
if(cljs.core.truth_((pred__16219.cljs$core$IFn$_invoke$arity$2 ? pred__16219.cljs$core$IFn$_invoke$arity$2((0),expr__16220) : pred__16219.call(null,(0),expr__16220)))){
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"\n"),x__8026__auto__);
})(),"  [");
} else {
if(cljs.core.truth_((function (){var G__16222 = (snake_slides.slide01.rows - (1));
var G__16223 = expr__16220;
return (pred__16219.cljs$core$IFn$_invoke$arity$2 ? pred__16219.cljs$core$IFn$_invoke$arity$2(G__16222,G__16223) : pred__16219.call(null,G__16222,G__16223));
})())){
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"]\n"),x__8026__auto__);
})(),"   ");
} else {
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"\n"),x__8026__auto__);
})(),"   ");
}
}
})()));

var G__16229 = (i__16205 + (1));
i__16205 = G__16229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16206),snake_slides$slide01$iter__16203(cljs.core.chunk_rest(s__16204__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16206),null);
}
} else {
var row = cljs.core.first(s__16204__$2);
return cljs.core.cons(sablono.interpreter.interpret((function (){var pred__16224 = cljs.core._EQ_;
var expr__16225 = row;
if(cljs.core.truth_((pred__16224.cljs$core$IFn$_invoke$arity$2 ? pred__16224.cljs$core$IFn$_invoke$arity$2((0),expr__16225) : pred__16224.call(null,(0),expr__16225)))){
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"\n"),x__8026__auto__);
})(),"  [");
} else {
if(cljs.core.truth_((function (){var G__16227 = (snake_slides.slide01.rows - (1));
var G__16228 = expr__16225;
return (pred__16224.cljs$core$IFn$_invoke$arity$2 ? pred__16224.cljs$core$IFn$_invoke$arity$2(G__16227,G__16228) : pred__16224.call(null,G__16227,G__16228));
})())){
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"]\n"),x__8026__auto__);
})(),"   ");
} else {
return cljs.core._conj((function (){var x__8026__auto__ = snake_slides.slide01.data_row(row);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"\n"),x__8026__auto__);
})(),"   ");
}
}
})()),snake_slides$slide01$iter__16203(cljs.core.rest(s__16204__$2)));
}
} else {
return null;
}
break;
}
});})(G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16163,G__16164,G__16165,G__16160,G__16161))
,null,null));
});})(G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16163,G__16164,G__16165,G__16160,G__16161))
;
return iter__7972__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})());
return React.createElement(G__16195,G__16196,G__16197,G__16198,G__16199,G__16200,G__16201,G__16202);
})();
return React.createElement(G__16163,G__16164,G__16165,G__16166);
})();
return React.createElement(G__16160,G__16161,G__16162);
}),null,"code");
snake_slides.slide01.cell_size = cljs.core.quot((600),snake_slides.slide01.rows);
snake_slides.slide01.canvas_mouse = (function snake_slides$slide01$canvas_mouse(e){
var canvas = snake_slides.slide01.global_canvas;
var rect = canvas.getBoundingClientRect();
var x = (e.clientX - rect.left);
var y = (e.clientY - rect.top);
var col = cljs.core.quot(x,snake_slides.slide01.cell_size);
var row = cljs.core.quot(y,snake_slides.slide01.cell_size);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$row,row);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,col);
});
snake_slides.slide01.draw_cell_BANG_ = (function snake_slides$slide01$draw_cell_BANG_(ctx,p__16230){
var vec__16234 = p__16230;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16234,(1),null);
var rx = (snake_slides.slide01.cell_size * x);
var ry = (snake_slides.slide01.cell_size * y);
var rs = snake_slides.slide01.cell_size;
ctx.fillRect(rx,ry,rs,rs);

return ctx.strokeRect(rx,ry,rs,rs);
});
snake_slides.slide01.draw_food_BANG_ = (function snake_slides$slide01$draw_food_BANG_(ctx,p__16237){
var vec__16241 = p__16237;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16241,(1),null);
ctx.fillStyle = snake_slides.slide01.dark_red;

ctx.strokeStyle = snake_slides.slide01.light_red;

return snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
snake_slides.slide01.draw_snake_BANG_ = (function snake_slides$slide01$draw_snake_BANG_(ctx,p__16244){
var vec__16248 = p__16244;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16248,(1),null);
ctx.fillStyle = snake_slides.slide01.dark_purple;

ctx.strokeStyle = snake_slides.slide01.light_purple;

return snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
snake_slides.slide01.draw_board_BANG_ = (function snake_slides$slide01$draw_board_BANG_(ctx,p__16251){
var vec__16255 = p__16251;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16255,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16255,(1),null);
ctx.fillStyle = "#222";

ctx.strokeStyle = "#888";

return snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
snake_slides.slide01.draw_canvas_BANG_ = (function snake_slides$slide01$draw_canvas_BANG_(canvas){
var ctx = canvas.getContext("2d");
var x = cljs.core.cst$kw$col.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app)));
var y = cljs.core.cst$kw$row.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app)));
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.app) : cljs.core.deref.call(null,snake_slides.slide01.app)));
ctx.fillStyle = "#222";

ctx.fillRect((0),(0),(snake_slides.slide01.cell_size * snake_slides.slide01.cols),(snake_slides.slide01.cell_size * snake_slides.slide01.rows));

var seq__16292_16326 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__16297_16327 = null;
var count__16298_16328 = (0);
var i__16299_16329 = (0);
while(true){
if((i__16299_16329 < count__16298_16328)){
var y_16330__$1 = chunk__16297_16327.cljs$core$IIndexed$_nth$arity$2(null,i__16299_16329);
var seq__16300_16331 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.cols));
var chunk__16301_16332 = null;
var count__16302_16333 = (0);
var i__16303_16334 = (0);
while(true){
if((i__16303_16334 < count__16302_16333)){
var x_16335__$1 = chunk__16301_16332.cljs$core$IIndexed$_nth$arity$2(null,i__16303_16334);
var v_16336 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_16330__$1,x_16335__$1], null));
var vec__16304_16337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16335__$1,((5) + y_16330__$1)], null);
var x1_16338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16304_16337,(0),null);
var y1_16339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16304_16337,(1),null);
var G__16307_16340 = v_16336;
switch (G__16307_16340) {
case (0):
snake_slides.slide01.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16338,y1_16339], null));

break;
case (1):
snake_slides.slide01.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16338,y1_16339], null));

break;
case (2):
snake_slides.slide01.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16338,y1_16339], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16342 = seq__16300_16331;
var G__16343 = chunk__16301_16332;
var G__16344 = count__16302_16333;
var G__16345 = (i__16303_16334 + (1));
seq__16300_16331 = G__16342;
chunk__16301_16332 = G__16343;
count__16302_16333 = G__16344;
i__16303_16334 = G__16345;
continue;
} else {
var temp__4657__auto___16346 = cljs.core.seq(seq__16300_16331);
if(temp__4657__auto___16346){
var seq__16300_16347__$1 = temp__4657__auto___16346;
if(cljs.core.chunked_seq_QMARK_(seq__16300_16347__$1)){
var c__8003__auto___16348 = cljs.core.chunk_first(seq__16300_16347__$1);
var G__16349 = cljs.core.chunk_rest(seq__16300_16347__$1);
var G__16350 = c__8003__auto___16348;
var G__16351 = cljs.core.count(c__8003__auto___16348);
var G__16352 = (0);
seq__16300_16331 = G__16349;
chunk__16301_16332 = G__16350;
count__16302_16333 = G__16351;
i__16303_16334 = G__16352;
continue;
} else {
var x_16353__$1 = cljs.core.first(seq__16300_16347__$1);
var v_16354 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_16330__$1,x_16353__$1], null));
var vec__16308_16355 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16353__$1,((5) + y_16330__$1)], null);
var x1_16356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16308_16355,(0),null);
var y1_16357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16308_16355,(1),null);
var G__16311_16358 = v_16354;
switch (G__16311_16358) {
case (0):
snake_slides.slide01.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16356,y1_16357], null));

break;
case (1):
snake_slides.slide01.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16356,y1_16357], null));

break;
case (2):
snake_slides.slide01.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16356,y1_16357], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16360 = cljs.core.next(seq__16300_16347__$1);
var G__16361 = null;
var G__16362 = (0);
var G__16363 = (0);
seq__16300_16331 = G__16360;
chunk__16301_16332 = G__16361;
count__16302_16333 = G__16362;
i__16303_16334 = G__16363;
continue;
}
} else {
}
}
break;
}

var G__16364 = seq__16292_16326;
var G__16365 = chunk__16297_16327;
var G__16366 = count__16298_16328;
var G__16367 = (i__16299_16329 + (1));
seq__16292_16326 = G__16364;
chunk__16297_16327 = G__16365;
count__16298_16328 = G__16366;
i__16299_16329 = G__16367;
continue;
} else {
var temp__4657__auto___16368 = cljs.core.seq(seq__16292_16326);
if(temp__4657__auto___16368){
var seq__16292_16369__$1 = temp__4657__auto___16368;
if(cljs.core.chunked_seq_QMARK_(seq__16292_16369__$1)){
var c__8003__auto___16370 = cljs.core.chunk_first(seq__16292_16369__$1);
var G__16371 = cljs.core.chunk_rest(seq__16292_16369__$1);
var G__16372 = c__8003__auto___16370;
var G__16373 = cljs.core.count(c__8003__auto___16370);
var G__16374 = (0);
seq__16292_16326 = G__16371;
chunk__16297_16327 = G__16372;
count__16298_16328 = G__16373;
i__16299_16329 = G__16374;
continue;
} else {
var y_16375__$1 = cljs.core.first(seq__16292_16369__$1);
var seq__16293_16376 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.cols));
var chunk__16294_16377 = null;
var count__16295_16378 = (0);
var i__16296_16379 = (0);
while(true){
if((i__16296_16379 < count__16295_16378)){
var x_16380__$1 = chunk__16294_16377.cljs$core$IIndexed$_nth$arity$2(null,i__16296_16379);
var v_16381 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_16375__$1,x_16380__$1], null));
var vec__16312_16382 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16380__$1,((5) + y_16375__$1)], null);
var x1_16383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16312_16382,(0),null);
var y1_16384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16312_16382,(1),null);
var G__16315_16385 = v_16381;
switch (G__16315_16385) {
case (0):
snake_slides.slide01.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16383,y1_16384], null));

break;
case (1):
snake_slides.slide01.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16383,y1_16384], null));

break;
case (2):
snake_slides.slide01.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16383,y1_16384], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16387 = seq__16293_16376;
var G__16388 = chunk__16294_16377;
var G__16389 = count__16295_16378;
var G__16390 = (i__16296_16379 + (1));
seq__16293_16376 = G__16387;
chunk__16294_16377 = G__16388;
count__16295_16378 = G__16389;
i__16296_16379 = G__16390;
continue;
} else {
var temp__4657__auto___16391__$1 = cljs.core.seq(seq__16293_16376);
if(temp__4657__auto___16391__$1){
var seq__16293_16392__$1 = temp__4657__auto___16391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16293_16392__$1)){
var c__8003__auto___16393 = cljs.core.chunk_first(seq__16293_16392__$1);
var G__16394 = cljs.core.chunk_rest(seq__16293_16392__$1);
var G__16395 = c__8003__auto___16393;
var G__16396 = cljs.core.count(c__8003__auto___16393);
var G__16397 = (0);
seq__16293_16376 = G__16394;
chunk__16294_16377 = G__16395;
count__16295_16378 = G__16396;
i__16296_16379 = G__16397;
continue;
} else {
var x_16398__$1 = cljs.core.first(seq__16293_16392__$1);
var v_16399 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_16375__$1,x_16398__$1], null));
var vec__16316_16400 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16398__$1,((5) + y_16375__$1)], null);
var x1_16401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16316_16400,(0),null);
var y1_16402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16316_16400,(1),null);
var G__16319_16403 = v_16399;
switch (G__16319_16403) {
case (0):
snake_slides.slide01.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16401,y1_16402], null));

break;
case (1):
snake_slides.slide01.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16401,y1_16402], null));

break;
case (2):
snake_slides.slide01.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16401,y1_16402], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16405 = cljs.core.next(seq__16293_16392__$1);
var G__16406 = null;
var G__16407 = (0);
var G__16408 = (0);
seq__16293_16376 = G__16405;
chunk__16294_16377 = G__16406;
count__16295_16378 = G__16407;
i__16296_16379 = G__16408;
continue;
}
} else {
}
}
break;
}

var G__16409 = cljs.core.next(seq__16292_16369__$1);
var G__16410 = null;
var G__16411 = (0);
var G__16412 = (0);
seq__16292_16326 = G__16409;
chunk__16297_16327 = G__16410;
count__16298_16328 = G__16411;
i__16299_16329 = G__16412;
continue;
}
} else {
}
}
break;
}

ctx.lineWidth = (2);

if(cljs.core.truth_(y)){
ctx.fillStyle = snake_slides.slide01.dark_green;

ctx.strokeStyle = snake_slides.slide01.light_green;

var seq__16320_16413 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide01.cols));
var chunk__16322_16414 = null;
var count__16323_16415 = (0);
var i__16324_16416 = (0);
while(true){
if((i__16324_16416 < count__16323_16415)){
var x0_16417 = chunk__16322_16414.cljs$core$IIndexed$_nth$arity$2(null,i__16324_16416);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x0_16417,x)){
snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0_16417,((5) + y)], null));

var G__16418 = seq__16320_16413;
var G__16419 = chunk__16322_16414;
var G__16420 = count__16323_16415;
var G__16421 = (i__16324_16416 + (1));
seq__16320_16413 = G__16418;
chunk__16322_16414 = G__16419;
count__16323_16415 = G__16420;
i__16324_16416 = G__16421;
continue;
} else {
var G__16422 = seq__16320_16413;
var G__16423 = chunk__16322_16414;
var G__16424 = count__16323_16415;
var G__16425 = (i__16324_16416 + (1));
seq__16320_16413 = G__16422;
chunk__16322_16414 = G__16423;
count__16323_16415 = G__16424;
i__16324_16416 = G__16425;
continue;
}
} else {
var temp__4657__auto___16426 = cljs.core.seq(seq__16320_16413);
if(temp__4657__auto___16426){
var seq__16320_16427__$1 = temp__4657__auto___16426;
if(cljs.core.chunked_seq_QMARK_(seq__16320_16427__$1)){
var c__8003__auto___16428 = cljs.core.chunk_first(seq__16320_16427__$1);
var G__16429 = cljs.core.chunk_rest(seq__16320_16427__$1);
var G__16430 = c__8003__auto___16428;
var G__16431 = cljs.core.count(c__8003__auto___16428);
var G__16432 = (0);
seq__16320_16413 = G__16429;
chunk__16322_16414 = G__16430;
count__16323_16415 = G__16431;
i__16324_16416 = G__16432;
continue;
} else {
var x0_16433 = cljs.core.first(seq__16320_16427__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x0_16433,x)){
snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x0_16433,((5) + y)], null));

var G__16434 = cljs.core.next(seq__16320_16427__$1);
var G__16435 = null;
var G__16436 = (0);
var G__16437 = (0);
seq__16320_16413 = G__16434;
chunk__16322_16414 = G__16435;
count__16323_16415 = G__16436;
i__16324_16416 = G__16437;
continue;
} else {
var G__16438 = cljs.core.next(seq__16320_16427__$1);
var G__16439 = null;
var G__16440 = (0);
var G__16441 = (0);
seq__16320_16413 = G__16438;
chunk__16322_16414 = G__16439;
count__16323_16415 = G__16440;
i__16324_16416 = G__16441;
continue;
}
}
} else {
}
}
break;
}

ctx.fillStyle = snake_slides.slide01.dark_purple;

ctx.strokeStyle = snake_slides.slide01.light_purple;

if(cljs.core.truth_(x)){
return snake_slides.slide01.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,((5) + y)], null));
} else {
return null;
}
} else {
return null;
}
});
snake_slides.slide01.canvas_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide01.global_canvas = canvas;

canvas.width = (snake_slides.slide01.cols * snake_slides.slide01.cell_size);

canvas.height = (snake_slides.slide01.rows * snake_slides.slide01.cell_size);

snake_slides.slide01.draw_canvas_BANG_(canvas);

return state;
}),cljs.core.cst$kw$did_DASH_update,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide01.draw_canvas_BANG_(canvas);

return state;
})], null);
snake_slides.slide01.canvas = rum.core.build_defc((function (){
var G__16442 = "div";
var G__16443 = ({"className": "canvas-2a4d7"});
var G__16444 = (function (){var G__16445 = "canvas";
var G__16446 = ({"ref": "canvas", "style": ({"position": "relative"}), "onMouseMove": snake_slides.slide01.canvas_mouse, "onMouseLeave": ((function (G__16445,G__16442,G__16443){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$row,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(snake_slides.slide01.app,cljs.core.assoc,cljs.core.cst$kw$col,null);
});})(G__16445,G__16442,G__16443))
});
return React.createElement(G__16445,G__16446);
})();
return React.createElement(G__16442,G__16443,G__16444);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide01.canvas_mixin], null),"canvas");
snake_slides.slide01.slide = rum.core.build_defc((function (){
var G__16449 = "div";
var G__16450 = null;
var G__16451 = React.createElement("h1",null,"1. Create the board.");
var G__16452 = sablono.interpreter.interpret((snake_slides.slide01.code.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide01.code.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide01.code.call(null)));
var G__16453 = sablono.interpreter.interpret((snake_slides.slide01.canvas.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide01.canvas.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide01.canvas.call(null)));
return React.createElement(G__16449,G__16450,G__16451,G__16452,G__16453);
}),null,"slide");
snake_slides.slide01.render = (function snake_slides$slide01$render(){
return rum.core.mount((snake_slides.slide01.slide.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide01.slide.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide01.slide.call(null)),snake_slides.slide01.slide_elm);
});
snake_slides.slide01.init = (function snake_slides$slide01$init(id){
snake_slides.slide01.slide_elm = document.getElementById(id);

snake_slides.slide01.render();

return cljs.core.add_watch(snake_slides.slide01.app,cljs.core.cst$kw$render,snake_slides.slide01.render);
});
snake_slides.slide01.resume = (function snake_slides$slide01$resume(){
return null;
});
snake_slides.slide01.stop = (function snake_slides$slide01$stop(){
return null;
});
