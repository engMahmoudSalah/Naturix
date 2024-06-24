import axios from "axios";
import React , { useEffect , useState } from "react";



const RecipeCard = () => {

  const [data , setData] = useState([])

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/users' , 
    // axios.get('https://recipe-recommender-w5nk.onrender.com/recommend_recipes' , 
      {method: 'GET'},
      { ingredients: 'pesto' },

    )

    .then(res=> setData(res.data))
    .catch(err => console.error(err));

  },[]);




  return (
    <div  className="RecipeCard">

      {data.map((d,i) =>(
        <div key={i}>
          <h1>name</h1>
          <h2>{d.id}</h2>
          {/* <h2>{d.ingredients}</h2> */}
        </div>
      ))}

      
    </div>
  )
}

export default RecipeCard


