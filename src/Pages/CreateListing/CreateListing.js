import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import Navigation from '../Shared/Navigation/Navigation';
import Autocomplete from "react-google-autocomplete";
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const CreateListing = () => {
  const history = useHistory();
   const { user } = useAuth();

   const [location, setLocation] = useState();
   const [postalCode, setPostalCode] = useState();
   const [propertyType, setPropertyType] = useState();
   const [commissionStructure, setCommissionStructure] = useState();
   const [commissionPercentage, setCommissionPercentage] = useState();
   const [listingType, setListingType] = useState();
   const [price, setPrice] = useState();
   const [maintenanceFee, setMaintenanceFee] = useState();
   const [rooms, setRooms] = useState();
   const [bathroom, setBathroom] = useState();
   const [floorSize, setFloorSize] = useState();
   const [floorLavel, setFloorLavel] = useState();
   const [currentlyTenanted, setCurrentlyTenanted] = useState();
   const [furnishing, setFurnishing] = useState();
   const [image1, setImage1] = useState();
   const [image2, setImage2] = useState();
   const [image3, setImage3] = useState();
   
   const [title, setTitle] = useState();
   const [headline, setHeadline] = useState();
   const [description, setDscription] = useState();
   const [agentName, setAgentName] = useState();
   const [agentContactNumber, setAgentContactNumber] = useState();
   const [airCondition, setAirCondition] = useState();
   const [balcony, setBalcony] = useState();
   const [cookerHood, setCookerHood] = useState();
   const [cornerUnit, setCornerUnit] = useState();
   const [highFloor, setHighFloor] = useState();
   const [parkView, setParkView] = useState();
   const [waterHeater, setWaterHeater] = useState();
   const [bathTub, setBathTub] = useState();
   const [MaidsRoom, setMaidsRoom] = useState();
   const [bombSheilter, setBombSheilter] = useState();
   const [cityView, setCityView] = useState();
   const [garage, setGarage] = useState();
   const [groundFloor, setGroundFloor] = useState();
   const [outdoorPatio, setOutdoorPatio] = useState();
   const [roofTerrace, setRoofTerrace] = useState();
   const [seaView, setSeaView] = useState();
   const [jacuzzi, setJacuzzi] = useState();
   const [lakeView, setLakeView] = useState();



   const handleUserInfoSubmit = e => {
    // collect data
    const formData = new FormData();
     formData.append('email', user.email);
     formData.append('location', location);
     formData.append('postalCode', postalCode);
     formData.append('propertyType', propertyType);
     formData.append('commissionStructure', commissionStructure);
     formData.append('commissionPercentage', commissionPercentage);
     formData.append('listingType', listingType);
     formData.append('price', price);
     formData.append('maintenanceFee', maintenanceFee);
     formData.append('rooms', rooms);
     formData.append('bathroom', bathroom);
     formData.append('floorSize', floorSize );
     formData.append('floorLavel', floorLavel);
     formData.append('currentlyTenanted', currentlyTenanted);
     formData.append('image1', image1);
     formData.append('image2', image2);
     formData.append('image3', image3);
     formData.append('furnishing', furnishing);
     formData.append('title', title);
     formData.append('headline', headline);
     formData.append('description', description);
     formData.append('agentName', agentName);
     formData.append('agentContactNumber', agentContactNumber);
     formData.append('airCondition', airCondition);
     formData.append('balcony', balcony);
     formData.append('cookerHood', cookerHood);
     formData.append('cornerUnit', cornerUnit);
     formData.append('highFloor', highFloor);
     formData.append('parkView', parkView);
     formData.append('waterHeater', waterHeater);
     formData.append('bathTub', bathTub);
     formData.append('MaidsRoom', MaidsRoom);
     formData.append('bombSheilter', bombSheilter);
     formData.append('cityView', cityView);
     formData.append('garage', garage);
     formData.append('groundFloor', groundFloor);
     formData.append('outdoorPatio', outdoorPatio);
     formData.append('roofTerrace', roofTerrace);
     formData.append('seaView', seaView);
     formData.append('jacuzzi', jacuzzi);
     formData.append('lakeView', lakeView);
    // send to server
    fetch('https://afternoon-tundra-36139.herokuapp.com/listings', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
              history.push("/listings");
            });

        e.preventDefault();
  }

    return (
        <>
        <Navigation></Navigation>
        <div className='flex item-center justify-center bg-gray-100'>


          <div className="my-8">
            <form onSubmit={handleUserInfoSubmit}>
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
                        onBlur={e => setLocation(e.target.value)}
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
                        name="postalCode"
                        onBlur={e => setPostalCode(e.target.value)}
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      {/* <input
                        type="hidden"
                        value={user.email}
                        onBlur={e => setEmail(e.target.value)}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      /> */}
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Property Type
                      </label>
                      <input
                        type="text"
                        name="propertyType"
                        onBlur={e => setPropertyType(e.target.value)}
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
                        name="commissionStructure"
                        onBlur={e => setCommissionStructure(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option disabled="disabled">Select an option</option>
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
                        name="commissionPercentage"
                        onBlur={e => setCommissionPercentage(e.target.value)}
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
                        name="listingType"
                        onBlur={e => setListingType(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
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
                          name="price"
                          onBlur={e => setPrice(e.target.value)}
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
                          name="maintenanceFee"
                          onBlur={e => setMaintenanceFee(e.target.value)}
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
                        name="rooms"
                        onBlur={e => setRooms(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
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
                        name="bathroom"
                        onBlur={e => setBathroom(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
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
                          name="floorSize"
                          onBlur={e => setFloorSize(e.target.value)}
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
                        name="floorLavel"
                        onBlur={e => setFloorLavel(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
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
                        name="currentlyTenanted"
                        onBlur={e => setCurrentlyTenanted(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
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
                        name="furnishing"
                        onBlur={e => setFurnishing(e.target.value)}
                        autoComplete="country-name"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Select an option</option>
                        <option>Fully Furnished</option>
                        <option>75% Furnished</option>
                        <option>50% Furnished</option>
                        <option>25% Furnished</option>
                      </select>
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Image-1
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
                        onChange={e => setImage1(e.target.files[0])}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Image-2
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
                        onChange={e => setImage2(e.target.files[0])}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Image-3
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
                        onChange={e => setImage3(e.target.files[0])}
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        onBlur={e => setTitle(e.target.value)}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-3 lg:col-span-8">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Headline
                      </label>
                      <input
                        type="text"
                        name="headline"
                        onBlur={e => setHeadline(e.target.value)}
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
                        name="description"
                        onBlur={e => setDscription(e.target.value)}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Agent Name
                      </label>
                      <input
                        type="text"
                        name="agentNAme"
                        onBlur={e => setAgentName(e.target.value)}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Agent Contact Number
                      </label>
                      <input
                        type="tel"
                        name="agentContactNumber"
                        onBlur={e => setAgentContactNumber(e.target.value)}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div class="grid sm:grid-cols-6 sm:gap-4 grid-cols-1 gap-4 mt-6">
                     
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='airCondition' onBlur={e => setAirCondition(e.target.value)} class="form-checkbox h-5 w-5 text-red-600"/><span class="ml-2 text-gray-700">Air-conditon</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='balcony' onBlur={e => setBalcony(e.target.value)} class="form-checkbox h-5 w-5 text-orange-600"/><span class="ml-2 text-gray-700">Balcony</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='cookerHood' onBlur={e => setCookerHood(e.target.value)} class="form-checkbox h-5 w-5 text-yellow-600"/><span class="ml-2 text-gray-700">Cooker Hood</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='cornerUnit' onBlur={e => setCornerUnit(e.target.value)} class="form-checkbox h-5 w-5 text-green-600"/><span class="ml-2 text-gray-700">Corner Unit</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='highFloor' onBlur={e => setHighFloor(e.target.value)} class="form-checkbox h-5 w-5 text-teal-600"/><span class="ml-2 text-gray-700">High Floor</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='parkView' onBlur={e => setParkView(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Park View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='waterHeater' onBlur={e => setWaterHeater(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Water Heater</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='bathTub' onBlur={e => setBathTub(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Bathtub</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='MaidsRoom' onBlur={e => setMaidsRoom(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Maidsroom</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='bombSheilter' onBlur={e => setBombSheilter(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Bombsheilter</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='cityView' onBlur={e => setCityView(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">City View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='garage' onBlur={e => setGarage(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Garage</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='groundFloor' onBlur={e => setGroundFloor(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Ground Floor</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='outdoorPatio' onBlur={e => setOutdoorPatio(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Outdoor Patio</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='roofTerrace' onBlur={e => setRoofTerrace(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Roof Terrace</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='seaView' onBlur={e => setSeaView(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Sea View</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='jacuzzi' onBlur={e => setJacuzzi(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Jacuzzi</span>
                        </label>
                    </div>
                     <div>
                         <label class="inline-flex items-center mt-3">
                            <input type="checkbox" name='lakeView' onBlur={e => setLakeView(e.target.value)} class="form-checkbox h-5 w-5 text-blue-600"/><span class="ml-2 text-gray-700">Lake View</span>
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

export default CreateListing;