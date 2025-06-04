'use client'; 

import { LoginForm } from '@/components/login-form';
import React from 'react';

export default function login (){
    return ( <div className="grid h-screen place-items-center bg-gray-800">
      <LoginForm className="w-full max-w-sm" />
    </div>
    
   );
    
}
