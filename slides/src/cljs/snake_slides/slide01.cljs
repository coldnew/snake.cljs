(ns snake-slides.slide01
  (:require [rum.core :as rum]
            [snake-slides.syntax-highlight :as sx]))

(def dark-green "#143")
(def light-green "#175")
(def dark-purple "#449")
(def light-purple "#6ad")
(def dark-red "#944")
(def light-red "#f8c")

(def app (atom {:row nil :col nil
                :board [[ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]
                        [ 0 0 0 0 0 0 0 0 0 0]]
                }))

(def rows 20)
(def cols 10)
(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defn data-row [row]
  [:span
   {:key (str "row" row)
    :class (if (= row (:row @app)) "active-row-534ed" "")
    :onMouseEnter #(swap! app assoc :row row)
    :onMouseLeave #(swap! app assoc :row nil)}

   "["
   (for [col (range cols)]
     [:span
      {:key (str "row" row "col" col)
       :class (if (and (= row (:row @app))
                       (= col (:col @app))) "active-col-d9099")
       :onMouseEnter #(swap! app assoc :col col)
       :onMouseLeave #(swap! app assoc :col nil)}

      (list " " (sx/lit (get-in empty-board [row col])))])
   " ]"])

(rum/defc code []
  [:div.code-cb62a
   [:pre
    [:code#lang-clj
     "(" (sx/core "def") " rows " (sx/lit "10") ")\n"
     "(" (sx/core "def") " cols " (sx/lit "10") ")\n"
     "(" (sx/core "def") " empty-row (" (sx/core "vec") " (" (sx/core "repeat") " cols " (sx/lit "0") ")))\n"
     "(" (sx/core "def") " empty-board (" (sx/core "vec") " (" (sx/core "repeat") " rows empty-row)))\n"]
    [:code
     "> empty-board\n\n"
     "\n"
     (sx/cmt "; TRY IT: mouse over the zeros.") "\n"
     "\n"
     (for [row (range 10)]
       (condp = row
         0          (list "  [" (data-row row) "\n")
         (dec rows) (list "   " (data-row row) "]\n")
         (list "   " (data-row row) "\n")))]]])

(def cell-size (quot 600 rows))

(def global-canvas)

(defn canvas-mouse [e]
  (let [canvas global-canvas
        rect (.getBoundingClientRect canvas)
        x (- (.-clientX e) (.-left rect))
        y (- (.-clientY e) (.-top rect))
        col (quot x cell-size)
        row (quot y cell-size)]
    (swap! app assoc :row row)
    (swap! app assoc :col col)))

(defn draw-cell!
  [ctx [x y]]
  (let [rx (* cell-size x)
        ry (* cell-size y)
        rs cell-size]
    (.. ctx (fillRect rx ry rs rs))
    (.. ctx (strokeRect rx ry rs rs))))

(defn draw-food! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-red)
  (set! (.. ctx -strokeStyle) light-red)
  (draw-cell!  ctx [x y]))

(defn draw-snake! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-purple)
  (set! (.. ctx -strokeStyle) light-purple)
  (draw-cell!  ctx [x y]))

(defn draw-board! [ctx [x y]]
  (set! (.. ctx -fillStyle) "#222")
  (set! (.. ctx -strokeStyle) "#888")
  (draw-cell! ctx [x y]))


(defn draw-canvas! [canvas]
  (let [ctx (.. canvas (getContext "2d"))
        x (:col @app)
        y (:row @app)
        board (:board @app)]
    (set! (.. ctx -fillStyle) "#222")
    (.. ctx (fillRect 0 0 (* cell-size cols) (* cell-size rows)))
    ;;
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
          (.log js/console "YOU SHOULD NOT ENTER HERE!!!"))))
    ;;
    (set! (.. ctx -lineWidth) 2)
    (when y
      (set! (.. ctx -fillStyle) dark-green)
      (set! (.. ctx -strokeStyle) light-green)
      (doseq [x0 (range cols) :when (not= x0 x)]
        (draw-cell! ctx [x0 (+ 5 y)]))
      (set! (.. ctx -fillStyle) dark-purple)
      (set! (.. ctx -strokeStyle) light-purple)
      (when x
        (draw-cell! ctx [x (+ 5 y)])))))

(def canvas-mixin
  {:did-mount
   (fn [state]
     (let [canvas (rum/ref state "canvas")]
       (set! global-canvas canvas)
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
  [:div.canvas-2a4d7
   [:canvas
    {:ref "canvas"
     :style {:position "relative"}
     :onMouseMove canvas-mouse
     :onMouseLeave #(do (swap! app assoc :row nil)
                        (swap! app assoc :col nil))}]])

(rum/defc slide []
  [:div
   [:h1 "1. Create the board."]
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