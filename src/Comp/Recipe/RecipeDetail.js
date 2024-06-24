import React from 'react';

const RecipeDetail = ({ location }) => {
  const { recipe } = location.state;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-2">{recipe.recipe_name}</h2>
      <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-64 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
      <p>{recipe.ingredients.join(', ')}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Instructions</h3>
      <p>{recipe.instructions}</p>
      <h3 className="text-xl font-semibold mt-4 mb-2">Nutrition Facts</h3>
      <ul>
        <li>Protein: {recipe.protein}g</li>
        <li>Fat: {recipe.fat}g</li>
        <li>Calories: {recipe.calories} kcal</li>
        <li>Fiber: {recipe.fiber}g</li>
        <li>Carbohydrates: {recipe.carbohydrates}g</li>
        <li>Sugar: {recipe.sugar}g</li>
      </ul>
      <h3 className="text-xl font-semibold mt-4 mb-2">Recipe Video</h3>
      <a href={recipe.recipe_video} target="_blank" rel="noopener noreferrer" className="text-blue-500">Watch Video</a>
    </div>
  );
};

export default RecipeDetail;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const RecipeCard = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRecipes();
//   }, []);

//   const fetchRecipes = () => {
//     axios.post('https://recipe-recommender-w5nk.onrender.com/recommend_recipes', 
//       // Example body parameters
      

//       { ingredients: 'chicken' },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Server': 'cloudflare',
//         },  
//       }
//   )
//     .then(response => {
//       setRecipes(response.data);
//     })
//     .catch(error => {
//       setError('Error fetching the recipes. Please try again later.');
//       console.error('Error fetching the recipes:', error);
//     });
//   };
  

//   const handleSearchChange = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);
//   };

//   const filteredRecipes = recipes.filter(recipe =>
//     searchTerm === '' || recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm))
//   );

//   const handleCardClick = (recipe) => {
//     navigate(`/recipe/${recipe.recipe_name}`, { state: { recipe } });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {error && <div className="text-red-500 mb-4">{error}</div>}
//       <input
//         type="text"
//         placeholder="Search by ingredients..."
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="w-full p-2 mb-4 border rounded"
//       />

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//         {filteredRecipes.map(recipe => (
//           <div
//             key={recipe.recipe_name}
//             className="border rounded shadow-lg p-4 cursor-pointer"
//             onClick={() => handleCardClick(recipe)}
//           >
//             <img src={recipe.recipe_image} alt={recipe.recipe_name} className="w-full h-32 object-cover mb-2" />
//             <h2 className="text-lg font-bold">{recipe.recipe_name}</h2>
//             <p>{recipe.ingredients.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecipeCard;

