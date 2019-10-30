import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';
import {todos} from './todos.json';

class App extends Component {
    state = {
        title: 'Aplicación de Tareas',
        todos
    };

    handleAddTodo = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    };

    removeTodo(index) {
        if (window.confirm("Are you sure you want to delete it?")) {
            this.setState({
                todos: this.state.todos.filter((todo, i) => {
                    return i !== index;
                })
            })
        }
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div key={i} className="col-md-4">
                    <div className='card mb-4'>
                        <div className='card-header'>
                            <h3>{todo.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {todo.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>
                                {todo.description}
                            </p>
                            <small><b>{todo.responsible}</b></small>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>Delete</button>
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className="App">
                <Navigation title={this.state.title} nTasks={this.state.todos.length}/>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
