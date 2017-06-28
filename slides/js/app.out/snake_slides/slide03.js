// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.slide03');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rum.core');
goog.require('snake_slides.syntax_highlight');
snake_slides.slide03.dark_green = "#143";
snake_slides.slide03.light_green = "#175";
snake_slides.slide03.dark_purple = "#449";
snake_slides.slide03.light_purple = "#6ad";
snake_slides.slide03.dark_red = "#944";
snake_slides.slide03.light_red = "#f8c";
snake_slides.slide03.pieces = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$I,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null))], null);
snake_slides.slide03.draw_snake = (function snake_slides$slide03$draw_snake(snake,head){
return cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(snake,head));
});
snake_slides.slide03.move_up = (function snake_slides$slide03$move_up(p__15439){
var vec__15443 = p__15439;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15443,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);
});
snake_slides.slide03.move_left = (function snake_slides$slide03$move_left(p__15446){
var vec__15450 = p__15446;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15450,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);
});
snake_slides.slide03.move_right = (function snake_slides$slide03$move_right(p__15453){
var vec__15457 = p__15453;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15457,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);
});
snake_slides.slide03.move_down = (function snake_slides$slide03$move_down(p__15460){
var vec__15464 = p__15460;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);
});
snake_slides.slide03.next_head = (function snake_slides$slide03$next_head(snake,direction){
var head = cljs.core.first(snake);
var G__15468 = direction;
var G__15468__$1 = (((G__15468 instanceof cljs.core.Keyword))?G__15468.fqn:null);
switch (G__15468__$1) {
case "left":
return snake_slides.slide03.move_left(head);

break;
case "right":
return snake_slides.slide03.move_right(head);

break;
case "up":
return snake_slides.slide03.move_up(head);

break;
case "down":
return snake_slides.slide03.move_down(head);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15468__$1)].join('')));

}
});
snake_slides.slide03.next_snake = (function snake_slides$slide03$next_snake(snake,direction){
var head = snake_slides.slide03.next_head(snake,direction);
return snake_slides.slide03.draw_snake(snake,head);
});
snake_slides.slide03.g0 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,cljs.core.cst$kw$I.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.pieces)], null);
snake_slides.slide03.g1 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g0),cljs.core.cst$kw$down)], null);
snake_slides.slide03.g2 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g1),cljs.core.cst$kw$down)], null);
snake_slides.slide03.g3 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g2),cljs.core.cst$kw$down)], null);
snake_slides.slide03.g4 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g3),cljs.core.cst$kw$right)], null);
snake_slides.slide03.g5 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g4),cljs.core.cst$kw$right)], null);
snake_slides.slide03.g6 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g5),cljs.core.cst$kw$right)], null);
snake_slides.slide03.g7 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g6),cljs.core.cst$kw$right)], null);
snake_slides.slide03.g8 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g7),cljs.core.cst$kw$up)], null);
snake_slides.slide03.g9 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g8),cljs.core.cst$kw$up)], null);
snake_slides.slide03.g10 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g9),cljs.core.cst$kw$up)], null);
snake_slides.slide03.g11 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g10),cljs.core.cst$kw$left)], null);
snake_slides.slide03.g12 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),cljs.core.cst$kw$piece,snake_slides.slide03.next_snake(cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.g11),cljs.core.cst$kw$left)], null);
snake_slides.slide03.states = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide03.g0,snake_slides.slide03.g1,snake_slides.slide03.g2,snake_slides.slide03.g3,snake_slides.slide03.g4,snake_slides.slide03.g5,snake_slides.slide03.g6,snake_slides.slide03.g7,snake_slides.slide03.g8,snake_slides.slide03.g9,snake_slides.slide03.g10,snake_slides.slide03.g11,snake_slides.slide03.g12], null);
snake_slides.slide03.state_places = cljs.core.PersistentHashMap.fromArrays([snake_slides.slide03.g5,snake_slides.slide03.g6,snake_slides.slide03.g0,snake_slides.slide03.g4,snake_slides.slide03.g2,snake_slides.slide03.g11,snake_slides.slide03.g10,snake_slides.slide03.g9,snake_slides.slide03.g3,snake_slides.slide03.g8,snake_slides.slide03.g1,snake_slides.slide03.g12,snake_slides.slide03.g7],[(5),(6),(0),(4),(2),(11),(10),(9),(3),(8),(1),(12),(7)]);
snake_slides.slide03.piece_abs_coords = (function snake_slides$slide03$piece_abs_coords(piece,p__15470){
var vec__15478 = p__15470;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15478,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__15478,cx,cy){
return (function (p__15481){
var vec__15482 = p__15481;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15482,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15482,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + x),(cy + y)], null);
});})(vec__15478,cx,cy))
,piece);
});
snake_slides.slide03.app = (function (){var G__15485 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$piece,null,cljs.core.cst$kw$position,null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15485) : cljs.core.atom.call(null,G__15485));
})();
snake_slides.slide03.rows = (20);
snake_slides.slide03.cols = (10);
snake_slides.slide03.empty_row = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide03.cols,(0)));
snake_slides.slide03.empty_board = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(snake_slides.slide03.rows,snake_slides.slide03.empty_row));
snake_slides.slide03.state_code = (function snake_slides$slide03$state_code(state,code_str){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("state"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_str)].join(''),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.app) : cljs.core.deref.call(null,snake_slides.slide03.app))))?"active-col-d9099":""),cljs.core.cst$kw$onMouseEnter,(function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(snake_slides.slide03.app,state) : cljs.core.reset_BANG_.call(null,snake_slides.slide03.app,state));
})], null),code_str], null);
});
snake_slides.slide03.code = rum.core.build_defc((function (){
var G__15486 = "div";
var G__15487 = ({"className": "code-cb62a"});
var G__15488 = (function (){var G__15489 = "pre";
var G__15490 = null;
var G__15491 = (function (){var G__15492 = "code";
var G__15493 = null;
var G__15494 = "(";
var G__15495 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15496 = " move-up    [[x y]] [      x  (";
var G__15497 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dec"], 0)));
var G__15498 = " y) ])\n";
var G__15499 = "(";
var G__15500 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15501 = " move-left  [[x y]] [ (";
var G__15502 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["dec"], 0)));
var G__15503 = " x)      y  ])\n";
var G__15504 = "(";
var G__15505 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15506 = " move-right [[x y]] [ (";
var G__15507 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["inc"], 0)));
var G__15508 = " x)      y  ])\n";
var G__15509 = "(";
var G__15510 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15511 = " move-down  [[x y]] [      x  (";
var G__15512 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["inc"], 0)));
var G__15513 = " y) ])\n";
var G__15514 = "\n";
var G__15515 = "(";
var G__15516 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15517 = " draw [snake head] ";
var G__15518 = "\n";
var G__15519 = "  (";
var G__15520 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["->"], 0)));
var G__15521 = " snake";
var G__15522 = "\n";
var G__15523 = "     (";
var G__15524 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["conj"], 0)));
var G__15525 = " head)";
var G__15526 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ; Append to snake's first element"], 0)));
var G__15527 = "\n";
var G__15528 = "     (";
var G__15529 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["drop-last"], 0)));
var G__15530 = ")";
var G__15531 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ; Remove snake's last element"], 0)));
var G__15532 = "\n";
var G__15533 = "     (draw-the-snake)))\n\n";
var G__15534 = "(";
var G__15535 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["defn"], 0)));
var G__15536 = " next-head [snake direction]";
var G__15537 = "\n";
var G__15538 = "  (";
var G__15539 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["let"], 0)));
var G__15540 = " [head (";
var G__15541 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["first"], 0)));
var G__15542 = " snake)]";
var G__15543 = "\n";
var G__15544 = "    (";
var G__15545 = sablono.interpreter.interpret(snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case"], 0)));
var G__15546 = " direction";
var G__15547 = "\n";
var G__15548 = "      ";
var G__15549 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":left"], 0)));
var G__15550 = "  (move-left head) ";
var G__15551 = " ";
var G__15552 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":right"], 0)));
var G__15553 = " (move-right head) \n";
var G__15554 = "      ";
var G__15555 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":up"], 0)));
var G__15556 = "    (move-up   head) ";
var G__15557 = " ";
var G__15558 = sablono.interpreter.interpret(snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":down"], 0)));
var G__15559 = "  (move-down  head))))";
var G__15560 = "\n\n";
var G__15561 = sablono.interpreter.interpret(snake_slides.syntax_highlight.cmt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; TRY IT: mouse over the states."], 0)));
var G__15562 = "\n\n";
var G__15563 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g0,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$2 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0));
return cljs.core._conj(cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$3 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(1)], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$4 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0));
return cljs.core._conj(cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$5 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(2)], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$6 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0));
return cljs.core._conj(cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$7 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(3)], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$8 = snake_slides.syntax_highlight.lit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," ] )) \n"),x__8026__auto____$8);
})(),"  "),x__8026__auto____$7);
})(),"[ ")," ] "),x__8026__auto____$6);
})(),"  "),x__8026__auto____$5);
})(),"[ ")," ] "),x__8026__auto____$4);
})(),"  "),x__8026__auto____$3);
})(),"[ ")," ] "),x__8026__auto____$2);
})(),"  "),x__8026__auto____$1);
})(),"[ ")," g0 '("),x__8026__auto__);
})(),"(")));
var G__15564 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g1,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":down"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g1 (draw-snake g0 (next-head g0 "),x__8026__auto__);
})(),"(")));
var G__15565 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g2,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":down"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g2 (draw-snake g1 (next-head g1 "),x__8026__auto__);
})(),"(")));
var G__15566 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g3,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":down"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g3 (draw-snake g2 (next-head g2 "),x__8026__auto__);
})(),"(")));
var G__15567 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g4,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":right"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g4 (draw-snake g3 (next-head g3 "),x__8026__auto__);
})(),"(")));
var G__15568 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g5,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":right"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g5 (draw-snake g4 (next-head g4 "),x__8026__auto__);
})(),"(")));
var G__15569 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g6,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":right"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g6 (draw-snake g5 (next-head g5 "),x__8026__auto__);
})(),"(")));
var G__15570 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g7,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":right"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g7 (draw-snake g6 (next-head g6 "),x__8026__auto__);
})(),"(")));
var G__15571 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g8,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":up"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g8 (draw-snake g7 (next-head g7 "),x__8026__auto__);
})(),"(")));
var G__15572 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g9,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":up"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g9 (draw-snake g8 (next-head g8 "),x__8026__auto__);
})(),"(")));
var G__15573 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g10,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":up"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g10 (draw-snake g9 (next-head g9 "),x__8026__auto__);
})(),"(")));
var G__15574 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g11,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":left"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g11 (draw-snake g10 (next-head g10 "),x__8026__auto__);
})(),"(")));
var G__15575 = sablono.interpreter.interpret(snake_slides.slide03.state_code(snake_slides.slide03.g12,cljs.core._conj((function (){var x__8026__auto__ = snake_slides.syntax_highlight.core.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["def"], 0));
return cljs.core._conj(cljs.core._conj((function (){var x__8026__auto____$1 = snake_slides.syntax_highlight.kw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([":left"], 0));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,")))\n"),x__8026__auto____$1);
})()," g12 (draw-snake g11 (next-head g11 "),x__8026__auto__);
})(),"(")));
return React.createElement(G__15492,G__15493,G__15494,G__15495,G__15496,G__15497,G__15498,G__15499,G__15500,G__15501,G__15502,G__15503,G__15504,G__15505,G__15506,G__15507,G__15508,G__15509,G__15510,G__15511,G__15512,G__15513,G__15514,G__15515,G__15516,G__15517,G__15518,G__15519,G__15520,G__15521,G__15522,G__15523,G__15524,G__15525,G__15526,G__15527,G__15528,G__15529,G__15530,G__15531,G__15532,G__15533,G__15534,G__15535,G__15536,G__15537,G__15538,G__15539,G__15540,G__15541,G__15542,G__15543,G__15544,G__15545,G__15546,G__15547,G__15548,G__15549,G__15550,G__15551,G__15552,G__15553,G__15554,G__15555,G__15556,G__15557,G__15558,G__15559,G__15560,G__15561,G__15562,G__15563,G__15564,G__15565,G__15566,G__15567,G__15568,G__15569,G__15570,G__15571,G__15572,G__15573,G__15574,G__15575);
})();
return React.createElement(G__15489,G__15490,G__15491);
})();
return React.createElement(G__15486,G__15487,G__15488);
}),null,"code");
snake_slides.slide03.cell_size = cljs.core.quot((600),snake_slides.slide03.rows);
snake_slides.slide03.draw_cell_BANG_ = (function snake_slides$slide03$draw_cell_BANG_(ctx,p__15576,is_center){
var vec__15580 = p__15576;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580,(1),null);
ctx.lineWidth = (2);

var rx = (snake_slides.slide03.cell_size * x);
var ry = (snake_slides.slide03.cell_size * y);
var rs = snake_slides.slide03.cell_size;
var cx = (snake_slides.slide03.cell_size * (x + 0.5));
var cy = (snake_slides.slide03.cell_size * (y + 0.5));
var cr = (snake_slides.slide03.cell_size / (4));
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
snake_slides.slide03.draw_piece_BANG_ = (function snake_slides$slide03$draw_piece_BANG_(ctx,piece,pos){
var seq__15593 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,snake_slides.slide03.piece_abs_coords(piece,pos)));
var chunk__15594 = null;
var count__15595 = (0);
var i__15596 = (0);
while(true){
if((i__15596 < count__15595)){
var vec__15597 = chunk__15594.cljs$core$IIndexed$_nth$arity$2(null,i__15596);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15597,(1),null);
snake_slides.slide03.draw_cell_BANG_(ctx,c,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));

var G__15603 = seq__15593;
var G__15604 = chunk__15594;
var G__15605 = count__15595;
var G__15606 = (i__15596 + (1));
seq__15593 = G__15603;
chunk__15594 = G__15604;
count__15595 = G__15605;
i__15596 = G__15606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15593);
if(temp__4657__auto__){
var seq__15593__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15593__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__15593__$1);
var G__15607 = cljs.core.chunk_rest(seq__15593__$1);
var G__15608 = c__8003__auto__;
var G__15609 = cljs.core.count(c__8003__auto__);
var G__15610 = (0);
seq__15593 = G__15607;
chunk__15594 = G__15608;
count__15595 = G__15609;
i__15596 = G__15610;
continue;
} else {
var vec__15600 = cljs.core.first(seq__15593__$1);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15600,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15600,(1),null);
snake_slides.slide03.draw_cell_BANG_(ctx,c,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)));

