// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.slide04');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('snake_slides.syntax_highlight');
snake_slides.slide04.dark_green = "#143";
snake_slides.slide04.light_green = "#175";
snake_slides.slide04.dark_purple = "#449";
snake_slides.slide04.light_purple = "#6ad";
snake_slides.slide04.dark_red = "#944";
snake_slides.slide04.light_red = "#f8c";
snake_slides.slide04.pieces = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$I,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null))], null);
snake_slides.slide04.draw_snake = (function snake_slides$slide04$draw_snake(snake,head){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(snake,head));
});
snake_slides.slide04.move_up = (function snake_slides$slide04$move_up(p__15695){
var vec__15699 = p__15695;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15699,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);
});
snake_slides.slide04.move_left = (function snake_slides$slide04$move_left(p__15702){
var vec__15706 = p__15702;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15706,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);
});
snake_slides.slide04.move_right = (function snake_slides$slide04$move_right(p__15709){
var vec__15713 = p__15709;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15713,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
});
snake_slides.slide04.move_down = (function snake_slides$slide04$move_down(p__15716){
var vec__15720 = p__15716;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15720,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);
});
snake_slides.slide04.next_head = (function snake_slides$slide04$next_head(snake,direction){
var head = cljs.core.first(snake);
var G__15724 = direction;
var G__15724__$1 = (((G__15724 instanceof cljs.core.Keyword))?G__15724.fqn:null);
switch (G__15724__$1) {
case "left":
return snake_slides.slide04.move_left(head);

break;
case "right":
return snake_slides.slide04.move_right(head);

break;
case "up":
return snake_slides.slide04.move_up(head);

break;
case "down":
return snake_slides.slide04.move_down(head);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15724__$1)].join('')));

}
});
snake_slides.slide04.next_snake = (function snake_slides$slide04$next_snake(snake,direction){
var head = snake_slides.slide04.next_head(snake,direction);
return snake_slides.slide04.draw_snake(snake,head);
});
snake_slides.slide04.g0 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,cljs.core.cst$kw$I.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.pieces)], null);
snake_slides.slide04.g1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g0),cljs.core.cst$kw$down)], null);
snake_slides.slide04.g2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g1),cljs.core.cst$kw$down)], null);
snake_slides.slide04.g3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g2),cljs.core.cst$kw$down)], null);
snake_slides.slide04.g4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g3),cljs.core.cst$kw$right)], null);
snake_slides.slide04.g5 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g4),cljs.core.cst$kw$right)], null);
snake_slides.slide04.g6 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g5),cljs.core.cst$kw$right)], null);
snake_slides.slide04.g7 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g6),cljs.core.cst$kw$right)], null);
snake_slides.slide04.g8 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g7),cljs.core.cst$kw$up)], null);
snake_slides.slide04.g9 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g8),cljs.core.cst$kw$up)], null);
snake_slides.slide04.g10 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g9),cljs.core.cst$kw$up)], null);
snake_slides.slide04.g11 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g10),cljs.core.cst$kw$left)], null);
snake_slides.slide04.g12 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide04.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.g11),cljs.core.cst$kw$left)], null);
snake_slides.slide04.states = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide04.g0,snake_slides.slide04.g1,snake_slides.slide04.g2,snake_slides.slide04.g3,snake_slides.slide04.g4,snake_slides.slide04.g5,snake_slides.slide04.g6,snake_slides.slide04.g7,snake_slides.slide04.g8,snake_slides.slide04.g9,snake_slides.slide04.g10,snake_slides.slide04.g11,snake_slides.slide04.g12], null);
snake_slides.slide04.state_places = cljs.core.PersistentHashMap.fromArrays([snake_slides.slide04.g5,snake_slides.slide04.g6,snake_slides.slide04.g0,snake_slides.slide04.g4,snake_slides.slide04.g2,snake_slides.slide04.g11,snake_slides.slide04.g10,snake_slides.slide04.g9,snake_slides.slide04.g3,snake_slides.slide04.g8,snake_slides.slide04.g1,snake_slides.slide04.g12,snake_slides.slide04.g7],[(5),(6),(0),(4),(2),(11),(10),(9),(3),(8),(1),(12),(7)]);
snake_slides.slide04.piece_abs_coords = (function snake_slides$slide04$piece_abs_coords(piece,p__15726){
var vec__15734 = p__15726;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__15734,cx,cy){
return (function (p__15737){
var vec__15738 = p__15737;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + x),(cy + y)], null);
});})(vec__15734,cx,cy))
,piece);
});
snake_slides.slide04.app = (function (){var G__15741 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$piece,null,cljs.core.cst$kw$position,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15741) : cljs.core.atom.call(null,G__15741));
})();
snake_slides.slide04.rows = (20);
snake_slides.slide04.cols = (10);
snake_slides.slide04.empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide04.cols,(0)));
snake_slides.slide04.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide04.rows,snake_slides.slide04.empty_row));
snake_slides.slide04.state_code = (function snake_slides$slide04$state_code(state,code_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("state:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(state),cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_str)].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.app) : cljs.core.deref.call(null,snake_slides.slide04.app))))?"active-col-d9099":""),cljs.core.cst$kw$onMouseEnter,(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(snake_slides.slide04.app,state) : cljs.core.reset_BANG_.call(null,snake_slides.slide04.app,state));
})], null),code_str], null);
});
snake_slides.slide04.code = rum.core.build_defc((function (){
var G__15742 = "div";
var G__15743 = ({"className": "code-cb62a"});
var G__15744 = (function (){var G__15745 = "pre";
var G__15746 = null;
var G__15747 = (function (){var G__15748 = "code";
var G__15749 = null;
var G__15750 = "(";
var G__15751 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0)));
var G__15752 = " app-state\n";
var G__15753 = "  (";
var G__15754 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["atom"], 0)));
var G__15755 = " {";
var G__15756 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0)));
var G__15757 = " [ [ ";
var G__15758 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15759 = " ";
var G__15760 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15761 = " ] [ ";
var G__15762 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(1)], 0)));
var G__15763 = " ";
var G__15764 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15765 = " ] [ ";
var G__15766 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(2)], 0)));
var G__15767 = " ";
var G__15768 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15769 = " ] [ ";
var G__15770 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(3)], 0)));
var G__15771 = " ";
var G__15772 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15773 = " ] ]";
var G__15774 = "\n";
var G__15775 = "         ";
var G__15776 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":direction"], 0)));
var G__15777 = " [ ";
var G__15778 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15779 = " ";
var G__15780 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(1)], 0)));
var G__15781 = " ] ";
var G__15782 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; move down"], 0)));
var G__15783 = "\n";
var G__15784 = "         }))";
var G__15785 = "\n";
var G__15786 = "\n\n";
var G__15787 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; TRY IT: mouse over the states."], 0)));
var G__15788 = "\n\n";
var G__15789 = sablono.interpreter.interpret(snake_slides.slide04.state_code(snake_slides.slide04.g0,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["swap!"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["update-in"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$2 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"] next-move)\n"),x__8026__auto____$2);
})()," ["),x__8026__auto____$1);
})()," app-state "),x__8026__auto__);
})(),"(")));
var G__15790 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; => [ [ 1 0 ] [ 0 0 ] [ 2 0 ] [ 3 0 ] ]"], 0)));
var G__15791 = "\n";
var G__15792 = sablono.interpreter.interpret(snake_slides.slide04.state_code(snake_slides.slide04.g1,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["swap!"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["update-in"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$2 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"] next-move)\n"),x__8026__auto____$2);
})()," ["),x__8026__auto____$1);
})()," app-state "),x__8026__auto__);
})(),"(")));
var G__15793 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; => [ [ 2 0 ] [ 1 0 ] [ 0 0 ] [ 2 0 ] ]"], 0)));
var G__15794 = "\n";
var G__15795 = sablono.interpreter.interpret(snake_slides.slide04.state_code(snake_slides.slide04.g2,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["swap!"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["update-in"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$2 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"] next-move)\n"),x__8026__auto____$2);
})()," ["),x__8026__auto____$1);
})()," app-state "),x__8026__auto__);
})(),"(")));
var G__15796 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; => [ [ 3 0 ] [ 2 0 ] [ 1 0 ] [ 0 0 ] ]"], 0)));
var G__15797 = "\n";
var G__15798 = sablono.interpreter.interpret(snake_slides.slide04.state_code(snake_slides.slide04.g3,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["swap!"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["update-in"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$2 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"] next-move)\n"),x__8026__auto____$2);
})()," ["),x__8026__auto____$1);
})()," app-state "),x__8026__auto__);
})(),"(")));
var G__15799 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; => [ [ 4 0 ] [ 3 0 ] [ 2 0 ] [ 1 0 ] ]"], 0)));
var G__15800 = "\n";
var G__15801 = "\n";
var G__15802 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";; You can get current app-state by deref or @"], 0)));
var G__15803 = "\n\n";
var G__15804 = "> ";
var G__15805 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["@"], 0)));
var G__15806 = "app-state";
var G__15807 = " ";
var G__15808 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["     ; or (deref app-state)"], 0)));
var G__15809 = "\n";
var G__15810 = "\n";
var G__15811 = "   {";
var G__15812 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":snake"], 0)));
var G__15813 = " [ [ ";
var G__15814 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15815 = " ";
var G__15816 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(4)], 0)));
var G__15817 = " ] [ ";
var G__15818 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15819 = " ";
var G__15820 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(3)], 0)));
var G__15821 = " ] [ ";
var G__15822 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15823 = " ";
var G__15824 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(2)], 0)));
var G__15825 = " ] [ ";
var G__15826 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15827 = " ";
var G__15828 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(3)], 0)));
var G__15829 = " ] ]";
var G__15830 = "\n";
var G__15831 = "    ";
var G__15832 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":direction"], 0)));
var G__15833 = " [ ";
var G__15834 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)));
var G__15835 = " ";
var G__15836 = sablono.interpreter.interpret(snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(1)], 0)));
var G__15837 = " ] ";
var G__15838 = "\n";
var G__15839 = "    }))";
var G__15840 = "\n";
return React.createElement(G__15748,G__15749,G__15750,G__15751,G__15752,G__15753,G__15754,G__15755,G__15756,G__15757,G__15758,G__15759,G__15760,G__15761,G__15762,G__15763,G__15764,G__15765,G__15766,G__15767,G__15768,G__15769,G__15770,G__15771,G__15772,G__15773,G__15774,G__15775,G__15776,G__15777,G__15778,G__15779,G__15780,G__15781,G__15782,G__15783,G__15784,G__15785,G__15786,G__15787,G__15788,G__15789,G__15790,G__15791,G__15792,G__15793,G__15794,G__15795,G__15796,G__15797,G__15798,G__15799,G__15800,G__15801,G__15802,G__15803,G__15804,G__15805,G__15806,G__15807,G__15808,G__15809,G__15810,G__15811,G__15812,G__15813,G__15814,G__15815,G__15816,G__15817,G__15818,G__15819,G__15820,G__15821,G__15822,G__15823,G__15824,G__15825,G__15826,G__15827,G__15828,G__15829,G__15830,G__15831,G__15832,G__15833,G__15834,G__15835,G__15836,G__15837,G__15838,G__15839,G__15840);
})();
return React.createElement(G__15745,G__15746,G__15747);
})();
return React.createElement(G__15742,G__15743,G__15744);
}),null,"code");
snake_slides.slide04.cell_size = cljs.core.quot((600),snake_slides.slide04.rows);
snake_slides.slide04.draw_cell_BANG_ = (function snake_slides$slide04$draw_cell_BANG_(ctx,p__15841,is_center){
var vec__15845 = p__15841;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15845,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15845,(1),null);
ctx.lineWidth = (2);

var rx = (snake_slides.slide04.cell_size * x);
var ry = (snake_slides.slide04.cell_size * y);
var rs = snake_slides.slide04.cell_size;
var cx = (snake_slides.slide04.cell_size * (x + 0.5));
var cy = (snake_slides.slide04.cell_size * (y + 0.5));
var cr = (snake_slides.slide04.cell_size / (4));
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
snake_slides.slide04.draw_piece_BANG_ = (function snake_slides$slide04$draw_piece_BANG_(ctx,piece,pos){
var seq__15858 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,snake_slides.slide04.piece_abs_coords(piece,pos)));
var chunk__15859 = null;
var count__15860 = (0);
var i__15861 = (0);
while(true){
if((i__15861 < count__15860)){
var vec__15862 = chunk__15859.cljs$core$IIndexed$_nth$arity$2(null,i__15861);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(1),null);
snake_slides.slide04.draw_cell_BANG_(ctx,c,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));

var G__15868 = seq__15858;
var G__15869 = chunk__15859;
var G__15870 = count__15860;
var G__15871 = (i__15861 + (1));
seq__15858 = G__15868;
chunk__15859 = G__15869;
count__15860 = G__15870;
i__15861 = G__15871;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15858);
if(temp__4657__auto__){
var seq__15858__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15858__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__15858__$1);
var G__15872 = cljs.core.chunk_rest(seq__15858__$1);
var G__15873 = c__8003__auto__;
var G__15874 = cljs.core.count(c__8003__auto__);
var G__15875 = (0);
seq__15858 = G__15872;
chunk__15859 = G__15873;
count__15860 = G__15874;
i__15861 = G__15875;
continue;
} else {
var vec__15865 = cljs.core.first(seq__15858__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15865,(1),null);
snake_slides.slide04.draw_cell_BANG_(ctx,c,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));

