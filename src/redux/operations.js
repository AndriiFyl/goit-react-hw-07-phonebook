// createAsyncThunk - потрібний для асинхронних запитів в Redux (в прослойках)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://639ed80e7aaf11ceb88c3361.mockapi.io/';

// в змінну fetchContacts записуємо createAsyncThunk - щоб зробити асинхронний запит
// першим аргументом передаємо тип екшену - 'contacts/fetchContacts'
// другим - асинхронну функцію, яка за допомогою axios поверне з беккенда потрібні контакти
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  
  async () => {
      const response = await axios.get(`contacts`);
      return response.data;
  }
)