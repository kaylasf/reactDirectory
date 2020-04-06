import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import directory from "./directory.json";
import Form from "./components/Form";

class App extends Component {
  // Setting this.state.directory to the directory json array
  state = {
    directory,
    firstName: ''
  };
 
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value,
      firstName: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    
    this.setState({
      firstName: ""
    });
    
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` clearing the inputs
  
    if(this.state.firstName !== ""  ){
      alert(`Name: ${directory[0].name}`);
      const checkName = this.state.firstName.toLowerCase()
      console.log(checkName)
      const directory = this.state.directory.filter(friend => friend.includes({checkName}))
      this.setState({directory})
      console.log(directory[0].name)
      console.log(directory)


    }
    
  };
   

  // Map over this.state.directory and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Contact List</Title>
        
      <div className="row">
      <div>
        <p>
          Name: {this.state.firstName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
       
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
        
        {this.state.directory.map(friend => (
         
          
          // <Form name={friend.name}/>,
          // <FriendCard
       
          //   id={friend.id}
          //   key={friend.id}
          //   name={friend.name}
          //   image={friend.image}
          //   occupation={friend.occupation}
          //   location={friend.location} 
          // />


          <div className="card">
          <div className="img-container">
            <img alt={friend.name} src={friend.image} />
          </div>
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {friend.name}
              </li>
              <li>
                <strong>Occupation:</strong> {friend.occupation}
              </li>
              <li>
                <strong>Location:</strong> {friend.location}
              </li>
            </ul>
          </div>
       
        </div>
        ))}

        </div>
      </Wrapper>
    );
  }
}

export default App;
