<Route path='/' render={()=>
  <div className="App">
  <h1 className="header">ToDoApp</h1>
  <ToDoForm
    handleInput={this.handleInput}
    handleSubmit={this.handleSubmit}
    inpElement={this.inputElement}
  />        
</div>
}/>

<ToDoList items={this.state.items} Done={this.doTask} />