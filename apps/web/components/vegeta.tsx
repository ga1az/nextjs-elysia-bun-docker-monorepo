"use client";

import { api } from "@mono/api";
import { useEffect, useState } from "react";

export default function Vegeta() {
  const [data, setData] = useState(null);

  const getApi = async () => {
    const data = await api.vegeta.get();
    console.log(data.data);
    setData(data.data.name);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1>Nombre:</h1>
      {data && <h1>{data}</h1>}
    </div>
  );
}
