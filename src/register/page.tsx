'use client'; 

import {RegisterForm} from '@components/RegisterForm'
import React from 'react';

export default function register (){
    return ( <div className="grid h-screen place-items-center bg-gray-800">
      <RegisterForm className="w-full max-w-sm" />
    </div>
    
   );
    
}