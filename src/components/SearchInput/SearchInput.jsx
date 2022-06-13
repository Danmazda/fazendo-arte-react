import "./SearchInput.css"
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = ({ getSearch }) => {
  return (
    <fieldset className='search'>
      <AiOutlineSearch />
      <input
        type="text"
        name="search"
        onChange={getSearch}
        placeholder="Pesquise por nome"
      />
    </fieldset>
  );
};
export default SearchInput;
