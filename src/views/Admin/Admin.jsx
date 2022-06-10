import { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import AdminList from "../../components/AdminComponents/AdminList/AdminList";
import "./Admin.css";
const Admin = () => {
  const [searchQuery, setSearchQuery] = useState(new RegExp("", "i"));
  const getSearch = (event) => {
    setSearchQuery(new RegExp(`${event.target.value}`, "i"));
  };
  return (
    <main className="Admin">
      <SearchInput getSearch={getSearch} />
      <AdminList searchQuery={searchQuery} />
    </main>
  );
};

export default Admin;
