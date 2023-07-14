import { Phonebook } from '../Phonebook/Phonebook';
import { PhoneBookList } from '../PhoneBookList/PhoneBookList';
import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from '../../redux/selectors';
import { getFilter, setFilter } from '../../redux/filterSlice';
import {
  getContactsApi,
  addContactApi,
  deleteContactApi,
} from '../../redux/operations';
import { useEffect, useState } from 'react';
import { AddContactBtn } from 'components/Buttons/AddContactBtn/AddContactBtn';
import css from './ContactsList.module.css';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filter = useSelector(getFilter);
  const [addBtnClicked, setAddBtnClicked] = useState(false);

  useEffect(() => {
    dispatch(getContactsApi());
  }, [dispatch]);

  const handleSubmit = (name, number) => {
    if (contacts.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        name: name,
        number: number,
      };
      dispatch(addContactApi(contact));
    }
  };

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  const fitered = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const handleDelete = id => {
    dispatch(deleteContactApi(id));
  };

  const handleClick = () => {
    return setAddBtnClicked(!addBtnClicked);
  };

  return (
    <div className={css.container}>
      {addBtnClicked ? (
        <Phonebook handleSubmit={handleSubmit} handleClick={handleClick} />
      ) : (
        <AddContactBtn handleClick={handleClick} />
      )}
      <h2 className={css.header}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      {isLoading && !error && (
        <div>
          <span className={css.loader}></span>
        </div>
      )}

      <PhoneBookList
        contacts={fitered()}
        number={contacts.number}
        handleDelete={handleDelete}
      />
    </div>
  );
};
