import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { fetchContacts } from "./operations";

const contactsInitialState = {
    contacts: {
    items: [],
    isLoading: false,
    error: null
  }
}


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    // в екстраред'юсер передаємо колбек-функцію, що приймає builder, який в свою чергу додає кейси для обробки
    // всіх запитів: pending, fulfilled та rejected
    extraReducers: builder => {
       //    коли наш запит в стадії прогресу, змінюємо в стейт властивість isLoading на true
       builder.addCase(fetchContacts.pending, state => {
           state.contacts.isLoading = true;
       });
       builder.addCase(fetchContacts.fulfilled, (state, action) => {
           state.contacts.items.push(...action.payload);
        //    після того як виконався успішний запит, знову змінюємо значення isLoading в state
           state.contacts.isLoading = false;
       });
       builder.addCase(fetchContacts.rejected, (state, action) => {
           state.contacts.error = action.payload;
       });
  },

    reducers: {
        addContact: {
            reducer(state, action) {
                // state.contacts = [...state.contacts, action.payload]
                state.contacts.push(action.payload);
            },
            prepare(name, phone) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        phone,
                    },
                };
            },
        },
     deleteContact(state, action) {
        state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload);
    //      const index = state.contacts.findIndex(
    //     contact => contact.id === action.payload
    //   );
    //   state.contacts.splice(index, 1);
        }
    }
});


export const  contactsReducer  =  contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
// Selector for contacts
export const getContacts = state => state.contacts.items;
// Selector for status of loading
export const getIsLoading = state => state.contacts.isLoading;







