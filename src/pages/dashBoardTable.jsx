import React from 'react'
import { useParams } from 'react-router-dom';
import Day from '../components/dashboard/Day';

const DashBoardTable = ({displayMonth, grade, day}  ) => {
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
            Day:"1",
            grade:"11.2"
        },
        {
            MonthName:"Feb",
            Day:"2",
            grade:"5.2"
        },
        {
            MonthName:"Mar",
            Day:"3",
            grade:"5.2"
        },
        {
            MonthName:"Apr",
            Day:"4",
            grade:"5.2"
        },
        {
            MonthName:"May",
            Day:"5",
            grade:"5.2"
        },
        {
            MonthName:"June",
            Day:"6",
            grade:"8.1"
        },
        {
            MonthName:"July",
            Day:"7",
            grade:"8.2"
        },
        {
            MonthName:"Aug",
            Day:"8",
            grade:"7.2"
        },
        {
            MonthName:"Sep",
            Day:"9",
            grade:"5.1"
        },
        {
            MonthName:"Oct",
            Day:"10",
            grade:"9.2"
        },
        {
            MonthName:"Nov",
            Day:"11",
            grade:"6.2"
        },
        {
            MonthName:"Dec",
            Day:"12",
            grade:"7.2"
        },
    ]
    console.log("Props:", { displayMonth, grade, day });
    console.log("Month Data:", monthss);
    console.log(day);
    const matchingObjects = monthss.filter(
        (month) =>
          month.MonthName === displayMonth &&
          (grade === "all classes" || month.grade === grade) &&
          (!day || month.Day === day.toString()) // Check day if provided
      );
    // const activeMonth = monthss.find(month=> month == displayMonth)
    // const activeMonth = monthss[monthNumber-1].MonthName
    // const activeClass = monthss[monthNumber-1].grade

    // const displayTable = monthss.find((month) =>
    //     month.MonthName === displayMonth && (grade === "all classes" || month.grade === grade))
    

    
    
    return(
        <div>{matchingObjects.length > 0 ? (
            matchingObjects.map((month, index) => (
              <div key={index} className="p-4 border-b">
                <p>
                  <strong>Month:</strong> {month.MonthName}
                </p>
                <p>
                  <strong>Day:</strong> {month.Day}
                </p>
                <p>
                  <strong>Grade:</strong> {month.grade}
                </p>
              </div>
            ))
          ) : (
            <p>No matching data found.</p>
          )}</div>
    )
}

export default DashBoardTable