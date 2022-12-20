// createAsyncThunk - потрібний для асинхронних запитів в Redux (в прослойках)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://639ed80e7aaf11ceb88c3361.mockapi.io/';

// в змінну fetchContacts записуємо createAsyncThunk - щоб зробити асинхронний запит
// першим аргументом передаємо тип екшену - 'contacts/fetchContacts'
// другим - асинхронну функцію, яка за допомогою axios поверне з беккенда потрібні контакти
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`contacts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

// операція для додавання контактів
export const addContact = createAsyncThunk(
  'contacts/addContact',
  
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`contacts`, contact);
      return response.data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message)
    }    
  }
)

// операція видалення контактів
export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  
  async (id, thunkAPI) => {
    try {
      // в response повертаємо id з бекенду - для видалення контакту
     const response =  await axios.delete(`contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    } 
  }
)

// операція зміни(оновлення) імені/номеру 
export const editContact = createAsyncThunk(
  'contacts/editContact',
  
  async (contact, thunkAPI) => {
    try {
    
     const response =  await axios.put(`contacts/${contact.id}`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    } 
  }
)