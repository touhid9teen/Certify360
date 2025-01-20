import Button from './elements/Button';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <div className='flex justify-center'>
        <Button children={'Create Account'} buttonVariant='primary'/>
      </div>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </>
  );
}

export default App;