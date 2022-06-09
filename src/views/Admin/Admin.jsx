import AdminArea from "../../components/AdminArea/AdminArea";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LoginProvider from "../../Contexts/LoginProvider";
import MessageProvider from "../../Contexts/MessageProvider";
import "./Admin.css";
const Admin = () => {
  return (
    <main className="Admin">
      <MessageProvider>
        <LoginProvider>
          <Header></Header>
          <AdminArea></AdminArea>
          <Footer></Footer>
        </LoginProvider>
      </MessageProvider>
    </main>
  );
};

export default Admin;
