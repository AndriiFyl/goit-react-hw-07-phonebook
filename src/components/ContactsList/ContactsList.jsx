// import React from 'react';
// import css from './ContactsList.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts, getIsLoading } from 'redux/contactsSlice';
// import { getFilter } from 'redux/filterSlice';
// import { useEffect } from 'react';
// import { fetchContacts, deleteContact } from 'redux/operations';

// const ContactsList = () => {
//   const contactsList = useSelector(getContacts);
//   const filterAllContacts = useSelector(getFilter);
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const deleteContactItem = contactId => {
//     dispatch(deleteContact(contactId));
//   };

//   const getVisibleContacts = () => {
//     const normilizedFilter = filterAllContacts.filter.toLowerCase();

//     return contactsList.filter(contact =>
//       contact.name.toLowerCase().includes(normilizedFilter)
//     );
//   };
//   const visibleContacts = getVisibleContacts();

//   return (
//     <>
//       {/* рендеримо список контактів в залежності від статусу isLoading */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul className={css.list__container}>
//           {/* Деструктуризируем contacts -> id, name */}
//           {visibleContacts.map(({ id, name, number }) => (
//             <li className={css.item} key={id}>
//               <p className={css.name}>{name}</p>
//               <p className={css.number}>{number}</p>
//               <button
//                 className={css.btn__delete}
//                 type="button"
//                 onClick={() => deleteContactItem(id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default ContactsList;

import React from 'react';
import css from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getIsLoading } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ContactsListItem } from './ContactsListItem';

const ContactsList = () => {
  const contactsList = useSelector(getContacts);
  const filterAllContacts = useSelector(getFilter);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normilizedFilter = filterAllContacts.filter.toLowerCase();

    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();
  console.log(visibleContacts);

  return (
    <>
      {/* рендеримо список контактів в залежності від статусу isLoading */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={css.list__container}>
          {/* Деструктуризируем contacts -> id, name */}
          {visibleContacts.map(contact => (
            <ContactsListItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
