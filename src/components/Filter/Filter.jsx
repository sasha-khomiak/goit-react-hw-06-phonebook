// Імпортуємо стилізований компонент
import { Input } from './Filter.styled';

// useSelector для отримання стейту фільтра
// useDispatch для прокидання екшену в редʼюс
import { useSelector, useDispatch } from 'react-redux';

// функція формування екшен перезапису фільтра
import { editFilter } from 'redux/filter/filterSlice';

// компонент Filter
const Filter = () => {
  //отримаємо значення голбального стейту параметра filter
  const value = useSelector(state => state.filter);
  // dispatch для закидання для редʼюса обʼєкта екшена
  const dispatch = useDispatch();

  // ф-ія обробник зміни в інфуті фільтра
  //перезаписує значення filter в глобальному стейті
  const handleChangeFilter = e => {
    dispatch(editFilter(e.currentTarget.value));
  };

  return (
    <>
      <Input onChange={handleChangeFilter} value={value} />
    </>
  );
};

export default Filter;
