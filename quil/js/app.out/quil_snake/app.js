// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('quil_snake.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.pprint');
quil_snake.app.axis_add = (function quil_snake$app$axis_add(p__16861,p__16862){
var vec__16869 = p__16861;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16869,(1),null);
var vec__16872 = p__16862;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16872,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
quil_snake.app.axis_equal_QMARK_ = (function quil_snake$app$axis_equal_QMARK_(p__16875,p__16876){
var vec__16883 = p__16875;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(1),null);
var vec__16886 = p__16876;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16886,(1),null);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,x2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y1,y2));
});
/**
 * Print current game state on console.(For debugging purpose)
 */
quil_snake.app.print_state = (function quil_snake$app$print_state(state){
console.log("-------------------------------");

console.log((function (){var sb__8178__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_16891_16893 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_16892_16894 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_16891_16893,_STAR_print_fn_STAR_16892_16894,sb__8178__auto__){
return (function (x__8179__auto__){
return sb__8178__auto__.append(x__8179__auto__);
});})(_STAR_print_newline_STAR_16891_16893,_STAR_print_fn_STAR_16892_16894,sb__8178__auto__))
;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(state);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_16892_16894;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_16891_16893;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8178__auto__)].join('');
})());

return console.log("-------------------------------\n");
});
/**
 * Detect two direction array are opposite direction or not.
 */
quil_snake.app.opposite_direction_QMARK_ = (function quil_snake$app$opposite_direction_QMARK_(dir1,dir2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),quil_snake.app.axis_add(dir1,dir2));
});
/**
 * Check if axis is exceed the game board boundary.
 */
quil_snake.app.out_of_boundary_QMARK_ = (function quil_snake$app$out_of_boundary_QMARK_(state,p__16895){
var vec__16901 = p__16895;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16901,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16901,(1),null);
var map__16904 = state;
var map__16904__$1 = ((((!((map__16904 == null)))?((((map__16904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16904):map__16904);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904__$1,cljs.core.cst$kw$snake_SLASH_width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16904__$1,cljs.core.cst$kw$snake_SLASH_height);
var max_x = (quil.core.width() / width);
var max_y = (quil.core.height() / height);
return ((y >= max_y)) || ((y < (0))) || ((x >= max_x)) || ((x < (0)));
});
/**
 * Check if axis is collission with snake's body.
 */
quil_snake.app.self_collission_QMARK_ = (function quil_snake$app$self_collission_QMARK_(state,p__16907){
var vec__16913 = p__16907;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16913,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16913,(1),null);
var map__16916 = state;
var map__16916__$1 = ((((!((map__16916 == null)))?((((map__16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16916.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16916):map__16916);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16916__$1,cljs.core.cst$kw$snake_SLASH_body);
return cljs.core.some(((function (map__16916,map__16916__$1,body,vec__16913,x,y){
return (function (p1__16906_SHARP_){
return quil_snake.app.axis_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),p1__16906_SHARP_);
});})(map__16916,map__16916__$1,body,vec__16913,x,y))
,body);
});
/**
 * Check if asix if equal the food's axis.
 */
quil_snake.app.eat_food_QMARK_ = (function quil_snake$app$eat_food_QMARK_(state,p__16918){
var vec__16924 = p__16918;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16924,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16924,(1),null);
var map__16927 = state;
var map__16927__$1 = ((((!((map__16927 == null)))?((((map__16927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16927):map__16927);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16927__$1,cljs.core.cst$kw$snake_SLASH_food);
return quil_snake.app.axis_equal_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),food);
});
quil_snake.app.setup_state = (function quil_snake$app$setup_state(){
quil.core.frame_rate((10));

return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$canvas_SLASH_background_DASH_color,cljs.core.cst$kw$snake_SLASH_alive,cljs.core.cst$kw$snake_SLASH_width,cljs.core.cst$kw$snake_SLASH_food,cljs.core.cst$kw$snake_SLASH_food_DASH_color,cljs.core.cst$kw$snake_SLASH_border,cljs.core.cst$kw$snake_SLASH_body,cljs.core.cst$kw$snake_SLASH_direction,cljs.core.cst$kw$snake_SLASH_height,cljs.core.cst$kw$snake_SLASH_body_DASH_color],[quil.core.color.cljs$core$IFn$_invoke$arity$3((255),(255),(255)),true,(32),null,quil.core.color.cljs$core$IFn$_invoke$arity$3((255),(0),(0)),(2),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),(24),quil.core.color.cljs$core$IFn$_invoke$arity$3((191),(255),(0))]);
});
quil_snake.app.draw_state = (function quil_snake$app$draw_state(state){
var map__16947 = state;
var map__16947__$1 = ((((!((map__16947 == null)))?((((map__16947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16947):map__16947);
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$canvas_SLASH_background_DASH_color);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_body);
var body_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_body_DASH_color);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_height);
var border = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_border);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_food);
var food_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$snake_SLASH_food_DASH_color);
var vec__16948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16948,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16948,(1),null);
quil.core.background.cljs$core$IFn$_invoke$arity$1(background_color);

var temp__4657__auto___16965 = food;
if(cljs.core.truth_(temp__4657__auto___16965)){
var vec__16952_16966 = temp__4657__auto___16965;
var x_16967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952_16966,(0),null);
var y_16968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16952_16966,(1),null);
quil.core.fill.cljs$core$IFn$_invoke$arity$1(food_color);

