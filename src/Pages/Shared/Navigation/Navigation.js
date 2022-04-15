import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {

  const { user, logout } = useAuth();

  const [userInfoFromDB, setUserInfoFromDB] = useState({});

    useEffect(() => {
        fetch(`https://afternoon-tundra-36139.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfoFromDB(data))
    }, [])

  return (
    <div>
        <nav
  class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light"
>
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      class="navbar-toggler text-gray-200 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="bars"
        class="w-6"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
        ></path>
      </svg>
    </button>
    <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
      <a class="text-xl text-white pr-2 font-semibold" href="#">Navbar</a>

      <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">

        <li class="nav-item p-2">
          <a class="nav-link text-white" href="#">Dashboard</a>
        </li>

        
      
        <li class="nav-item p-2">
          <a
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            ><NavLink to="/listings">My Listings</NavLink></a>
        </li>

        <li class="nav-item p-2">
          <a
            class="nav-link text-white opacity-60 hover:opacity-80 focus:opacity-80 p-0"
            href="#"
            ><NavLink to="/CreateListing">Create New Listings</NavLink></a>
        </li>
      
      </ul>

    </div>



    <div class="flex items-center relative">

     


      <div class="dropdown relative">
        <p
          class="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
        >
         {userInfoFromDB.title } {userInfoFromDB.firstName }
        </p>
        
      </div>

      <div class="dropdown relative">
        <a
          class="dropdown-toggle flex items-center hidden-arrow"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={`data:image/png;base64,${userInfoFromDB.image}`}
            class="rounded-full h-7 w-7"
            
            alt=""
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              ><NavLink to="/MyProfile">My Profile</NavLink></a>
          </li>
          {
            user?.email ?
            <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              onClick={logout}
              >Logout</a>
          </li>
          :
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Please Login</a>
          </li>
          }
        </ul>
      </div>
      
    </div>

  </div>
</nav>
    </div>
  );
};

export default Navigation;