// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('basic_snake.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.EventType');
goog.require('cljs.pprint');
basic_snake.app.state = (function (){var G__15396 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$canvas_SLASH_ctx,cljs.core.cst$kw$canvas_SLASH_background_DASH_color,cljs.core.cst$kw$canvas_SLASH_width,cljs.core.cst$kw$canvas_SLASH_height,cljs.core.cst$kw$snake_SLASH_alive,cljs.core.cst$kw$snake_SLASH_width,cljs.core.cst$kw$canvas_SLASH_element,cljs.core.cst$kw$snake_SLASH_food,cljs.core.cst$kw$snake_SLASH_food_DASH_color,cljs.core.cst$kw$snake_SLASH_border,cljs.core.cst$kw$snake_SLASH_body,cljs.core.cst$kw$snake_SLASH_direction,cljs.core.cst$kw$snake_SLASH_height,cljs.core.cst$kw$snake_SLASH_body_DASH_color],[goog.dom.getElement("canvas").getContext("2d"),"white",(640),(480),true,(32),goog.dom.getElement("canvas"),null,"red",(2),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(24),"lime"]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15396) : cljs.core.atom.call(null,G__15396));
})();
basic_snake.app.axis_add = (function basic_snake$app$axis_add(p__15397,p__15398){
var vec__15405 = p__15397;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15405,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15405,(1),null);
var vec__15408 = p__15398;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
basic_snake.app.axis_equal_QMARK_ = (function basic_snake$app$axis_equal_QMARK_(p__15411,p__15412){
var vec__15419 = p__15411;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15419,(1),null);
var vec__15422 = p__15412;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15422,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15422,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2));
});
/**
 * Print current game state on console.(For debugging purpose)
 */
basic_snake.app.print_state = (function basic_snake$app$print_state(){
console.log("-------------------------------");

console.log((function (){var sb__8178__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15427_15429 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15428_15430 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15427_15429,_STAR_print_fn_STAR_15428_15430,sb__8178__auto__){
return (function (x__8179__auto__){
return sb__8178__auto__.append(x__8179__auto__);
});})(_STAR_print_newline_STAR_15427_15429,_STAR_print_fn_STAR_15428_15430,sb__8178__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15428_15430;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15427_15429;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8178__auto__)].join('');
})());

return console.log("-------------------------------\n");
});
/**
 * Draw the point on canvas according to snake's width/height.
 */
basic_snake.app.draw = (function basic_snake$app$draw(p__15431,color){
var vec__15437 = p__15431;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15437,(1),null);
var map__15440 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15440__$1 = ((((!((map__15440 == null)))?((((map__15440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15440):map__15440);
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15440__$1,cljs.core.cst$kw$canvas_SLASH_ctx);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15440__$1,cljs.core.cst$kw$snake_SLASH_width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15440__$1,cljs.core.cst$kw$snake_SLASH_height);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15440__$1,cljs.core.cst$kw$snake_SLASH_border);
(ctx["fillStyle"] = color);

return ctx.fillRect((x * width),(y * height),(width - border),(height - border));
});
/**
 * Resize the canvas according to state.
 */
basic_snake.app.resize_canvas = (function basic_snake$app$resize_canvas(){
var map__15444 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15444__$1 = ((((!((map__15444 == null)))?((((map__15444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15444):map__15444);
var element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15444__$1,cljs.core.cst$kw$canvas_SLASH_element);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15444__$1,cljs.core.cst$kw$canvas_SLASH_width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15444__$1,cljs.core.cst$kw$canvas_SLASH_height);
element.setAttribute("width",width);

return element.setAttribute("height",height);
});
/**
 * Convert javascript's keycode to direction array.
 */
basic_snake.app.keycode__GT_direction = (function basic_snake$app$keycode__GT_direction(keycode){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.events.KeyCodes.UP,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),goog.events.KeyCodes.DOWN,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),goog.events.KeyCodes.LEFT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),goog.events.KeyCodes.RIGHT,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)]),keycode,null);
});
/**
 * Detect two direction array are opposite direction or not.
 */
basic_snake.app.opposite_direction_QMARK_ = (function basic_snake$app$opposite_direction_QMARK_(dir1,dir2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),basic_snake.app.axis_add(dir1,dir2));
});
/**
 * The keydown event handler.
 */
basic_snake.app.on_keydown = (function basic_snake$app$on_keydown(event){
var map__15448 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15448__$1 = ((((!((map__15448 == null)))?((((map__15448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15448.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15448):map__15448);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15448__$1,cljs.core.cst$kw$snake_SLASH_direction);
var new_direction = basic_snake.app.keycode__GT_direction(event.keyCode);
if(cljs.core.truth_(new_direction)){
if(cljs.core.truth_(basic_snake.app.opposite_direction_QMARK_(new_direction,direction))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(basic_snake.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_direction], null),new_direction);
}
} else {
return null;
}
});
/**
 * Check if axis is exceed the game board boundary.
 */
basic_snake.app.out_of_boundary_QMARK_ = (function basic_snake$app$out_of_boundary_QMARK_(p__15450){
var vec__15454 = p__15450;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15454,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15454,(1),null);
var max_x = (cljs.core.cst$kw$canvas_SLASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))) / cljs.core.cst$kw$snake_SLASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))));
var max_y = (cljs.core.cst$kw$canvas_SLASH_height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))) / cljs.core.cst$kw$snake_SLASH_height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))));
return ((y >= max_y)) || ((y < (0))) || ((x >= max_x)) || ((x < (0)));
});
/**
 * Check if axis is collission with snake's body.
 */
