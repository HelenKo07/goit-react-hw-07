import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  const handleDeleted = () => dispatch(deleteContact(user.id));

  return (
    <div className={css.contactContainer}>
      <span className={css.contactNewUser}>{user.name}</span>
      <span className={css.contactNewUser}>{user.number}</span>
      <button className={css.contactBtn} onClick={handleDeleted}>
        Delete
      </button>
    </div>
  );
}
