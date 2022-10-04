// React
import { ReactNode } from 'react'
// Chakra
// import { Box, Flex, Text, Image } from '@chakra-ui/react'

interface ClientProps {
  children: ReactNode
}
export default function Client({ children }: ClientProps) {
  return (
    <div className="w-[1450px] h-[800px] mx-auto mt-[60px]" >
      {children}
    </div>
  )
}
