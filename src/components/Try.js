// import {useEffect, useState} from "react";
import React from "react";

// const Try = () => {
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     blah();
//   },[]);

//   const blah = ()=>{
//     setCount(count + 1)
//   }
//   return <div>
//     <h2>{count}</h2>
//     <h3>hey</h3>
//     <h4>bdf</h4>
//   </div>;
// };

class Try extends React.Component{
  constructor(props) {
    super(props);
console.log(this.props.name + "Contructor");


  }

  componentDidMount(){
    console.log(this.props.name + "CDM")
  }

  render() {
    console.log( this.props.name + "render")
    const {name} = this.props;
    return (
    <div>Class {name} </div>
    )
  }
}

export default Try;
