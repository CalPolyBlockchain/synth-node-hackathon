import BarChart from "./BarChart";
import { useState, useEffect } from "react";


export default function InterestDemo(props){

    function yearly_to_monthly(yearly_rate){
        return yearly_rate / 12;
    }
    
    function comp_interest(p, r, n,t){
        return p * Math.pow((1 + r/n), n*t);
    }
    
    function calcIntervals(rate_yr, period_mo, deposit){
        let series = [];
        let rate_mo = yearly_to_monthly(rate_yr, period_mo);
        for(let i = 0; i < period_mo; i++){
            series.append({"month": i, "balance": comp_interest(deposit, rate_mo, period_mo, i)});
        }
        return series;
    }


    const [interestRate, setInterestRate] = useState(1.04);
    const [depositAmount, setDepositAmount] = useState(1000);
    const [depositPeriod, setDepositPeriod] = useState(3);
    const [seriesData, setSeriesData] = useState([]);

   
    return(
        <div>
            
            {/* <BarChart data={seriesData}/> */}
        </div>
    );
}