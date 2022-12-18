import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

const ContactsList = () => {
  const contactsList = useSelector(getContacts);
  const filterAllContacts = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = () => {
    const normilizedFilter = filterAllContacts.filter.toLowerCase();

    return contactsList.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list__container}>
      {/* Деструктуризируем contacts -> id, name */}
      {visibleContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{phone}</p>
          <button
            className={css.btn__delete}
            type="button"
            onClick={() => deleteContactItem(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
