import React ,{useEffect, useState} from 'react';

import axios from 'axios';
import './Add.css';

const Add = ({ open, onClose }) => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      pincode: '',
      city: '',
      state: '',
      country: '',
      executive: '',
      source: '',
      designation: '',
      product: '',
      requirements: '',
      notes:'',
    });
   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:4001/api/v1/enquiry/enquiryCreate", formData);
          console.log(response.data); 
          // Clear form data after successful submission if needed
          setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phoneNumber: '',
            pincode: '',
            city: '',
            state: '',
            country: '',
            executive: '',
            source: '',
            designation: '',
            product: '',
            requirements: '',
            notes:'',
          });
        } catch (error) {
          console.error('Error occurred while submitting form:', error);
          // Handle error if needed
        }
      };


      if(!open) return null;
  return (

    <div onClick={onClose} className='overlay'>
  <div  onClick={(e) => {e.stopPropagation();}}>
  
  <title>Document</title>
  <p className='closeBtn' onClick={onClose}>
            X
  </p>
 <div className="form">
 <form onSubmit={handleSubmit}>         
  <table>
    <tbody className='formbody'>
      <tr>
        <td>
          <div className="namecontainer">
            <h2 className='formheading'> Name</h2>
            <div className="firstn">
              <label className="firstlabel">
              First Name :
              </label>
              <input
                className="firstname"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required=""
      
              />
            </div>
            <div className="firstn">
              <label className="firstlabel">
                Last Nam :
              </label>
              <input
                className="firstname"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="firstn">
              <label className="firstlabel">
                Company Name :
              </label>
              <input
                className="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required=""
              />
            </div>
          </div>
          <div className="phonecontainer">
            <h2 className='formheading'> Contact Details</h2>
            <div className="condt">
              <label className="phone-number">
                <p className='p'>Email : </p>
              </label>
              <input className="number" type="email" name="email" value={formData.email} onChange={handleChange} required="" />
            </div>
            <div className="condt">
              <label className="phone-number">
                <p className='p'> Phone Number :</p>{" "}
              </label>
              <input
                className="number"
                type="tel"
                name="phoneNumber"
                pattern="[0-9]{10}"
                value={formData.phoneNumber}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="condt">
              <label className="phone-number">
                {" "}
                <p className='p'>Pin Code :</p>
              </label>
              <input
                className="number"
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="condt">
              <label className="phone-number">
                <p className='p'>City :</p>
              </label>
              <input className="number" type="text" name="city" value={formData.city} onChange={handleChange} required="" />
            </div>
            <div className="condt">
              <label className="phone-number">
                <p className='p'>State :</p>{" "}
              </label>
              <input className="number" type="text" name="state" value={formData.state} onChange={handleChange} required="" />
            </div>
            <div className="condt">
              <label className="phone-number">
                <p className='p'>Country :</p>
              </label>
              <input className="number" type="text" name="country" value={formData.country} onChange={handleChange} required="" />
            </div>
          </div>
        </td>
        <td>
          <div className="businesscontainer">
            <h2 className='formheading'> Business Details</h2>
            <div className="execu">
              <label className="area-code">
                Executive : 
              </label>
              <input
                className="code"
                type="text"
                name="executive"
                value={formData.executive}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="execu">
              <label className="area-code">
             Source :
              </label>
              <select className="option" name="source" value={formData.source} onChange={handleChange}>
                <option disabled="disabled" selected="selected">
                  --Choose Option
                </option>
                <option> Source 1</option>
                <option> Source 2</option>
                <option> Source 3</option>
              </select>
            </div>
            <div className="execu">
              <label className="area-code">
              Designation :
              </label>
              <input
                className="code"
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="execu">
              <label className="area-code">
               Product :
              </label>
              <select className="option" name="product" value={formData.product} onChange={handleChange}>
                <option disabled="disabled" selected="selected">
                  --Choose Option
                </option>
                <option> Product 1</option>
                <option> Product 2</option>
                <option> Product 3</option>
              </select>
            </div>
            <div className="execu">
              <label className="area-code">
                Requirements :
              </label>
              <input
                className="code"
                type="text"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required=""
              />
            </div>
            <div className="execu">
              <label className="area-code">
                Notes :
              </label>
              <input
                className="code"
                type="text"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                required=""
              />
            </div>

            <footer className='footerbutton'>
              <button className='savebtn'> Save</button>
            </footer>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</form>

</div>

  </div>
</div>

  )
}

export default Add