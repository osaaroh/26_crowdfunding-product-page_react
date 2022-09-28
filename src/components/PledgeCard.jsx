import React from 'react'
import { useState } from 'react';

const PledgeCard =({id,amountLeft,condition, details,pledgeName, index, setCompleted, setAmountPledged, setTotalBackers, pledge25Amt, pledge75Amt, setPledge25Amt, setPledge75Amt})=> {

    const [isChecked, setChecked] = useState(false);
    const [pledgeValue, setPledgeValue] = useState('');
    

    // Dynamic disabled HTML attribute
    const disabled = id !=='noPledge' && id !=='pledge200'?'':{disabled: true}

    const disabledBtn = id !=='pledge200'?'':{disabled: true}


    const handleChange = (e) => {
        if (document.getElementById(id).checked) {
            setChecked(true)
        } else if(!document.getElementById(id).checked) {
            setChecked(false)
        }
    }

    const amountLeftCheck=()=>{
        if(id ==='pledge25'){
            return pledge25Amt
        } else
        if(id ==='pledge75'){
            return pledge75Amt
        } else{
            return amountLeft
        }
    }
    
    const reduceItemsLeft=()=>{
        if(id ==='pledge25'){
            setPledge25Amt()
        } else
        if(id ==='pledge75'){
            setPledge75Amt()
        } else{
            return
        }
    }
    

    return  (   
    <div className={`card ${isChecked?'card-active':'card-inactive'}`}>  
        <article className="modal-card">
            <div className="radio"><input type="radio" name="wood-modal" id={id} onChange={(e) => {
                handleChange(e);

            }} /></div>
            <label htmlFor={id}>
                <div className="pledge__wrapper pledge__wrapper-desktop">
                    <h4 className="pledge">{pledgeName} <span>{condition}</span></h4>
                    {id !=='noPledge'? (<p>{amountLeftCheck()} <span>left</span></p>): ''}
                </div>
                <p>{details}</p>
                <div className="pledge__wrapper pledge__wrapper-mobile">
                    <p>{amountLeftCheck()} <span>left</span></p>
                </div>
            </label>
        </article>
        <div className={`pledge-input__wrapper ${isChecked===false?'hide':''}`}>
            <p>Enter your pledge</p>
            <div className='pledge-input-btn__wrapper'>
                <input type="text" name="" id="" placeholder='$' value={pledgeValue}
            onChange={(e) => setPledgeValue(e.target.value)} {...disabled} maxLength="5"/>
                <button className='btn btn-primary' onClick={()=>{
                    setCompleted();
                    setTotalBackers();
                    if(pledgeValue && parseInt(pledgeValue)){
                        setAmountPledged(Math.abs(pledgeValue));
                        reduceItemsLeft();
                    }
                    
                }
                    } {...disabledBtn}>Continue</button>
            </div>
            
        </div>
    </div> )
}

export default PledgeCard;



//Assign variables for desktop modals
// let allRadioBtns = document.querySelectorAll('[name="wood-modal"]');
// function hideAllAndShowCurrent(currentNum) {
//     allRadioBtns.forEach(
//         function(currentRadioBtn, i) {
//             if (i != currentNum) {
//                 currentRadioBtn.checked = "false";
//             }
//         }
//     )
// }