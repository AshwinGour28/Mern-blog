import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInSuccess, signInStart, signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      dispatch(signInFailure("Please fill out all the fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/backend/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success==false){
        dispatch(signInFailure(data.message));
      }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-4xl gap-5 mx-auto flex-col md:flex-row md:items-center'>
        <div className='flex-1'>
          <Link
            to='/'
            className='font-bold dark:text-white text-4xl'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Simple
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>This is a Simple blog project. You can sign in with your email and password</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div>
                <Label value='Your email' />
              <TextInput type='email' placeholder='name@gmail.com' id='email' onChange={handleChange}/>
              </div>
              <div>
                <Label value='Your password' />
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange}/>
              </div>
              <div className='justify-center'>
              <Button type='submit' className='w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' disabled={loading}>
                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'>
                        Loading...
                      </span>
                    </>
                  ) : 'Sign In'
                }
              </Button>
              </div>
              <div className='flex gap-2 text-sm mt-5'>
              <span>Don't have an account?
              <Link to='/sign-up' className='text-blue-500'>
                Sign up
              </Link>
              </span>
              </div>
              {
                errorMessage && (
                  <Alert className='mt-5 bg-red-300 text-red-600 p-4 '>
                    {errorMessage}
                  </Alert>
                )
              }
          </form>
        </div>
      </div>
    </div>
  )
}
