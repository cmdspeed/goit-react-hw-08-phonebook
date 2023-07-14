import propTypes from 'prop-types';
import css from './PhoneBookList.module.css';
import remove from '../../img/remove.png';
import call from '../../img/call.png';
import { Link } from 'react-router-dom';

export const PhoneBookList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <>
        <li key={id} className={css.list}>
          <div className={css.contactContainer}>
            <p className={css.name}>{contact.name}: </p>
            <div className={css.numberWraper}>
              <p className={css.number}> {contact.number}</p>
              <Link to={'tel:' + contact.number} className={css.callIcon}>
                <img src={call} alt="call" className={css.callIcon} />
              </Link>
              <button
                className={css.deleteBtn}
                onClick={() => handleDelete(contact.id)}
              >
                <img src={remove} alt="remove" className={css.removeIcon} />
              </button>
            </div>
          </div>
        </li>
      </>
    ))}
  </ul>
);

PhoneBookList.propTypes = {
  contacts: propTypes.array,
  handleDelete: propTypes.func,
};
