import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../Shared/Navigation/Navigation';
import PhoneInput from 'react-phone-number-input';
import './UpdateAccountDetails.css';
import Autocomplete from "react-google-autocomplete";
import useAuth from '../../hooks/useAuth';

const UpdateAccountDetails = () => {

   const [userInfoFromDB, setUserInfoFromDB] = useState({});

    useEffect(() => {
        fetch(`https://afternoon-tundra-36139.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setUserInfoFromDB(data))
    }, [])

   const { user } = useAuth();
  //  const [value, setValue] = useState();
   
   // Update User
   const handleTitleChange = e => {
    const updatedTitle = e.target.value;
    const updatedUser = { title: updatedTitle, firstName: userInfoFromDB.firstName, lastName: userInfoFromDB.lastName, phone: userInfoFromDB.phone, location: userInfoFromDB.location };
    setUserInfoFromDB(updatedUser);
  }
   const handleFirstNameChange = e => {
    const updatedFirstName = e.target.value;
    const updatedUser = { title: userInfoFromDB.title, firstName: updatedFirstName, lastName: userInfoFromDB.lastName, phone: userInfoFromDB.phone, location: userInfoFromDB.location };
    setUserInfoFromDB(updatedUser);
  }
   const handleLastNameChange = e => {
    const updatedLastName = e.target.value;
    const updatedUser = { title: userInfoFromDB.title, firstName: userInfoFromDB.firstName, lastName: updatedLastName, phone: userInfoFromDB.phone, location: userInfoFromDB.location };
    setUserInfoFromDB(updatedUser);
  }
  //  const handlePhoneChange = e => {
  //   const updatedPhone = e.target.value;
  //   const updatedUser = { title: userInfoFromDB.title, firstName: userInfoFromDB.firstName, lastName: userInfoFromDB.lastName, phone: updatedPhone, location: userInfoFromDB.location };
  //   setUserInfoFromDB(updatedUser);
  // }
   
   const handleLocationChange = e => {
    const updatedLocation = e.target.value;
    const updatedUser = { title: userInfoFromDB.title, firstName: userInfoFromDB.firstName, lastName: userInfoFromDB.lastName, phone: userInfoFromDB.phone, location: updatedLocation};
    setUserInfoFromDB(updatedUser);
  }

  const handleUpdateUser = e => {
    const url = `https://afternoon-tundra-36139.herokuapp.com/users/${user.email}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userInfoFromDB)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Update Successful');
            }
        })
    e.preventDefault();
}

   
   
    return (
        <>
      <div className='sm:h-screen bg-gray-100'>
      <div className="container mx-auto px-4 py-4">
    <div>
        <div className="mx-5 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Login Information</h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
          {/* {userInfoSuccess && <div class="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            Your information has been successfully added!
          </div>} */}
            <form>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Login ID
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="login-ID"
                          id="company-website"
                          readonly="this.isEditable" 
                          
                          defaultValue={user.email || ''}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                          placeholder="example@gmail.com"
                        />

                        

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="m-5 mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleUpdateUser}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3 lg:col-span-1">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <select
                        id="country"
                        onChange={handleTitleChange}
                        value={userInfoFromDB.title  || ''}
                        
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Dr.</option>
                        <option>Engr.</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        type="text"
                        onChange={handleFirstNameChange}
                        value={userInfoFromDB.firstName  || ''}
                        id="firstName" 
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                        type="text"
                        onChange={handleLastNameChange}
                        value={userInfoFromDB.lastName  || ''}
                        id="lastName"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        
                        name="emailAddress"
                        id="email-address"
                        autoComplete="email"
                        readonly="this.isEditable" 
                        defaultValue={user.email || ''}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        Mobile Number
                      </label>
                      <PhoneInput
                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter phone"
                        readonly="this.isEditable" 
                        value={userInfoFromDB.phone  || ''}
                        />

                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <Autocomplete
                        type="text"
                        onBlur={handleLocationChange}
                        placeholder={userInfoFromDB.location  || ''}
                        
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      apiKey={"AIzaSyAjpY9S7NyMN6laTFIwHTRYEsIZAEhTyP4"}
                      onPlaceSelected={(place) => {
                        console.log(place);
                      }}
                      ></Autocomplete>
                    </div>

                    

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label htmlfor="formFile" className="block text-sm font-medium text-gray-700">
                    Set a profile picture
                    </label>
                    <input
                    className="form-control
                    mt-1
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="formFile"/>
                    </div>
                    
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
    );
};

export default UpdateAccountDetails;