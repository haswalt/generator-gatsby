# Gatsby Generator

Quickly generate your own progressive, lightweight [Gatsby](https://gatsbyjs.org) sites and plugins.

## Site generator

Use the site generator to scaffold out an opinionated, optimised Gastby website stack


### Features

- 100/100 Lighthouse scores out of the box
- Lightweight set of style-agnostic functional base components
- Internal generators for pages and components (built on [Plop](https://plopjs.com))
- Basic React CSS Modules and PostCSS support
- [Prismic](https://prismic.io) source preconfigured with the new GraphQL API
- [Storybook](https://storybook.js.org/) 5 preconfigured for Gatsby
-
- [Prettier](https://prettier.io) and [Stylelint](https://github.com/stylelint/stylelint) configured out of the box
- Development build notifications
- Optional extra features:
  - Netlify deployment configuration (server push, function proxying, etc)
  - [MobX](https://mobx.js.org/index.html) state management,
  - Starter CSS design system (built on [Bloom](https://bloom.tomorrowstudio.co))
  - Dynamic CSS variables polyfilling
  - Style-agnostic, React friendly form components
  - Robust video embed component

> **TODO:** Make Prismic boilerplate an optional feature

## Plugin generator

Use the plugin generator to scaffold lightweight Gatsby plugins, following best practices from Gatsby recommendations

### Features

- Simple Babel buildstep using [babel-preset-gatsby-package](https://www.npmjs.com/package/babel-preset-gatsby-package)
- [Prettier](https://prettier.io) and [Stylelint](https://github.com/stylelint/stylelint) configured out of the box


## Installation and usage

Install the generator and the `yo` runner globally

```sh
npm i -g generator-gatsby yo
```

Run the site generator by calling gatsby-generator directly

```sh
yo gatsby
```

Run the plugin generator by calling `gatsby:plugin`

```sh
yo gatsby:plugin
```

Then follow the prompts to scaffold your project.


---

Made with ❤️ by [Tomorrow](https://tomorrowstudio.co)
