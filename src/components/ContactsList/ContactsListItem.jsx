import css from './ContactsList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/operations';
import { useState } from 'react';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  // створюємо локальний стейт для імені і контакту, які будемо змінювати і відповідно записуємо їх
  // до value у відповідний інпуть
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleEdit = () => {
    setIsEdit(prev => !prev);
    // робимо перевірку, щоб за умови, коли ми нічого  не змінюємо - не відправлявся запит
    if (isEdit && (name !== contact.name || number !== contact.number)) {
      return dispatch(
        editContact({
          ...contact,
          name,
          number,
        })
      );
    }
  };

  return (
    <li className={css.item}>
      {isEdit ? (
        <>
          <label>
            Name
            <input
              onChange={handleChange}
              name="name"
              type="text"
              value={name}
            />
          </label>
          {'  '}
          <label>
            Number
            <input
              onChange={handleChange}
              name="number"
              type="text"
              value={number}
            />
          </label>
        </>
      ) : (
        <>
          <p className={css.name}>{contact.name}</p>
          <p className={css.number}>{contact.number}</p>
        </>
      )}
      <div className={css.buttons__wrapper}>
        <button className={css.btn} type="button" onClick={handleEdit}>
          {isEdit ? 'Save' : 'Edit'}
        </button>

        <button
          className={css.btn}
          type="button"
          onClick={() => deleteContactItem(contact.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
