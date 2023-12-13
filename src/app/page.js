"use client";

import React, { useEffect, useState } from "react";
import Preview from "@/components/preview";
import { GetData } from "@/services/index.service";

const HomePage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState()

  useEffect(() => {
    setLoading(true);

    GetData("example_company_id")
      .then((res) => {
        console.log("🚀 ~ file: page.js:16 ~ .then ~ res:", res)
        setData(res?.data[0]);
        setLoading(false);
      })
      .catch((error) => setLoading(false));
  }, []);

  return (
    !loading && (
      <Preview
        title={data?.title}
        subTitle={data.subTitle}
        color={data.color}
        Icon={data.icon}
        progress={data.threshold}
        type={data.type}
      />
    )
  );
  return;
};

export default HomePage;
