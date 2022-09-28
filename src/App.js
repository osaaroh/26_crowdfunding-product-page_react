
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import BackersBar from './components/BackersBar';
import Modal from './components/Modal';
import data from './data';



function App() {
    const [modalStatus, setModal]= useState(false);
    const [pledges, setPledges] = useState(data);
    const [pledge25Amt, setPledge25Amt] = useState(pledges[1].amountLeft);
    const [pledge75Amt, setPledge75Amt] = useState(pledges[2].amountLeft);

    let [amount_pledged, setAmountPledged] = useState(8991);
    const [amount_goal, setAmountGoal] = useState(100000);
    let [total_backers, setTotalBackers] = useState(5000);
    let percentage = (amount_pledged/amount_goal)*100;

    const increaseAmountPledged = (value)=>{
        amount_pledged = parseInt(amount_pledged) + parseInt(value);
        setAmountPledged(amount_pledged);
    }
    const increaseTotalBackers = ()=>{
        if(total_backers<=0){
            setTotalBackers(0);
        }
        else{
            total_backers +=1;
            setTotalBackers(total_backers);
        }   
    }
    const setProgressBar = () =>{
        document.querySelector('.progress-bar').style.width = percentage+'%'
    }

    const reduce25=()=>{
        setPledge25Amt(pledge25Amt-1);
    }

    const reduce75=()=>{
        setPledge75Amt(pledge75Amt-1);
    }

    useEffect(()=>{
        setProgressBar()
    })

    return (
        <>
        <Header />

        <main>
            <Intro setModal={setModal}/>

            <BackersBar amount_pledged={amount_pledged} amount_goal={amount_goal} total_backers={total_backers}/>

            <section className="card card-3__about" id="about">
                <h3>About this project</h3>
                <p className="lead">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable
                    while at work, helping you stay focused on the task at hand.</p>
                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand. </p>

                <article className="card" id="start">
                    <div className="title__wrapper">
                        <h4>Bamboo Stand</h4>
                        <p className="pledge-text">Pledge $25 or more</p>
                    </div>
                    <p className="content-text"> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list. </p>
                    <div className="stat-select__wrapper">
                        <div className="item-left__wrapper">
                            <p className="number">{pledge25Amt}</p>
                            <p className="text">left</p>

                        </div>
                        <a href="#modal-inner" className="btn btn-primary" onClick={()=>setModal(true)}>Select Reward</a>
                    </div>
                </article>
                <article className="card">
                    <div className="title__wrapper">
                        <h4> Black Edition Stand</h4>
                        <p className="pledge-text">Pledge $75 or more</p>
                    </div>
                    <p className="content-text"> You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included. </p>
                    <div className="stat-select__wrapper">
                        <div className="item-left__wrapper">
                            <p className="number">{pledge75Amt}</p>
                            <p className="text">left</p>
                        </div>
                        <a href="#modal-inner" className="btn btn-primary" onClick={()=>setModal(true)}>Select Reward</a>
                    </div>
                </article>
                <article className="card greyed-out">
                    <div className="title__wrapper">
                        <h4>Mahogany Special Edition</h4>
                        <p className="pledge-text">Pledge $200 or more</p>
                    </div>
                    <p className="content-text"> You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included. </p>
                    <div className="stat-select__wrapper">
                        <div className="item-left__wrapper">
                            <p className="number">0</p>
                            <p className="text">left</p>
                        </div>
                        <a href="#modal-inner" className="btn btn-disabled" onClick={(e)=>e.preventDefault()} disabled>Out of Stock</a>
                    </div>
                </article>
            </section>

            {/* <!-- Selection modal start --> */}
            <Modal modalStatus={modalStatus} setModal={setModal} pledges={pledges} setAmountPledged={increaseAmountPledged} setTotalBackers={increaseTotalBackers} pledge25Amt={pledge25Amt} pledge75Amt={pledge75Amt}  setPledge25Amt={ reduce25}  setPledge75Amt={ reduce75}/>

        </main>

    </>);
}

export default App;
