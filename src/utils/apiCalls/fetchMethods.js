// fetch methods
import { notFound } from "next/navigation";

export const getData = async (url) => {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
//   console.log(res);we will see it on the terminal window(SSR);
  return res.json();
};

export const getSingleData = async (url,id) => {
    const res = await fetch(`${url}/${id}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
      return notFound();
    }
    // console.log(res) => we will see it on the terminal window(SSR);
    return res.json();
  };