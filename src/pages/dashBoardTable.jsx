import React from 'react'
import { useParams } from 'react-router-dom';
import Day from '../components/dashboard/Day';

const DashBoardTable = ({displayMonth}, {displayMonthNum} ) => {

    const monthss = [
        {
            MonthName:"Jan"
        },
        {
            MonthName:"Feb"
        },
        {
            MonthName:"Mar"
        },
        {
            MonthName:"Apr"
        },
        {
            MonthName:"May"
        },
        {
            MonthName:"June"
        },
        {
            MonthName:"July"
        },
        {
            MonthName:"Aug"
        },
        {
            MonthName:"Sep"
        },
        {
            MonthName:"Oct"
        },
        {
            MonthName:"Nov"
        },
        {
            MonthName:"Dec"
        },
    ]
    const ComplexDashboardInfo = [
        {
            MonthName:"Jan"
        },
        {
            MonthName:"Feb"
        }
    ]

    console.log(monthss[11].MonthName);
    
    // const activeMonth = monthss[displayMonthNum].MonthName
    // console.log(monthss[displayMonthNum]);
    
    return(
        <div>hello  </div>
    )
}

export default DashBoardTable