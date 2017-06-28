(ns snake-slides.slide04
  (:require [rum.core :as rum]
            [snake-slides.syntax-highlight :as sx]))

(def dark-green "#143")
(def light-green "#175")
(def dark-purple "#449")
(def light-purple "#6ad")
(def dark-red "#944")
(def light-red "#f8c")

(def pieces
  { :I '([0 0] [1 0] [2 0] [3 0 ])
   })

(defn draw-snake [snake head]
  (-> snake
      (conj head)
      (drop-last)))

(defn move-up    [[x y]] [      x  (dec y) ])
(defn move-left  [[x y]] [ (dec x)      y  ])
(defn move-right [[x y]] [ (inc x)      y  ])
(defn move-down  [[x y]] [      x  (inc y) ])

(defn next-head [snake direction]
  (let [head (first snake)]
    (case direction
      :left  (move-left head)
      :right (move-right head)
      :up    (move-up head)
      :down  (move-down head))))

(defn next-snake [snake direction]
  (let [head (next-head snake direction)]
    (draw-snake snake  head)))

(def g0  {:position [1 6] :piece (:I pieces)})
(def g1  {:position [1 6] :piece (next-snake (:piece g0) :down)})
(def g2  {:position [1 6] :piece (next-snake (:piece g1) :down)})
(def g3  {:position [1 6] :piece (next-snake (:piece g2) :down)})
(def g4  {:position [1 6] :piece (next-snake (:piece g3) :right)})
(def g5  {:position [1 6] :piece (next-snake (:piece g4) :right)})
(def g6  {:position [1 6] :piece (next-snake (:piece g5) :right)})
(def g7  {:position [1 6] :piece (next-snake (:piece g6) :right)})
(def g8  {:position [1 6] :piece (next-snake (:piece g7) :up)})
(def g9  {:position [1 6] :piece (next-snake (:piece g8) :up)})
(def g10 {:position [1 6] :piece (next-snake (:piece g9) :up)})
(def g11 {:position [1 6] :piece (next-snake (:piece g10) :left)})
(def g12 {:position [1 6] :piece (next-snake (:piece g11) :left)})

(def states [g0 g1 g2 g3 g4 g5 g6 g7 g8 g9 g10 g11 g12])

(def state-places
  {g0  0
   g1  1
   g2  2
   g3  3
   g4  4
   g5  5
   g6  6
   g7  7
   g8  8
   g9  9
   g10  10
   g11 11
   g12 12
   })

(defn piece-abs-coords
  [piece [cx cy]]
  (mapv (fn [[x y]] [(+ cx x) (+ cy y)]) piece))

(def app (atom {:piece nil
                :position nil}))

(def rows 20)
(def cols 10)
(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defn state-code
  [state code-str]
  [:span
   {:key (str "state:" state code-str)
    :class (if (= state @app) "active-col-d9099" "")
    :onMouseEnter #(reset! app state)}
   code-str])

(rum/defc code []
  [:.code-cb62a
   [:pre
    [:code
     "(" (sx/core "def") " app-state\n"
     "  (" (sx/core "atom") " {" (sx/kw ":snake") " [ [ " (sx/lit 0) " " (sx/lit 0) " ] [ " (sx/lit 1) " " (sx/lit 0) " ] [ " (sx/lit 2) " " (sx/lit 0) " ] [ " (sx/lit 3) " " (sx/lit 0) " ] ]" "\n"
     "         " (sx/kw ":direction") " [ " (sx/lit 0) " " (sx/lit 1) " ] " (sx/cmt "; move down") "\n"
     "         }))" "\n"
     "\n\n"
     (sx/cmt ";; TRY IT: mouse over the states.") "\n\n"
     (state-code g0  (list "(" (sx/core "swap!") " app-state " (sx/core "update-in") " [" (sx/kw ":snake") "] next-move)\n"))
     (sx/cmt ";; => [ [ 1 0 ] [ 0 0 ] [ 2 0 ] [ 3 0 ] ]") "\n"
     (state-code g1  (list "(" (sx/core "swap!") " app-state " (sx/core "update-in") " [" (sx/kw ":snake") "] next-move)\n"))
     (sx/cmt ";; => [ [ 2 0 ] [ 1 0 ] [ 0 0 ] [ 2 0 ] ]") "\n"
     (state-code g2  (list "(" (sx/core "swap!") " app-state " (sx/core "update-in") " [" (sx/kw ":snake") "] next-move)\n"))
     (sx/cmt ";; => [ [ 3 0 ] [ 2 0 ] [ 1 0 ] [ 0 0 ] ]") "\n"
     (state-code g3  (list "(" (sx/core "swap!") " app-state " (sx/core "update-in") " [" (sx/kw ":snake") "] next-move)\n"))
     (sx/cmt ";; => [ [ 4 0 ] [ 3 0 ] [ 2 0 ] [ 1 0 ] ]") "\n"
     "\n"
     (sx/cmt ";; You can get current app-state by deref or @") "\n\n"
     "> " (sx/core "@") "app-state" " " (sx/cmt "     ; or (deref app-state)") "\n"
     "\n"
     "   {" (sx/kw ":snake") " [ [ " (sx/lit 0) " " (sx/lit 4) " ] [ " (sx/lit 0) " " (sx/lit 3) " ] [ " (sx/lit 0) " " (sx/lit 2)  " ] [ " (sx/lit 0) " " (sx/lit 3) " ] ]" "\n"
     "    " (sx/kw ":direction") " [ " (sx/lit 0) " " (sx/lit 1) " ] " "\n"
     "    }))" "\n"
     ]]])


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
    (.. ctx (strokeRect rx ry rs rs))
    (when is-center
      (.. ctx beginPath)
      (.. ctx (arc cx cy cr 0 (* 2 (.-PI js/Math))))
      (.. ctx fill)
      (.. ctx stroke))))

(defn draw-piece!
  [ctx piece pos]
  (doseq [[i c] (map-indexed vector (piece-abs-coords piece pos))]
    (draw-cell! ctx c (= i 0))))

(defn draw-canvas!
  [canvas]
  (let [ctx (.. canvas (getContext "2d"))]

    (set! (.. ctx -fillStyle) "#222")
    (.. ctx (fillRect 0 0 (* cell-size cols) (* cell-size rows)))

    (let [piece (:piece @app)
          pos (:position @app)]
      (when (and piece pos)
        (let [places (state-places @app)]
          (set! (.. ctx -fillStyle) "#555")
          (set! (.. ctx -strokeStyle) "#AAA")
          (doseq [[i {:keys [piece position]}] (map-indexed vector (take places states))]
            (let [x 7]
              (set! (.. ctx -globalAlpha) (/ (max 0 (min x (- i (- places x)))) x 5)))
            (draw-piece! ctx piece position)))

        (set! (.. ctx -globalAlpha) 1)
        (set! (.. ctx -fillStyle) dark-purple)
        (set! (.. ctx -strokeStyle) light-purple)
        (draw-piece! ctx piece pos)))))

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
  [:div.canvas-2a4d7
   [:canvas
    {:ref "canvas"
     :style {:position "relative"}}]])

(rum/defc slide []
  [:div
   [:h1 "4. Save the state."]
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
