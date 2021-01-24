'use strict'
const config = require('./../config')
const store = require('./../store')

const indexLists = function () {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const showList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries/' + formData.grocery.id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const createList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}
const patchList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries/' + formData.grocery.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      grocery: {
        name: formData.grocery.name
      }
    }
  })
}
const deleteList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries/' + formData.grocery.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  indexLists,
  showList,
  createList,
  patchList,
  deleteList
}
