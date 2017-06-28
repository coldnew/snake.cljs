// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__7852__auto__ = (((this$ == null))?null:this$);
var m__7853__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__7852__auto__)]);
if(!((m__7853__auto__ == null))){
return (m__7853__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7853__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7853__auto__.call(null,this$));
} else {
var m__7853__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__7853__auto____$1 == null))){
return (m__7853__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7853__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7853__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInterpreter.interpret",this$);
}
}
}
});

sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element){
var G__13581 = ({"displayName": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("wrapped-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''), "getInitialState": (function (){
var this$ = this;
return ({"state_value": (this$.props["value"])});
}), "onChange": (function (e){
var this$ = this;
var handler = (this$.props["onChange"]);
if((handler == null)){
return null;
} else {
(handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(e) : handler.call(null,e));

return this$.setState(({"state_value": e.target.value}));
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = (this$.state["state_value"]);
var element__$1 = ReactDOM.findDOMNode(this$);
var element_value = element__$1.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(state_value,element_value)){
return this$.setState(({"state_value": element_value}));
} else {
return this$.setState(({"state_value": (new_props["value"])}));
}
}), "render": (function (){
var this$ = this;
var element_props = ({});
var G__13582_13585 = element_props;
var G__13583_13586 = this$.props;
var G__13584_13587 = ({"value": (function (){var or__7184__auto__ = (this$.state["state_value"]);
if(cljs.core.truth_(or__7184__auto__)){
return or__7184__auto__;
} else {
return undefined;
}
})(), "onChange": (this$["onChange"]), "children": (this$.props["children"])});
goog.object.extend(G__13582_13585,G__13583_13586,G__13584_13587);

return React.createElement(element,element_props);
})});
return React.createClass(G__13581);
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element("input");
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element("select");
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element("textarea");
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__8304__auto__ = [];
var len__8297__auto___13592 = arguments.length;
var i__8298__auto___13593 = (0);
while(true){
if((i__8298__auto___13593 < len__8297__auto___13592)){
args__8304__auto__.push((arguments[i__8298__auto___13593]));

var G__13594 = (i__8298__auto___13593 + (1));
i__8298__auto___13593 = G__13594;
continue;
} else {
}
break;
}

var argseq__8305__auto__ = ((((2) < args__8304__auto__.length))?(new cljs.core.IndexedSeq(args__8304__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8305__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = (function (){var G__13591 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type);
var G__13591__$1 = (((G__13591 instanceof cljs.core.Keyword))?G__13591.fqn:null);
switch (G__13591__$1) {
case "input":
if(cljs.core.truth_((function (){var and__7172__auto__ = props;
if(cljs.core.truth_(and__7172__auto__)){
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');
} else {
return and__7172__auto__;
}
})())){
return sablono.interpreter.wrapped_input;
} else {
return "input";
}

break;
case "select":
if(cljs.core.truth_((function (){var and__7172__auto__ = props;
if(cljs.core.truth_(and__7172__auto__)){
return typeof props.value !== 'undefined';
} else {
return and__7172__auto__;
}
})())){
return sablono.interpreter.wrapped_select;
} else {
return "select";
}

break;
case "textarea":
if(cljs.core.truth_((function (){var and__7172__auto__ = props;
if(cljs.core.truth_(and__7172__auto__)){
return typeof props.value !== 'undefined';
} else {
return and__7172__auto__;
}
})())){
return sablono.interpreter.wrapped_textarea;
} else {
return "textarea";
}

break;
default:
return cljs.core.name(type);

}
})();
var children__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_(children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq13588){
var G__13589 = cljs.core.first(seq13588);
var seq13588__$1 = cljs.core.next(seq13588);
var G__13590 = cljs.core.first(seq13588__$1);
var seq13588__$2 = cljs.core.next(seq13588__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__13589,G__13590,seq13588__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var attrs__$1 = cljs.core.clj__GT_js(sablono.util.html_to_dom_attrs(attrs));
var class$ = attrs__$1.className;
var class$__$1 = ((cljs.core.array_QMARK_(class$))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",class$):class$);
if(clojure.string.blank_QMARK_(class$__$1)){
delete attrs__$1["className"];
} else {
attrs__$1.className = class$__$1;
}

return attrs__$1;
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__13599 = sablono.normalize.element(element);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13599,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13599,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13599,(2),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.interpreter.create_element,type,sablono.interpreter.attributes(attrs),sablono.interpreter.interpret_seq(content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_(x))){
return sablono.interpreter.element(x);
} else {
return sablono.interpreter.interpret_seq(x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq(this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec(this$__$1);
});

(sablono.interpreter.IInterpreter["_"] = true);

(sablono.interpreter.interpret["_"] = (function (this$){
return this$;
}));

(sablono.interpreter.IInterpreter["null"] = true);

(sablono.interpreter.interpret["null"] = (function (this$){
return null;
}));
