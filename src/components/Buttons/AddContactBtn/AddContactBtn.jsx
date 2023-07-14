import add from '../../../img/add.png';
import css from './AddContactBtn.module.css';
export const AddContactBtn = ({ handleClick }) => {
  return (
    <div className={css.container}>
      <button className={css.addBtn} onClick={handleClick}>
        <p className={css.text}>add new contact</p>
        <img src={add} alt="add-btn" className={css.imgAdd} />
      </button>
    </div>
  );
};
