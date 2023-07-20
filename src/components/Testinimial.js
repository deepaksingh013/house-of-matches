import React from 'react'
import imgMain from "../images/Rectangle 563.png"
import imgMain2 from "../images/Rectangle 566.png"
import "./testinomial.css"
const testinomial = [
    {
        img: imgMain,
        content: "House of Patterns is a luxury experiential event design company. We understand the power of design as a storyteller and our passion lies in integrating your personal story into every detail of our creations.",
        name: "Ayush & mehak"
    },
    {
        img: imgMain2,
        content: "House of Patterns is a luxury experiential event design company. We understand the power of design as a storyteller and our passion lies in integrating your personal story into every detail of our creations.",
        name: "Ayush & mehak"
    }
]

export default function Testinimial() {
    return (
        <>
            <div className="testinomial">
                <div className="testCard d-flex">
                    {testinomial.map((item, index) => {
                        return (
                            <div className='card-content-test col-lg-6 p-4'>
                                <div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={index % 2 === 0 ? "card-item-tst" : "card-item-tstmain"}>
                                    <div className='card-item-content'>
                                      <h1>{item.content}</h1>  
                                    </div>
                                    <div className='card-item-name'>
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    )
}
