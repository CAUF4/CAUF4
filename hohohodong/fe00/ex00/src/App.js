import React, { Component } from 'react';

class App extends Component {
  render() {

    const style = {
      border : '1px solid black',
    }
    return (
      <div>
        
        <section style = {style}>
        <h1>ToDoList</h1>
        </section>
        
        
        <section>
          <p>입력할 부분</p>
        </section>
       

        <hr></hr>
        <section>
          <p>할일 리스트 부분</p>
        </section>
        
      </div>
    );
  }
}

export default App;