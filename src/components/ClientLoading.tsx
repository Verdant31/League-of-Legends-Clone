import { useState, useEffect } from 'react'
import * as Progress from '@radix-ui/react-progress';

export default function ClientLoading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if(progress < 256) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 1);
    }
  }, [progress]);

  return (
    <div className="flex w-[100%] h-[100%] bg-no-repeat bg-url bg-[url('/loading-background.png')] relative">
      <div className="absolute left-[50%] top-[59%] translate-y-[-50%] translate-x-[-50%]">
        <p className="text-2xl text-gold font-bold tracking-widest">CARREGANDO</p>
      </div>
      <div className="w-[260px] border-[2px] rounded-full  border-gold h-[18px] absolute left-[50%] top-[63%] translate-y-[-50%] translate-x-[-50%]">
        <div style={{width: `${progress}px`}} 
          className={`bg-gradient-to-r from-[#005882] to-[#0ABDA4] h-[14px] rounded-full  `} 
        />
      </div>
    </div>
  )
}
