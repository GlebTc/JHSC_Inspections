import { FC } from 'react';
import Header from './components/Header';
import Form from './components/Form';


const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <Form />
    </div>
  );
}

export default App;