quil.core.rect.cljs$core$IFn$_invoke$arity$4((x_16967__$1 * width),(y_16968__$1 * height),(width - border),(height - border));
} else {
}

quil.core.fill.cljs$core$IFn$_invoke$arity$1(body_color);

var seq__16955 = cljs.core.seq(body);
var chunk__16956 = null;
var count__16957 = (0);
var i__16958 = (0);
while(true){
if((i__16958 < count__16957)){
var vec__16959 = chunk__16956.cljs$core$IIndexed$_nth$arity$2(null,i__16958);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16959,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16959,(1),null);
quil.core.rect.cljs$core$IFn$_invoke$arity$4((x__$1 * width),(y__$1 * height),(width - border),(height - border));

var G__16969 = seq__16955;
var G__16970 = chunk__16956;
var G__16971 = count__16957;
var G__16972 = (i__16958 + (1));
seq__16955 = G__16969;
chunk__16956 = G__16970;
count__16957 = G__16971;
i__16958 = G__16972;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16955);
if(temp__4657__auto__){
var seq__16955__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16955__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__16955__$1);
var G__16973 = cljs.core.chunk_rest(seq__16955__$1);
var G__16974 = c__8003__auto__;
var G__16975 = cljs.core.count(c__8003__auto__);
var G__16976 = (0);
seq__16955 = G__16973;
chunk__16956 = G__16974;
count__16957 = G__16975;
i__16958 = G__16976;
continue;
} else {
var vec__16962 = cljs.core.first(seq__16955__$1);
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16962,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16962,(1),null);
quil.core.rect.cljs$core$IFn$_invoke$arity$4((x__$1 * width),(y__$1 * height),(width - border),(height - border));

var G__16977 = cljs.core.next(seq__16955__$1);
var G__16978 = null;
var G__16979 = (0);
var G__16980 = (0);
seq__16955 = G__16977;
chunk__16956 = G__16978;
count__16957 = G__16979;
i__16958 = G__16980;
continue;
}
} else {
return null;
}
}
break;
}
});
quil_snake.app.on_keydown = (function quil_snake$app$on_keydown(state,e){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$up,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),cljs.core.cst$kw$down,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.cst$kw$left,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),cljs.core.cst$kw$right,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(e),null);
if(cljs.core.truth_(temp__4655__auto__)){
var new_direction = temp__4655__auto__;
if(cljs.core.not(quil_snake.app.opposite_direction_QMARK_(new_direction,cljs.core.cst$kw$snake_SLASH_direction.cljs$core$IFn$_invoke$arity$1(state)))){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_direction], null),new_direction);
} else {
return state;
}
} else {
return state;
}
});
/**
 * Generate the food on random coordinate.
 */
