

function PopUp2() {
  return (
    <div className="App">
                <div>
            <h4>Update Information</h4>
            <div>
              <div>
              <label htmlFor="">Source</label>
                <select name="" id="">
                <option value="">Email</option>
                <option value="">Walkin</option>
                <option value="">Whatsapp</option>
                <option value="">Other</option>
                </select>
                
                <label for="date">Since</label>
                <input type="date" id="date" name="date"></input>
                </div>
                <div>
                <label htmlFor="">Executive</label>
                <input type="text" />
                
                <label htmlFor="">Product</label>
                <input type="text" />
                </div>
                <div>
                <label htmlFor="">Business Prospect</label>
                <input type="number" />
                
                <label htmlFor="">Requirement</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div><button>Save</button></div>
            </div>
        </div>
    </div>
  );
}

export default PopUp2;
