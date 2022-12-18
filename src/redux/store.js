import { configureStore } from '@reduxjs/toolkit';
// // ініціалізація персіст стора та дозволяє нам ігнорувати певні типи в нашому застосунку - щоб код не ламася
// // (взіємодія redux-Toolkit та Redux-Persist)
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
 // ініціалізація персіст стора 
export const store = configureStore({
  reducer: {
      // передаємо наш огорнутий редюсер до відповідного ключа в state, за який він відповідає
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // це буквально означає: ігнорується будь-який цих actions і навіть не доходить до reducer
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),  
});
// огортаємо store в persistor (щоб напряму отримувати дані в localStorage) та експортуэмо до index.js
export const persistor = persistStore(store);

















