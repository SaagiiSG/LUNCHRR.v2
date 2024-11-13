import React from 'react'
import { useParams } from 'react-router-dom';

const DashBoardTable = ({displayMonth} ,{id}) => {
    // console.log(displayMonth);
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
    const ComplexDashboardInfo = [
        {
            MonthName:"Jan"
        },
        {
            MonthName:"Feb"
        }
    ]
    const activeMonth = months.find(month=> month == displayMonth)
    return(
        <div>hello {activeMonth} </div>
    )
}

export default DashBoardTable