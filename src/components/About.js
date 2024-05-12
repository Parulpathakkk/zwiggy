import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(){
        super()
    }
    componentDidMount(){
    }
   
    render(){
        
        return (
            <div className="w-full px-[4cqw]">
            <h1>About page</h1>
          
            <section className="border-[0.12cqw] border-gray-900 p-[2cqw] user-card inline-block mt-[2cqw]">
            <UserClass name={"First"}/>
            </section>
            </div>
        )
    }
}

export default About;