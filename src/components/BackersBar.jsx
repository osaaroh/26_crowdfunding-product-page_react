import React from 'react'

const BackersBar=({amount_pledged,amount_goal, total_backers})=> {
    
    return (
    <div className="card card-2__stats">
        <div className="counters">
            <div className="counter">
                <div className="counter-wrapper">
                    <h2>${amount_pledged}</h2>
                    <p>of ${amount_goal} backed</p>
                </div>

            </div>
            <div className="counter">
                <div className="counter-wrapper">
                    <h2>{total_backers}</h2>
                    <p>total backers</p>
                </div>
            </div>
            <div className="counter">
                <div className="counter-wrapper">
                    <h2>56</h2>
                    <p>days left</p>
                </div>
            </div>
        </div>
        <div className="progress">
            <div className="progress-bar__container">
                <div className="progress-bar"></div>
            </div>
        </div>
    </div>)
}

export default BackersBar;

