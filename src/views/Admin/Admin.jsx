import AdminArea from '../../components/AdminArea/AdminArea';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
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