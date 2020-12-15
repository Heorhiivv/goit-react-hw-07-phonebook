import { createAction } from '@reduxjs/toolkit';

const addContactsRequest = createAction('ADD_CONTACTS_REQUEST');
const addContactsSuccess = createAction('ADD_CONTACTS_SUCCESS');
const addContactsError = createAction('ADD_CONTACTS_ERROR');

const fetchContactsRequest = createAction('FETCH_CONTACTS_REQUEST');
const fetchContactsSuccess = createAction('FETCH_CONTACTS_SUCCESS');
const fetchContactsError = createAction('FETCH_CONTACTS_ERROR');

const removeContactsRequest = createAction('REMOVE_CONTACTS_REQUEST');
const removeContactsSuccess = createAction('REMOVE_CONTACTS_SUCCESS');
const removeContactsError = createAction('REMOVE_CONTACTS_ERROR');

export {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactsRequest,
  removeContactsSuccess,
  removeContactsError,
};