var G__15876 = cljs.core.next(seq__15858__$1);
var G__15877 = null;
var G__15878 = (0);
var G__15879 = (0);
seq__15858 = G__15876;
chunk__15859 = G__15877;
count__15860 = G__15878;
i__15861 = G__15879;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.slide04.draw_canvas_BANG_ = (function snake_slides$slide04$draw_canvas_BANG_(canvas){
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#222";

ctx.fillRect((0),(0),(snake_slides.slide04.cell_size * snake_slides.slide04.cols),(snake_slides.slide04.cell_size * snake_slides.slide04.rows));

var piece = cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.app) : cljs.core.deref.call(null,snake_slides.slide04.app)));
var pos = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.app) : cljs.core.deref.call(null,snake_slides.slide04.app)));
if(cljs.core.truth_((function (){var and__7172__auto__ = piece;
if(cljs.core.truth_(and__7172__auto__)){
return pos;
} else {
return and__7172__auto__;
}
})())){
var places_15910 = (function (){var G__15895 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide04.app) : cljs.core.deref.call(null,snake_slides.slide04.app));
return (snake_slides.slide04.state_places.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide04.state_places.cljs$core$IFn$_invoke$arity$1(G__15895) : snake_slides.slide04.state_places.call(null,G__15895));
})();
ctx.fillStyle = "#555";

