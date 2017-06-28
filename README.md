# snake.cljs
[![Circle CI](https://circleci.com/gh/coldnew/snake.cljs.svg?style=svg)](https://circleci.com/gh/coldnew/snake.cljs)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/coldnew/snake.cljs/master/LICENSE)

A simple snake game implement in ClojureScript for tutorial.

## Implementation

- [basic-snake](https://github.com/coldnew/snake.cljs/tree/master/basic-snake)

    A basic snake game only use traditional html method. (Without react.js, vue.js ...etc)

    [**Online DEMO**](https://coldnew.github.io/snake.cljs)

- [quil-snake](https://github.com/coldnew/snake.cljs/tree/master/quil-snake)

    snake game implement with [quil](https://quil.info)

    [**Online DEMO**](https://coldnew.github.io/snake.cljs/quil)

## Tutorials

- [Slide](https://github.com/coldnew/snake.cljs/tree/master/slides)

    Interactive slides based on [t3tr0s-slides](https://github.com/shaunlebron/t3tr0s-slides), I rewrite it for [Clojure/Taiwan](https://clojure.tw) meetup.

    > **This slide is still under construction and will be updated soon.**

   [**View Slide Online**](https://coldnew.github.io/snake.cljs/slides/index.html)

## Screenshot

![Screenshot](https://raw.githubusercontent.com/coldnew/snake.cljs/master/screenshot.png)

## Development

1. Install [boot-clj](https://boot-clj.com) for handle this project

2. Goto the implementation you want to play with

3. Start the `dev` task. In a terminal run:
    ```bash
    $ boot dev
    ```
    This will give you a development setup with:
    - auto compilation on file changes
    - audible warning for compilation success or failures
    - auto reload the html page on changes
    - Clojurescript REPL

4. Go to http://localhost:3000 in your browser.

5. If you edit and save a file, the task will recompile the code and reload the
   browser to show the updated version.

6. If you want to connect to ClojureScript REPL, enter following in Clojure REPL:
   ```clojure
   (start-repl)
   ```

## Production

1. Run the `prod` task. In a terminal run:
    ```bash
    $ boot prod
    ```

2. The compiled files will be on the `target/` directory. This will use
   advanced compilation and prerender the html.

## License

Copyright © 2017 Yen-Chin, Lee <<coldnew.tw@gmail.com>>

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
