// стилізовані компоненти
import { Ul, Li, Name, Button } from './ContactList.styled';

// useDispatch для прокилування екшена в редʼюс
// useSelector для отримання значень в стейті
import { useDispatch, useSelector } from 'react-redux';

// функція формування екщена для видалення контакту
import { deleteContact } from 'redux/contacts/contactsSlice';

// наш компонент
const ContactList = () => {
  const dispatch = useDispatch();
  // отримуємо значення contacts
  // отримуємо значення filter
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  // визначаємо список відфільтрованих контактів (для верстки) в залежності від значення filter
  const filteredContacts = contacts.filter(item =>
    item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
  );

  // верстка компонента
  return (
    <Ul>
      {filteredContacts.map(item => {
        return (
          <Li key={item.id}>
            <Name>{item.name}: </Name> <p>{item.number}</p>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delete
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
};

export default ContactList;
