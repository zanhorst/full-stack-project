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
    url: config.apiUrl + '/groceries',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const createList = function () {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      groceries: {
        name: ''
      }
    }
  })
}
const deleteList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const patchList = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/groceries',
    method: 'patchList',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      groceries: {
        name: formData
      }
    }
  })
}
module.exports = {
  indexLists,
  showList,
  createList,
  deleteList,
  patchList
}
