'use strict'
// const store = require('./../store.js')
const onIndexListsSuccess = function (response) {
  $('#message').text('All lists have been indexed.')
  const obj = JSON.stringify(response)
  $('#message2').text(obj)
  $('#indexed-lists').show()
}
const onIndexListsFailure = function (error) {
  $('#message').text('Lists could not be indexed. Error: ' + error.responseJSON.message)
}
const onShowListSuccess = function (response) {
  const obj = JSON.stringify(response)
  $('#message3').text('List shown successfully: ' + obj)
}
const onShowListFailure = function (error) {
  $('#message').text('List could not be shown. Error: ' + error.responseJSON.message)
}
const onCreateListSuccess = function (response) {
  $('#message').text('New list was created.')
}
const onCreateListFailure = function (error) {
  $('#message').text('List could not be created: ' + error.responseJSON.message)
}
const onPatchListSuccess = function (response) {
  $('#message').text('List updated.')
}
const onPatchListFailure = function (error) {
  $('#message').text('List could not be updated. Error: ' + error.responseJSON.message)
}
const onDeleteListSuccess = function (response) {
  $('#message').text('List Deleted Successfully.')
}
const onDeleteListFailure = function (error) {
  $('#message').text('List could not be deleted. Error is ' + error.responseJSON.message)
}
module.exports = {
  onIndexListsSuccess,
  onIndexListsFailure,
  onShowListSuccess,
  onShowListFailure,
  onCreateListSuccess,
  onCreateListFailure,
  onPatchListSuccess,
  onPatchListFailure,
  onDeleteListSuccess,
  onDeleteListFailure
}
