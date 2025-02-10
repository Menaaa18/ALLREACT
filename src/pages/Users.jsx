import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/atoms/Loader";
import NavBarMain from "../components/layout/navbar";
import UserComp from "../components/atoms/UserComp";
const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState("all");
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.github.com/users`, {
        headers: {
          // Authorization: "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"
          Authorization: `token ${GITHUBTOKEN}`,
        },
      });
      // setUsers(response.data.results);
      // } catch(error) {
      //     console.error("Error fetching users:", error);
      // } finally {
      //     setLoading(false);
      // }
      if (response.data.length > 0) {
        setUsers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(`this is my error $(error)`);
    }
  };

  useEffect(() => {
    getUsers();
  }, [gender]);
  return (
    <div className="flex flex-col gap-5">
      <NavBarMain />
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
        <>
          <div className="h-[80vh] w-screen flex items-center justify-center">
            <img src="/nm.gif" alt="imageee" />
          </div>
          <Loader />
        </>
      ) : (
        <div
          className="grid grid-cols-1 p-8 sm:grid-cols-2 md:grid-cols-3
                lg:grid-cols-4"
        >
          {users.map((user, index) => {
            return <UserComp user={user} key={index} />;
          })}
        </div>
      )}
    </div>
  );
}
