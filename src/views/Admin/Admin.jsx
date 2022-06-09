import AdminArea from '../../components/AdminArea/AdminArea';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginProvider from '../../Contexts/LoginProvider';
import "./Admin.css";
const Admin = () => {

  return (
    <main className='Admin'>
      <LoginProvider>
        <Header></Header>
        <AdminArea></AdminArea>
        <Footer></Footer>
      </LoginProvider>
    </main>
  );
};

export default Admin;