import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.contacts.items);
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      {loading && <Loader/>}
      {error && <ErrorMessage/>}
      {/* <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p> */}
      <ContactForm />
      <SearchBox />
      {items.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
