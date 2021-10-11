import { useEffect, useState } from "react";

export default function FuctionalComponents() {
  const [title, setTitle] = useState("salom");
  const [object, setObject] = useState({ id: 1, name: "Ali" });
  const changeTitle = () => {
    setTitle("Alik");
  };
  const changeObj = () => {
    setObject((prev)=>{
         return {...prev, name:"Jack",value1: "alik" }
    })
  }
useEffect(()=>{
     console.log("salom");
},[])

  return (
    <div className="container">
      <h1>{title}</h1>
      <h4>Id:{object.id}</h4>
      <h4>Name:{object.name}</h4>
      <button onClick={() => changeTitle()} className="btn btn-danger">
        Change Change
      </button>
      <button onClick={() => changeObj()} className="btn btn-primary">
        Change Object
      </button>
    </div>
  );
}
