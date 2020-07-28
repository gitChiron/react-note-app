import React from 'react';
import { Input } from './components/Input';
import { Notes } from './components/Notes';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <div className="container-lg mx-auto mt-2 wrapper">
          <Input />
          <hr />
          <Alert />
          <Notes />
        </div>
      </AlertState>
    </FirebaseState>
  )
}

export default App;