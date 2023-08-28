import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


interface Restaurant {
  id: number;
  createdAt: string;
  img: string;
  name: string;
  type: string;
  updatedAt: string;
}



function App() {
  const [data, setData] = useState<Restaurant[]>([]);

  useEffect(() => {
    // http://localhost:5000/res
    const get = async () => {
      const res = await axios.get("http://localhost:5000/res");
      setData(res.data);
    };
    get();
  }, []);

  //

  //
  console.log(data);

  const deleteRestaurant = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5000/res/${id}`);
      setData((prevData) =>
        prevData.filter((restaurant) => restaurant.id !== id)
      );
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline  ">Hello world!</h1>
      <br></br>
      <div className="flex flex-row flex-wrap justify-center items-center textfonts">
        {data.map((data, index) => (
          <div
            className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md" // Added "shadow-md" class here
            key={index}
            style={{ margin: "5px" }}
          >
            <h5 className="text-green-600 font-bold">{data.name}</h5>
            <br></br>
            <h6>{data.type}</h6>
            <img src={data.img} className="w-12 h-62 w-72 h-56" alt="" />

            <div className="flex flex-row gap-4">
              <button
                className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
                // onClick={addRestaurant} // Add onClick handler to call the addRestaurant function
              >
                เพิ่ม
              </button>
              <button className="bg-amber-300 p-2 my-5 rounded-md hover:bg-white">
                แก้ไข
              </button>

              <button
                className="bg-red-600 p-2 my-5 rounded-md hover:bg-white "
                onClick={() => deleteRestaurant(data.id)}
              >
                ลบ
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
