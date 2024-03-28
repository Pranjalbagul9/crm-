import React from 'react'
import './AddProspect.css'

const AddProspect = ({open, onClose}) => {
    if(!open) return null;
  return (
    <div onClick={onClose}className="overlay11">
        <div
        onClick={(e) => {e.stopPropagation();}}>
             <p className='closeBtn11' onClick={onClose}>
            X
          </p>
          <div className='form21'>
  <form>
    <table>
      <tbody>
        <tr>
          <td>
            <div className="namecontainer11">
              <h4 className="headingh21"> Name</h4>
              <div className="firstn11">
                <label className="firstlabel">
                  <p className='p11'>First Name :</p>
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="first_name"
                  required=""
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p11'>Last Name :</p>
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="first_name"
                  required=""
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p11'>Company Name :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="first_name"
                  required=""
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p11'>Website :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="url"
                  name="first_name"
                  required=""
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p11'>Industry :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="first_name"
                  required=""
                />
              </div>
              <div className="firstn">
                <label className="firstlabel">
                  <p className='p11'>Segment :</p>{" "}
                </label>
                <input id='input-field'
                  className="firstname"
                  type="text"
                  name="first_name"
                  required=""
                />
              </div>
            </div>
            <div className="phonecontainer11">
              <h2 className='headingh21'> Contact Details</h2>
              <div className="condt11">
                <label className="phone-number">
                  <p className='p11'>Email : </p>
                </label>
                <input id='input-field'
                  className="number"
                  type="email"
                  name="phone"
                  required=""
                />
              </div>
              <div className="condt11">
                <label className="phone-number">
                  <p className='p11'> Phone Number :</p>{" "}
                </label>
                <input id='input-field'
                  className="number"
                  type="tel"
                  name="phone"
                  pattern="[0-9]{10}"
                  required=""
                />
              </div>
              <div className="condt11">
                <label className="phone-number">
                  {" "}
                  <p className='p11'>Pin Code :</p>
                </label>
                <input id='input-field'
                  className="number"
                  type="number"
                  name="phone"
                  required=""
                />
              </div>
              <div className="condt11">
                <label className="phone-number">
                  <p className='p11'>City :</p>
                </label>
                <input id='input-field'
                  className="number"
                  type="text"
                  name="phone"
                  required=""
                />
              </div>
              <div className="condt11">
                <label className="phone-number">
                  <p className='p11'>State :</p>{" "}
                </label>
                <input id='input-field'
                  className="number"
                  type="text"
                  name="phone"
                  required=""
                />
              </div>
              <div className="condt11">
                <label className="phone-number">
                  <p className='p11'>Country :</p>
                </label>
                <input id='input-field1'
                  className="number"
                  type="text"
                  name="phone"
                  required=""
                />
              </div>
            </div>
          </td>
          <td>
            <div className="checkboxes11">
              <h2 className='headingh21'> Interested In:</h2>
              <div className="chk11">
                <div className="">
                  <input id='input-field1'
                    className="b11"
                    type="checkbox"
                    
                    name="interested"
                    defaultValue="customer"
                  />
                  <label className="area-code" htmlFor="customer">
                    {" "}
                    Customer{" "}
                  </label>
                </div>
                <input id='input-field1'
                  className="b21"
                  type="checkbox"
                  
                  name="interested"
                  defaultValue="prospect"
                />
                <label className="area-code" htmlFor="prospect">
                  {" "}
                  Prospect
                </label>
              </div>
              <div className="chk21">
                <input id='input-field1'
                  className="b31"
                  type="checkbox"
                  
                  name="interested"
                  defaultValue="prospect"
                />
                <label className="area-code" htmlFor="prospect">
                  {" "}
                  Supplier
                </label>
                
              </div>
              
            </div>
            <div className="businesscontainer11">
              <h2 className='headingh21'> Business Details</h2>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'>Product : </p>{" "}
                </label>
                <input id='input-field1'
                  className="code"
                  type="text"
                  name="executive"
                  required=""
                />
              </div>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'>Executive : </p>{" "}
                </label>
                <input id='input-field1'
                  className="code"
                  type="text"
                  name="executive"
                  required=""
                />
              </div>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'> Annual Business prospect(₹) : </p>{" "}
                </label>
                <input id='input-field1'
                  className="code"
                  type="text"
                  name="executive"
                  required=""
                />
              </div>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'>Order target :</p>{" "}
                </label>
                <input id='input-field1'
                  className="code"
                  type="text"
                  name="designation"
                  required=""
                />
              </div>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'>Prospect stage :</p>
                </label>
                <select className="option11" name="products">
                  <option disabled="disabled" selected="selected">
                    --Choose Option
                  </option>
                  <option>New Enquiry</option>
                  <option> Discussion</option>
                  <option> Quotation</option>
                  <option> PO</option>
                </select>
              </div>
              <div className="execute1">
                <label className="area-codeb">
                  <p className='p11'> Requirements :</p>{" "}
                </label>
                <input id='input-field1'
                  className="code"
                  type="text"
                  name="requirements"
                  required=""
                />
              </div>
              <footer className='savebutton1'>
                <button className='savebutton11'> Save</button>
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

export default AddProspect