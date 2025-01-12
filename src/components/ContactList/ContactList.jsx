import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContactsLoading,
  selectContactsError,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {!loading && !error && (
        <div className={css.contactList}>
          {filteredContacts.length === 0
            ? "No contacts"
            : filteredContacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
        </div>
      )}
    </div>
  );
}
