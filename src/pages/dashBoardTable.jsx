import React from 'react'
import { useParams } from 'react-router-dom';
import Day from '../components/dashboard/Day';
import { div } from 'framer-motion/m';

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
            Day:"12",
            grade:"10.2"
        },
        {
            MonthName:"Nov",
            Day:"12",
            grade:"10.2"
        },
        {
            MonthName:"Nov",
            Day:"12",
            grade:"10.2"
        },
        {
            MonthName:"Nov",
            Day:"12",
            grade:"10.2"
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
            Day:"12",
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
        <div className='w-full '>
             {matchingObjects.length > 0 ? (
        <div className='w-full flex flex-row flex-wrap gap-y-2 items-center justify-start '>
          
            {matchingObjects.map((match, index) => (
              <div className='w-1/2 py-3 px-2 flex items-center justify-center '>
                <div key={index} className='w-full mx-2 flex flex-col border-3 border-sky-900 rounded-xl overflow-hidden'>
                    
                    <div className='font-semibold bg-gradient-to-l from-emerald-400 to-sky-900 text-slate-100 pl-2 text-xl flex gap-2 py-1'>
                         <p>{match.grade}</p>
                         <span className='flex font-normal'>
                            <p>( {match.MonthName}</p>.
                            <p className='ml-[2px]'>{match.Day} )</p>
                         </span>
                    </div>
                    <div className='bg-gray-900 text-slate-100 p-2'>
                        <p>class total meal</p>
                        <p>class total meal</p>
                        <p>class total meal</p>                        
                    </div>
                    
                    
                </div>
              </div>
            ))}
          
        </div>
      ) : (
        <p>No Data</p>
      )}
        </div>
    )
}

export default DashBoardTable