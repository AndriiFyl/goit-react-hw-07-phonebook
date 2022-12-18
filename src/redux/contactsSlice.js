import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsInitialState = {
    contacts: []
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
   

    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts = [...state.contacts, action.payload]
                // state.contacts.push(action.payload);
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

// // Робимо persist для даного slice
// // конфігурація persist
const persistConfig = {
  key: 'root',
  storage,
}

//1 persistedContactsReducer - редюсер, який напряму тепер пов'язаний з localStorage
//  (як параметри приймає persistConfig - всі дані зі storage та редюсер)
export const persistedContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
export const { addContact, deleteContact } = contactsSlice.actions;
// Selector
export const getContacts = state => state.contacts;







