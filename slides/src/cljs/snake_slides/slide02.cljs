(ns snake-slides.slide02
  (:require [rum.core :as rum]
            [snake-slides.syntax-highlight :as sx]))

(def dark-green "#143")
(def light-green "#175")
(def dark-purple "#449")
(def light-purple "#6ad")
(def dark-red "#944")
(def light-red "#f8c")

(def piece-keys
  [:body])

(def positions
  {:body [0 5]
   :b1 [0 3]
   :b2 [0 3]})

(def pieces
  {:body [[5 6] [6  6] [ 6  7] [ 6  8]]
   :b1 [[4 6] [5 6] [6  6] [ 6  7] [ 6  8]] ; add head
   :b2 [[4 6] [5 6] [6  6] [ 6  7]]        ; remove tail
   })

(defn piece-abs-coords
  [piece]
  (let [[cx cy] (positions piece)]
    ;; y offset + 5
    (mapv (fn [[x y]] [(+ cx x) (+ cy y) ]) (pieces piece))))

(def app (atom {:piece nil :index nil
                :board
                [[ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]
                 [ 0 0 0 0 0 1 1 0 0 0]
                 [ 0 0 0 0 0 0 1 0 0 0]
                 [ 0 0 0 0 0 0 1 0 0 0]
                 [ 0 0 0 0 0 0 0 0 0 0]]
                }))

(def rows 20)
(def cols 10)
(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defn data-row
  [piece]
  [:span
   {:key (str "piece" piece)
    :class (if (= piece (:piece @app)) "active-row-534ed" "")
    :onMouseEnter #(swap! app assoc :piece piece)}

   "'("
   (for [[index [x y]] (map-indexed vector (pieces piece))]
     [:span
      {:key (str "piece" piece "index" index)
       :class (if (and (= piece (:piece @app))
                       (= index (:index @app))) "active-col-d9099")
       :onMouseEnter #(swap! app assoc :index index)}

      (let [pad #(if (neg? %) % (str " " %))
            fmt #(sx/lit (pad %))]
        (list " [" (fmt x) " " (fmt y) " ]"))])
   " )"])

(defn data-row-noevent
  [piece]
  [:span
   {:key (str "piece" piece)
    :class ""}
   "'("
   (for [[index [x y]] (map-indexed vector (pieces piece))]
     [:span
      {:key (str "piece" piece "index" index)
       :class (if (and (= piece (:piece @app))
                       (= index (:index @app))) "active-col-d9099")
       :onMouseEnter #(swap! app assoc :index index)}

      (let [pad #(if (neg? %) % (str " " %))
            fmt #(sx/lit (pad %))]
        (list " [" (fmt x) " " (fmt y) " ]"))])
   " )"])

(rum/defc code []
  [:.code-cb62a
   [:pre
    [:code
     (sx/cmt "; TRY IT: mouse over the pieces.") "\n"
     "\n\n"
     "(" (sx/core "def") " snake\n"
     (list "  {" (sx/kw (str :body)) " " (data-row :body) " })\n")
     ;; extra
     "\n\n"
     (sx/cmt "; Add snake's head\n")
     "> (" (sx/core "assoc") " snake " (sx/kw ":body") " (" (sx/core "conj") " [" (sx/lit 4) " " (sx/lit 6) "] (" (sx/kw ":body") " snake))) "
     "\n\n"
     ;; (list "  {" (sx/kw (str :b1)) " " (data-row :b1) " })\n")
     (list "  {" (sx/kw (str :body)) " " (data-row-noevent :b1) " })\n")
     "\n\n\n"
     (sx/cmt "; Remove snake's tail\n")
     "> (" (sx/core "assoc") " snake " (sx/kw ":body") " (" (sx/core "drop-last") " (" (sx/kw ":body") " snake))) "
     "\n\n"
     (list "  {" (sx/kw (str :body)) " " (data-row-noevent :b2) " })\n")
     ]]])

(def cell-size (quot 600 rows))

(defn piece-index [x y]
  (some identity
        (map #(first (keep-indexed
                      (fn [i [px py]]
                        (when (and (= px x) (= py y))
                          [% i]))
                      (piece-abs-coords %)))
             (keys pieces))))

(def global-canvas)

(defn canvas-mouse [e]
  (let [canvas global-canvas
        rect (.getBoundingClientRect canvas)
        x (- (.-clientX e) (.-left rect))
        y (- (.-clientY e) (.-top rect))
        col (quot x cell-size)
        row (quot y cell-size)
        [piece index] (piece-index col row)]
    (when (and piece index)
      (swap! app assoc :piece piece)
      (swap! app assoc :index index))))

(defn draw-cell!
  [ctx [x y] is-piece is-index is-center]
  (set! (.. ctx -fillStyle)
        (cond is-index dark-purple
              is-piece dark-green
              :else "transparent"))
  (set! (.. ctx -strokeStyle)
        (cond is-index light-purple
              is-piece light-green
              :else "#888"))
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

(defn draw-piece! [ctx piece]
  (let [is-piece (= piece (:piece @app))
        index (and is-piece (:index @app))
        center (positions piece)]
    (doseq [[i c] (map-indexed vector (piece-abs-coords piece))]
      (when-not (= i index)
        (draw-cell! ctx c is-piece (= i index) ;; (= c center)
                    (= i 0)
                    )))
    (doseq [[i c] (map-indexed vector (piece-abs-coords piece))]
      (when (= i index)
        (draw-cell! ctx c is-piece (= i index) ;; (= c center)
                    (= i 0)
                    )))))

(defn draw-food! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-red)
  (set! (.. ctx -strokeStyle) light-red)
  (draw-cell!  ctx [x y] false false false))

(defn draw-snake! [ctx [x y]]
  (set! (.. ctx -fillStyle)   dark-purple)
  (set! (.. ctx -strokeStyle) light-purple)
  (draw-cell!  ctx [x y] false false false))

(defn draw-board! [ctx [x y]]
  (set! (.. ctx -fillStyle) "#222")
  (set! (.. ctx -strokeStyle) "#888")
  (draw-cell!  ctx [x y] false false false))

(defn draw-canvas! [canvas]
  (let [ctx (.. canvas (getContext "2d"))
        board (:board @app)]

    (set! (.. ctx -fillStyle) "#222")
    (.. ctx (fillRect 0 0 (* cell-size cols) (* cell-size rows)))

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

    (doseq [p piece-keys]
      (draw-piece! ctx p))
    ))

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
  [:.canvas-2a4d7
   [:canvas
    {:ref "canvas"
     :style {:position "relative"}
     :onMouseMove canvas-mouse}]])

(rum/defc slide []
  [:div
   [:h1 "2. Create the Snake."]
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