import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contactsReducer';
import { useFetchContactsQuery } from '../../redux/contactSlice';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const { data } = useFetchContactsQuery();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (data) {
      return data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={s.contactsList}>
      {data &&
        visibleContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} number={phone} />
        ))}
    </ul>
  );
};

export default ContactList;
