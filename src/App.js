import React, { Component } from 'react';
import shortid from 'shortid';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import Heading from './components/Heading';
import Container from './components/Container';

class Phponebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      name,
      id: shortid.generate(),
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    const errorName = this.state.contacts.filter(
      contact => contact.name === name,
    );
    if (errorName.length) {
      alert(`${name} is already in contacts`);
      return;
    }
  };

  resetInput = () => {
    this.setState({ name: '', number: '' });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;

    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <Container>
          <Heading text="Phonebook" />

          <Form onSubmit={this.addContact} />

          <Heading text="Contacts" />

          <Filter value={filter} onChangeFilter={this.filterChange} />

          <Contacts
            contacts={this.filterContact()}
            onClick={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default Phponebook;
