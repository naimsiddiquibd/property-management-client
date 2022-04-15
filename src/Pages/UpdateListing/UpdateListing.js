import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Navigation from '../Shared/Navigation/Navigation';
import Autocomplete from "react-google-autocomplete";

const UpdateListing = () => {
    const [value, setValue] = useState()
    return (
        <>
        <Navigation></Navigation>
        <div className='flex item-center justify-center bg-gray-100'>


          <div className="my-8">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="p-4 mx-4 bg-white sm:mt-4 sm:p-6">
                
                    <p class="text-2xl font-medium mb-3">List a New Property</p>

                  <div className="grid grid-cols-9 gap-6">

                  <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Location
                      </label>
                      <Autocomplete
                        type="text"
                        name="location"
                        
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      apiKey={"AIzaSyAjpY9S7NyMN6laTFIwHTRYEsIZAEhTyP4"}
                      onPlaceSelected={(place) => {
                        console.log(place);
                      }}
                      ></Autocomplete>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Property Type
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Commission Structure
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Market Sharing</option>
                        <option>Commission Sharing</option>
                      </select>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Commission Percentage
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Listing Type
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>For Sale</option>
                        <option>For Rent</option>
                        <option>Room Rental</option>
                      </select>
                    </div>

                    
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          USD
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="0.00"
                        />
                      </div>
                    </div>


                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Maintenance Fee
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          USD
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="0.00"
                        />
                      </div>
                    </div>


                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Rooms
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>1 Bedroom</option>
                        <option>2 Bedroom</option>
                        <option>4 Bedroom</option>
                        <option>5 Bedroom</option>
                        <option>6 Bedroom</option>
                        <option>7 Bedroom</option>
                      </select>
                    </div>


                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Bathrooms
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>1 Bathroom</option>
                        <option>2 Bathroom</option>
                        <option>4 Bathroom</option>
                        <option>5 Bathroom</option>
                        <option>6 Bathroom</option>
                        <option>7 Bathroom</option>
                      </select>
                    </div>


                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Floor Size
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          sqft
                        </span>
                        <input
                          type="text"
                          name="company-website"
                          id="company-website"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Floor Level
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Ground Floor</option>
                        <option>2nd Floor</option>
                        <option>3rd Floor</option>
                        <option>4th Floor</option>
                        <option>5th Floor</option>
                        <option>6th Floor</option>
                        <option>7th Floor</option>
                        <option>8th Floor</option>
                        <option>9th Floor</option>
                        <option>10th Floor</option>
                        <option>11th Floor</option>
                        <option>12th Floor</option>
                      </select>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Currently Tenanted
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>


                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Furnishing
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Fully Furnished</option>
                        <option>75% Furnished</option>
                        <option>50% Furnished</option>
                        <option>25% Furnished</option>
                      </select>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Upload Image
                      </label>
                      <input  
                        class="form-control
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
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Headline
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>


                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea 
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-6 sm:gap-4 grid-cols-1 gap-4 mt-6">
                     
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-red-600"/><span class="ml-2 text-gray-700">Air-conditon</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-orange-600"/><span class="ml-2 text-gray-700">Balcony</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-yellow-600"/><span class="ml-2 text-gray-700">Cooker Hood</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600"/><span class="ml-2 text-gray-700">Corner Unit</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-teal-600"/><span class="ml-2 text-gray-700">High Floor</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Park View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Water Heater</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Bathtub</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Maidsroom</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Bombsheilter</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">City View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Garage</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Ground Floor</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Outdoor Patio</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Roof Terrace</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Sea View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Jacuzzi</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Lake View</span>
                        </label>
                    </div>
                   
                 </div>

                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
        </>
    );
};

export default UpdateListing;