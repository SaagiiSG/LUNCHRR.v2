import React from 'react'
import { useParams } from 'react-router-dom';
import Day from '../components/dashboard/Day';

const DashBoardTable = ({displayMonth, grade, day}  ) => {

    const numberToMonthMap = {
        1: "Jan",
        2: "Feb",
        3: "Mar",
        4: "Apr",
        5: "May",
        6: "June",
        7: "July",
        8: "Aug",
        9: "Sep",
        10: "Oct",
        11: "Nov",
        12: "Dec",
      };
      const convertedMonth = numberToMonthMap[displayMonth];

      
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
            MonthName:"Oct",
            Day:"11",
            grade:"9.2"
        },
        {
            MonthName:"Nov",
            Day:"11",
            grade:"6.2"
        },
        {
            MonthName:"Nov",
            Day:"12",
            grade:"9.2"
        },
        {
            MonthName:"Nov",
            Day:"12",
            grade:"9.2"
        },
        {
            MonthName:"Nov",
            Day:"21",
            grade:"9.2"
        },
        {
            MonthName:"Dec",
            Day:"20",
            grade:"7.2"
        },
    ]
    console.log("Props:", { displayMonth, grade, day });
    
    const StringNum = day.toString()
    
    const matchingObjects = monthss.filter((month) => {
        console.log(`Checking: ${month.MonthName} === ${displayMonth}`);
        console.log(`Checking: ${grade} === "all classes" || ${month.grade} === ${grade}`);
        console.log(`Checking: ${!day} || ${month.Day} === ${day.toString()}`);
        
        return (
            month.MonthName === convertedMonth &&
            (grade === "all classes" || month.grade === grade) &&
            (!day || month.Day.trim() === day.toString().trim())
          );
        
      });
      
      console.log("Matching Objects:", matchingObjects);
      

    
    
    return(
        <div>
             {matchingObjects.length > 0 ? (
        <div>
          <h3>Matching Data:</h3>
          <ul>
            {matchingObjects.map((match, index) => (
              <li key={index}>
                Month: {match.MonthName}, Day: {match.Day || "N/A"}, Grade: {match.grade}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No Data</p>
      )}
        </div>
    )
}

export default DashBoardTable