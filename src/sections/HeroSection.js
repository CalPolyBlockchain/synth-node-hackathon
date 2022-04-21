import React from 'react';
import StackedButton from '../components/StackedButton';
const mock_data = {
    mock_options : [
        {
            title:'CELO-3X-LONG',
            color:'green',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Celo go up"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        },
        {
            title:'CELO-3X-SHORT',
            color: 'blue',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Celo drill"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        },
        {
            title:'MOBI/UBE-3X-LONG',
            color: 'pink',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Mobie UBE go up"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        }
    ]
    }

export default function HeroSection(props) {
    return (
        <div className="bg-hero-img bg-cover bg-top bg-no-repeat p-2 min-h-screen bg-fixed font-press-start">
            <div className="text-left text-6xl p-4 m-5 py-8 max-w-5xl text-white">

                <p>{props.main}</p>
                <StackedButton text={props.button_text} onClick='' />
                <p className='text-white text-2xl text-center mt-10'> 
                    Yield producing mock-options Strategies, easy deposits of cUsd and Celo
                </p>
            </div>
            <div className="flex flex-row justify-center items-center ">
            {mock_data.mock_options.map((option,index)=>{
                return (
                    <div className="bg-opacity-80 bg-white p-4 m-4 w-30 h-30 rounded-lg">
                        <div className={`text-${option.color} text-2xl text-center`}>
                            {option.title}
                        </div>
                        <div className="text-white text-center">
                            {/* {option.lev_desciption} */}
                        </div>
                        <div className="flex flex-row justify-center items-center">

                        {option.historical_return_rates.map((rate,index)=>{
                            return (
                                <div className="text-white w-15 p-2 m-2 text-xs text-pink text-center rounded-lg bg-blac bg-opacity-100">
                                    {rate.t} {rate.return}
                                </div>
                            )
                        }
                        )}
                        </div>
                        <button className={`w-15 p-2 text-white bg-${option.color} bg-opacity-100 rounded-lg`}>
                                {option.leverage}x
                        </button>
                    </div>
            
                )
            })}
        </div>
            <div className="bg-opacity-70 bg-white">
                    
            </div>
        </div>
    );
}