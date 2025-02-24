import { useEffect } from 'react';

interface TodoHeaderProps {
  handleAddTodo: (title: string) => void;
  queryTodo: string;
  setQueryTodo: (queryTodo: string) => void;
  error: string | null;
  setError: (error: string | null) => void;
  isInputDisabled: boolean;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const TodoHeader: React.FC<TodoHeaderProps> = ({
  handleAddTodo,
  queryTodo,
  setQueryTodo,
  setError,
  isInputDisabled,
  inputRef,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (queryTodo && queryTodo.trim()) {
      handleAddTodo(queryTodo.trim());
    } else {
      setError('Title should not be empty');
    }
  };

  useEffect(() => {
    if (!isInputDisabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputDisabled]);

  return (
    <header className="todoapp__header">
      {/* this button should have `active` class only if all todos are completed */}
      <button
        type="button"
        className="todoapp__toggle-all active"
        data-cy="ToggleAllButton"
      />

      {/* Add a todo on form submit */}
      <form onSubmit={handleSubmit}>
        <input
          data-cy="NewTodoField"
          type="text"
          className="todoapp__new-todo"
          placeholder="What needs to be done?"
          value={queryTodo}
          onChange={event => setQueryTodo(event.target.value)}
          autoFocus
          disabled={isInputDisabled}
          ref={inputRef}
        />
      </form>
    </header>
  );
};
