import React from 'react';

const page = async() => {
  const data = await new Promise(res => setTimeout(()=>res('Resolved'),4000))
  return <div>invoice page {data}</div>;
};

export default page;
