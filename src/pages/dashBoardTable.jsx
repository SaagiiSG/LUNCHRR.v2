import React from 'react'
import { useParams } from 'react-router-dom';
import Day from '../components/dashboard/Day';

const DashBoardTable = ({displayMonth}, {grade}  ) => {
    const monthMap = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        June: 6,
        July: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Nov: 11,
        Dec: 12,
      };
    
      const monthNumber = monthMap[displayMonth] || "Invalid month";

      
    const monthss = [
        {
            MonthName:"Jan",
            grade:"11.2"
        },
        {
            MonthName:"Feb",
            grade:"5.2"
        },
        {
            MonthName:"Mar",
            grade:"5.2"
        },
        {
            MonthName:"Apr",
            grade:"5.2"
        },
        {
            MonthName:"May",
            grade:"5.2"
        },
        {
            MonthName:"June",
            grade:"8.1"
        },
        {
            MonthName:"July",
            grade:"8.2"
        },
        {
            MonthName:"Aug",
            grade:"7.2"
        },
        {
            MonthName:"Sep",
            grade:"5.1"
        },
        {
            MonthName:"Oct",
            grade:"9.2"
        },
        {
            MonthName:"Nov",
            grade:"6.2"
        },
        {
            MonthName:"Dec",
            grade:"7.2"
        },
    ]
    
    // const activeMonth = monthss.find(month=> month == displayMonth)
    const activeMonth = monthss[monthNumber-1].MonthName
    const activeClass = monthss[monthNumber-1].grade

    const displayTable = monthss.find((month) =>
        month.MonthName === displayMonth && (grade === "all classes" || month.grade === grade))
    console.log(displayTable);
    
    // const activeMonth = monthss[displayMonthNum].MonthName
    // console.log(monthss[displayMonthNum]);

    
    
    return(
        <div>hello {activeMonth}  </div>
    )
}

export default DashBoardTable