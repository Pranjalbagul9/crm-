import './App.css';
import {useState} from 'react'
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';
import Enquiries from './pages/Enquiries';
import Prospects from './pages/Prospects';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Quotations from './pages/Quotations';
import Billing from './pages/Billing';
import Analytics from './pages/Analytics';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import QuotationForm from './pages/QuotationForm';
import EditEnq from './pages/EditEnq';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  } 
  return (
    <BrowserRouter>
    <div className="App">
      <div className="AppGlass">
      <Sidebar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path="/"element={<MainDashboard/>} />
        <Route path="/enquiries"element={<Enquiries/>} />
        <Route path="/prospects"element={<Prospects/>} />
        <Route path="/quotations"element={<Quotations/>} />
        <Route path="/orders"element={<Orders/>} />
        <Route path="/billing"element={<Billing/>} />
        <Route path="/customers"element={<Customers/>} />
        <Route path="/analytics"element={<Analytics/>} />
        <Route path="/quotationform"element={<QuotationForm />} />
        <Route path="/editenq/:id" element={<EditEnq />} />
      </Routes>
      
      </div>
    
    </div>
    </BrowserRouter>

  );
}

export default App;
