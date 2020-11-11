import React from 'react'
import './Cards.css'
import CountUp from 'react-countup'


const Cards = ({data:{confirmed, deaths, recovered, lastUpdate}}) => {

    if (!confirmed){
        return 'Loading...'
    }

    return (
            <section className="cards">
                 <div className="cards__item cards__item--infected">
                    <span className="cards__text">Infected</span>
                    <h4>
                        <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                            />  
                    </h4>
                    <span className="cards__text">{new Date(lastUpdate).toDateString()}</span>   
                    <p className="cards__text">Number of active cases of COVID-19</p>
                 </div>
                 <div className="cards__item cards__item--recovered">
                    <span className="cards__text">Recovered</span>
                    <h4>
                        <CountUp 
                            start={0} 
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                            />      
                    </h4>
                    <span className="cards__text">{new Date(lastUpdate).toDateString()}</span>   
                    <p className="cards__text">Number of recovered from COVID-19 </p>
                 </div>
                 <div className="cards__item cards__item--death">
                    <span className="cards__text">Deaths</span>
                     <h4>
                        <CountUp 
                            start={0} 
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                            />  
                     </h4>   
                     <span className="cards__text">{new Date(lastUpdate).toDateString()}</span>   
                    <p className="cards__text">Number of deaths caused by COVID-19</p>
                 </div>
                
            </section>       
    )
}

export default Cards