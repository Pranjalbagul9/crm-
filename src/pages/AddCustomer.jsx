import React,{useState} from 'react'
import './AddCustomer.css'
import Axios from 'axios';

const AddCustomer = ({open, onClose}) => {
  const[prospect, setProspect] = useState();
  const[supplier, setSupplier] = useState();
  const[checkboxSchema,setCheckboxSchema] = useState([])
  const[check, setCheck] = useState([]);
  const [customer, setCustomer] = useState({
    firstName : '',
    lastName : '',
    companyName : '',
    website : '',
    industryType : '',
    segment : '',
    email : '',
    phoneNumber : '',
    pincode : '',
    city : '',
    state : '',
    country : '',
    checkboxSchema:[],
    product : '',
    executive : '',
    annualBusiness : '',
    orderTarget : '',
    prospectStage : '',
    requirements : '',
  })
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      interestedIn: {
        ...prevCustomer.interestedIn,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:5001/api/v1/customers/customersCreate", customer);
      console.log(response.data);
      setCustomer({
      firstName : '',
      lastName : '',
      companyName : '',
      website : '',
      industryType : '',
      segment : '',
      email : '',
      phoneNumber : '',
      pincode : '',
      city : '',
      state : '',
      country : '',
      interestedIn: [],
      product : '',
      executive : '',
      annualBusiness : '',
      orderTarget : '',
      prospectStage : '',
      requirements : '',
     });
    } catch (error) {
      console.error('Error occurred while submitting form:', error);
     }
    }

    if(!open) return null;
  return (
    <div onClick={onClose}className="overlay1">
        <div
        onClick={(e) => {e.stopPropagation();}}>
             <p className='closeBtn1' onClick={onClose}>
            X
          </p>
          <div className='form2'>
  <form onSubmit={handleSubmit}>
    <table>
      <tbody>
        <tr>
          <td>
            <div className="namecontainer1">
              <h2 className="headingh2"> Name</h2>
              <div className="firstn1">
                <label className="firstlabel">
                  <p className='p1'>First Name :</p>
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="firstName"
                  required=""
                  value={customer.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p1'>Last Name :</p>
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="lastName"
                  required=""
                  value={customer.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p1'>Company Name :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="companyName"
                  required=""
                  value={customer.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p1'>Website :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="url"
                  name="website"
                  required=""
                  value={customer.website}
                  onChange={handleChange}
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p1'>Industry :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="industryType"
                  required=""
                  value={customer.industryType}
                  onChange={handleChange}
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p1'>Segment :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="segment"
                  required=""
                  value={customer.segment}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="phonecontainer1">
              <h2 className='headingh2'> Contact Details</h2>
              <div className="condt1">
                <label className="phone-number">
                  <p className='p1'>Email : </p>
                </label>
                <input id='input-field'
                  className="number"
                  type="email"
                  name="email"
                  required=""
                  value={customer.email}
                  onChange={handleChange}
                />
              </div>
              <div className="condt1">
                <label className="phone-number">
                  <p className='p1'> Phone Number :</p>{" "}
                </label>
                <input id='input-field'
                  className="number"
                  type="tel"
                  name="phoneNumber"
                  pattern="[0-9]{10}"
                  required=""
                  value={customer.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="condt1">
                <label className="phone-number">
                  {" "}
                  <p className='p1'>Pin Code :</p>
                </label>
                <input id='input-field'
                  className="number"
                  type="number"
                  name="pincode"
                  required=""
                  value={customer.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="condt1">
                <label className="phone-number">
                  <p className='p1'>City :</p>
                </label>
                <input id='input-field'
                  className="number"
                  type="text"
                  name="city"
                  required=""
                  value={customer.city}
                  onChange={handleChange}
                />
              </div>
              <div className="condt1">
                <label className="phone-number">
                  <p className='p1'>State :</p>{" "}
                </label>
                <input id='input-field'
                  className="number"
                  type="text"
                  name="state"
                  required=""
                  value={customer.state}
                  onChange={handleChange}
                />
              </div>
              <div className="condt1">
                <label className="phone-number">
                  <p className='p1'>Country :</p>
                </label>
                <input id='input-field'
                  className="number"
                  type="text"
                  name="country"
                  required=""
                  value={customer.country}
                  onChange={handleChange}
                />
              </div>
            </div>
          </td>
          <td>
            <div className="checkboxes">
              <h2 className='headingh2'> Interested In:</h2>
              <div className="chk1">
                <div className="">
                  <input id='input-field'
                    className="b1"
                    type="checkbox"
                    checked={customer.checkboxSchema.customer}
                    
                    name="customer"
                    defaultValue="customer"
                    
                    onChange={handleChange}
                   
                  />
                  <label className="area-code" htmlFor="customer">
                    {" "}
                    Customer{" "}
                  </label>
                </div>
                <input id='input-field'
                  className="b2"
                  type="checkbox"
                  name="prospect"
                  defaultValue="prospect"
                  style={{marginRight:'5px'}}
               
                  checked={customer.checkboxSchema.prospect}


                  onChange={handleChange}
                />
                <label className="area-code" htmlFor="prospect">
                  {" "}
                  Prospect
                </label>
              </div>
              <div className="chk2">
                <input id='input-field'
                  className="b3"
                  type="checkbox"
                  
                  name="supplier"
                  defaultValue="prospect"

                  checked={customer.checkboxSchema.supplier}

                  onChange={handleChange}
                />
                <label className="area-code" htmlFor="prospect">
                  {" "}
                  Supplier
                </label>
              
               
              </div>
            </div>
            <div className="businesscontainer1">
              <h2 className='headingh2'> Business Details</h2>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'>Product : </p>{" "}
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="product"
                  required=""
                  value={customer.product}
                  onChange={handleChange}
                />
              </div>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'>Executive : </p>{" "}
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="executive"
                  required=""
                  value={customer.executive}
                  onChange={handleChange}
                />
              </div>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'> Annual Business prospect(₹) : </p>{" "}
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="annualBusiness"
                  required=""
                  value={customer.annualBusiness}
                  onChange={handleChange}
                />
              </div>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'>Order target :</p>{" "}
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="orderTarget"
                  required=""
                  value={customer.orderTarget}
                  onChange={handleChange}
                />
              </div>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'>Prospect stage :</p>
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="prospectStage"
                  required=""
                  value={customer.prospectStage}
                  onChange={handleChange}
                />
              </div>
              <div className="execute">
                <label className="area-code">
                  <p className='p1'> Requirements :</p>{" "}
                </label>
                <input id='input-field'
                  className="code"
                  type="text"
                  name="requirements"
                  required=""
                  value={customer.requirements}
                  onChange={handleChange}
                />
              </div>
              <footer className='savebutton'>
                <button className='savebutton1'> Save</button>
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

export default AddCustomer