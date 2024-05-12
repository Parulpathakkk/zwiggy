import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);


  }

  componentDidMount(){

  }

  render() {
    const {name} = this.props;
    
    return (

    <div className="">
    <h1>Name : {name}</h1>
    <h1>Number : +9773878770</h1>
    <h1>Email : parowork99@gmail.com</h1>
     </div>
    
    )
  }
}

export default UserClass;
