import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../redux/filters/slice';
import { selectFilterValue } from '../redux/filters/selectors';
const SearchBox = () => {
  const searchInputId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectFilterValue);
  const handleFilter = value => {
    dispatch(setFilterValue(value));
  };
  return (
    <div className="space-y-3">
      <label htmlFor={searchInputId} className="block text-gray-600">
        Find contacts by name
      </label>
      <input
        type="text"
        name="search"
        id={searchInputId}
        value={filterName}
        onChange={e => handleFilter(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
      />
    </div>
  );
};

export default SearchBox;
