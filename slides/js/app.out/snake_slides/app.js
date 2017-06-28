// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('snake_slides.app');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('snake_slides.slide00');
goog.require('snake_slides.slide01');
goog.require('snake_slides.slide02');
goog.require('snake_slides.slide03');
goog.require('snake_slides.slide04');
cljs.core.enable_console_print_BANG_();
if(typeof snake_slides.app.current_slide !== 'undefined'){
} else {
snake_slides.app.current_slide = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof snake_slides.app.slides !== 'undefined'){
} else {
snake_slides.app.slides = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"slide00",cljs.core.cst$kw$init,snake_slides.slide00.init,cljs.core.cst$kw$resume,snake_slides.slide00.resume,cljs.core.cst$kw$stop,snake_slides.slide00.stop], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"slide01",cljs.core.cst$kw$init,snake_slides.slide01.init,cljs.core.cst$kw$resume,snake_slides.slide01.resume,cljs.core.cst$kw$stop,snake_slides.slide01.stop], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"slide02",cljs.core.cst$kw$init,snake_slides.slide02.init,cljs.core.cst$kw$resume,snake_slides.slide02.resume,cljs.core.cst$kw$stop,snake_slides.slide02.stop], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"slide03",cljs.core.cst$kw$init,snake_slides.slide03.init,cljs.core.cst$kw$resume,snake_slides.slide03.resume,cljs.core.cst$kw$stop,snake_slides.slide03.stop], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"slide04",cljs.core.cst$kw$init,snake_slides.slide04.init,cljs.core.cst$kw$resume,snake_slides.slide04.resume,cljs.core.cst$kw$stop,snake_slides.slide04.stop], null)], null);
}
snake_slides.app.on_slide_change = (function snake_slides$app$on_slide_change(_,___$1,i_prev,i){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i_prev,i)){
return null;
} else {
var seq__16466_16476 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,snake_slides.app.slides));
var chunk__16467_16477 = null;
var count__16468_16478 = (0);
var i__16469_16479 = (0);
while(true){
if((i__16469_16479 < count__16468_16478)){
var vec__16470_16480 = chunk__16467_16477.cljs$core$IIndexed$_nth$arity$2(null,i__16469_16479);
var j_16481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16470_16480,(0),null);
var slide_16482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16470_16480,(1),null);
var pos_16483 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((j_16481 - i) * (100)) + (50))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
var elm_16484 = document.getElementById(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(slide_16482));
(elm_16484["style"]["left"] = pos_16483);

var G__16485 = seq__16466_16476;
var G__16486 = chunk__16467_16477;
var G__16487 = count__16468_16478;
var G__16488 = (i__16469_16479 + (1));
seq__16466_16476 = G__16485;
chunk__16467_16477 = G__16486;
count__16468_16478 = G__16487;
i__16469_16479 = G__16488;
continue;
} else {
var temp__4657__auto___16489 = cljs.core.seq(seq__16466_16476);
if(temp__4657__auto___16489){
var seq__16466_16490__$1 = temp__4657__auto___16489;
if(cljs.core.chunked_seq_QMARK_(seq__16466_16490__$1)){
var c__8003__auto___16491 = cljs.core.chunk_first(seq__16466_16490__$1);
var G__16492 = cljs.core.chunk_rest(seq__16466_16490__$1);
var G__16493 = c__8003__auto___16491;
var G__16494 = cljs.core.count(c__8003__auto___16491);
var G__16495 = (0);
seq__16466_16476 = G__16492;
chunk__16467_16477 = G__16493;
count__16468_16478 = G__16494;
i__16469_16479 = G__16495;
continue;
} else {
var vec__16473_16496 = cljs.core.first(seq__16466_16490__$1);
var j_16497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473_16496,(0),null);
var slide_16498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16473_16496,(1),null);
var pos_16499 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((j_16497 - i) * (100)) + (50))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("%")].join('');
var elm_16500 = document.getElementById(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(slide_16498));
(elm_16500["style"]["left"] = pos_16499);

var G__16501 = cljs.core.next(seq__16466_16490__$1);
var G__16502 = null;
var G__16503 = (0);
var G__16504 = (0);
seq__16466_16476 = G__16501;
chunk__16467_16477 = G__16502;
count__16468_16478 = G__16503;
i__16469_16479 = G__16504;
continue;
}
} else {
}
}
break;
}

var stop_16505 = cljs.core.cst$kw$stop.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake_slides.app.slides,i_prev));
var resume_16506 = cljs.core.cst$kw$resume.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake_slides.app.slides,i));
if(cljs.core.truth_(stop_16505)){
(stop_16505.cljs$core$IFn$_invoke$arity$0 ? stop_16505.cljs$core$IFn$_invoke$arity$0() : stop_16505.call(null));
} else {
}

if(cljs.core.truth_(resume_16506)){
(resume_16506.cljs$core$IFn$_invoke$arity$0 ? resume_16506.cljs$core$IFn$_invoke$arity$0() : resume_16506.call(null));
} else {
}

