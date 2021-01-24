'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields.js')

// index lists event
const onIndexLists = function (event) {
  event.preventDefault()
  api.indexLists()
    .then(ui.onIndexListsSuccess)
    .catch(ui.onIndexListsFailure)
}
// show list event
const onShowList = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showList(data)
    .then(ui.onShowListSuccess)
    .catch(ui.onShowListFailure)
}
// create list event
const onCreateList = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createList(data)
    .then(ui.onCreateListSuccess)
    .catch(ui.onCreateListFailure)
}
// update list event
const onPatchList = function (event) {
  event.preventDefault()
  console.log(event + 'event.js')
  const form = event.target
  const data = getFormFields(form)
  api.patchList(data)
    .then(ui.onPatchListSuccess)
    .catch(ui.onPatchListFailure)
}
// delete list event
const onDeleteList = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.deleteList(data)
    .then(ui.onDeleteListSuccess)
    .catch(ui.onDeleteFailure)
}
const onShowShowList = function (event) {
  event.preventDefault()
  $('#show-list').show()
}
const onShowNewList = function (event) {
  event.preventDefault()
  $('#new-list').show()
}
const onShowUpdateList = function (event) {
  event.preventDefault()
  $('#update-list').show()
}
const onShowDeleteList = function (event) {
  event.preventDefault()
  $('#delete-list').show()
}
const onCloseIndex = function (event) {
  event.preventDefault()
  $('#indexed-lists').hide()
}
const onCloseShow = function (event) {
  event.preventDefault()
  $('#show-list').hide()
}
const onCloseUpdate = function (event) {
  event.preventDefault()
  $('#update-list').hide()
}
const onCloseDelete = function (event) {
  event.preventDefault()
  $('#delete-list').hide()
}
const onCloseCreate = function (event) {
  event.preventDefault()
  $('#new-list').hide()
}
module.exports = {
  onIndexLists,
  onShowList,
  onCreateList,
  onPatchList,
  onDeleteList,
  onShowNewList,
  onShowShowList,
  onShowUpdateList,
  onShowDeleteList,
  onCloseIndex,
  onCloseShow,
  onCloseUpdate,
  onCloseDelete,
  onCloseCreate
}
