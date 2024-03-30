import React, { useState } from 'react'


function Aside() {
    const [menuChecked, setMenuChecked] = useState({});
  const [openMenu, setOpenMenu] = useState(null);
     const handleMenuChange = (event) => {
    setMenuChecked({ ...menuChecked, [event.target.name]: event.target.checked });
  };

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = ["IDEAL FOR", "OCCASION", "WORK","FABRIC", "SEGMENT", "SUITABLE FOR","RAW MATERIAL", "PATTERN"];
  return (
    <div  className='col-md-3'>
        {menuItems.map((menu, index) => (
          <div key={index} className="dropdown">
          <span onClick={() => toggleDropdown(menu)} className='fw-bold dropdown-toggle'>{menu}</span>
          <p>All</p>
          {openMenu === menu && (
            <div className="dropdown-content">
              <label><input type="checkbox" name="men" checked={menuChecked["men"]} onChange={handleMenuChange} /> Men</label> <br /><br />
              <label><input type="checkbox" name="women" checked={menuChecked["women"]} onChange={handleMenuChange} /> Women</label><br /><br />
              <label><input type="checkbox" name="kids" checked={menuChecked["kids"]} onChange={handleMenuChange} /> Kids</label>
            </div>
          )}
          <hr />
        </div>
      ))}
      </div>
  )
}

export default Aside