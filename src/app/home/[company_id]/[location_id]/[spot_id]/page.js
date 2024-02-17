"use client";

import React, { useEffect, useState } from "react";
import Preview from "@/components/preview";
import { GetData, getRandomLiveNunber } from "@/services/index.service";
import axios from "axios";
import { useParams } from "next/navigation";
//import { response } from "express";

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState();
  const [activeItem, setActiveItem] = useState({});
  const [enter, setEnter] = useState({});
  const [warning, setWarning] = useState({});
  const [stop, setStop] = useState({});
  const [closed, setClosed] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5008/v2/${params?.company_id}/${params?.location_id}/${params?.spot_id}`
        );
        setCount(response.data.count);
        console.log(response);
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
        setData(res?.data?.enter);
        setEnter(res?.data?.enter);
        setWarning(res?.data?.warning);
        setStop(res?.data?.stop);
        setClosed(res?.data?.closed);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  useEffect(() => {
    if (count <= enter?.threshold) {
      setData(enter);
    }

    if (count > enter?.threshold && count <= warning?.threshold) {
      setData(warning);
    }

    if (count > warning?.threshold) {
      setData(stop);
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

export default Home;
