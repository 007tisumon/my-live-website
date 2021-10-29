import React from 'react'


export default function Card(props) {
    return (
        <>
            <div className="cards">
               <div className="card">
                  <img src={props.imgSrc} alt="myPic" className="card_img" />

                   <div className="card_info">
                        <span className="card_category">
                           {props.title}
                        </span>
                        <h3 className="card_title">{props.sname} </h3>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
