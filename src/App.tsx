// React
import { ReactNode } from 'react'
// Components
import Background from './components/Background'
import Client from './components/Client'
import ClientLoading from './components/ClientLoading'
import ClientLogin from './components/ClientLogin'
export function App() {
  return (
    <Background>
      <Client>
        <ClientLoading />
      </Client>
    </Background>
  )
}
