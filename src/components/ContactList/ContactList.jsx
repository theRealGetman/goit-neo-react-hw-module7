import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchQuery = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className={css.contactList}>
      {filteredContacts.length === 0
        ? "No contacts"
        : filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
    </div>
  );
}
