// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.slide00');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('snake_slides.syntax_highlight');
snake_slides.slide00.dark_green = "#143";
snake_slides.slide00.light_green = "#175";
snake_slides.slide00.dark_purple = "#449";
snake_slides.slide00.light_purple = "#6ad";
snake_slides.slide00.dark_red = "#944";
snake_slides.slide00.light_red = "#f8c";
snake_slides.slide00.rows = (20);
snake_slides.slide00.cols = (10);
snake_slides.slide00.empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide00.cols,(0)));
snake_slides.slide00.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide00.rows,snake_slides.slide00.empty_row));
snake_slides.slide00.initial_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(6)], null);
snake_slides.slide00.app = (function (){var G__15960 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$board,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(1),(1),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(1),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0),(0),(0),(0),(0),(0)], null)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15960) : cljs.core.atom.call(null,G__15960));
})();
snake_slides.slide00.code = rum.core.build_defc((function (){
var G__15961 = "div";
var G__15962 = ({"className": "code-cb62a"});
var G__15963 = (function (){var G__15965 = "pre";
var G__15966 = null;
var G__15967 = (function (){var attrs15964 = snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; This is an animated & interactive guide to "], 0));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"code",((cljs.core.map_QMARK_(attrs15964))?sablono.interpreter.attributes(attrs15964):null),((cljs.core.map_QMARK_(attrs15964))?new cljs.core.PersistentVector(null, 23, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; building a game in ClojureScript, because"], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; I find the design patterns very interesting."], 0))),"\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; This requires some knowledge of ClojureScript,"], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; which you can find ",snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes"], null),"here"], null)], 0)),"."], 0))),"\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Created by ",snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/coldnew"], null),"@coldnew"], null)], 0))], 0))),"\n","\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Styling borrowed from ",snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://twitter.com/ibdknox"], null),"@ibdknox"], null)], 0))], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Idea borrowed from ",snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/shaunlebron/t3tr0s-slides/"], null),"@shaulebron"], null)], 0))], 0))),"\n","\n\n\n\n\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; "], 0))),"SHIFT + RIGHT for next slide",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ---------------->>"], 0)))], null):new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs15964),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; building a game in ClojureScript, because"], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; I find the design patterns very interesting."], 0))),"\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; This requires some knowledge of ClojureScript,"], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; which you can find ",snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes"], null),"here"], null)], 0)),"."], 0))),"\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Created by ",snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/coldnew"], null),"@coldnew"], null)], 0))], 0))),"\n","\n","\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Styling borrowed from ",snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"http://twitter.com/ibdknox"], null),"@ibdknox"], null)], 0))], 0))),"\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; Idea borrowed from ",snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/shaunlebron/t3tr0s-slides/"], null),"@shaulebron"], null)], 0))], 0))),"\n","\n\n\n\n\n\n",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; "], 0))),"SHIFT + RIGHT for next slide",sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ---------------->>"], 0)))], null)));
})();
return React.createElement(G__15965,G__15966,G__15967);
})();
return React.createElement(G__15961,G__15962,G__15963);
}),null,"code");
snake_slides.slide00.cell_size = cljs.core.quot((600),snake_slides.slide00.rows);
snake_slides.slide00.draw_cell_BANG_ = (function snake_slides$slide00$draw_cell_BANG_(ctx,p__15968,is_center){
var vec__15972 = p__15968;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15972,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15972,(1),null);
ctx.lineWidth = (2);

var rx = (snake_slides.slide00.cell_size * x);
var ry = (snake_slides.slide00.cell_size * y);
var rs = snake_slides.slide00.cell_size;
var cx = (snake_slides.slide00.cell_size * (x + 0.5));
var cy = (snake_slides.slide00.cell_size * (y + 0.5));
var cr = (snake_slides.slide00.cell_size / (4));
ctx.fillRect(rx,ry,rs,rs);

return ctx.strokeRect(rx,ry,rs,rs);
});
snake_slides.slide00.draw_food_BANG_ = (function snake_slides$slide00$draw_food_BANG_(ctx,p__15975){
var vec__15979 = p__15975;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15979,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15979,(1),null);
ctx.fillStyle = snake_slides.slide00.dark_red;

ctx.strokeStyle = snake_slides.slide00.light_red;

return snake_slides.slide00.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false);
});
snake_slides.slide00.draw_snake_BANG_ = (function snake_slides$slide00$draw_snake_BANG_(ctx,p__15982){
var vec__15986 = p__15982;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15986,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15986,(1),null);
ctx.fillStyle = snake_slides.slide00.dark_purple;

ctx.strokeStyle = snake_slides.slide00.light_purple;

return snake_slides.slide00.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false);
});
snake_slides.slide00.draw_board_BANG_ = (function snake_slides$slide00$draw_board_BANG_(ctx,p__15989){
var vec__15993 = p__15989;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15993,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15993,(1),null);
ctx.fillStyle = "#222";

ctx.strokeStyle = "#888";

return snake_slides.slide00.draw_cell_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),false);
});
snake_slides.slide00.draw_canvas_BANG_ = (function snake_slides$slide00$draw_canvas_BANG_(canvas){
var ctx = canvas.getContext("2d");
var board = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide00.app) : cljs.core.deref.call(null,snake_slides.slide00.app)));
ctx.fillStyle = "#222";

