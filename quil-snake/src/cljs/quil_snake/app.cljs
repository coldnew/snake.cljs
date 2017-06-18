(ns quil-snake.app
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [clojure.pprint :refer [pprint]]))


;; ------------------------------
;; Helper functions

(defn axis-add [[x1 y1] [x2 y2]]
  [(+ x1 x2) (+ y1 y2)])

(defn axis-equal? [[x1 y1] [x2 y2]]
  (and (= x1 x2) (= y1 y2)))

(defn print-state
  "Print current game state on console.(For debugging purpose)"
  [state]
  (.log js/console "-------------------------------")
  (.log js/console (with-out-str (pprint state)))
  (.log js/console "-------------------------------\n"))

;; ------------------------------
;; Game's functions

(defn opposite-direction?
  "Detect two direction array are opposite direction or not."
  [dir1 dir2]
  (= [0 0] (axis-add dir1 dir2)))

(defn out-of-boundary?
  "Check if axis is exceed the game board boundary."
  [state [x y]]
  (let [{:keys [:snake/width :snake/height]} state
        max-x (/ (q/width)  width)
        max-y (/ (q/height) height)]
    (or (>= y max-y) (< y 0) (>= x max-x) (< x 0))))

(defn self-collission?
  "Check if axis is collission with snake's body."
  [state [x y]]
  (let [{:keys [:snake/body]} state]
    (some #(axis-equal? [x y] %) body)))

(defn eat-food?
  "Check if asix if equal the food's axis."
  [state [x y]]
  (let [{:keys [:snake/food]} state]
    (axis-equal? [x y] food)))

;; ------------------------------
;; Quil's functions

(defn setup-state []
  (q/frame-rate 10)                               ; the speed of the game
  {:canvas/background-color (q/color 255 255 255) ; default canvas color (background: white)
   ;; snake object
   :snake/body '([0 0] [1 0] [2 0])     ; [x y]
   :snake/direction [0 1]          ; default direction, see `keycode->direction`
   :snake/width  32                ; 640 / 20
   :snake/height 24                ; 480 / 20
   :snake/border 2                 ; border size
   :snake/body-color (q/color 191 255 0) ; snake's body color: lime
   :snake/food nil                       ; when `nil`, regenerate it
   :snake/food-color (q/color 255 0 0)   ; the color of food: red
   :snake/alive true                     ; when `false`, stop game loop
   })

(defn draw-state [state]
  (let [{:keys [:canvas/background-color
                :snake/body :snake/body-color :snake/width :snake/height :snake/border
                :snake/food :snake/food-color]} state
        [x y] (nth body 0)]

    ;; clear all background
    (q/background background-color)

    ;; draw food if exist
    (when-let [[x y] food]
      (q/fill food-color)
      (q/rect (* x width) (* y height) (- width border) (- height border)))

    ;; draw snake with body
    (q/fill body-color)
    (doseq [[x y] body]
      (q/rect (* x width) (* y height) (- width border) (- height border)))
    ))

(defn on-keydown [state e]
  (if-let [new-direction (get {:up    [ 0 -1]
                               :down  [ 0  1]
                               :left  [-1  0]
                               :right [ 1  0]}
                              (:key e) nil)]
    ;; When two direction are not opposite direction, save new direction
    (if-not (opposite-direction? new-direction (:snake/direction state))
      (assoc-in state [:snake/direction] new-direction)
      state)
    state))

(defn generate-food
  "Generate the food on random coordinate."
  [state]
  (let [{:keys [:snake/body :snake/food :snake/food-color :snake/width :snake/height]} state
        max-x (/ (q/width)  width)
        max-y (/ (q/height) height)]
    ;; skip when current food exist
    (if (nil? food)
      ;; generate food axis
      (loop [food [(rand-int max-x) (rand-int max-y)]]
        (if-not (self-collission? state food)
          (assoc-in state [:snake/food] food)
          (recur [(rand-int max-x) (rand-int max-y)])))
      state)))

(defn next-snake [state]
  (let [{:keys [:snake/body :snake/direction]} state
        head (axis-add (nth body 0) direction)
        tail (last body)]
    (if (:snake/alive state)
      (if (eat-food? state head)
        ;; When food was eaten by snake, just increase it's head and not remove tail
        (assoc state :snake/food nil :snake/body (conj body head))
        (assoc state :snake/body (-> (conj body head) drop-last)))
      ;; stop the quil loop when snake is not alive
      (q/no-loop))))

(defn detect-boundary [state]
  (let [{:keys [:snake/body :snake/direction]} state
        head (axis-add (nth body 0) direction)
        tail (last body)]
    ;; Detect if snake excessed the boundary
    (if (out-of-boundary? state head)
      (do
        (js/alert (str "Snake is out of boundary at :" head))
        (assoc-in state [:snake/alive] false))
      state)))

(defn detect-collission [state]
  (let [{:keys [:snake/body :snake/direction]} state
        head (axis-add (nth body 0) direction)
        tail (last body)]
    ;; Detect if snake excessed the boundary
    (if (self-collission? state head)
      (do
        (js/alert (str "Snake is collission with itself at : " head))
        (assoc-in state [:snake/alive] false))
      state)))

(defn update-state [state]
  (-> state
      ;; Generate the food
      generate-food
      ;; Detect if snake excessed the boundary
      detect-boundary
      ;; Detect if snake has collission with itself
      detect-collission
      ;; move snake to next state
      next-snake))

(defn init []
  (q/defsketch snake
    :host "canvas"                      ; The canvas id
    :settings #(q/smooth 2)             ; Turn on anti-aliasing
    :setup setup-state                  ; Specify the setup fn
    :draw  draw-state                   ; Specify the draw fn
    :update update-state                ; Specify the update fn
    :size [640 480]                     ; The canvas size
    :key-pressed on-keydown             ; KeyDown event
    :middleware [m/fun-mode]))
