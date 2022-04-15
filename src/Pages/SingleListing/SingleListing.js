import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Shared/Navigation/Navigation';

const SingleListing = () => {
    const { listingId } = useParams();
    const [listedData, setListedData] = useState({});

    useEffect(() => {
        fetch(`https://afternoon-tundra-36139.herokuapp.com/listings/${listingId}`)
            .then(res => res.json())
            .then(data => setListedData(data))
    })
    return (
        <>
            <Navigation></Navigation>
            <div className='flex item-center justify-center bg-gray-100'>
            <div className="container mx-auto px-12 pt-8">
       
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <img
        src={`data:image/png;base64,${listedData.image1}`}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={`data:image/png;base64,${listedData.image2}`}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <img
        src={`data:image/png;base64,${listedData.image3}`}
        className="block w-full"
        alt="..."
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


            <div className="grid grid-cols-1 gap-2 sm:grid sm:grid-cols-3 sm:gap-2 my-8">
                <div className='bg-white p-6 rounded-sm sm:col-span-2 sm:mr-8'>
                    <div className='mb-3'>
                        <p>Starting from</p>
                        <p className='text-2xl'>{listedData.price}</p>
                        <p><span>{listedData.rooms} </span> | <span> {listedData.bathroom}</span> | <span> {listedData.floorSize} sqft</span> | <span> {listedData.floorLavel}</span></p>
                    </div>
                    <div className='mb-3'>
                        <p className='text-2xl'>{listedData.title}</p>
                        <p>{listedData.location} </p>
                    </div>
                    <div className='mb-3 w-44'>
                        <p>Postal code: {listedData.postalCode}</p>
                    </div>
                    <div className='mb-3 w-44'>
                        <p>Address: {listedData.postalCode}</p>
                    </div>
                </div>
                <div className='bg-gray-900 rounded-sm'>
                    <div className='flex items-center justify-center rounded-sm'>
                        <div className='max-w-sm max-auto px-12 pt-7 shadow-md text-center text-white'>
                            <img className="h-24 w-24 m-auto rounded-full" src='https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png'></img>
                            <div className='border-2 w-10 border-white inline-block m-auto mb-1 mt-1'></div>
                            <p className='mb-4'>Fill up your personal informationn and start journey with us</p>
                            <a href="tel:555-666-7777" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-gray-900'>Call Now!</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 mt-2 rounded-sm sm:col-span-2 sm:mr-8'>
                <p className='text-xl mb-2'>Details</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Type:</p>
                                </div>
                                <div>
                                    <p>{listedData.propertyType}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Floor Size:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize} sqft</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Land Size:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Furnishing:</p>
                                </div>
                                <div>
                                    <p>{listedData.furnishing}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Floor Level:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorLavel}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Currently Tenanted:</p>
                                </div>
                                <div>
                                    <p>{listedData.currentlyTenanted}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Maintenance Fee:</p>
                                </div>
                                <div>
                                    <p>{listedData.maintenanceFee}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Tenure:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Developer:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> PSF:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> TOP:</p>
                                </div>
                                <div>
                                    <p>{listedData.floorSize}</p>
                                </div>
                            </div>
                            <div className='flex mb-2'>
                                <div className='mr-10 w-28'>
                                    <p> Listing ID:</p>
                                </div>
                                <div>
                                    <p>{listedData._id}</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-6 mt-2 rounded-sm sm:col-span-2 sm:mr-8'>
                <p className='text-xl mb-2'>Description</p>
                    
                        <div className='mb-3'>
                            <p>{listedData.description}</p>
                        </div>
                    
                </div>
                <div className='bg-white p-6 mt-2 rounded-sm sm:col-span-2 sm:mr-8'>
                <p className='text-xl mb-2'>Key Features</p>
                    
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <ul className="list-none">
                                {
                                    listedData?.airCondition ?
                                    <li className="mb-2">Air-Conditioning</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.balcony ?
                                    <li className="mb-2">Balcony</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.cookerHood ?
                                    <li className="mb-2">Cooker Hood</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.cornerUnit ?
                                    <li className="mb-2">Corner Unit</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.highFloor ?
                                    <li className="mb-2">High Floor</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.parkView ?
                                    <li className="mb-2">Park View</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                </ul>
                            </div>
                            <div>
                                <ul className="list-none">
                                {
                                    listedData?.bathTub ?
                                    <li className="mb-2">Bathtub</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.MaidsRoom ?
                                    <li className="mb-2">Maids Room</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.bombSheilter ?
                                    <li className="mb-2">Bombsheilter</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                </ul>
                            </div>
                        </div>
                    
                </div>

                <div className='bg-white p-6 mt-2 rounded-sm sm:col-span-2 sm:mr-8'>
                <p className='text-xl mb-2'>Facilities</p>
                    
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <ul className="list-none">
                                {
                                    listedData?.cityView ?
                                    <li className="mb-2">City View</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.garage ?
                                    <li className="mb-2">Garage</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.groundFloor ?
                                    <li className="mb-2">Ground Floor</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.outdoorPatio ?
                                    <li className="mb-2">Outdoor Patio</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                </ul>
                            </div>
                            <div>
                                <ul className="list-none">
                                {
                                    listedData?.roofTerrace ?
                                    <li className="mb-2">Roof Terrace</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.seeView ?
                                    <li className="mb-2">Sea View</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.jacuzzi ?
                                    <li className="mb-2">Jacuzzi</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                {
                                    listedData?.lakeView ?
                                    <li className="mb-2">Lake View</li>
                                    :
                                    <li className="mb-2"></li>
                                }
                                </ul>
                            </div>
                        </div>
                    
                </div>   

            </div>

 
            </div>
            </div>
        </>
    );
};

export default SingleListing;