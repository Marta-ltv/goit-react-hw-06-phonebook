import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setStatusFilter } from 'redux/contactSlice';
import { FilterLabel, FilterInput } from "./Filter.styled";


export default function Filter () {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
  <FilterLabel>
    Find contacts by Name
    <FilterInput
      type="text"
      name="filter"
      placeholder="Search contact"
      value={filter}
      onChange={evt => dispatch(setStatusFilter(evt.target.value))}
    />
  </FilterLabel>
);
}
    

    
