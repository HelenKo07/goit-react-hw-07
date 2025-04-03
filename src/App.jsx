import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      {items.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