var G__15611 = cljs.core.next(seq__15593__$1);
var G__15612 = null;
var G__15613 = (0);
var G__15614 = (0);
seq__15593 = G__15611;
chunk__15594 = G__15612;
count__15595 = G__15613;
i__15596 = G__15614;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.slide03.draw_canvas_BANG_ = (function snake_slides$slide03$draw_canvas_BANG_(canvas){
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#222";

ctx.fillRect((0),(0),(snake_slides.slide03.cell_size * snake_slides.slide03.cols),(snake_slides.slide03.cell_size * snake_slides.slide03.rows));

var piece = cljs.core.cst$kw$piece.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.app) : cljs.core.deref.call(null,snake_slides.slide03.app)));
var pos = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.app) : cljs.core.deref.call(null,snake_slides.slide03.app)));
if(cljs.core.truth_((function (){var and__7172__auto__ = piece;
if(cljs.core.truth_(and__7172__auto__)){
return pos;
} else {
return and__7172__auto__;
}
})())){
var places_15645 = (function (){var G__15630 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(snake_slides.slide03.app) : cljs.core.deref.call(null,snake_slides.slide03.app));
return (snake_slides.slide03.state_places.cljs$core$IFn$_invoke$arity$1 ? snake_slides.slide03.state_places.cljs$core$IFn$_invoke$arity$1(G__15630) : snake_slides.slide03.state_places.call(null,G__15630));
})();
ctx.fillStyle = "#555";