quil_snake.app.generate_food = (function quil_snake$app$generate_food(state){
var map__16983 = state;
var map__16983__$1 = ((((!((map__16983 == null)))?((((map__16983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16983):map__16983);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16983__$1,cljs.core.cst$kw$snake_SLASH_body);
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16983__$1,cljs.core.cst$kw$snake_SLASH_food);
var food_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16983__$1,cljs.core.cst$kw$snake_SLASH_food_DASH_color);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16983__$1,cljs.core.cst$kw$snake_SLASH_width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16983__$1,cljs.core.cst$kw$snake_SLASH_height);
var max_x = (quil.core.width() / width);
var max_y = (quil.core.height() / height);
if((food == null)){
var food__$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
while(true){
if(cljs.core.not(quil_snake.app.self_collission_QMARK_(state,food__$1))){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_food], null),food__$1);
} else {
var G__16985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int(max_x),cljs.core.rand_int(max_y)], null);
food__$1 = G__16985;
continue;
}
break;
}
} else {
return state;
}
});
quil_snake.app.next_snake = (function quil_snake$app$next_snake(state){
var map__16988 = state;
var map__16988__$1 = ((((!((map__16988 == null)))?((((map__16988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16988):map__16988);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,cljs.core.cst$kw$snake_SLASH_body);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,cljs.core.cst$kw$snake_SLASH_direction);
var head = quil_snake.app.axis_add(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0)),direction);
var tail = cljs.core.last(body);
if(cljs.core.truth_(cljs.core.cst$kw$snake_SLASH_alive.cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_(quil_snake.app.eat_food_QMARK_(state,head))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$snake_SLASH_food,null,cljs.core.array_seq([cljs.core.cst$kw$snake_SLASH_body,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$snake_SLASH_body,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body,head)));
}
} else {
return quil.core.no_loop();
}
});
quil_snake.app.detect_boundary = (function quil_snake$app$detect_boundary(state){
var map__16993 = state;
var map__16993__$1 = ((((!((map__16993 == null)))?((((map__16993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16993.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16993):map__16993);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16993__$1,cljs.core.cst$kw$snake_SLASH_body);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16993__$1,cljs.core.cst$kw$snake_SLASH_direction);
var head = quil_snake.app.axis_add(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0)),direction);
var tail = cljs.core.last(body);
if(cljs.core.truth_(quil_snake.app.out_of_boundary_QMARK_(state,head))){
var G__16995_16996 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Snake is out of boundary at :"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join('');
alert(G__16995_16996);

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_alive], null),false);
} else {
return state;
}
});
quil_snake.app.detect_collission = (function quil_snake$app$detect_collission(state){
var map__17000 = state;
var map__17000__$1 = ((((!((map__17000 == null)))?((((map__17000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17000.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17000):map__17000);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17000__$1,cljs.core.cst$kw$snake_SLASH_body);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17000__$1,cljs.core.cst$kw$snake_SLASH_direction);
var head = quil_snake.app.axis_add(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(body,(0)),direction);
var tail = cljs.core.last(body);
if(cljs.core.truth_(quil_snake.app.self_collission_QMARK_(state,head))){
var G__17002_17003 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Snake is collission with itself at : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(head)].join('');
alert(G__17002_17003);

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$snake_SLASH_alive], null),false);
} else {
return state;
}
});
quil_snake.app.update_state = (function quil_snake$app$update_state(state){
return quil_snake.app.next_snake(quil_snake.app.detect_collission(quil_snake.app.detect_boundary(quil_snake.app.generate_food(state))));
});
quil_snake.app.init = (function quil_snake$app$init(){
quil_snake.app.snake = (function quil_snake$app$init_$_snake(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$host,"canvas",cljs.core.cst$kw$settings,(function (){
return quil.core.smooth.cljs$core$IFn$_invoke$arity$1((2));
}),cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(quil_snake.app.update_state))?(function() { 
var G__17004__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil_snake.app.update_state,args);
};
var G__17004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17005__i = 0, G__17005__a = new Array(arguments.length -  0);
while (G__17005__i < G__17005__a.length) {G__17005__a[G__17005__i] = arguments[G__17005__i + 0]; ++G__17005__i;}
  args = new cljs.core.IndexedSeq(G__17005__a,0,null);
} 
return G__17004__delegate.call(this,args);};
G__17004.cljs$lang$maxFixedArity = 0;
G__17004.cljs$lang$applyTo = (function (arglist__17006){
var args = cljs.core.seq(arglist__17006);
return G__17004__delegate(args);
});
G__17004.cljs$core$IFn$_invoke$arity$variadic = G__17004__delegate;
return G__17004;
})()
:quil_snake.app.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(480)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(quil_snake.app.setup_state))?(function() { 
var G__17007__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil_snake.app.setup_state,args);
};
var G__17007 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17008__i = 0, G__17008__a = new Array(arguments.length -  0);
while (G__17008__i < G__17008__a.length) {G__17008__a[G__17008__i] = arguments[G__17008__i + 0]; ++G__17008__i;}
  args = new cljs.core.IndexedSeq(G__17008__a,0,null);
} 
return G__17007__delegate.call(this,args);};
G__17007.cljs$lang$maxFixedArity = 0;
G__17007.cljs$lang$applyTo = (function (arglist__17009){
var args = cljs.core.seq(arglist__17009);
return G__17007__delegate(args);
});
G__17007.cljs$core$IFn$_invoke$arity$variadic = G__17007__delegate;
return G__17007;
})()
:quil_snake.app.setup_state),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(quil_snake.app.on_keydown))?(function() { 
var G__17010__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil_snake.app.on_keydown,args);
};
var G__17010 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17011__i = 0, G__17011__a = new Array(arguments.length -  0);
while (G__17011__i < G__17011__a.length) {G__17011__a[G__17011__i] = arguments[G__17011__i + 0]; ++G__17011__i;}
  args = new cljs.core.IndexedSeq(G__17011__a,0,null);
} 
return G__17010__delegate.call(this,args);};
G__17010.cljs$lang$maxFixedArity = 0;
G__17010.cljs$lang$applyTo = (function (arglist__17012){
var args = cljs.core.seq(arglist__17012);
return G__17010__delegate(args);
});
G__17010.cljs$core$IFn$_invoke$arity$variadic = G__17010__delegate;
return G__17010;
})()
:quil_snake.app.on_keydown),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(quil_snake.app.draw_state))?(function() { 
var G__17013__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil_snake.app.draw_state,args);
};
var G__17013 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17014__i = 0, G__17014__a = new Array(arguments.length -  0);
while (G__17014__i < G__17014__a.length) {G__17014__a[G__17014__i] = arguments[G__17014__i + 0]; ++G__17014__i;}
  args = new cljs.core.IndexedSeq(G__17014__a,0,null);
} 
return G__17013__delegate.call(this,args);};
G__17013.cljs$lang$maxFixedArity = 0;
G__17013.cljs$lang$applyTo = (function (arglist__17015){
var args = cljs.core.seq(arglist__17015);
return G__17013__delegate(args);
});
G__17013.cljs$core$IFn$_invoke$arity$variadic = G__17013__delegate;
return G__17013;
})()
:quil_snake.app.draw_state)], 0));
});
goog.exportSymbol('quil_snake.app.snake', quil_snake.app.snake);

if(cljs.core.truth_(cljs.core.some((function (p1__15520__15521__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__15520__15521__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,quil_snake.app.snake,cljs.core.cst$kw$host_DASH_id,"canvas"], null));
}
});
