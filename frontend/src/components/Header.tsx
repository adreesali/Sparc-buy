
// import React from 'react';
// import Logo from './Logo';
// import { GrSearch } from 'react-icons/gr';
// import { FaShoppingCart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { FaRegCircleUser } from 'react-icons/fa6';

// const Header = () => {
//   return (
//     <header className='h-16 shadow-md bg-white'>
//       <div className='h-full container mx-auto flex items-center px-4 justify-between'>
//         <div className="">
//           <Link to="/">
//             <Logo w={90} h={50} />
//           </Link>
//         </div>
//         <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-pl-2'>
//           <input type="text" placeholder='Search Product here...' className='w-full outline-none pl-2' />
//           <div className='text-lg w-12 h-9 bg-purple-500 flex items-center justify-center rounded-r-full text-white'>
//             <GrSearch />
//           </div>
//         </div>
//         <div className="flex items-center gap-7">
//           <div className='text-3xl cursor-pointer'>
//             <FaRegCircleUser />
//           </div>
//           <div className="text-3xl relative">
//             <span><FaShoppingCart/></span>
//             <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
//               <p className='text-xs '>0</p>
//             </div>
//           </div>
//           <div>
//             <Link to="/login" className='px-3 py-1 rounded-full text-white bg-purple-500 hover:bg-purple-600'>Login</Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import Logo from './Logo';
import { GrSearch } from 'react-icons/gr';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegCircleUser } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='h-16 shadow-sm bg-white'>
      <div className='container mx-auto flex items-center h-full px-4 justify-between'>
        <div className="flex-shrink-0">
          <Link to="/">
            <Logo w={90} h={50} />
          </Link>
        </div>
        {/* Search Bar */}
        <div className='hidden lg:flex items-center w-full max-w-md border border-gray-300 rounded-full'>
          <input
            type="text"
            placeholder='Search for products...'
            className='w-full py-2 px-4 outline-none bg-transparent rounded-l-full'
          />
          <div className='bg-purple-500 w-10 h-10 flex items-center justify-center text-white cursor-pointer rounded-r-full hover:bg-purple-600 transition'>
            <GrSearch />
          </div>
        </div>
        {/* User and Cart Buttons */}
        <div className="flex items-center gap-6">
          {/* User Icon */}
          <div className='text-3xl text-gray-700 cursor-pointer'>
            <FaRegCircleUser />
          </div>
          {/* Cart Icon */}
          <div className="relative text-3xl text-gray-700 cursor-pointer">
            <FaShoppingCart />
            <div className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center absolute top-0 right-0">
              0
            </div>
          </div>
          {/* Login Button */}
          <Link
            to="/login"
            className='bg-purple-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-all hover:scale-105 shadow-sm'
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
