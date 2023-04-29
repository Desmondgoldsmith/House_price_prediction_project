import React, { useState } from 'react';

function Main() {
  const [step, setStep] = useState(1); 


  const handleNext = () => {
    setStep(step + 1);
  };
  const handlePrevious = () => {
    setStep(step - 1);
  };

  

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
            <>
        <div className="h-5/6 flex bg-white rounded-md  w-9/12">
          <div className="bg-black flex-grow text-yellow-300 w-full rounded-tl-md rounded-bl-md p-5">
            <p className="font-extrabold text-5xl text-center pt-24">The House Price Prediction Project</p>
          </div>
          <div className="bg-white flex-grow text-black w-full rounded-tr-md rounded-br-md flex items-center justify-center">
              <button className="rounded-full bg-black text-white p-4 w-40" onClick={handleNext}>
                Get Started
              </button>
            </div>
        </div>
        </>
        );
      case 2:
        return (
        <>
          <div className=" w-[400px] h-5/6 bg-white rounded-md px-6">
          <p className = "text-center font-bold text-[35px] mt-4">Complete this form.</p>
            <form>
            <div>
            <div className = "flex space-x-5">
               <div className='flex-col mt-8 '>
                <div>
                <label for="bedrooms">Number of Bedrooms</label>
                </div>
                <div>
                    <input type="text" name="bedrooms" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "number of bedrooms"/>
                </div> 
                </div>
               <div className='flex-col mt-8'>
                <div>
                <label for="bathrooms">Number of Bathrooms</label>
                </div>
                <div>
                    <input type="text" name="bathrooms" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "number of bathrooms"/>
                </div> 
                </div>
            </div>
               
            {/*  */}
            <div className = "flex space-x-5">
               <div className='flex-col mt-8 '>
                <div>
                <label for="livingRoom">Size of Livingroom</label>
                </div>
                <div>
                    <input type="text" name="livingRoom" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "size of livingroom"/>
                </div> 
                </div>
               <div className='flex-col mt-8'>
                <div>
                <label for="plot">Size of Plot</label>
                </div>
                <div>
                    <input type="text" name="plot" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "size of plot"/>
                </div> 
                </div>
            </div>
            {/*  */}
            <div className = "flex space-x-5">
               <div className='flex-col mt-8 '>
                <div>
                <label for="year">Year Built</label>
                </div>
                <div>
                    <input type="text" name="year_built" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "year built"/>
                </div> 
                </div>
               <div className='flex-col mt-8'>
                <div>
                <label for="renovated">Year Renovated</label>
                </div>
                <div>
                    <input type="text" name="renovated" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "year renovated"/>
                </div> 
                </div>
            </div>

            {/*  */}
            <div className='flex-col mt-8'>
                <div>
                <label for="street">Street(location)</label>
                </div>
                <div>
                    <input type="text" name="street" className = "border h-[40px] p-4 w-full rounded-md" placeholder = "Location (street)"/>
                </div>
                </div>

            <button onClick = {handleNext} type = "submit" className = "rounded-md p-4 w-full mt-8 bg-black text-white ">submit</button>
            </div>
            <p className='text-center mt-4'>wanna go back ? <span onClick={handlePrevious} className = "cursor-pointer text-blue-700 hover:underline">back  </span></p>
            </form>
            
          </div>
          </>
        );

        case 3:
            return(
                <>
                <div className=" w-[800px] bg-white rounded-md px-10 py-2">
                <p className ="font-bold text-[35px] text-center">Result.</p>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p> 
                </div>

                </>
            )
    }
  };

  return (
    <>
      <div className="bg-yellow-300 h-screen flex justify-center items-center">
          {renderContent()}
      </div>
    </>
  );
}

export default Main;
