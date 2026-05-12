import React, { useEffect, useState } from "react";

export default function Test() {
  const [dataDogs, setDataDogs] = useState([]);

  async function fetchData() {
    const response = await fetch(
      `${process.env.REACT_APP_MAIN_API_URL}/api/v2/breeds`,
    );
    const data = await response.json();
    if (response.ok) {
      setDataDogs(data.data);
    } else console.error("Failed to fetch data:", data.message);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-48 bg-red-500 h-48"></div>
        <div className="w-48 bg-red-500 h-48"></div>
        <div className="w-48 bg-red-500 h-48"></div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <table>
          <thead className="bg-gray-200">
            <tr className="text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Desc</th>
            </tr>
          </thead>
          <tbody>
            {dataDogs.map((dog) => (
              <tr key={dog.id}>
                <td className="p-2">{dog.attributes.name}</td>
                <td className="p-2">{dog.type}</td>
                <td className="max-w-xs truncate">
                  {dog.attributes.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
