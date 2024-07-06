 export default function CoreConcepts({image,title,Discription}){
    return(
    
      <li>
        <img src={image} alt='shahid'></img>
      <h2>{title}</h2>
      <p>{Discription}</p>
     
  </li>
    )
  }