import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact, editContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    // в екстраред'юсер передаємо колбек-функцію, що приймає builder, який в свою чергу додає кейси для обробки
    // всіх запитів: pending, fulfilled та rejected
    extraReducers: builder => {
        //    коли наш запит в стадії прогресу, змінюємо в стейт властивість isLoading на true
        builder.addCase(fetchContacts.pending, state => {
            state.isLoading = true;
        });
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            //    після того як виконався успішний запит, знову змінюємо значення isLoading в state
            state.isLoading = false;
        });
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.error = action.payload;
            //    записуємо до стейту isLoading = false, щоб коли сторінка крашнулась - у нас не висів Loading... 
            state.isLoading = false;
        });
    
        
        
       builder.addCase(addContact.pending, state => {
           state.isLoading = true;
       });
       builder.addCase(addContact.fulfilled, (state, action) => {
           state.items.push(action.payload);
          state.isLoading = false;
       });
       builder.addCase(addContact.rejected, (state, action) => {
           state.error = action.payload;
    
           state.isLoading = false;
       });
        
        
        
       builder.addCase(deleteContact.pending, state => {
           state.isLoading = true;
       });
       builder.addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
        contact => contact.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
       });
       builder.addCase(deleteContact.rejected, (state, action) => {
           state.error = action.payload;
           state.isLoading = false;
       });  
        
        
        builder.addCase(editContact.pending, state => {
           state.isLoading = true;
       });
       builder.addCase(editContact.fulfilled, (state, action) => {
          const index = state.items.findIndex(
        contact => contact.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
        state.isLoading = false;
       });
       builder.addCase(editContact.rejected, (state, action) => {
           state.error = action.payload;
           state.isLoading = false;
       });
  },
});


export const  contactsReducer  =  contactsSlice.reducer;
// Selector for contacts
export const getContacts = state => state.contacts.items;
// Selector for status of loading
export const getIsLoading = state => state.contacts.isLoading;










