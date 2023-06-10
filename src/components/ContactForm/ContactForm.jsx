//підключення використання хуків коли не глобальний стейт юзаємо
import { useState } from 'react';

// бібліотека автогенерування ключа
import { nanoid } from 'nanoid';

// стилізовані компоненти
import { Input, Label, Button, Form, Wrap } from './ContactForm.styled';

// бібліотека перевірки PropTypes
import PropTypes from 'prop-types';

// екшин створення контакту з redux стейту
import { addContact } from 'redux/contacts/contactsSlice';

import { useDispatch } from 'react-redux';

// функціональний компонент
export default function ContactForm() {
  const dispatch = useDispatch();
  // локальні стейти для контрольованих інпутів у формі
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // контрольовані інпути. реагуємо на івент
  // беремо нейм каррент таргет  і світч-кейс оновлюємо значення стейту
  const handleChangeInput = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  // при сабміті форми прівент дефолт
  // створюємо обʼєкт контакту із згенерованим унікальним айді
  // викликаємо  екшин addContact і передаємо в нього обʼєкт контакту
  // скидаємо значення імені і номара
  const onSubmitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(5),
      name,
      number,
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  // розмітка форми
  return (
    <Form onSubmit={onSubmitForm}>
      <Wrap>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChangeInput}
          />
        </Label>
        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChangeInput}
          />
        </Label>
      </Wrap>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

// перевірка PropTypes
ContactForm.propTypes = { addContact: PropTypes.func.isRequired };
