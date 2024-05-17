"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";

function Read() {
  const [fData, setfData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data_submit"); // Assuming your API endpoint is '/api/data'
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await response.json();
        setfData(fetchedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center md:px-20 px-2 gap-5 py-10 bg-black relative">
      {" "}
      {fData.map((user) => (
        <Card key={user.id} name={user.name} url={user.url} desc={user.desc} />
      ))}
      <Link className="absolute right-10 bottom-10" href={`/insert`}>
        <h1 className="w-5 h-1 bg-white"></h1>
        <h1 className="w-5 h-1 bg-white -rotate-90 -translate-y-1"></h1>
      </Link>
    </div>
  );
}

export default Read;
