import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const GITHUBTOKEN = process.env.REACT_APP_GITHUB_TOKEN;

function SingleUser() {
  const {id} = useParams()
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const getUser = async (id) => {
   setLoading(true);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${id}`, {
          headers: {
            // Authorization: "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"
            Authorization: `token ${GITHUBTOKEN}`,
          },
     } );
      //response.data is our object, this means we have a response from Github then we do 
      if(response.data.id) {
        setUser(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(`this is my error ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getUser(id);
    }
  }, [id]);

  return (

    <div className="shadow-md hover:shadow-none flex flex-col gap-3 rounded-xl cursor-pointer hover:bg-[#fafafa] ease-in-out duration-700 p-3 font-semibold"> 
    <div className="flex items-center overflow-hidden rounded-full h-[50px] w-[50px]">
     <img src={user.avatar_url} alt="description" />
    </div>
    
  <p className="font-semibold">
      Name: {" "}
      <span className="text-sm text-gray-600">
      {user.name} 
      </span>    
  </p>
  <p className="font-semibold">
      Company: {" "}
      <span className="text-sm text-gray-600">
      {user.company}
      </span>    
  </p>
  <p className="font-semibold">
      Email: {" "}
      <span className="text-sm text-gray-600">
      {user.email} 
      </span>    
  </p>
  <p className="font-semibold">
      Followers: {" "}
      <span className="text-sm text-gray-600">
      {user.followers} 
      </span>    
  </p>

    </div>
  )
}

  export default SingleUser;
