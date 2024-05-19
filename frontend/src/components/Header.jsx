import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
    const path = useLocation().pathname;

    const handleSubmit = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(location.search);
      urlParams.set('searchTerm', searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
    };
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Simple
        </span>
        Blog
      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Search...'
          className='px-10 py-2 w-max '
        />
      </form>
      
      <div className='flex gap-28 md:order-2 px-20'>
      
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >Home
        </Link>
        
        <Link
        to='/about'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >About
        </Link>
        <Link
        to='/project'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >Project
        </Link>

        <Link to='/sign-up' className='py-2'>
          <Button className='w-max px-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Sign Up</Button>
        </Link>
      </div>

      
      
    </Navbar>
  );
}