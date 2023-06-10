// підключення useEffect
// import { useEffect } from 'react';

// підключення useSelector і useDispatch для роботи зі стейтами
import { useSelector, useDispatch } from 'react-redux';

// імпорт стилізованих компонентів для App
import { Container } from './App.styled';

// імпорт компонентів
import ContactList from './ContactList';
import Filter from './Filter';
import ContactForm from './ContactForm';

// функціональний компонент на хуках
export function App() {
  // dispatch для виклику екшенів та передачі їх редʼюсеру
  const dispatch = useDispatch();

  //наші стейти contacts i filter
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // функція, яка додає новий контакт в contacts
  //в властивість contacts, що є масивом обʼєктів
  // отримавши обʼєкт нового контакту
  // робить запит на функцію щодо повтору імені
  // якщо є збіг - показуєтсья повідомлення
  // якщо збігу немає, то додається новий контакт
  const addContact = newContact => {
    // if (checkNewNameRepeate(newContact.name)) {
    // alert(`${newContact.name} is already in contacts!`);
    // } else {
    //   setContacts(prevContacts => [...prevContacts, newContact]);
    dispatch(addContact(newContact));
    // }
  };

  //перевірка чи є контакт з таким іменем з врахуванням різних регістрів
  // повертає true або false
  const checkNewNameRepeate = newName => {
    let arrayOfNamesInLowerCase = contacts.map(item =>
      item.name.toLocaleLowerCase()
    );
    return arrayOfNamesInLowerCase.includes(newName.toLocaleLowerCase());
  };

  // функцція, яка видаляє наш контакт із contacts,
  //що є масивом обʼєктів отримавши айді елемента
  const deleteContact = index => {
    // setContacts(pevContacts =>
    //   pevContacts.filter(element => element.id !== index)
    // );
  };

  // ф-ія обробник зміни в інфуті фільтра
  //перезаписує значення filter
  const handleChangeFilter = e => {
    // setFilter(e.currentTarget.value);
  };

  // функція яка готує масив контактів для верстки
  //  після відфільтровки за збігом значенням filter
  const layOutFilteredContact = () => {
    return contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
    );
  };

  // розмітка
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} value={filter} />
      <ContactList
        contacts={layOutFilteredContact()}
        deleteContact={deleteContact}
      />
    </Container>
  );
}
