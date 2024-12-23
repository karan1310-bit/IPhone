import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="w-[10vw] h-[10vw] rounded-full">
          <div class="relative w-12 h-12 rounded-full animate-spin">
            <div class="absolute top-0 left-0 w-full h-full border-t-4 border-blue-700 rounded-full"></div>
            <div class="absolute top-0 left-0 w-full h-full border-r-4 border-slate-900 rounded-full"></div>
            <div class="absolute top-0 left-0 w-full h-full border-b-4 border-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Loader