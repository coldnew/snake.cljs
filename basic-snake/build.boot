(task-options!
 pom {:project 'basic-snake
      :description "A basic snake game only use traditional html method. (Without react.js, vue.js ...etc)"})

(set-env!
 :source-paths    #{"src/cljs"}
 :resource-paths  #{"resources"}
 :dependencies '[[adzerk/boot-cljs          "2.0.0"      :scope "test"]
                 [adzerk/boot-cljs-repl     "0.3.3"      :scope "test"]
                 [adzerk/boot-reload        "0.5.1"      :scope "test"]
                 [pandeiro/boot-http        "0.8.3"      :scope "test"]
                 [com.cemerick/piggieback   "0.2.1"      :scope "test"]
                 [org.clojure/tools.nrepl   "0.2.13"     :scope "test"]
                 [weasel                    "0.7.0"      :scope "test"]
                 [org.clojure/clojurescript "1.9.562"]
                 [it.frbracch/boot-marginalia "0.1.3-1" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]]
 '[it.frbracch.boot-marginalia :refer [marginalia]])

(deftask build
  "This task contains all the necessary steps to produce a build
   You can use 'profile-tasks' like `production` and `development`
   to change parameters (like optimizations level of the cljs compiler)"
  []
  (comp (speak)
        
        (cljs)
        ))

(deftask run
  "The `run` task wraps the building of your application in some
   useful tools for local development: an http server, a file watcher
   a ClojureScript REPL and a hot reloading mechanism"
  []
  (comp (serve)
        (watch)
        (cljs-repl)
        
        (reload)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  (task-options! cljs {:optimizations :none}
                 reload {:on-jsload 'basic-snake.app/init})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask doc
  "Generate documentation by marginalia"
  []
  (comp (marginalia)
     (target)))

(deftask prod
  "Simple alias to run application in production mode"
  []
  (comp (production)
     (cljs)
     (marginalia)
     (target)))
