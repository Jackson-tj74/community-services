
import React from 'react';
import { useState } from "react";
import { Eye, EyeOff, Home, Info, Phone, Menu } from "lucide-react";

const RegistrationPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div 
      className="min-h-screen w-full  relative font-sans  overflow-hidden flex flex-col justify-between bg-cover bg-center bg-no-repeat"
      style={{ 
        
        backgroundImage: `url('bg.png')` 
      }}
    >
      
  
      
      <div className="absolute top-2 right-16 z-20 flex flex-col items-end">
        
        <img src="Logo.png" alt="logo" className='w-20  sm:w-30 sm:items-end md:w-50 lg:w-60' ></img>
      </div>

      
      <div className="flex-grow flex items-center justify-center relative z-5 px-4">
        <div className="bg-white rounded-sm  w-full max-w-4xl overflow-hidden min-h-[500px] border border-gray-100">
          
          <h2 className="text-center text-2xl font-bold text-gray-800 sm:py-16 lg:py-8">Community Service</h2>
          
          <div className="flex flex-col md:flex-row p-8 pt-0 gap-12">
            
            
            <div className="flex-1 flex flex-col items-center">
              
              <div className="relative w-full aspect-square flex items-center justify-center  rounded-xl">
                 <img 
                   src="image.png" 
                   alt="Illustration" 
                   className="w-[80%] "
                 />
              </div>
            </div>

            
            <div className="hidden md:block w-[1px] bg-gray-200 h-80 self-center"></div>

           
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8 ">
                <button className="pb-2 px-4   hover:text-blue-600 font-bold transition-colors">Login</button>
                <span className='md:block border-l-2 border-gray-200 h-15 self-center' />
                <button className="pb-2 px-4  text-gray-900 font-black border-b-4 border-blue-600 text-xl">Register</button>
              </div>

              <form className="space-y-4">
                <input 
                type="text"
                 placeholder="First name"
                 className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <input type="text"
                 placeholder="Last name" 
                 className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <input type="email"
                 placeholder="Email" 
                 className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <div className="relative">
                  <input 
                  ype={showPassword ? "text" : "password"}
                  type="password" 
                  placeholder="Password" 
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  
                   <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-2.5 text-slate-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>
                <div className="relative">
                  <input type="password" placeholder="Re-enter Password" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button type="button" className="absolute right-3 top-2.5 text-gray-400">👁️</button>
                </div>
                
                <button type="submit" className="w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-3 rounded-lg mt-6 shadow-md transition-all active:scale-[0.98]">
                  Sign Up
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

      
      

    </div>
  );
};

export default RegistrationPage;