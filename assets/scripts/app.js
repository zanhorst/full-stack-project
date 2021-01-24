'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const groceryEvents = require('./grocery/events')
// const itemEvents = require('../item/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // hiding elements until the user wants to use them
  $('#new-list').hide()
  $('#show-list').hide()
  $('#indexed-lists').hide()
  $('#update-list').hide()
  $('#delete-list').hide()
  // auth events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#show-change-password').on('click', authEvents.onShowChangePassword)
  $('#close-change-password').on('click', authEvents.onCloseChangePassword)
  // grocery events
  // these events are immediately necessary
  $('#new-list').on('submit', groceryEvents.onCreateList)
  $('#show-list').on('submit', groceryEvents.onShowList)
  $('#index-lists').on('click', groceryEvents.onIndexLists)
  $('#update-list').on('submit', groceryEvents.onPatchList)
  $('#delete-list').on('submit', groceryEvents.onDeleteList)
  // these events are what power the buttons that show the forms
  $('#show-new-list').on('click', groceryEvents.onShowNewList)
  $('#show-show-list').on('click', groceryEvents.onShowShowList)
  $('#show-update-list').on('click', groceryEvents.onShowUpdateList)
  $('#show-delete-list').on('click', groceryEvents.onShowDeleteList)
  // and these events close the forms, whether they have been filled out or not.
  $('#index-close').on('click', groceryEvents.onCloseIndex)
  $('#new-close').on('click', groceryEvents.onCloseCreate)
  $('#show-close').on('click', groceryEvents.onCloseShow)
  $('#update-close').on('click', groceryEvents.onCloseUpdate)
  $('#delete-close').on('click', groceryEvents.onCloseDelete)
})
