import { useSelector, useDispatch } from 'react-redux';
import { ContactsList, ButtonDelete, ContactListItem } from "./ContactList.styled";
import { deleteContact } from 'redux/contactSlice';


export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredContacts) {
    return (
      <ContactsList>
        {filteredContacts.map(({ name, number, id }) => (
        <ContactListItem key={id}>
          {name}: {number}
          <ButtonDelete type="submit" name={name} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </ButtonDelete>
        </ContactListItem>
      ))}
    </ContactsList>
    );
  }
}
    

