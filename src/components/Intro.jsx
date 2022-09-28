import React, { useState } from 'react'
import mastercraftLogo from '../images/logo-mastercraft.svg'
import bookmarkIcon from '../images/icon-bookmark.svg'
import bookmarkIconEnabled from '../images/icon-bookmark-enabled.svg'

const Intro =({setModal})=> {
    const [bookmarked, setBookmark] = useState(false)
    return  (
    <section className="card card-1__intro">
        <img src={mastercraftLogo} alt="" className="logo-mastercraft"/>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful &#38; handcrafted monitor stand to reduce neck and eye strain.</p>
        <div className="button-wrapper">
            <a href="#modal-inner" className="btn btn-primary" onClick={()=>setModal(true)}>Back this project</a>
            <button className={`btn btn-bookmark ${bookmarked?'btn-bookmark-enabled':''}`} onClick={()=>{setBookmark(!bookmarked)}}>
                <img src={bookmarked? bookmarkIconEnabled: bookmarkIcon} alt="" className="bookmark-icon "/><span>{bookmarked?'Bookmarked':'Bookmark'}</span> </button>
        </div>
    </section>)
}

export default Intro;
