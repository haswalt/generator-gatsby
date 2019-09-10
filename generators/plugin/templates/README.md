# <%= props.name %>

[![npm](https://img.shields.io/npm/v/<%= props.name %>)](https://www.npmjs.com/package/<%= props.name %>)  ![GitHub](https://img.shields.io/github/license/<%= props.github %>)

<%= props.description %>

## Dependencies

## Install

```sh
npm i <%= props.name %>
```

## How to use

Add the plugin to your `gatsby-config.js`

```js
module.exports = {
  plugins: [
    '<%= props.name %>'
  ]
}
```

You can also specify options

```js
module.exports = {
  plugins: [
    {
      resolve: '<%= props.name %>',
      options: {

      }
  ]
}
```