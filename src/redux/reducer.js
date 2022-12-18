
// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filterContacts } from "./action";

// const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [];


// export const contactsReducer = createReducer(contactsInitialState, {
//     [addContact]: (state, action) => {
//         return [...state, action.payload];
//     },

//     [deleteContact]: (state, action) => {
//         return state.filter(
//             contact => contact.id !== action.payload);
        
//     },     
// });



// const filterInitialState = '';

// export const filterReducer = createReducer(filterInitialState, {
//     [filterContacts]: (state, action) => {
//         return action.payload;   
//    } 
// })

