'use strict'

let base_url = 'http://localhost:3021'

module.exports = {
  home: {
    path: [
      `${base_url}/`,
      `${base_url}/home`],
    pageObject: require('./components/home')
  },
  bad: {
    path: [
      `${base_url}/bad`,
      `${base_url}/real-bad`],
    pageObject: require('./components/bad')
  },
  widgets: {
    path: `${base_url}/widgets`,
    pageObject: require('./components/widgets')
  },
  widget: {
    path: `${base_url}/widgets/:id`,
    pageObject: require('./components/widget')
  }
}