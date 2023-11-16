import React from "react";
import './Gauge.css'

const Gauge = (props) => {
    return (
        <>
        <section className="gauge">
                <div>
                    <h2>{props.Gauge}</h2>
                        <div className="bar-container">
                        <div class={props.ClassName}></div>
                    </div>
                    <div className="lang"><p>{props.Name}</p></div>
            </div>
        </section>
    </>
        
    )
}


export default Gauge