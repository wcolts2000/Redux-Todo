import React, { Component } from "react";
import Form from "../components/Form";
import Todo from "../components/Todo";
import styled from "styled-components";
import { toggleCompleted } from "../actions";
import { connect } from "react-redux";

const Div = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 40px;
  background: slateblue;
  border-radius: 5px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

// const Li = styled.li`
//   padding: 10px 0;
//   background: pink;
//   color: white;
//   width: 90%;
//   color: #939;
//   margin: auto;
// `;

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  // componentDidMount() {
  //   if (this.props.todos)
  //     return this.setState({
  //       todos: [...this.props.todos]
  //     });
  //   return null;
  // }

  handleClick = id => {
    this.props.toggleCompleted(id);
  };

  render() {
    return (
      <Div>
        <Form />
        <Ul>
          {this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              // id={index}
              text={todo.text}
              completed={todo.completed}
              toggleCompleted={this.handleClick}
              style={{
                textDecoration:
                  todo.completed === true ? "line-through" : "none"
              }}
            />
            // <Li
            //   key={index}
            //   onClick={() => this.handleClick(index)}
            //   completed={todo.completed}
            //   style={{
            //     textDecoration:
            //       todo.completed === true ? "line-through" : "none"
            //   }}
            // >
            //   {todo.text}
            // </Li>
          ))}
        </Ul>
      </Div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos };
}

const mapDispatchToProps = dispatch => ({
  toggleCompleted: id => dispatch(toggleCompleted(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);