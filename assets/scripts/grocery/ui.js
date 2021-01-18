'use strict'
// const store = require('./../store.js')
// const onIndexListsSuccess = function (response) {

// }
// const onIndexListsFailure = function (error) {
//
// }

// const onShowListSuccess = function (response) {

// }
// const onShowListFailure = function (error) {
//
// }

const onCreateListSuccess = function (response) {
  console.log('Success.')
  $('#message').text('New list was created.')
}
const onCreateListFailure = function (error) {
  console.log('Failure.')
  $('#message').text('List could not be created: ' + error.responseJSON.message)
}

// const onPatchListSuccess = function (response) {

// }
// const onPatchListFailure = function (error) {
//
// }

module.exports = {
  // onIndexListsSuccess,
  // onIndexListsFailure,
  // onShowListSuccess,
  // onShowListFailure,
  onCreateListSuccess,
  onCreateListFailure
  // onPatchListSuccess,
  // onPatchListFailure
}