ctx.strokeStyle = "#AAA";

var seq__15896_15911 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.take.cljs$core$IFn$_invoke$arity$2(places_15910,snake_slides.slide04.states)));
var chunk__15897_15912 = null;
var count__15898_15913 = (0);
var i__15899_15914 = (0);
while(true){
if((i__15899_15914 < count__15898_15913)){
var vec__15900_15915 = chunk__15897_15912.cljs$core$IIndexed$_nth$arity$2(null,i__15899_15914);
var i_15916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900_15915,(0),null);
var map__15903_15917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15900_15915,(1),null);
var map__15903_15918__$1 = ((((!((map__15903_15917 == null)))?((((map__15903_15917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15903_15917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15903_15917):map__15903_15917);
var piece_15919__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15903_15918__$1,cljs.core.cst$kw$piece);
var position_15920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15903_15918__$1,cljs.core.cst$kw$position);
var x_15921 = (7);
ctx.globalAlpha = (((function (){var x__7520__auto__ = (0);
var y__7521__auto__ = (function (){var x__7527__auto__ = x_15921;
var y__7528__auto__ = (i_15916 - (places_15910 - x_15921));
return ((x__7527__auto__ < y__7528__auto__) ? x__7527__auto__ : y__7528__auto__);
})();
return ((x__7520__auto__ > y__7521__auto__) ? x__7520__auto__ : y__7521__auto__);
})() / x_15921) / (5));

snake_slides.slide04.draw_piece_BANG_(ctx,piece_15919__$1,position_15920);

var G__15922 = seq__15896_15911;
var G__15923 = chunk__15897_15912;
var G__15924 = count__15898_15913;
var G__15925 = (i__15899_15914 + (1));
seq__15896_15911 = G__15922;
chunk__15897_15912 = G__15923;
count__15898_15913 = G__15924;
i__15899_15914 = G__15925;
continue;
} else {
var temp__4657__auto___15926 = cljs.core.seq(seq__15896_15911);
if(temp__4657__auto___15926){
var seq__15896_15927__$1 = temp__4657__auto___15926;
if(cljs.core.chunked_seq_QMARK_(seq__15896_15927__$1)){
var c__8003__auto___15928 = cljs.core.chunk_first(seq__15896_15927__$1);
var G__15929 = cljs.core.chunk_rest(seq__15896_15927__$1);
var G__15930 = c__8003__auto___15928;
var G__15931 = cljs.core.count(c__8003__auto___15928);
var G__15932 = (0);
seq__15896_15911 = G__15929;
chunk__15897_15912 = G__15930;
count__15898_15913 = G__15931;
i__15899_15914 = G__15932;
continue;
} else {
var vec__15905_15933 = cljs.core.first(seq__15896_15927__$1);
var i_15934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905_15933,(0),null);
var map__15908_15935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15905_15933,(1),null);
var map__15908_15936__$1 = ((((!((map__15908_15935 == null)))?((((map__15908_15935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15908_15935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15908_15935):map__15908_15935);
var piece_15937__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15908_15936__$1,cljs.core.cst$kw$piece);
var position_15938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15908_15936__$1,cljs.core.cst$kw$position);
var x_15939 = (7);
ctx.globalAlpha = (((function (){var x__7520__auto__ = (0);
var y__7521__auto__ = (function (){var x__7527__auto__ = x_15939;
var y__7528__auto__ = (i_15934 - (places_15910 - x_15939));
return ((x__7527__auto__ < y__7528__auto__) ? x__7527__auto__ : y__7528__auto__);
})();
return ((x__7520__auto__ > y__7521__auto__) ? x__7520__auto__ : y__7521__auto__);
})() / x_15939) / (5));

snake_slides.slide04.draw_piece_BANG_(ctx,piece_15937__$1,position_15938);

var G__15940 = cljs.core.next(seq__15896_15927__$1);
var G__15941 = null;
var G__15942 = (0);
var G__15943 = (0);
seq__15896_15911 = G__15940;
chunk__15897_15912 = G__15941;
count__15898_15913 = G__15942;
i__15899_15914 = G__15943;
continue;
}
} else {
}
}
break;
}

ctx.globalAlpha = (1);

ctx.fillStyle = snake_slides.slide04.dark_purple;

ctx.strokeStyle = snake_slides.slide04.light_purple;

return snake_slides.slide04.draw_piece_BANG_(ctx,piece,pos);
} else {
return null;
}
});
snake_slides.slide04.canvas_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var canvas = rum.core.ref(state,"canvas");
canvas.width = (snake_slides.slide04.cols * snake_slides.slide04.cell_size);

