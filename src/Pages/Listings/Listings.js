import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AccountDetails from '../AccountDetails/AccountDetails';
import Navigation from '../Shared/Navigation/Navigation';

const Listings = () => {
    const { user, logout } = useAuth();
    const [value, setValue] = useState()
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetch(`https://afternoon-tundra-36139.herokuapp.com/AllListings/${user.email}`)
            .then(res => res.json())
            .then(data => setListings(data))
    }, [])
    
    return (
        <>
        <Navigation></Navigation>
        {
          user?.email ?
          <div className='flex item-center justify-center bg-gray-100'>
        <div class="container mx-auto px-4 my-4"> 
        <div class="grid sm:grid-cols-4 sm:gap-4 grid-cols-1 gap-4">
        <div><h1 class="text-2xl sm:mt-2">My Listings</h1></div>
        <div>
            <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Filter by Property Type
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>New York</option>
                        <option>Washington</option>
                        <option>Loss Angels</option>
                        <option>California</option>
                      </select>
            </div>
        </div>
        <div>
            <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Genaral Report By Agent
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>New York</option>
                        <option>Washington</option>
                        <option>Loss Angels</option>
                        <option>California</option>
                      </select>
            </div>
        </div>
        <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Wanna create a new one?
            </label>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 mt-1 px-3 border border-blue-700 rounded">
            <NavLink to="/CreateListing">Create New Listings</NavLink>
            </button>
        </div>
        </div>

        {/* <div className='bg-white my-4'>
        <div class="grid sm:grid-cols-3 sm:gap-4 grid-cols-1 gap-4 p-6">
            <div><img className='w-auto' src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80'></img></div>
            <div className='col-span-2'>
                <h1 class="text-2xl">Category</h1>
                <p class="text-base mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <p class="text-base mt-2 font-semibold">For Sale</p>
                <p class="text-base mt-2 font-semibold">Price $1000</p>
                <div className='mt-4'>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 mt-1 px-3 border rounded">
                    Edit
                    </button>
                    <button class="bg-rose-500 hover:bg-red-700 text-white font-bold py-1.5 mt-1 ml-2 px-3 border rounded">
                    Delete
                    </button>
                </div>
            </div>
        </div>
        </div> */}
        {
                        listings.map(listing => <div className='bg-white my-4'>
                        <div class="grid sm:grid-cols-3 sm:gap-4 grid-cols-1 gap-4 p-6">
                            <div><img className='w-auto' src={`data:image/png;base64,${listing.image1}`}></img></div>
                            <div className='col-span-2'>
                                <h1 class="text-2xl">{listing.title}</h1>
                                <p class="text-base mt-2">{listing.headline}</p>
                                <p class="text-base mt-2 font-semibold">{listing.listingType}</p>
                                <p class="text-base mt-2 font-semibold">{listing.location}</p>
                                <p class="text-base mt-2 font-semibold">{listing.price}</p>
                                <div className='mt-4'>
                                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 mt-1 px-3 border rounded">
                                    Edit
                                    </button>
                                    <button class="bg-rose-500 hover:bg-red-700 text-white font-bold py-1.5 mt-1 ml-2 px-3 border rounded">
                                    Delete
                                    </button>
                                    <Link to={`/SingleListing/${listing._id}`}><button class="bg-green-500 hover:bg-red-700 text-white font-bold py-1.5 mt-1 ml-2 px-3 border rounded">
                                    View
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                        </div>)
        }

        </div>
        </div>
        
        :
        <AccountDetails></AccountDetails>
        }
        </>
    );
};

export default Listings;