ctx.fillRect((0),(0),(snake_slides.slide00.cell_size * snake_slides.slide00.cols),(snake_slides.slide00.cell_size * snake_slides.slide00.rows));

var seq__16024 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
var chunk__16029 = null;
var count__16030 = (0);
var i__16031 = (0);
while(true){
if((i__16031 < count__16030)){
var y = chunk__16029.cljs$core$IIndexed$_nth$arity$2(null,i__16031);
var seq__16032_16052 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide00.cols));
var chunk__16033_16053 = null;
var count__16034_16054 = (0);
var i__16035_16055 = (0);
while(true){
if((i__16035_16055 < count__16034_16054)){
var x_16056 = chunk__16033_16053.cljs$core$IIndexed$_nth$arity$2(null,i__16035_16055);
var v_16057 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_16056], null));
var vec__16036_16058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16056,((5) + y)], null);
var x1_16059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036_16058,(0),null);
var y1_16060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036_16058,(1),null);
var G__16039_16061 = v_16057;
switch (G__16039_16061) {
case (0):
snake_slides.slide00.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16059,y1_16060], null));

break;
case (1):
snake_slides.slide00.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16059,y1_16060], null));

break;
case (2):
snake_slides.slide00.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16059,y1_16060], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16063 = seq__16032_16052;
var G__16064 = chunk__16033_16053;
var G__16065 = count__16034_16054;
var G__16066 = (i__16035_16055 + (1));
seq__16032_16052 = G__16063;
chunk__16033_16053 = G__16064;
count__16034_16054 = G__16065;
i__16035_16055 = G__16066;
continue;
} else {
var temp__4657__auto___16067 = cljs.core.seq(seq__16032_16052);
if(temp__4657__auto___16067){
var seq__16032_16068__$1 = temp__4657__auto___16067;
if(cljs.core.chunked_seq_QMARK_(seq__16032_16068__$1)){
var c__8003__auto___16069 = cljs.core.chunk_first(seq__16032_16068__$1);
var G__16070 = cljs.core.chunk_rest(seq__16032_16068__$1);
var G__16071 = c__8003__auto___16069;
var G__16072 = cljs.core.count(c__8003__auto___16069);
var G__16073 = (0);
seq__16032_16052 = G__16070;
chunk__16033_16053 = G__16071;
count__16034_16054 = G__16072;
i__16035_16055 = G__16073;
continue;
} else {
var x_16074 = cljs.core.first(seq__16032_16068__$1);
var v_16075 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_16074], null));
var vec__16040_16076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16074,((5) + y)], null);
var x1_16077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16040_16076,(0),null);
var y1_16078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16040_16076,(1),null);
var G__16043_16079 = v_16075;
switch (G__16043_16079) {
case (0):
snake_slides.slide00.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16077,y1_16078], null));

break;
case (1):
snake_slides.slide00.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16077,y1_16078], null));

break;
case (2):
snake_slides.slide00.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16077,y1_16078], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16081 = cljs.core.next(seq__16032_16068__$1);
var G__16082 = null;
var G__16083 = (0);
var G__16084 = (0);
seq__16032_16052 = G__16081;
chunk__16033_16053 = G__16082;
count__16034_16054 = G__16083;
i__16035_16055 = G__16084;
continue;
}
} else {
}
}
break;
}

var G__16085 = seq__16024;
var G__16086 = chunk__16029;
var G__16087 = count__16030;
var G__16088 = (i__16031 + (1));
seq__16024 = G__16085;
chunk__16029 = G__16086;
count__16030 = G__16087;
i__16031 = G__16088;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16024);
if(temp__4657__auto__){
var seq__16024__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16024__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__16024__$1);
var G__16089 = cljs.core.chunk_rest(seq__16024__$1);
var G__16090 = c__8003__auto__;
var G__16091 = cljs.core.count(c__8003__auto__);
var G__16092 = (0);
seq__16024 = G__16089;
chunk__16029 = G__16090;
count__16030 = G__16091;
i__16031 = G__16092;
continue;
} else {
var y = cljs.core.first(seq__16024__$1);
var seq__16025_16093 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_slides.slide00.cols));
var chunk__16026_16094 = null;
var count__16027_16095 = (0);
var i__16028_16096 = (0);
while(true){
if((i__16028_16096 < count__16027_16095)){
var x_16097 = chunk__16026_16094.cljs$core$IIndexed$_nth$arity$2(null,i__16028_16096);
var v_16098 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_16097], null));
var vec__16044_16099 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16097,((5) + y)], null);
var x1_16100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044_16099,(0),null);
var y1_16101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044_16099,(1),null);
var G__16047_16102 = v_16098;
switch (G__16047_16102) {
case (0):
snake_slides.slide00.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16100,y1_16101], null));

