"use client";

import React, { useEffect, useState } from "react";
import Preview from "@/components/preview";
import { GetData, getRandomLiveNunber } from "@/services/index.service";
import axios from "axios";
import { useParams } from "next/navigation";
import moment from "moment";
import { Co2Sharp } from "@mui/icons-material";
import { boolean } from "yup";
//import { response } from "express";
let fetchDataTimer = 10000;
const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState();
  const [activeItem, setActiveItem] = useState({});
  const [enter, setEnter] = useState({});
  const [warning, setWarning] = useState({});
  const [stop, setStop] = useState({});
  const [closed, setClosed] = useState({});
  const [holiday, setHoliday] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5008/v2/${params?.company_id}/${params?.location_id}/${params?.spot_id}`
        );
        setCount(response.data.count);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setLoading(true);
    GetData(params?.company_id, params?.location_id,params?.spot_id)
      .then((res) => {
        console.log(res.data);
        setData(res?.data?.enter);
        setEnter(res?.data?.enter);
        setWarning(res?.data?.warning);
        setStop(res?.data?.stop);
        setClosed(res?.data?.closed);
        setHoliday(res?.data?.holiday);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  useEffect(() => {
    
    if (isTodayHoliday(holiday))
    {
      console.log("Today is holiday");
      setData(holiday);
    }
    else
    if( isClosedNow(closed))
    {
      console.log("this is closed time display");
      setData(closed);
      fetchDataTimer = 100000;
     
    } else 
    {
      
      if (count <= enter?.threshold) {
        setData(enter);
      }
  
      if (count > enter?.threshold && count <= warning?.threshold) {
        setData(warning);
      }
  
      if (count > warning?.threshold) {
        setData(stop);
      }
   
  }

  }, [count]);

  return (
    !loading && (
      <Preview
        title={data?.title}
        subTitle={data?.subTitle}
        color={data?.color}
        Icon={data?.icon}
        progress={count}
        type={data?.type}
        iconSize={data?.iconSize}
        titleFontSize={data?.titleFontSize}
        subTitleFontSize={data?.subTitleFontSize}
        max_capacity={data?.max_people_count}
        backgroundColor={data?.backgroundColor}
        displayType={data?.display_type}
      />
    )
  );
  return;
};


const isClosedNow = (closed) => {
  // Parse opening time and closing time as moment objects
  let openTime;
  let closeTime;
  let curTime;
  let isClosed= false;
  if(closed)
  {
     openTime = moment(closed.opening_time).format('HH:mm');
     closeTime  = moment(closed.closing_time).format('HH:mm');
     curTime = moment();
     const openTimeMoment = moment(openTime, 'HH:mm');
     const closeTimeMoment = moment(closeTime, 'HH:mm');
     const curTimeNew = curTime.format(('HH:mm'));
     const curTimemoment =  moment(curTimeNew, 'HH:mm');

     console.log("close time: ",closeTime,"open time :",openTime, "current time :",curTimeNew);
     if(curTimemoment.isSameOrAfter(closeTimeMoment)){ console.log("current time is after close time");
         isClosed = true;
        if(curTimemoment.isSameOrAfter(openTimeMoment)&& openTimeMoment.isAfter(closeTimeMoment))
        {isClosed= false;
          console.log("allready opened ");
        }
      }else
    {
      isClosed = false;
      console.log("open hours ");}
  }
  
 return isClosed;
}

const isTodayHoliday = (holiday) =>  {

  console.log(holiday);
  if(holiday && holiday.weekly_holiday){
  const dateArray = ['2024-02-16', '2024-02-17', '2024-02-18']; 
  const weeklyholiday = Array.from(holiday.weekly_holiday);
  console.log("weekly holiday",weeklyholiday);
  const curDay = moment().format("dddd");
  for(let i = 0; i < weeklyholiday.length; i++)
  {
    if(curDay ===weeklyholiday[i] ){
      console.log("Today is a holiday weekly:", curDay);
      return true;
    }
  }
    const currentDate = moment().format('YYYY-MM-DD');
    for (let i = 0; i < dateArray.length; i++) {
      if (currentDate === dateArray[i]) {
        console.log("Today is a holiday date :", currentDate);
        return true;
      }
    }
  }
  console.log("Today is not a holiday.");
  return false;
}

  




export default Home;
