import React from 'react'
import './QuotationForm.css'

const QuotationForm = () => {
  return (
    <div className="quote-container">
      <div className="invoice-head5">
        <h2>Create Invoice</h2>

        <div className="btn55" >
          <button className="back5-btn">Back</button>
          <button className="save5-btn">Save</button>
        </div>
      </div>
    
      <div className="basic-information">
        <h2>Basic Information</h2>


        <div className="cont">
          <label>Customer:</label>
          <input
            type="text"
            className="fafa5"
            name="customer"
            placeholder="Search"
          />
          <span>
            <i ></i>
          </span>
          
           <button className="add5"  style={{backgroundColor:'none',border:'1px solid green'}}>Add</button> 

          {/* <label>Copy From:</label>
          <select
            name="copyFrom"
            onChange={handleInputChange}
            value={formData.copyFrom}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select> */}
          <div className="copy-from-dropdown">
            <label className="dropdown-label">Copy From:</label>
            <select
              name="copyFrom"
             
              
              className="custom-dropdown"
            >
              <option value="option1">choose option</option>
              <option value="option1">Saved template</option>
            </select>
          </div>

          
        </div>
        <div className="cont1">
          <label className="mr-2">Type:</label>
          <input className="chk5"
            type="checkbox"
            name="type"
            value="partyInvoice"
            
            
          />
          Party Invoice
          <input  className="chk5"
            type="checkbox"
            name="type"
            value="cashMemo"
          
          />
          Cash Memo
        </div>
      </div>
      <div className="div5">
      {/* First Row */}
      <div className="row5" style={{}}>
        <div className="first-row5">
          <div className="first-row5-left">
            <h3 style={{marginLeft: '25px'}}>Customer Details</h3>

            <div class="grid5">
              <div class="g-col-4">
                <div className="field-row5">
                  <label>Contact Person :</label>
                  <input type="text" placeholder="" className="contact5" />
                  <label className="caa">Sales Credit :</label>

 <select className="custom">
 <option value="option1">choose option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>
                </div>
              </div>
              <div class="g-col-4">
                <div className="field-row5">
                  
                  <label>Shipping Address :</label>
                  <textarea name="address" id="" cols="30" rows="2" className="ba"></textarea>
                  <label className="baa">Billing Address :</label>
                  <textarea name="address" id="" cols="30" rows="2" className="ba"></textarea>
                 
                </div>
              </div>

              
            </div>
          </div>

          

          <div className="first-row5-right01">
            <h3 style={{marginLeft: '25px'}}>Document Details</h3>
            <label className="labelquote">Invoice No:</label>
            <input style={{}}
             type="text" placeholder="" className="invoice5" />
             
            <br />
            <label className="labelquote">Invoice Date:</label>
            <input
              type="date"
              placeholder="Invoice Date"
              className="invoicedate5"
              style={{marginLeft:'6px'}}
            />
            <br />
            <label className="labelquote">Due Date:</label>
            <input type="date" placeholder="Due Date" className="invoicedate5" />
            <br />
            <label className="labelquote">Reference :</label>
            <input type="text" placeholder="" className="invoice5" />
           
          </div>
        </div>
      </div>
      {/* Second Row */}
      <div className="second-row5">
        <div className="child55">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Item & Description</th>
                <th>HSN/SAC</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Rate (₹)</th>
                <th>Discount (₹)</th>
                <th>Taxable (₹)</th>
                <th>CGST (₹)</th>
                <th>SGST (₹)</th>
                <th>Amt (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><input type="text" style={{width:'7vh'}}/></td>
              <td><input type="text" style={{width:'21vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'12vh'}}/></td>
              <td><input type="text" style={{width:'15vh'}}/></td>
              </tr>
              
              
                <tr ></tr>
            </tbody>
          </table>
          <button className='add-itemqtable'
          style={{height:'30px',fontSize:"medium",
                 padding:'5px',backgroundColor:' rgb(118, 255, 118)',border:'none',color:'black'}} 
                 >
            + Add Item
            </button>
        </div>
      </div>
    </div>
    <div className="big-con">
      <div className="right-side55">
        <div className="right-side5">
          <label>Terms & Conditions:</label>
          <input
            style={{marginTop:'1px',border:'1px solid grey',width:'90%',marginLeft:'5px'}}
            type="text"
            placeholder="Enter the text"
            

            className="term5"
          />
          <button  className="add-button5">
            +
          </button>
        </div>
        <div className="Notes5">
          <div className="notes5">
            <h4>Notes:</h4>
            <input type="text" placeholder="Enter the text" className="input5"/>
          </div>
          <div className="notes15">
            <h4>Bank Details:</h4>
            <label><i>bank details </i> </label>
          </div>
        </div>
        {/* new  */}
        <h2>Payment Recovery</h2>
        <div className="Notes5">
          <div className="notes25">
            <h4>Update Recovery Amt:</h4>
            <input className="input" type="text" placeholder="Enter the text" />
            <span className="rupay-icon"></span>
          </div>
          <div className="notes35">
            <h4>Update Invoice Status:</h4>
            
         
         <select  className="input">
  <option value="Full Paid">Full Paid</option>
  <option value="Half paid">Half paid</option>
  <option value="Unpaid">Unpaid</option>
 
          </select>
          </div>
        </div> 
        <div>
      <button  className="submit" style={{ backgroundColor: 'green', color: 'white',width:"100px",height:"40px",marginTop:"40px",marginLeft:"60%" }}>
          Submit
        </button>
      </div>
      </div>
      
      
      {/* new  */}
      <div className="left-side5"  >
        {/* <h2>Left Side</h2> */}
        <div className="totals" >
          <p>Total Amount Before Tax: (₹) 0.00</p>
          <p>Total: (₹) 0.00</p>
          {/* <div className="line"></div> Added line */}
          {/* <div className="round-off">
            <label>Include Round Off</label>
            <input type="checkbox" />
          </div> */}
          {/* <div className="line"></div> Added line */}
          <p>Grand Total: (₹) 0.00</p>
        </div>
        <div className="buttons-container">
          <button className="button15">Add Extra Charges</button>
          <button className="button25">Add Discount</button>
        </div>
       
      </div>
      
    </div>
    
    </div>
  )
}

export default QuotationForm