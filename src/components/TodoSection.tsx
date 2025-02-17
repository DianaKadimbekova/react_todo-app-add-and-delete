import React from 'react';
import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';

interface TodoSectionProps {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
}

export const TodoSection: React.FC<TodoSectionProps> = ({
  todos,
  handleDeleteTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </section>
  );
};
