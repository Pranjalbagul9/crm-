import React from 'react'
import './EditCustomer.css'

const EditCustomer = ({open, onClose}) => {
    if(!open) return null;
  return (
    
    <div className="container">
  <div className="header">
    <div className="leftheader">
      <p> Edit Connection</p>
    </div>
    <div className="rightheader">
      <button className="but1">
        <a href="#" id="tick">
          <i className="bi bi-check2"> </i>Save
        </a>
      </button>
      <button className="but2">
        <a href="#">
          <i className="bi bi-x-lg" />
        </a>
      </button>
    </div>
  </div>
  <main>
    <div className="company">
      <label className="comp" htmlFor="con1">
        Company :{" "}
      </label>
      <input
        className="company_input"
        type="text"
        name="name"
        required=""
        id=" con1"
      />
    </div>
    <div className="name_container">
      <div className="name">
        <div>
          <label className="name-con" htmlFor="con2">
            {" "}
            Name :
          </label>
        </div>
        <div className="name_input">
          <select className="option" name="source" id="con2">
            <option disabled="disabled" selected="selected">
              --Choose Option
            </option>
            <option> Mr </option>
            <option> Mrs </option>
          </select>
          <input className="name1" type="text" required="" id="con2" />
          <input className="name1" type="text" required="" id="con2" />
        </div>
      </div>
      <div className="phone">
        <div>
          <label className="phone-number" htmlFor="con3">
            {" "}
            Mobile :
          </label>
        </div>
        <div>
          <input type="text" className="phone_input" id="con3" />
        </div>
      </div>
    </div>
    <div className="email_container">
      <div className="email_con">
        <div>
          <label className="email" htmlFor="con4">
            {" "}
            Email :
          </label>
        </div>
        <input type="text" className="email_input" id="con4" />
      </div>
      <div className="website_con">
        <div>
          <label className="website" htmlFor="con5">
            {" "}
            Website :
          </label>
        </div>
        <input type="text" className="email_input" id="con5" />
      </div>
    </div>
    <div className="email_container">
      <div className="email_con">
        <label className="email" htmlFor="con6">
          {" "}
          Industry :
        </label>
        <input type="text" className="email_input" id="con6" />
      </div>
      <div className="website_con">
        <label className="website" htmlFor="con7">
          {" "}
          Segment :
        </label>
        <input type="text" className="email_input" id="con7" />
      </div>
    </div>
    <div className="country">
      <div className="country_container">
        <div>
          <label className="email" htmlFor="con8">
            {" "}
            Country :
          </label>
        </div>
        <input type="text" className="country_input" id="con8" />
      </div>
      <div className="country_container">
        <div>
          <label className="email" htmlFor="con9">
            {" "}
            State :
          </label>
        </div>
        <input type="text" className="country_input" id="con9" />
      </div>
      <div className="country_container">
        <div>
          <label className="email" htmlFor="con10">
            {" "}
            City :
          </label>
        </div>
        <input type="text" className="country_input" id="con10" />
      </div>
    </div>
    <div className="checkboxes">
      <div className="box1">
        {" "}
        <input type="checkbox" id="check1" />
        <label htmlFor="check1"> Customer</label>{" "}
      </div>
      <div className="box2">
        {" "}
        <input type="checkbox" id="check2" />
        <label htmlFor="check2">Prospect</label>
      </div>
      <div className="box3">
        {" "}
        <input type="checkbox" id="check3" />
        <label htmlFor="check3">Supplier</label>
      </div>
      <div className="box4">
        {" "}
        <input type="checkbox" id="check4" />
        <label htmlFor="check4">Neighbour</label>
      </div>
      <div className="box5">
        {" "}
        <input type="checkbox" id="check5" />
        <label htmlFor="check5">Friend</label>
      </div>
    </div>
    <div className="section3">
      <div className="col1">
        <div>
          <label htmlFor="amount">Receivables</label>
        </div>
        <input type="number" id="amount" />
      </div>
      <div className="col1">
        <div>
          <label htmlFor="notes">Receivable Notes</label>
        </div>
        <input type="text" id="notes" />
      </div>
    </div>
    <div className="section3">
      <div className="col1">
        <div>
          <label htmlFor="prospect">Business Prospect (Annual)</label>
        </div>
        <input type="number" id="prospect" />
      </div>
      <div className="col1">
        <div>
          <label htmlFor="target">Order Target</label>
        </div>
        <input type="text" id="target" />
      </div>
    </div>
    <div className="footer1">
      <input type="checkbox" id="check6" />
      <label htmlFor="check6"> Send Invitation </label>
    </div>
    <button id="footer_button1">
      <a href="#" id="add">
        Manage Addresses &amp; GST
      </a>
    </button>
    <div className="footer2">
      <button id="footer_button2">Save</button>
      <button id="footer_button3">Delete</button>
    </div>
  </main>
</div>

  )
}

export default EditCustomer