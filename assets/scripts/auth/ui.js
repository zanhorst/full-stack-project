'use strict'
const store = require('./../store.js')
$('.authenticated').hide()
const signUpSuccess = function (response) {
  $('#message').text('Signed up. Please log in.')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up failed. Error is: ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('Signed in.')
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('form').trigger('reset')
  console.log(store)
  store.user = response.user
}

const signInFailure = function (error) {
  $('#message').text('Sign in failed. Error is: ' + error.responseJSON.message)
}
const signOutSuccess = function (response) {
  $('#message').text('Signed out.')
  $('.authenticated').hide()
  $('.unauthenticated').show()
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failed. Error is: ' + error.responseJSON.message)
}
const changePasswordSuccess = function (response) {
  $('#message').text('Password changed sucessfully.')
  $('form').trigger('reset')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('#message').text('Password could not be changed. Error is: ' + error.responseJSON.message)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
