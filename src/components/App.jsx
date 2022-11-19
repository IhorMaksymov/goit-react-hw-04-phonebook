import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';

import { Box } from "./Box/Box";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

const App = () => {

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('arrayContacts')) ??
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('arrayContacts', JSON.stringify(contacts));
  }, [contacts])

  const formSubmit = ({ name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    
    includesContact(name) ? 
      alert(`${name} is alredy in your contacts`) :
      setContacts((prev) => {
        return [...prev, contact]
    })
  }

  const filterContact = (event) => {
    setFilter(event.currentTarget.value);
  }

  const visibleContact = () => {
    const normalizeContact = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContact));
  }

  const includesContact = (contactName) => {
    return contacts.find(contact => contact.name.toLowerCase() === contactName.toLowerCase());
  }
  
  const deleteContact = (contactId) => {
    setContacts((prev) => {
      return prev.filter(contact => contact.id !== contactId)
    })
  }
 
  return (
    <Box
        pt={5}
        pb={5}
        pl={5}
        pr={5}
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        as='main'
    >
      <Section title={'Phonebook'}>
        <ContactForm contacts={formSubmit} />
      </Section>
      <Section title={'Contacts'}>
        <Filter filter={filter} onChange={filterContact} />
        <ContactList contacts={visibleContact()} deleteContact={deleteContact} />
      </Section>
    </Box>
  );
};

export default App;