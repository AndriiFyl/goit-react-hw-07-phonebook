// ХУКИ=======================================================
import css from './App.module.css';
import ContactsList from './ContactsList';
import ContactForm from './ContactForm';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.head_title}>Phonebook</h1>
      <ContactForm />
      <h1 className={css.head_title}>Contacts</h1>
      <Filter />
      <ContactsList />
    </div>
  );
}
// // ХУКИ=======================================================
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact, addContact, getContacts } from 'redux/contactsSlice';
// import { filterContacts, getFilter } from 'redux/filterSlice';
// import css from './App.module.css';
// import ContactsList from './ContactsList';
// import ContactForm from './ContactForm';
// import Filter from './Filter/Filter';

// export default function App() {
//   const contactsList = useSelector(getContacts);
//   const filterAllContacts = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const deleteContactItem = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   // addNewContact в параметри name та number приймає дані, які сабмітнули в формі
//   const addNewContact = ({ name, number }) => {
//     const repeatingName = contactsList.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (repeatingName) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }
//     dispatch(addContact(name, number));
//   };

//   const changeFilter = event => {
//     console.log('here');
//     dispatch(filterContacts(event.currentTarget.value));
//   };

//   const getVisibleContacts = () => {
//     const normilizedFilter = filterAllContacts.filter.toLowerCase();

//     return contactsList.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };
//   const visibleContacts = getVisibleContacts();

//   return (
//     <div className={css.container}>
//       <h1 className={css.head_title}>Phonebook</h1>
//       <ContactForm onSubmitForm={addNewContact} />
//       <h1 className={css.head_title}>Contacts</h1>
//       <Filter value={filterAllContacts.filter} onChange={changeFilter} />
//       <ContactsList
//         contacts={visibleContacts}
//         onDeleteContact={deleteContactItem}
//       />
//     </div>
//   );
// }

// КЛАСС-КОМПОНЕНТ====================================================
// import React from 'react';
// import { nanoid } from 'nanoid';
// import css from './App.module.css';
// import ContactsList from './ContactsList';
// import ContactForm from './ContactForm';
// import Filter from './Filter/Filter';

// export default class App extends React.Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   // Методы обработки разной инфы записываем там, где у нас state
//   // Метод удаления контакта из списка при нажатии на кнопку================================================
//   // передаем id нужной кнопки из компонента ContactsLis
//   deleteContactItem = contactId => {
//     this.setState(prevstate => ({
//       // перезаписываем наш state (не мутируя его): в contacts записываем предыдущее
//       // состояние, которое отфильтровываем при условии, что оставляем только тот контакт,
//       // который не совпадает по id с тем контактом, на который мы нажали (удалили)
//       contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
//     }));
//     console.log(contactId);
//   };
//   // ........................................................................................................

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     const repeatingName = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (repeatingName) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     this.setState(prevstate => ({
//       contacts: [contact, ...prevstate.contacts],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normilizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };

//   // метод монтирования инфы (при загрузке или перезагрузке страницы)
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     // условие, если в localStorage еще ничего нет (пользователь заходит в первый раз),
//     // чтобы наш код не сломался, т.к. все манипуляции связаны со state,
//     // и если state = null, то все пропало)
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   // метод обновления инфы на странице (срабатывает при каждом изменении исходнной инфы/разметки)
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     // деструктуризирую свойство filter (чтобы не писать постоянно this.state.filter)
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <div className={css.container}>
//         <h1 className={css.head_title}>Phonebook</h1>
//         <ContactForm onSubmitForm={this.addContact} />
//         <h1 className={css.head_title}>Contacts</h1>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactsList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContactItem}
//         />
//       </div>
//     );
//   }
// }
