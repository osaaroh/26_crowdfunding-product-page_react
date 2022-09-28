import React from 'react';
import PledgeRadioList from './PledgeRadioList';
import { useState, useEffect } from 'react';
import iconCheck  from '../images/icon-check.svg';
import iconClose  from '../images/icon-close-modal.svg';



const Modal =({modalStatus, setModal, pledges, setAmountPledged, setTotalBackers, pledge25Amt, pledge75Amt, setPledge25Amt, setPledge75Amt})=> {

    const [completed, setCompleted] = useState(false);

    let helperSetCompleted =()=>{
        setCompleted(true);
    }

    useEffect(()=>{
        document.querySelector('.modal-inner').focus();
    },[modalStatus])

    // eslint-disable-next-line
    return  <section className={`${modalStatus && 'modal' || 'hide'} back-project_modal`} >
            <div className="card modal-inner" id="modal-inner">
                <div  className={`${completed?'hide':''}`}>
                    <div className='modal-close__wrapper'><h3>Back this project</h3><div className='modal-close' onClick={()=>{
                            setModal(false);
                            }}><img src={iconClose} alt="close modal"/></div></div>
                    
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                
                <PledgeRadioList pledges={pledges} completed={completed} setCompleted={helperSetCompleted} setAmountPledged={setAmountPledged} setTotalBackers={setTotalBackers} pledge25Amt={pledge25Amt} pledge75Amt={pledge75Amt} setPledge25Amt={ setPledge25Amt}  setPledge75Amt={ setPledge75Amt}/>

                <section className={`card modal-card__thanks ${completed?'':'hide'}`}>
                    <div className="modal-inner"> 
                    <div className="image">
                        <img src={iconCheck} alt="" />
                    </div>
                    <h3>Thanks for your support!</h3>
                    <p> Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                    <input type="button" value=" Got it!" className="btn btn-primary" onClick={()=>{
                        setModal(false);
                        setCompleted(false);
                    }} />
                    </div>
                </section>

            </div>
        </section>
}

export default Modal;
