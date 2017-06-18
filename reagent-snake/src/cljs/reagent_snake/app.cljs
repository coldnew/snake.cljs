(ns reagent-snake.app
  (:require [reagent.core :as reagent :refer [atom]]))

(def app-state
  (atom {;; canvas object
         ;; :canvas/element  (dom/getElement "canvas")
         ;; :canvas/ctx  (-> (dom/getElement "canvas") (.getContext "2d"))
         :canvas/background-color "white"    ; default canvas color (background)
         :canvas/width  640
         :canvas/height 480
         ;; snake object
         :snake/body '([0 0] [1 0] [2 0])    ; [x y]
         :snake/direction [0 1]         ; default direction, see `keycode->direction`
         :snake/width  32               ; 640 / 20
         :snake/height 24               ; 480 / 20
         :snake/border 2                ; border size
         :snake/body-color "lime"       ; snake's body color
         :snake/food nil                ; when `nil`, regenerate it
         :snake/food-color "red"        ; the color of food
         :snake/alive true              ; when `false`, stop game loop
         }))


(defn calling-component []
  [:div.container-narrow
   [:div.header
    [:ul {:class "nav nav-pills pull-right"}
     [:li [:a {:href "https://github.com/coldnew/snake.cljs"} "Source"]]
     [:li [:a {:href "https://coldnew.github.io/snake.cljs/docs/uberdoc.html"} "Documentation"]]]
    [:h3.muted "snake.cljs"]]
   [:hr]
   [:canvas {:id "canvas"}]])

(defn init []
  (reagent/render-component [calling-component]
                            (.getElementById js/document "container")))