ctx.strokeStyle = "#AAA";

var seq__15631_15646 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.take.cljs$core$IFn$_invoke$arity$2(places_15645,snake_slides.slide03.states)));
var chunk__15632_15647 = null;
var count__15633_15648 = (0);
var i__15634_15649 = (0);
while(true){
if((i__15634_15649 < count__15633_15648)){
var vec__15635_15650 = chunk__15632_15647.cljs$core$IIndexed$_nth$arity$2(null,i__15634_15649);
var i_15651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15635_15650,(0),null);
var map__15638_15652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15635_15650,(1),null);
var map__15638_15653__$1 = ((((!((map__15638_15652 == null)))?((((map__15638_15652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15638_15652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15638_15652):map__15638_15652);
var piece_15654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15653__$1,cljs.core.cst$kw$piece);
var position_15655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638_15653__$1,cljs.core.cst$kw$position);
var x_15656 = (7);
ctx.globalAlpha = (((function (){var x__7520__auto__ = (0);
var y__7521__auto__ = (function (){var x__7527__auto__ = x_15656;
var y__7528__auto__ = (i_15651 - (places_15645 - x_15656));
return ((x__7527__auto__ < y__7528__auto__) ? x__7527__auto__ : y__7528__auto__);
})();
return ((x__7520__auto__ > y__7521__auto__) ? x__7520__auto__ : y__7521__auto__);
})() / x_15656) / (5));

snake_slides.slide03.draw_piece_BANG_(ctx,piece_15654__$1,position_15655);

var G__15657 = seq__15631_15646;
var G__15658 = chunk__15632_15647;
var G__15659 = count__15633_15648;
var G__15660 = (i__15634_15649 + (1));
seq__15631_15646 = G__15657;
chunk__15632_15647 = G__15658;
count__15633_15648 = G__15659;
i__15634_15649 = G__15660;
continue;
} else {
var temp__4657__auto___15661 = cljs.core.seq(seq__15631_15646);
if(temp__4657__auto___15661){
var seq__15631_15662__$1 = temp__4657__auto___15661;
if(cljs.core.chunked_seq_QMARK_(seq__15631_15662__$1)){
var c__8003__auto___15663 = cljs.core.chunk_first(seq__15631_15662__$1);
var G__15664 = cljs.core.chunk_rest(seq__15631_15662__$1);
var G__15665 = c__8003__auto___15663;
var G__15666 = cljs.core.count(c__8003__auto___15663);
var G__15667 = (0);
seq__15631_15646 = G__15664;
chunk__15632_15647 = G__15665;
count__15633_15648 = G__15666;
i__15634_15649 = G__15667;
continue;
} else {
var vec__15640_15668 = cljs.core.first(seq__15631_15662__$1);
var i_15669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15668,(0),null);
var map__15643_15670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15640_15668,(1),null);
var map__15643_15671__$1 = ((((!((map__15643_15670 == null)))?((((map__15643_15670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15643_15670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15643_15670):map__15643_15670);
var piece_15672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643_15671__$1,cljs.core.cst$kw$piece);
var position_15673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15643_15671__$1,cljs.core.cst$kw$position);
var x_15674 = (7);
ctx.globalAlpha = (((function (){var x__7520__auto__ = (0);
var y__7521__auto__ = (function (){var x__7527__auto__ = x_15674;
var y__7528__auto__ = (i_15669 - (places_15645 - x_15674));
return ((x__7527__auto__ < y__7528__auto__) ? x__7527__auto__ : y__7528__auto__);
})();
return ((x__7520__auto__ > y__7521__auto__) ? x__7520__auto__ : y__7521__auto__);
})() / x_15674) / (5));

snake_slides.slide03.draw_piece_BANG_(ctx,piece_15672__$1,position_15673);

var G__15675 = cljs.core.next(seq__15631_15662__$1);
var G__15676 = null;
var G__15677 = (0);
var G__15678 = (0);
seq__15631_15646 = G__15675;
chunk__15632_15647 = G__15676;
count__15633_15648 = G__15677;
i__15634_15649 = G__15678;
continue;
}
} else {
}
}
break;
}

ctx.globalAlpha = (1);

ctx.fillStyle = snake_slides.slide03.dark_purple;

ctx.strokeStyle = snake_slides.slide03.light_purple;

return snake_slides.slide03.draw_piece_BANG_(ctx,piece,pos);
} else {
return null;
}
});
snake_slides.slide03.canvas_mixin = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$did_DASH_mount,(function (state){
var canvas = rum.core.ref(state,"canvas");
canvas.width = (snake_slides.slide03.cols * snake_slides.slide03.cell_size);

canvas.height = (snake_slides.slide03.rows * snake_slides.slide03.cell_size);

snake_slides.slide03.draw_canvas_BANG_(canvas);

return state;
}),cljs.core.cst$kw$did_DASH_update,(function (state){
var canvas = rum.core.ref(state,"canvas");
snake_slides.slide03.draw_canvas_BANG_(canvas);

return state;
})], null);
snake_slides.slide03.canvas = rum.core.build_defc((function (){
var G__15681 = "div";
var G__15682 = ({"className": "canvas-2a4d7"});
var G__15683 = (function (){var G__15684 = "canvas";
var G__15685 = ({"ref": "canvas", "style": ({"position": "relative"})});
return React.createElement(G__15684,G__15685);
})();
return React.createElement(G__15681,G__15682,G__15683);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [snake_slides.slide03.canvas_mixin], null),"canvas");
snake_slides.slide03.slide = rum.core.build_defc((function (){
var G__15688 = "div";
var G__15689 = null;
var G__15690 = React.createElement("h1",null,"3. Move the Sanke.");
var G__15691 = sablono.interpreter.interpret((snake_slides.slide03.code.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide03.code.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide03.code.call(null)));
var G__15692 = sablono.interpreter.interpret((snake_slides.slide03.canvas.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide03.canvas.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide03.canvas.call(null)));
return React.createElement(G__15688,G__15689,G__15690,G__15691,G__15692);
}),null,"slide");
snake_slides.slide03.render = (function snake_slides$slide03$render(){
return rum.core.mount((snake_slides.slide03.slide.cljs$core$IFn$_invoke$arity$0 ? snake_slides.slide03.slide.cljs$core$IFn$_invoke$arity$0() : snake_slides.slide03.slide.call(null)),snake_slides.slide03.slide_elm);
});
snake_slides.slide03.init = (function snake_slides$slide03$init(id){
snake_slides.slide03.slide_elm = document.getElementById(id);

snake_slides.slide03.render();

return cljs.core.add_watch(snake_slides.slide03.app,cljs.core.cst$kw$render,snake_slides.slide03.render);
});
snake_slides.slide03.resume = (function snake_slides$slide03$resume(){
return null;
});
snake_slides.slide03.stop = (function snake_slides$slide03$stop(){
return null;
});
