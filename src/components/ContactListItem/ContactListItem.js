import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDeleteContactsMutation } from '../../redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();

  return (
    <li className={s.listItem}>
      <span className={s.itemElement}>{name}:</span>
      <span className={s.itemElement}>{number}</span>
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
