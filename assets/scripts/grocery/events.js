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
//  event
const onCreateList = function (event) {
  event.preventDefault()
  api.createList()
    .then(ui.onCreateListSuccess)
    .catch(ui.onCreateListFailure)
}
//  event
const onPatchList = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.patchList(data)
    .then(ui.onPatchListSuccess)
    .catch(ui.onPatchListFailure)
}
module.exports = {
  onIndexLists,
  onShowList,
  onCreateList,
  onPatchList
}
