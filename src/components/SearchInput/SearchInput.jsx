import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = ({ getSearch }) => {
  return (
    <fieldset>
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
