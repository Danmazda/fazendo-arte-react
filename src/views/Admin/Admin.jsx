import AdminArea from '../../components/AdminArea/AdminArea';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import "./Admin.css";
const Admin = () => {

  return (
    <main className='Admin'>
      <Header></Header>
      <AdminArea></AdminArea>
      <Footer></Footer>
    </main>
  );
};

export default Admin;