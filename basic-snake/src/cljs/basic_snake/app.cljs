(ns basic-snake.app
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [goog.events.KeyCodes]
            [goog.events.EventType]
            [clojure.pprint :refer [pprint]]))

;; ------------------------------
;; States

(def state
  (atom { ;; canvas object
         :canvas/element  (dom/getElement "canvas")
         :canvas/ctx  (-> (dom/getElement "canvas") (.getContext "2d"))
         :canvas/background-color "white" ; default canvas color (background)
         :canvas/width  640
         :canvas/height 480
         ;; snake object
         :snake/body '([0 0] [1 0] [2 0]) ; [x y]
         :snake/direction [0 1]           ; default direction, see `keycode->direction`
         :snake/width  32                 ; 640 / 20
         :snake/height 24                 ; 480 / 20
         :snake/border 2                  ; border size
         :snake/body-color "lime"         ; snake's body color
         :snake/food nil                  ; when `nil`, regenerate it
         :snake/food-color "red"          ; the color of food
         :snake/alive true                ; when `false`, stop game loop
         }))

;; ------------------------------
;; Helper functions

(defn axis-add [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn axis-equal? [[x1 y1] [x2 y2]]
  (and (= x1 x2) (= y1 y2)))

(defn print-state
  "Print current game state on console.(For debugging purpose)"
  []
  (.log js/console "-------------------------------")
  (.log js/console (with-out-str (pprint @state)))
  (.log js/console "-------------------------------\n"))

;; ------------------------------
;; Canvas functions

(defn draw
  "Draw the point on canvas according to snake's width/height."
  [[x y] color]
  (let [{:keys [:canvas/ctx :snake/width :snake/height :snake/border]} @state]
    (aset ctx "fillStyle" color) ;; (set! (.-fillStyle ctx) color)
    (.fillRect  ctx
                (* x width)
                (* y height)
                (- width border)
                (- height border))))

(defn resize-canvas
  "Resize the canvas according to state."
  []
  (let [{:keys [:canvas/element :canvas/width :canvas/height]} @state]
    (.setAttribute element "width"  width)
    (.setAttribute element "height" height)))

;; ------------------------------
;; Game's functions

(defn keycode->direction
  "Convert javascript's keycode to direction array."
  [keycode]
  (get {goog.events.KeyCodes.UP    [ 0 -1]  ; code: 38
        goog.events.KeyCodes.DOWN  [ 0  1]  ; code: 40
        goog.events.KeyCodes.LEFT  [-1  0]  ; code: 37
        goog.events.KeyCodes.RIGHT [ 1  0]} ; code: 39
       keycode nil))

(defn opposite-direction?
  "Detect two direction array are opposite direction or not."
  [dir1 dir2]
  (= [0 0] (axis-add dir1 dir2)))

(defn on-keydown
  "The keydown event handler."
  [event]
  (let [{:keys [:snake/direction]} @state
        new-direction (keycode->direction (.-keyCode event))]
    ;; We only handle direction exist condition
    (when new-direction
      ;; When two direction are not opposite direction, save new direction
      (when-not (opposite-direction? new-direction direction)
        (swap! state assoc-in [:snake/direction] new-direction)))))

(defn out-of-boundary?
  "Check if axis is exceed the game board boundary."
  [[x y]]
  (let [max-x (/ (:canvas/width @state)  (:snake/width @state))
        max-y (/ (:canvas/height @state) (:snake/height @state))]
    (or (>= y max-y) (< y 0) (>= x max-x) (< x 0))))

(defn self-collission?
  "Check if axis is collission with snake's body."
  [[x y]]
  (let [{:keys [:snake/body]} @state]
    (some #(axis-equal? [x y] %) body)))

(defn eat-food?
  "Check if asix if equal the food's axis."
  [[x y]]
  (let [{:keys [:snake/food]} @state]
    (axis-equal? [x y] food)))

(defn generate-food
  "Generate the food on random coordinate."
  []
  (let [{:keys [:snake/body :snake/food :snake/food-color]} @state
        max-x (/ (:canvas/width @state)  (:snake/width @state))
        max-y (/ (:canvas/height @state) (:snake/height @state))]
    ;; skip when current food exist
    (when (nil? food)
      ;; generate food axis
      (loop [food [(rand-int max-x) (rand-int max-y)]]
        (if-not (self-collission? food)
          (do
            (swap! state assoc-in [:snake/food] food)
            (draw food food-color)
            food)
          (recur [(rand-int max-x) (rand-int max-y)]))))))

(defn game-loop
  "The main game-loop."
  []
  (let [{:keys [:canvas/background-color :snake/body :snake/body-color :snake/direction]}  @state
        head (axis-add (nth body 0) direction)
        tail (last body)]

    ;; Every time enter game-loop, check if we need to generate new food or not
    (generate-food)

    ;; Detect if snake
    (when (self-collission? head)
      (js/alert (str "Snake is collission with itself at : " head))
      (swap! state assoc-in [:snake/alive] false))

    ;; Detect if snake excessed the boundary
    (when (out-of-boundary? head)
      (js/alert (str "Snake is out of boundary at :" head))
      (swap! state assoc-in [:snake/alive] false))

    ;; When snake is alive, draw the snake and switch next game-loop
    (when (:snake/alive @state)
      ;; Draw head
      (draw head body-color)
      ;; Detect if food eat by snake or not
      (if (eat-food? head)
        ;; When food was eaten by snake, just increase it's head and not remove tail
        (swap! state assoc
               :snake/food nil
               :snake/body (conj body head))
        (do
          ;; Remove tail by draw canvas's background-color
          (draw tail background-color)
          ;; Add head and remove tail
          (swap! state assoc-in [:snake/body] (-> (conj body head) drop-last))))

      ;; next move, you can modify the `150` to change different speed
      (js/window.setTimeout (fn [] (game-loop)) 150))))

(defn init []
  ;; Resize canvas object
  (resize-canvas)
  ;; Remove all listen events
  (events/removeAll js/document)
  ;; Register event listener `on-keydown` event
  (events/listen js/document goog.events.EventType.KEYDOWN on-keydown)
  ;; Start the game loop
  (game-loop))
