import AppContext from "../context/AppContext";
import { useContext } from "react";

const MyPage = () => {
  const { currentUser } = useContext(AppContext);

  let content; // Define a variable to store the content based on the condition

  if (currentUser !== null) {
    const { username, bio, email, profile_image } = currentUser;

    content = <div>
                 <img src={profile_image} alt={bio}/>
                <h1>USERNAME: {username}</h1>
                <h1>ABOUT: {bio}</h1>
                <h1>EMAIL: {email}</h1>
              </div>;
  } else {
    // Handle the case where 'currentUser' is null.
    content = <h1>Please Sign Up</h1>;
  }

  return content; // Return the content variable
};

export default MyPage;

