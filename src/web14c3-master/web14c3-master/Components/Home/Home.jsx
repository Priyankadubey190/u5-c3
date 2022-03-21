import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import {Link} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
   const [products,setproducts] = useState([]);
   
   function getdata(){
     axios.get("http://localhost:3001/Books").then((res)=>{
       setproducts([...res.data])
     })
   }

   useEffect(()=>{
     getdata()
   },[])

  const Main = styled.div`
    /* Apply some responsive styling to children */
    display: "flex";
    justifyContent: "space-evenly";
    padding:50px;
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
      </Main>
    </div>
  );
};
