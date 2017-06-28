(ns snake-slides.app
  (:require [snake-slides.slide00 :as slide00]
            [snake-slides.slide01 :as slide01]
            [snake-slides.slide02 :as slide02]
            [snake-slides.slide03 :as slide03]
            [snake-slides.slide04 :as slide04]
            )
  )

(enable-console-print!)

;; store current slide state
(defonce current-slide (atom nil))

;; slides
(defonce slides
  [
   {:id "slide00" :init slide00/init :resume slide00/resume :stop slide00/stop}
   {:id "slide01" :init slide01/init :resume slide01/resume :stop slide01/stop}
   {:id "slide02" :init slide02/init :resume slide02/resume :stop slide02/stop}
   {:id "slide03" :init slide03/init :resume slide03/resume :stop slide03/stop}
   {:id "slide04" :init slide04/init :resume slide04/resume :stop slide04/stop}
   ])


(defn on-slide-change
  [_ _ i-prev i]

  (when-not (= i-prev i)

                                        ; animate to current slide
    (doseq [[j slide] (map-indexed vector slides)]
      (let [pos (-> (- j i) (* 100) (+ 50) (str "%"))
            elm (.getElementById js/document (:id slide))]
        (aset elm "style" "left" pos)))

                                        ; call slide's state resume/stop functions
    (let [stop   (-> slides (get i-prev) :stop)
          resume (-> slides (get i) :resume)]
      (when stop (stop))
      (when resume (resume)))

    (aset js/document "location" "hash" (str i))))

(add-watch current-slide :slide on-slide-change)

(def key-names
  {37 :left
   38 :up
   39 :right
   40 :down
   32 :space})

(def key-name #(-> % .-keyCode key-names))

(defn key-down [e]
  (let [kname (key-name e)
        shift (.-shiftKey e)]
    (case kname
      :left  (when shift
               (swap! current-slide #(max 0 (dec %)))
               (.preventDefault e))
      :right (when shift
               (swap! current-slide #(min (dec (count slides)) (inc %)))
               (.preventDefault e))
      nil)))

(defn- on-hash-change []
  (let [hash- (.replace (aget js/document "location" "hash") #"^#" "")]
    (when (= hash- "")
      (aset js/document "location" "hash" "0"))
    (let [slide-number (js/parseInt hash-)
          slide (get slides slide-number)]
      (when slide
        (reset! current-slide slide-number)))))

(defn init-slides!
  []
  (doseq [{:keys [id init]} slides]
    (init id)))

(defn init []
  (init-slides!)
  (.addEventListener js/window "keydown" key-down)

  (aset js/window "onhashchange" on-hash-change)
  (on-hash-change)

  (set! js/document.body.className "loaded"))

(.addEventListener js/window "load" init)