canvas.height = (snake_slides.slide04.rows * snake_slides.slide04.cell_size);

snake_slides.slide04.draw_canvas_BANG_(canvas);

return state;
}),cljs.core.cst$kw$did_DASH_update,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide04.draw_canvas_BANG_(canvas);

return state;
})], null);
snake_slides.slide04.canvas = rum.core.build_defc((function (){
var G__15946 = "div";
var G__15947 = ({"className": "canvas-2a4d7"});
var G__15948 = (function (){var G__15949 = "canvas";
var G__15950 = ({"ref": "canvas", "style": ({"position": "relative"})});
return React.createElement(G__15949,G__15950);
})();
return React.createElement(G__15946,G__15947,G__15948);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide04.canvas_mixin], null),"canvas");
snake_slides.slide04.slide = rum.core.build_defc((function (){
var G__15953 = "div";
var G__15954 = null;
var G__15955 = React.createElement("h1",null,"4. Save the state.");
var G__15956 = sablono.interpreter.interpret((snake_slides.slide04.code.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide04.code.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide04.code.call(null)));
var G__15957 = sablono.interpreter.interpret((snake_slides.slide04.canvas.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide04.canvas.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide04.canvas.call(null)));
return React.createElement(G__15953,G__15954,G__15955,G__15956,G__15957);
}),null,"slide");
snake_slides.slide04.render = (function snake_slides$slide04$render(){
return rum.core.mount((snake_slides.slide04.slide.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide04.slide.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide04.slide.call(null)),snake_slides.slide04.slide_elm);
});
snake_slides.slide04.init = (function snake_slides$slide04$init(id){
snake_slides.slide04.slide_elm = document.getElementById(id);

snake_slides.slide04.render();

return cljs.core.add_watch(snake_slides.slide04.app,cljs.core.cst$kw$render,snake_slides.slide04.render);
});
snake_slides.slide04.resume = (function snake_slides$slide04$resume(){
return null;
});
snake_slides.slide04.stop = (function snake_slides$slide04$stop(){
return null;
});
