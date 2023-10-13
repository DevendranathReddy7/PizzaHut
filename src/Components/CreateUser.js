import { useState } from 'react';
import Button from './Button';
import { updateName } from '../Sevices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username))
    navigate('/menu')

  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600 md:text-base'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input w-72 h-10 mb-8 sm:px-6 md:py-4'
      />

      {username !== '' && (
        <div>
          <Button type='primary' >Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