break;
case (1):
snake_slides.slide00.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16100,y1_16101], null));

break;
case (2):
snake_slides.slide00.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16100,y1_16101], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16104 = seq__16025_16093;
var G__16105 = chunk__16026_16094;
var G__16106 = count__16027_16095;
var G__16107 = (i__16028_16096 + (1));
seq__16025_16093 = G__16104;
chunk__16026_16094 = G__16105;
count__16027_16095 = G__16106;
i__16028_16096 = G__16107;
continue;
} else {
var temp__4657__auto___16108__$1 = cljs.core.seq(seq__16025_16093);
if(temp__4657__auto___16108__$1){
var seq__16025_16109__$1 = temp__4657__auto___16108__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16025_16109__$1)){
var c__8003__auto___16110 = cljs.core.chunk_first(seq__16025_16109__$1);
var G__16111 = cljs.core.chunk_rest(seq__16025_16109__$1);
var G__16112 = c__8003__auto___16110;
var G__16113 = cljs.core.count(c__8003__auto___16110);
var G__16114 = (0);
seq__16025_16093 = G__16111;
chunk__16026_16094 = G__16112;
count__16027_16095 = G__16113;
i__16028_16096 = G__16114;
continue;
} else {
var x_16115 = cljs.core.first(seq__16025_16109__$1);
var v_16116 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x_16115], null));
var vec__16048_16117 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x_16115,((5) + y)], null);
var x1_16118 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048_16117,(0),null);
var y1_16119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16048_16117,(1),null);
var G__16051_16120 = v_16116;
switch (G__16051_16120) {
case (0):
snake_slides.slide00.draw_board_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16118,y1_16119], null));

break;
case (1):
snake_slides.slide00.draw_snake_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16118,y1_16119], null));

break;
case (2):
snake_slides.slide00.draw_food_BANG_(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1_16118,y1_16119], null));

break;
default:
console.log("YOU SHOULD NOT ENTER HERE!!!");

}

var G__16122 = cljs.core.next(seq__16025_16109__$1);
var G__16123 = null;
var G__16124 = (0);
var G__16125 = (0);
seq__16025_16093 = G__16122;
chunk__16026_16094 = G__16123;
count__16027_16095 = G__16124;
i__16028_16096 = G__16125;
continue;
}
} else {
}
}
break;
}

var G__16126 = cljs.core.next(seq__16024__$1);
var G__16127 = null;
var G__16128 = (0);
var G__16129 = (0);
seq__16024 = G__16126;
chunk__16029 = G__16127;
count__16030 = G__16128;
i__16031 = G__16129;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.slide00.canvas_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var canvas = rum.core.ref(state,"canvas");
canvas.width = (snake_slides.slide00.cols * snake_slides.slide00.cell_size);

canvas.height = (snake_slides.slide00.rows * snake_slides.slide00.cell_size);

snake_slides.slide00.draw_canvas_BANG_(canvas);

return state;
}),cljs.core.cst$kw$did_DASH_update,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide00.draw_canvas_BANG_(canvas);

return state;
})], null);
snake_slides.slide00.canvas = rum.core.build_defc((function (){
var G__16132 = "div";
var G__16133 = ({"className": "canvas-2a4d7"});
var G__16134 = (function (){var G__16135 = "canvas";
var G__16136 = ({"ref": "canvas"});
return React.createElement(G__16135,G__16136);
})();
return React.createElement(G__16132,G__16133,G__16134);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide00.canvas_mixin], null),"canvas");
snake_slides.slide00.slide = rum.core.build_defc((function (){
var G__16139 = "div";
var G__16140 = null;
var G__16141 = React.createElement("h1",null,"Snake in ClojureScript");
var G__16142 = sablono.interpreter.interpret((snake_slides.slide00.code.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide00.code.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide00.code.call(null)));
var G__16143 = sablono.interpreter.interpret((snake_slides.slide00.canvas.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide00.canvas.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide00.canvas.call(null)));
return React.createElement(G__16139,G__16140,G__16141,G__16142,G__16143);
}),null,"slide");
snake_slides.slide00.render = (function snake_slides$slide00$render(){
return rum.core.mount((snake_slides.slide00.slide.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide00.slide.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide00.slide.call(null)),snake_slides.slide00.slide_elm);
});
snake_slides.slide00.init = (function snake_slides$slide00$init(id){
snake_slides.slide00.slide_elm = document.getElementById(id);

snake_slides.slide00.render();

return cljs.core.add_watch(snake_slides.slide00.app,cljs.core.cst$kw$render,snake_slides.slide00.render);
});
snake_slides.slide00.resume = (function snake_slides$slide00$resume(){
return null;
});
snake_slides.slide00.stop = (function snake_slides$slide00$stop(){
return null;
});
