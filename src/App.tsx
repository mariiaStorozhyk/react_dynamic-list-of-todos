import React, { useEffect, useState } from 'react';

import './App.scss';
import './styles/general.scss';

import { TodoList } from './components/TodoList';
import { CurrentUser } from './components/CurrentUser';

import { Todo } from './types/Todo';
import { getAllTodos } from './api';

const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    getAllTodos()
      .then(allTodos => setTodos(allTodos));
  }, []);

  return (
    <div className="App">
      <div className="App__sidebar">
        <TodoList
          todos={todos}
          changeUser={setSelectedUserId}
          selectedUserId={selectedUserId}
        />
      </div>

      <div className="App__content">
        <div className="App__content-container">
          {selectedUserId ? (
            <CurrentUser
              userId={selectedUserId}
              clearUser={setSelectedUserId}
            />
          ) : 'No user selected'}
        </div>
      </div>
    </div>
  );
};

export default App;
