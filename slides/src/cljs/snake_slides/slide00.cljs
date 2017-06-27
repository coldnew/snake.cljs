(ns snake-slides.slide00
  (:require [rum.core :as rum]
            [snake-slides.syntax-highlight :as sx]))


(def dark-green "#143")
(def light-green "#175")
(def dark-purple "#449")
(def light-purple "#6ad")
(def dark-red "#944")
(def light-red "#f8c")

(def rows 20)
(def cols 10)
(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(def initial-pos [4 6])

(def app (atom
          {:board                       ; 10x10
           [[ 0 0 0 0 0 0 0 0 0 0]
            [ 0 0 0 0 0 0 0 0 0 0]
            [ 0 0 2 0 0 0 0 0 0 0]
            [ 0 0 0 0 0 0 0 0 0 0]
            [ 0 0 0 0 1 0 0 0 0 0]
            [ 0 0 0 0 1 0 0 0 0 0]
            [ 0 0 0 0 1 1 1 0 0 0]
            [ 0 0 0 0 0 0 1 0 0 0]
            [ 0 0 0 0 0 0 1 0 0 0]
            [ 0 0 0 0 0 0 0 0 0 0]
            ]}))

(rum/defc code []
  [:.code-cb62a
   [:pre
    [:code
     (sx/cmt ";; This is an animated & interactive guide to ") "\n"
     (sx/cmt ";; building a game in ClojureScript, because") "\n"
     (sx/cmt ";; I find the design patterns very interesting.") "\n"
     "\n"
     (sx/cmt ";; This requires some knowledge of ClojureScript,") "\n"
     (sx/cmt ";; which you can find " (sx/kw [:a {:href "https://github.com/shaunlebron/ClojureScript-Syntax-in-15-minutes"} "here"]) ".") "\n"
     "\n"
     (sx/cmt ";; Created by " (sx/core [:a {:href "https://github.com/coldnew"} "@coldnew"])) "\n"
     "\n"
     "\n"
     (sx/cmt ";; Styling borrowed from " (sx/lit [:a {:href "http://twitter.com/ibdknox"} "@ibdknox"])) "\n"
     (sx/cmt ";; Idea borrowed from " (sx/lit [:a {:href "https://github.com/shaunlebron/t3tr0s-slides/"} "@shaulebron"])) "\n"
     "\n\n\n\n\n\n"
     (sx/cmt ";; ") "SHIFT + RIGHT for next slide" (sx/cmt " ---------------->>")]]])

(def cell-size (quot 600 rows))

(defn draw-cell!
  [ctx [x y] is-center]
  (set! (.. ctx -lineWidth) 2)
  (let [rx (* cell-size x)
        ry (* cell-size y)
        rs cell-size
        cx (* cell-size (+ x 0.5))
        cy (* cell-size (+ y 0.5))
        cr (/ cell-size 4)]
    (.. ctx (fillRect rx ry rs rs))
    (.. ctx (strokeRect rx ry rs rs))))

(defn draw-food! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-red)
  (set! (.. ctx -strokeStyle) light-red)
  (draw-cell!  ctx [x y] false))

(defn draw-snake! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-purple)
  (set! (.. ctx -strokeStyle) light-purple)
  (draw-cell!  ctx [x y] false))

(defn draw-board! [ctx [x y]]
  (set! (.. ctx -fillStyle) "#222")
  (set! (.. ctx -strokeStyle) "#888")
  (draw-cell!  ctx [x y] false))

(defn draw-canvas! [canvas]
  (let [ctx (.. canvas (getContext "2d"))
        board (:board @app)]
    ;; clear canvas
    (set! (.. ctx -fillStyle) "#222")
    (.. ctx (fillRect 0 0 (* cell-size cols) (* cell-size rows)))
    ;; draw board, snake, and food
    (doseq [y (range 10)
            x (range cols)]
      (let [v (get-in board [y x])
            ;; offset x, y to center
            [x1 y1] [x (+ 5 y)]]
        (case v
          0 (draw-board! ctx [x1 y1])
          1 (draw-snake! ctx [x1 y1])
          2 (draw-food!  ctx [x1 y1])
          ;; else
          (.log js/console "YOU SHOULD NOT ENTER HERE!!!"))))))

(def canvas-mixin
  {:did-mount
   (fn [state]
     (let [canvas (rum/ref state "canvas")]
       (set! (.. canvas -width) (* cols cell-size))
       (set! (.. canvas -height) (* rows cell-size))
       (draw-canvas! canvas)
       state))
   :did-update
   (fn [state]
     (let [canvas (rum/ref state "canvas")]
       (draw-canvas! canvas)
       state))})

(rum/defc canvas < canvas-mixin []
  [:.canvas-2a4d7
   [:canvas
    {:ref "canvas"}]])

(rum/defc slide []
  [:div
   [:h1 "Snake in ClojureScript"]
   (code)
   (canvas)])

(def slide-elm)
(defn render []
  (rum/mount (slide) slide-elm))

(defn init [id]
  (set! slide-elm (js/document.getElementById id))
  (render)
  (add-watch app :render render))

(defn resume [])
(defn stop [])