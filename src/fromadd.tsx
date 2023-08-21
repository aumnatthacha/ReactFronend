// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import Button from "@mui/material/Button";

// interface Restaurant {
//   id: number;
//   createdAt: string;
//   img: string;
//   name: string;
//   type: string;
//   updatedAt: string;
// }

// function App() {
//   const [data, setData] = useState<Restaurant[]>([]);
//   const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
//     id: 0,
//     createdAt: "",
//     img: "",
//     name: "",
//     type: "",
//     updatedAt: "",
//   });

//   useEffect(() => {
//     // http://localhost:5000/res
//     const get = async () => {
//       const res = await axios.get("http://localhost:5000/res");
//       setData(res.data);
//     };
//     get();
//   }, []);

//   const addRestaurant = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/res", newRestaurant);
//       setData((prevData) => [...prevData, res.data]);
//       setNewRestaurant({
//         id: 0,
//         createdAt: "",
//         img: "",
//         name: "",
//         type: "",
//         updatedAt: "",
//       });
//     } catch (error) {
//       console.error("Error adding restaurant:", error);
//     }
//   };

//   const deleteRestaurant = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:5000/res/${id}`);
//       setData((prevData) =>
//         prevData.filter((restaurant) => restaurant.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting restaurant:", error);
//     }
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <br />
//       <div className="flex flex-row flex-wrap justify-center items-center textfonts">
//         {/* Add a form to add new restaurants */}
//         <div className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md p-5">
//           <h2 className="text-green-600 font-bold">Add New Restaurant</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newRestaurant.name}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, name: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Type"
//             value={newRestaurant.type}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, type: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newRestaurant.img}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, img: e.target.value })
//             }
//           />
//           <button
//             className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
//             onClick={addRestaurant}
//           >
//             Add Restaurant
//           </button>
//         </div>

//         {/* Render existing restaurants */}
//         {data.map((restaurant) => (
//           <div
//             className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md" // Added "shadow-md" class here
//             key={restaurant.id}
//             style={{ margin: "5px" }}
//           >
//             <h5 className="text-green-600 font-bold">{restaurant.name}</h5>
//             <br />
//             <h6>{restaurant.type}</h6>
//             <img src={restaurant.img} className="w-12 h-62 w-72 h-56" alt="" />

//             <div className="flex flex-row gap-4">
//               <button className="bg-green-500 p-2 my-5 rounded-md hover:bg-white">
//                 เพิ่ม
//               </button>
//               <button className="bg-amber-300 p-2 my-5 rounded-md hover:bg-white">
//                 แก้ไข
//               </button>
//               <button
//                 className="bg-red-600 p-2 my-5 rounded-md hover:bg-white"
//                 onClick={() => deleteRestaurant(restaurant.id)}
//               >
//                 ลบ
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// interface Restaurant {
//   id: number;
//   createdAt: string;
//   img: string;
//   name: string;
//   type: string;
//   updatedAt: string;
// }

// function App() {
//   const [data, setData] = useState<Restaurant[]>([]);
//   const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
//     id: 0,
//     createdAt: "",
//     img: "",
//     name: "",
//     type: "",
//     updatedAt: "",
//   });
//   const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(
//     null
//   );

//   useEffect(() => {
//     const get = async () => {
//       const res = await axios.get("http://localhost:5000/res");
//       setData(res.data);
//     };
//     get();
//   }, []);

//   const addRestaurant = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/res", newRestaurant);
//       setData((prevData) => [...prevData, res.data]);
//       setNewRestaurant({
//         id: 0,
//         createdAt: "",
//         img: "",
//         name: "",
//         type: "",
//         updatedAt: "",
//       });
//     } catch (error) {
//       console.error("Error adding restaurant:", error);
//     }
//   };

//   const deleteRestaurant = async (id: number) => {
//     try {
//       await axios.delete(`http://localhost:5000/res/${id}`);
//       setData((prevData) =>
//         prevData.filter((restaurant) => restaurant.id !== id)
//       );
//     } catch (error) {
//       console.error("Error deleting restaurant:", error);
//     }
//   };

//   const toggleEdit = (restaurant: Restaurant) => {
//     if (editingRestaurant && editingRestaurant.id === restaurant.id) {
//       setEditingRestaurant(null);
//     } else {
//       setEditingRestaurant(restaurant);
//     }
//   };

//   // const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const { name, value } = e.target;
//   //   if (editingRestaurant) {
//   //     setEditingRestaurant((prevState) => ({
//   //       ...prevState,
//   //       [name]: value,
//   //     }));
//   //   }
//   // };

