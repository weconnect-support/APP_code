import React, {useEffect, useState} from "react";
import axios from "axios";

type Schedule = {
    title: string;
    category: string;
    due_date: string;
};

function CalendarView() {
    const [volunteerSchedules, setVolunteerSchedules] = useState<Schedule[]>([]);
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);

    const jwt = localStorage.getItem("jwt-token");
    console.log(jwt);
    const fetchData = () =>{
        axios.get(`https://api-dev.weconnect.support/calendar/${selectedYear}/${selectedMonth}`,{
            headers: {
                'Authorization': jwt
            }
        })

        .then(response => {
            console.log(response);
            if(response.data.status==='ok'){
                setVolunteerSchedules(response.data.data.customer_schedule);
            }
        })
        .catch(error => console.error(error));
    }

    useEffect(()=>{
        fetchData();
    }, []);

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedMonth(Number(event.target.value));
            fetchData();
    };
        
    // 날짜별로 스케줄을 분류
    const schedulesByDate = volunteerSchedules.reduce((acc, schedule) => {
        const dueDate = new Date(schedule.due_date);
        const date = dueDate.getDate();
        if (!acc[date]) acc[date] = [];
        acc[date].push(schedule);
        return acc;
    }, {} as Record<number, Schedule[]>);

    return (
        <div>
        <div>
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
            </select>
        </div>
    
        {Object.entries(schedulesByDate).map(([date, schedules]) => (
            <div key={date}>
                <h2>{date}일</h2>
                {schedules.map((schedule, index) => (
                <div key={index}>
                    {schedule.title} ({schedule.category})
                </div>
            ))} 
            </div>
        ))}
            <button onClick={() => setSelectedMonth(prev => prev - 1)}>이전 달</button>
            <button onClick={() => setSelectedMonth(prev => prev + 1)}>다음 달</button>
        </div>
    );


}


export default CalendarView;