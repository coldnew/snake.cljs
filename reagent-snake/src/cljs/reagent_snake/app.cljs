(ns reagent-snake.app
  (:require [reagent.core :as reagent :refer [atom]]))

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
