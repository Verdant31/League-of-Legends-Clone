// React
import { ReactNode } from 'react'
// Chakra

interface BackgroundProps {
  children: ReactNode
}
export default function Background({ children }: BackgroundProps) {
  return (
    <div className="h-[100vh] bg-cover bg-no-repeat bg-url bg-[url('/background.png')] relative">
      <div className="flex w-[100vw] h-[39px] bg-header">
        <div className="flex ml-[12px] items-center w-[100%]">
          <div className="flex justify-between items-center w-[100%]">
            <div className="flex items-center">
              <img src="./apple-logo.png" className="ml-2 w-[16px] h-[18px]" alt="Uma maçã com o lado direito mordido" />
              <div className="flex ml-[30px] mt-[3px] gap-[30px]">
                <p className="font-bold text-white text-sm">
                  Finder
                </p>
                <p className="font-bold text-white text-sm">
                  Arquivo
                </p>
                <p className="font-bold text-white text-sm">
                  Editar
                </p>
                <p className="font-bold text-white text-sm">
                  Visualizar
                </p>
                <p className="font-bold text-white text-sm">
                  Ir
                </p>
                <p className="font-bold text-white text-sm">
                  Janela
                </p>
                <p className="font-bold text-white text-sm">
                  Ajuda
                </p>
              </div>
            </div>
            <p className="mr-[18px] text-white text-sm">
              Seg. 26 de set. 15:07
            </p>
          </div>
        </div>
      </div>
      <div className="">
        {children}
      </div>
    </div>
  )
}
