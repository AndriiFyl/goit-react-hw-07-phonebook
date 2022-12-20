import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';


const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer, 
});

export const store = configureStore({
  reducer: rootReducer,
});


// export const store = configureStore({
//   reducer: {
//   contacts: contactsReducer,
//   filter: filterReducer,
//   }
// });
