return (document["location"]["hash"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));
}
});
cljs.core.add_watch(snake_slides.app.current_slide,cljs.core.cst$kw$slide,snake_slides.app.on_slide_change);
snake_slides.app.key_names = new cljs.core.PersistentArrayMap(null, 5, [(37),cljs.core.cst$kw$left,(38),cljs.core.cst$kw$up,(39),cljs.core.cst$kw$right,(40),cljs.core.cst$kw$down,(32),cljs.core.cst$kw$space], null);
snake_slides.app.key_name = (function snake_slides$app$key_name(p1__16507_SHARP_){
var G__16509 = p1__16507_SHARP_.keyCode;
return (snake_slides.app.key_names.cljs$core$IFn$_invoke$arity$1 ? snake_slides.app.key_names.cljs$core$IFn$_invoke$arity$1(G__16509) : snake_slides.app.key_names.call(null,G__16509));
});
snake_slides.app.key_down = (function snake_slides$app$key_down(e){
var kname = snake_slides.app.key_name(e);
var shift = e.shiftKey;
var G__16513 = kname;
var G__16513__$1 = (((G__16513 instanceof cljs.core.Keyword))?G__16513.fqn:null);
switch (G__16513__$1) {
case "left":
if(cljs.core.truth_(shift)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake_slides.app.current_slide,((function (G__16513,G__16513__$1,kname,shift){
return (function (p1__16510_SHARP_){
var x__7520__auto__ = (0);
var y__7521__auto__ = (p1__16510_SHARP_ - (1));
return ((x__7520__auto__ > y__7521__auto__) ? x__7520__auto__ : y__7521__auto__);
});})(G__16513,G__16513__$1,kname,shift))
);

return e.preventDefault();
} else {
return null;
}

break;
case "right":
if(cljs.core.truth_(shift)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake_slides.app.current_slide,((function (G__16513,G__16513__$1,kname,shift){
return (function (p1__16511_SHARP_){
var x__7527__auto__ = (cljs.core.count(snake_slides.app.slides) - (1));
var y__7528__auto__ = (p1__16511_SHARP_ + (1));
return ((x__7527__auto__ < y__7528__auto__) ? x__7527__auto__ : y__7528__auto__);
});})(G__16513,G__16513__$1,kname,shift))
);

return e.preventDefault();
} else {
return null;
}

break;
default:
return null;

}
});
snake_slides.app.on_hash_change = (function snake_slides$app$on_hash_change(){
var hash_ = (document["location"]["hash"]).replace(/^#/,"");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hash_,"")){
(document["location"]["hash"] = "0");
} else {
}

var slide_number = parseInt(hash_);
var slide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snake_slides.app.slides,slide_number);
if(cljs.core.truth_(slide)){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(snake_slides.app.current_slide,slide_number) : cljs.core.reset_BANG_.call(null,snake_slides.app.current_slide,slide_number));
} else {
return null;
}
});
snake_slides.app.init_slides_BANG_ = (function snake_slides$app$init_slides_BANG_(){
var seq__16523 = cljs.core.seq(snake_slides.app.slides);
var chunk__16524 = null;
var count__16525 = (0);
var i__16526 = (0);
while(true){
if((i__16526 < count__16525)){
var map__16527 = chunk__16524.cljs$core$IIndexed$_nth$arity$2(null,i__16526);
var map__16527__$1 = ((((!((map__16527 == null)))?((((map__16527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16527):map__16527);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,cljs.core.cst$kw$id);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16527__$1,cljs.core.cst$kw$init);
(init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(id) : init.call(null,id));

var G__16531 = seq__16523;
var G__16532 = chunk__16524;
var G__16533 = count__16525;
var G__16534 = (i__16526 + (1));
seq__16523 = G__16531;
chunk__16524 = G__16532;
count__16525 = G__16533;
i__16526 = G__16534;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__16523);
if(temp__4657__auto__){
var seq__16523__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16523__$1)){
var c__8003__auto__ = cljs.core.chunk_first(seq__16523__$1);
var G__16535 = cljs.core.chunk_rest(seq__16523__$1);
var G__16536 = c__8003__auto__;
var G__16537 = cljs.core.count(c__8003__auto__);
var G__16538 = (0);
seq__16523 = G__16535;
chunk__16524 = G__16536;
count__16525 = G__16537;
i__16526 = G__16538;
continue;
} else {
var map__16529 = cljs.core.first(seq__16523__$1);
var map__16529__$1 = ((((!((map__16529 == null)))?((((map__16529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16529):map__16529);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16529__$1,cljs.core.cst$kw$id);
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16529__$1,cljs.core.cst$kw$init);
(init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(id) : init.call(null,id));

var G__16539 = cljs.core.next(seq__16523__$1);
var G__16540 = null;
var G__16541 = (0);
var G__16542 = (0);
seq__16523 = G__16539;
chunk__16524 = G__16540;
count__16525 = G__16541;
i__16526 = G__16542;
continue;
}
} else {
return null;
}
}
break;
}
});
snake_slides.app.init = (function snake_slides$app$init(){
snake_slides.app.init_slides_BANG_();

window.addEventListener("keydown",snake_slides.app.key_down);

(window["onhashchange"] = snake_slides.app.on_hash_change);

snake_slides.app.on_hash_change();

return document.body.className = "loaded";
});
window.addEventListener("load",snake_slides.app.init);
