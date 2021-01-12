'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const groceryEvents = require('./grocery/events')
// const itemEvents = require('../item/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#show-change-password').on('click', authEvents.onShowChangePassword)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-list').on('click', groceryEvents.onCreateList)
  $('#index-lists').on('click', groceryEvents.onIndexGroceries)
})
