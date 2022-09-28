import React from 'react';
import PledgeCard from './PledgeCard';

const PledgeRadioList =({pledges, completed, setCompleted, setAmountPledged, setTotalBackers, pledge25Amt, pledge75Amt, setPledge25Amt, setPledge75Amt})=> {
    if(completed){
        //If a pledge has already been submitted don't show pledge list
    }
    else{
        return pledges.map((pledge,index)=>{
            return <PledgeCard {...pledge} key={index} index={index} setCompleted={setCompleted} setAmountPledged={setAmountPledged} setTotalBackers={setTotalBackers} pledge25Amt={pledge25Amt} pledge75Amt={pledge75Amt} setPledge25Amt={setPledge25Amt} setPledge75Amt={setPledge75Amt} />
        })
    }
}


export default PledgeRadioList;
