// import React, {useEffect, useState } from 'react'
// import classes from './Results.module.css'
// import LayOut from '../../Components/LayOut/LayOut'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { productUrl } from '../../API/endPoints'
// import CategoryCard from '../../Components/Category/CategoryCard'



// function Results() {
//   const [results, setResults] =useState([]);
//   const {categoryName} = useParams()
//   // console.log(categoryName)

//   useEffect(() => {
//   axios.get(`${productUrl}/products/category/${categoryName}`)
//   .then((res)=>{
//     setResults(res.data)
//     console.log(res.data)
//   }).catch((err) => {
//     console.log(err)
//   })

//   }, [])

 

//   return (
//     <LayOut>

//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <CategoryCard
//                 key={product.id}
//                 product={product}
//                 renderDesc={false}
//                 renderAdd={true}
//               />
//             ))}
//           </div>
//         )}
//       </section>

    </LayOut>
   
  )
}

export default Results