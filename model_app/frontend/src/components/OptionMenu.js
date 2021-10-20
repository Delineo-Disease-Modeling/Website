import React, { useState } from 'react';
import '../containers/Simulator.css'
import Intervention from './Intervention.js'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const OptionMenu = () => {
  const [menuState, setMenuState] = useState({
    hidden: false,
    dropdownOpen: false,
    selectedPolicy: 'Policy',
    duration: '0',
    policyComponent: [],
    policyList: ["Stay At Home Order", "Social Distancing Order", "Sanitation Order", "Mandatory Mask Order"]
  });

  const handleAdd = () => {
    setMenuState({ hidden: !menuState.hidden });
    //console.log("Add Was clicked:"+ menuState.hidden)
  };

  const toggle = () => setMenuState({ dropdownOpen: !menuState.dropdownOpen });

  const deleteItem = (pos, policy) => {
    setMenuState({ policyComponent: menuState.policyComponent.filter((item) => item.policy !== policy) });
    let list = menuState.policyList;
    list.push(policy);
    setMenuState({ policyList: list });
  };

  const save = () => {
    if (menuState.duration !== '' && menuState.selectedPolicy !== 'Policy') {
      let newPolicy = {
        policy: menuState.selectedPolicy,
        duration: menuState.duration,
      };
      setMenuState({ policyComponent: [...menuState.policyComponent, newPolicy] });
      let array = menuState.policyList;
      let pos = array.indexOf(menuState.selectedPolicy);
      if (pos > -1) {
        array.splice(pos, 1);
      }
      setMenuState({ policyList: array, selectedPolicy: 'Policy', hidden: !menuState.hidden });
    }
  };

  return (
    <div>
      {menuState.policyComponent.map((item) => {
        return (<Intervention key={item.policy} policy={item.policy} days={item.duration} remove={deleteItem} />);
      })}
      <div align='left' className={menuState.hidden ? 'hidden' : ''}>
        <div className='row'>
          <div className='col'>
            <Dropdown isOpen={menuState.dropdownOpen} toggle={toggle} style={{ marginLeft: '10px' }}>
              <DropdownToggle caret> {menuState.selectedPolicy} </DropdownToggle>
              <DropdownMenu>
                {menuState.policyList.map((item) => {
                  return (
                    <DropdownItem key={item} onClick={() => { setMenuState({ selectedPolicy: item }) }}>{item}</DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='col'>
            <label htmlFor='usr' style={{ color: 'white' }}>Duration (in days): </label>
            &nbsp; &nbsp;
            <input align='left' required size='15' type='text' style={{ marginRight: '30px', marginLeft: '0px' }} onChange={event => setMenuState({ duration: event.target.value })}></input>
          </div>
          <div align='bottom' className='col4'>
            <button className='buttonSave' onClick={save}>Save</button>
          </div>
          {/* <div align='left' className='col4'>
              <label htmlFor='usr' style={{ color: 'white' }}>Duration (in days): </label>
              <input align='left' required size='15' type='text' style={{ marginRight: '30px', marginLeft: '0px' }} onChange={event => setMenuState({ duration: event.target.value })}></input>

            </div> */}
        </div>
        <br></br>
        <hr align='left' className='dotted'></hr>
      </div>
      <div style={{ textAlign: 'left', marginLeft: '55px' }}>
        <button className='button' onClick={handleAdd}>Add+</button>
      </div>
      <br></br>
    </div>
  );
};

export default OptionMenu;
