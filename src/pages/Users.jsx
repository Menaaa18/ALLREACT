import axios from "axios"
import { useEffect, useState } from "react";
import NavBarMain from "../components/layout/navbar";
import UserComp from "../components/atoms/UserComp";

export default function Users(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const[gender, setGender] = useState("all");
    const getUsers = async ()=>{
        setLoading(true);
        try {
          
            const response = await axios.get(
                `https://randomuser.me/api/?results=10${
                  gender === "all" 
                  ? "" 
                  : gender == "male"
                  ? "&gender=male"
                  : "&gender=female
                }`
            );
            setUsers(response.data.results);
            } catch(error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        }       

    useEffect(() => {
        getUsers();
    }, [gender]);

    
    return(

        <div className="flex flex-col gap-5">
            <NavBarMain/>
            <div className="px-5">
             <select
               onChange={(e) => {
                setGender(e.target.value);
            }}
            className="w-fit my-5 border p-3 rounded-lg"
            >
                <option value="all">All Users</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
             </select>
            </div>
            {loading ? (
                <div className="h-[80vh] w-screen flex items-center justify-center">
                    <img src="/nm.gif" alt="imageee"/>
                </div>
            ) : (
                <div className="grid grid-cols-1 p-8sm:grid-cols-2 md:grid-cols-3
                lg:grid-cols-4"> 
                   {users.map((user, index) => {
                    return <UserComp user={user} key={index}/>
                    
                   })}
                </div>
            )
         }
        </div>  
    )
} 

  