//   const handleUpdateSubmit = async () => {
//     if (editingRestaurant) {
//       try {
//         const res = await axios.put(
//           `http://localhost:5000/res/${editingRestaurant.id}`,
//           editingRestaurant
//         );
//         setData((prevData) =>
//           prevData.map((restaurant) =>
//             restaurant.id === editingRestaurant!.id ? res.data : restaurant
//           )
//         );
//         setEditingRestaurant(null);
//       } catch (error) {
//         console.error("Error updating restaurant:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//       <br />
//       <div className="flex flex-row flex-wrap justify-center items-center textfonts">
//         {/* Add a form to add new restaurants */}
//         <div className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md p-5">
//           <h2 className="text-green-600 font-bold">Add New Restaurant</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={newRestaurant.name}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, name: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Type"
//             value={newRestaurant.type}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, type: e.target.value })
//             }
//           />
//           <input
//             type="text"
//             placeholder="Image URL"
//             value={newRestaurant.img}
//             onChange={(e) =>
//               setNewRestaurant({ ...newRestaurant, img: e.target.value })
//             }
//           />
//           {/* <button
//             className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
//             onClick={addRestaurant}
//           >
//             Add Restaurant
//           </button> */}
//         </div>

//         {/* Render existing restaurants */}
//         {data.map((restaurant) => (
//           <div
//             className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md" // Added "shadow-md" class here
//             key={restaurant.id}
//             style={{ margin: "5px" }}
//           >
//             {editingRestaurant && editingRestaurant.id === restaurant.id ? (
//               // Render the edit form if the current restaurant is being edited
//               <div className="flex flex-col items-center w-1/3 p-5">
//                 <h2 className="text-green-600 font-bold">Edit Restaurant</h2>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   // value={editingRestaurant.name}
//                   // onChange={handleEditInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Type"
//                   name="type"
//                   // value={editingRestaurant.type}
//                   // onChange={handleEditInputChange}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Image URL"
//                   name="img"
//                   // value={editingRestaurant.img}
//                   // onChange={handleEditInputChange}
//                 />
//                 <button
//                   className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
//                   onClick={handleUpdateSubmit}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="bg-red-600 p-2 my-5 rounded-md hover:bg-white"
//                   onClick={() => setEditingRestaurant(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               // Render restaurant details if the restaurant is not being edited
//               <>
//                 <h5 className="text-green-600 font-bold">{restaurant.name}</h5>
//                 <br />
//                 <h6>{restaurant.type}</h6>
//                 <img
//                   src={restaurant.img}
//                   className="w-12 h-62 w-72 h-56"
//                   alt=""
//                 />
//                 <div className="flex flex-row gap-4">
//                   <button
//                     className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
//                     onClick={addRestaurant}
//                   >
//                     เพิ่ม
//                   </button>
//                   <button
//                     className="bg-amber-300 p-2 my-5 rounded-md hover:bg-white"
//                     onClick={() => toggleEdit(restaurant)}
//                   >
//                     แก้ไข
//                   </button>
//                   <button
//                     className="bg-red-600 p-2 my-5 rounded-md hover:bg-white"
//                     onClick={() => deleteRestaurant(restaurant.id)}
//                   >
//                     ลบ
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [newRestaurant, setNewRestaurant] = useState<Restaurant>({
    id: 0,
    createdAt: "",
    img: "",
    name: "",
    type: "",
    updatedAt: "",
  });
  const [editingRestaurant, setEditingRestaurant] = useState<Restaurant | null>(
    null
  );
  const [isAddOpen, setIsAddOpen] = useState(false); // State for Add New Restaurant form visibility

  useEffect(() => {
    const get = async () => {
      const res = await axios.get("http://localhost:5000/res");
      setData(res.data);
    };
    get();
  }, []);

  // const addRestaurant = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/res", newRestaurant);
  //     setData((prevData) => [...prevData, res.data]);
  //     setNewRestaurant({
  //       id: 0,
  //       createdAt: "",
  //       img: "",
  //       name: "",
  //       type: "",
  //       updatedAt: "",
  //     });
  //     setIsAddOpen(false); // Close the Add New Restaurant form after adding
  //   } catch (error) {
  //     console.error("Error adding restaurant:", error);
  //   }
  // };

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

  const toggleEdit = (restaurant: Restaurant) => {
    if (editingRestaurant && editingRestaurant.id === restaurant.id) {
      setEditingRestaurant(null);
    } else {
      setEditingRestaurant(restaurant);
    }
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editingRestaurant) {
      setEditingRestaurant((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleUpdateSubmit = async () => {
    if (editingRestaurant) {
      try {
        const res = await axios.put(
          `http://localhost:5000/res/${editingRestaurant.id}`,
          editingRestaurant
        );
        setData((prevData) =>
          prevData.map((restaurant) =>
            restaurant.id === editingRestaurant!.id ? res.data : restaurant
          )
        );
        setEditingRestaurant(null);
      } catch (error) {
        console.error("Error updating restaurant:", error);
      }
    }
  };

  const handleAddInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRestaurant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/res", newRestaurant);
      setData((prevData) => [...prevData, res.data]);
      setNewRestaurant({
        id: 0,
        createdAt: "",
        img: "",
        name: "",
        type: "",
        updatedAt: "",
      });
      setIsAddOpen(false); // Close the Add New Restaurant form after adding
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  const toggleAdd = () => {
    setNewRestaurant({
      id: 0,
      createdAt: "",
      img: "",
      name: "",
      type: "",
      updatedAt: "",
    });
    setIsAddOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="">{/* Rest of the code */}</div>

      <h1 className="text-3xl font-bold underline">Restaurant React</h1>
      <br />
      <div className="flex flex-row flex-wrap justify-center items-center textfonts">
        {/* Add a form to add new restaurants */}
        {isAddOpen && (
          <div className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md p-5">
            <h2 className="text-green-600 font-bold p-2 my-2">
              {newRestaurant.id ? "Edit Restaurant" : "Add New Restaurant"}
            </h2>
            <input
              type="text"
              placeholder="Name"
              value={newRestaurant.name}
              onChange={handleAddInputChange}
              name="name"
              className="mb-3 w-full p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Type"
              value={newRestaurant.type}
              onChange={handleAddInputChange}
              name="type"
              className="mb-3 w-full p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newRestaurant.img}
              onChange={handleAddInputChange}
              name="img"
              className="mb-3 w-full p-2 rounded-md"
            />
            <div className="flex flex-row gap-4">
              <button
                className="bg-green-500 p-2 rounded-md hover:bg-white"
                onClick={
                  newRestaurant.id ? handleUpdateSubmit : handleAddSubmit
                }
              >
                {newRestaurant.id ? "Save" : "Add Restaurant"}
              </button>
              <button
                className="bg-red-600 p-2 rounded-md hover:bg-white"
                onClick={() => {
                  setNewRestaurant({
                    id: 0,
                    createdAt: "",
                    img: "",
                    name: "",
                    type: "",
                    updatedAt: "",
                  });
                  setIsAddOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
            {/* Rest of the code remains unchanged */}

            {/* <button
              className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
              onClick={newRestaurant.id ? handleUpdateSubmit : handleAddSubmit}
            >
              {newRestaurant.id ? "Save" : "Add Restaurant"}
            </button>
            <button
              className="bg-red-600 p-2 rounded-md hover:bg-white"
              onClick={() => {
                setNewRestaurant({
                  id: 0,
                  createdAt: "",
                  img: "",
                  name: "",
                  type: "",
                  updatedAt: "",
                });
                setIsAddOpen(false);
              }}
            >
              Cancel
            </button> */}
            {newRestaurant.id && (
              <button
                className="bg-red-600 p-2 my-5 rounded-md hover:bg-white"
                onClick={() => {
                  setNewRestaurant({
                    id: 0,
                    createdAt: "",
                    img: "",
                    name: "",
                    type: "",
                    updatedAt: "",
                  });
                  setIsAddOpen(false);
                }}
              >
                Cancel
              </button>
            )}
          </div>
        )}

        {/* Render existing restaurants */}
        {data.map((restaurant) => (
          <div
            className="bg-amber-50 rounded-2xl flex flex-col items-center w-1/3 shadow-md" // Added "shadow-md" class here
            key={restaurant.id}
            style={{ margin: "5px" }}
          >
            {editingRestaurant && editingRestaurant.id === restaurant.id ? (
              <div className="flex flex-col items-center w-4/5 p-5">
                <h2 className="text-green-600 font-bold mb-4">Edit Restaurant</h2>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={editingRestaurant.name}
                  onChange={handleEditInputChange}
                  className="border p-2 rounded-md mb-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  value={editingRestaurant.type}
                  onChange={handleEditInputChange}
                  className="border p-2 rounded-md mb-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  name="img"
                  value={editingRestaurant.img}
                  onChange={handleEditInputChange}
                  className="border p-2 rounded-md mb-4 w-full"
                />
                <div className="flex space-x-4 ">
                  <button
                    className="bg-green-500 p-2 my-3 rounded-md hover:bg-white "
                    onClick={handleUpdateSubmit}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-600 p-2 m-3 rounded-md hover:bg-white "
                    onClick={() => setEditingRestaurant(null)}
                  >
                    Cancel
                  </button>
                </div>
                {/* <button 
                  className="bg-green-500 p-2 my-3 rounded-md hover:bg-white"
                  onClick={handleUpdateSubmit}
                >
                  Save
                </button>
                <button
                  className="bg-red-600 p-2  rounded-md hover:bg-white"
                  onClick={() => setEditingRestaurant(null)}
                >
                  Cancel
                </button> */}
              </div>
            ) : (
              <>
                <h5 className="text-green-600 font-bold">{restaurant.name}</h5>
                <br />
                <h6>{restaurant.type}</h6>
                <img
                  src={restaurant.img}
                  className="w-12 h-62 w-72 h-56"
                  alt=""
                />
                <div className="flex flex-row gap-4">
                  {/* <button
                    className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
                    onClick={() => toggleEdit(restaurant)}
                  >
                    Edit
                  </button> */}
                  <button
                    className="bg-green-500 p-2 my-5 rounded-md hover:bg-white"
                    onClick={() => toggleAdd()}
                  >
                    Add New Restaurant
                  </button>
                  <button
                    className="bg-amber-300 p-2 my-5 rounded-md hover:bg-white"
                    onClick={() => toggleEdit(restaurant)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 p-2 my-5 rounded-md hover:bg-white"
                    onClick={() => deleteRestaurant(restaurant.id)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
