import Navbar from "./Components/Navbar";
import { IoMdSearch } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

function App() {

 const [contacts,setContacts]= useState([])
  const [error,setError] = useState()

 useEffect(() => {
  const getContacts = async ()=>{
    try {
      const contactsRef = collection(db,"Contact")
      const contactSnapshot= await getDoc(contactsRef)
    } catch (error) {
      setError("unable to load ")
    }
  }
  getContacts();
 },[])

  return (
    <div className="max-w-[361px] mx-auto ">
      <Navbar />
      <div className="flex relative items-center">
        <IoMdSearch className=" text-3xl text-white absolute pl-1 " />
        <input
          type="text"
          placeholder="Search Contact"
          className=" text-white bg-transparent my-3 rounded-xl border-2 flex-grow h-10 pl-9"
        />
        <button className="text-5xl text-white cursor-pointer"><CiCirclePlus /></button>
      </div>

    </div>
  );
}

export default App;