basic_snake.app.self_collission_QMARK_ = (function basic_snake$app$self_collission_QMARK_(p__15458){
var vec__15464 = p__15458;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15464,(1),null);
var map__15467 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15467__$1 = ((((!((map__15467 == null)))?((((map__15467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15467.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15467):map__15467);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15467__$1,cljs.core.cst$kw$snake_SLASH_body);
return cljs.core.some(((function (map__15467,map__15467__$1,body,vec__15464,x,y){
return (function (p1__15457_SHARP_){
return basic_snake.app.axis_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__15457_SHARP_);
});})(map__15467,map__15467__$1,body,vec__15464,x,y))
,body);
});
/**
 * Check if asix if equal the food's axis.
 */
basic_snake.app.eat_food_QMARK_ = (function basic_snake$app$eat_food_QMARK_(p__15469){
var vec__15475 = p__15469;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15475,(1),null);
var map__15478 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15478__$1 = ((((!((map__15478 == null)))?((((map__15478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15478):map__15478);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15478__$1,cljs.core.cst$kw$snake_SLASH_food);
return basic_snake.app.axis_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),food);
});
/**
 * Generate the food on random coordinate.
 */
basic_snake.app.generate_food = (function basic_snake$app$generate_food(){
var map__15482 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15482__$1 = ((((!((map__15482 == null)))?((((map__15482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15482.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15482):map__15482);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$snake_SLASH_body);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$snake_SLASH_food);
var food_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15482__$1,cljs.core.cst$kw$snake_SLASH_food_DASH_color);
var max_x = (cljs.core.cst$kw$canvas_SLASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))) / cljs.core.cst$kw$snake_SLASH_width.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))));
var max_y = (cljs.core.cst$kw$canvas_SLASH_height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))) / cljs.core.cst$kw$snake_SLASH_height.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))));
if((food == null)){
var food__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
while(true){
if(cljs.core.not(basic_snake.app.self_collission_QMARK_(food__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(basic_snake.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_food], null),food__$1);

basic_snake.app.draw(food__$1,food_color);

return food__$1;
} else {
var G__15484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
food__$1 = G__15484;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * The main game-loop.
 */
basic_snake.app.game_loop = (function basic_snake$app$game_loop(){
var map__15491 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state));
var map__15491__$1 = ((((!((map__15491 == null)))?((((map__15491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15491):map__15491);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15491__$1,cljs.core.cst$kw$canvas_SLASH_background_DASH_color);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15491__$1,cljs.core.cst$kw$snake_SLASH_body);
var body_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15491__$1,cljs.core.cst$kw$snake_SLASH_body_DASH_color);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15491__$1,cljs.core.cst$kw$snake_SLASH_direction);
var head = basic_snake.app.axis_add(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0)),direction);
var tail = cljs.core.last(body);
basic_snake.app.generate_food();

if(cljs.core.truth_(basic_snake.app.self_collission_QMARK_(head))){
var G__15493_15497 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Snake is collission with itself at : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join('');
alert(G__15493_15497);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(basic_snake.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_alive], null),false);
} else {
}

if(cljs.core.truth_(basic_snake.app.out_of_boundary_QMARK_(head))){
var G__15494_15498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Snake is out of boundary at :"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join('');
alert(G__15494_15498);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(basic_snake.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_alive], null),false);
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$snake_SLASH_alive.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(basic_snake.app.state) : cljs.core.deref.call(null,basic_snake.app.state))))){
basic_snake.app.draw(head,body_color);

if(cljs.core.truth_(basic_snake.app.eat_food_QMARK_(head))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(basic_snake.app.state,cljs.core.assoc,cljs.core.cst$kw$snake_SLASH_food,null,cljs.core.array_seq([cljs.core.cst$kw$snake_SLASH_body,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)], 0));
} else {
basic_snake.app.draw(tail,background_color);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(basic_snake.app.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_body], null),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)));
}

var G__15495 = ((function (map__15491,map__15491__$1,background_color,body,body_color,direction,head,tail){
return (function (){
return (basic_snake.app.game_loop.cljs$core$IFn$_invoke$arity$0 ? basic_snake.app.game_loop.cljs$core$IFn$_invoke$arity$0() : basic_snake.app.game_loop.call(null));
});})(map__15491,map__15491__$1,background_color,body,body_color,direction,head,tail))
;
var G__15496 = (150);
return window.setTimeout(G__15495,G__15496);
} else {
return null;
}
});
basic_snake.app.init = (function basic_snake$app$init(){
basic_snake.app.resize_canvas();

goog.events.removeAll(document);

goog.events.listen(document,goog.events.EventType.KEYDOWN,basic_snake.app.on_keydown);

return basic_snake.app.game_loop();
});
