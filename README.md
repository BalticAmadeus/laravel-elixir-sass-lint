# Laravel Elixir Sass Lint

Laravel Elixir Sass Lint Extension based on [Sass Lint](https://github.com/sasstools/sass-lint):

> A Node-only Sass linter for both sass and scss syntax

## Installation

```sh
$ npm install laravel-elixir-sass-lint --save-dev
```

## Usage

In your gulpfile.js:

```javascript
// Include Laravel Elixir
var elixir = require('laravel-elixir');

// Include the extension
require('laravel-elixir-sass-lint');

// Lint Sass files
elixir(function(mix) {
    mix.sasslint();
});
```

## Arguments

```javascript
elixir(function(mix) {
    mix.sasslint(sources, options);
});
```

### Sources

Type: `String` or `Array`

Glob or array of globs to read.

```javascript
elixir(function(mix) {
    mix.sasslint([
        'public/sass/**/*.s+(a|c)ss'
    ]);
});
```

_Defaults to: `./resources/assets/sass/**/*.s+(a|c)ss`_

### Options

Type: `Object`

_See [Sass Lint Options](https://github.com/sasstools/sass-lint#options)_

## Credits
- [Laravel Elixir](https://github.com/laravel/elixir)
- [Sass Tools](https://github.com/sasstools)

## License

Laravel Elixir Sass Lint is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)