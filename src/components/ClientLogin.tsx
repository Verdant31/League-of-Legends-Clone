// React
import { ArrowRight, Check, User } from 'phosphor-react';
import { useState   } from 'react'
// Spring
import { useSpring, animated } from "react-spring";

export default function ClientLogin() {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ keepSession, setKeepSession] = useState(false);

  const [isTypingUsername, setIsTypingUsername] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);

  const animateUsername = useSpring({
    from: { transform: "translate(0px,0px)" },
    to: isTypingUsername ? { transform: "translate(-9px, -15px)" } : {},
    config: { duration: 100 },
    reverse: (!isTypingUsername && username.length === 0)
  });

  const animatePassword = useSpring({
    from: { transform: "translate(0px,0px)" },
    to: isTypingPassword ? { transform: "translate(-9px, -15px)" } : {},
    config: { duration: 100 },
    reverse: (!isTypingPassword && password.length === 0)
  });

  function handleFocusInput(elementId: string) {
    const element = document.getElementById(elementId);
    if(element) {
      element.focus(); 
    }
  }

  return (
    <div className="flex w-[100%] h-[100%]">
      <div className="flex flex-col h-[100%] w-[540px] items-center bg-[#f9f9f9]">
        <img
          src="/riot-logo.png"
          className="w-[120px] h-[35px] mt-[80px]"
          alt="Uma imagem de um soco e o texto Riot Games ao lado em caixa alta"
        />
        <div className="flex flex-col mt-[60px] items-center" >
          <p className="text-[#2e2e2c] font-[28px] font-bold">
            Fazer login
          </p>
          <div className="w-[300px] flex flex-col mt-[20px] gap-[15px]">
            <div className="relative w-[100%] group h-[52px]">
              <input 
                spellCheck="false"
                id="username-input"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setIsTypingUsername(!isTypingUsername)} 
                onBlur={() => setIsTypingUsername(!isTypingUsername)} 
                className="font-bold pl-[8px] pt-2 absolute bg-gray-100 h-full w-full group-hover:bg-gray-200 transition ease-in-out" 
              />
              <animated.div style={animateUsername}>
                <p onClick={() => handleFocusInput("username-input")} className=" group-hover:text-gray-600 absolute top-[19px] tracking-widest font-bold text-gray-500  pl-4 text-[11px]">NOME DE USUÁRIO</p>
              </animated.div>);
            </div>
            <div className="relative w-[100%] group h-[52px]">
              <input 
                spellCheck="false"
                id="password-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsTypingPassword(!isTypingPassword)} 
                onBlur={() => setIsTypingPassword(!isTypingPassword)} 
                className="pl-[8px] pt-2 absolute bg-gray-100 h-full w-full group-hover:bg-gray-200 transition ease-in-out"               />
              <animated.div style={animatePassword}>
                <p onClick={() => handleFocusInput("password-input")} className=" group-hover:text-gray-600 absolute top-[19px] tracking-widest font-bold text-gray-500  pl-4 text-[11px]">SENHA</p>
              </animated.div>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[300px] mt-[20px] gap-4">
          <div className="rounded-md h-[30px] w-40 bg-blue-facebook justify-center items-center flex"><img className="h-[20px]" src="fblogo.png"/></div>
          <div className="rounded-md h-[30px] w-40 bg-white justify-center items-center flex"><img className="h-[20px]" src="googlelogo.png"/></div>
          <div className="rounded-md h-[30px] w-40 bg-black justify-center items-center flex"><img className="h-[18px]" src="apple-logo.png"/></div>
        </div>
        <div className="flex items-center justify-items-start w-[300px] mt-3 gap-3">
          <div 
            onClick={() => setKeepSession(!keepSession)} 
            className={`rounded-sm h-[13px] w-[13px] 
              ${keepSession ? 'bg-[#D03638]' : 'bg-gray-200' } border-none
              flex items-center justify-center`}
            >
            {keepSession && (<Check size={15} weight="bold" color="white" />)}
          </div>
          <p className="font-medium">Manter login</p>
        </div>
        
        <div className="mt-40 w-[300px]  relative">
          <button className="hover:bg-[#b83032] h-[60px] w-[60px] bg-[#D03638] rounded-[18px] m-auto flex items-center justify-center">
            <ArrowRight size={32} weight="regular" color="#f2f2f2" />
          </button>
          <div className="mt-12 text-center">
            <p className="tracking-widest font-bold text-gray-500 text-[11px]">NÃO CONSEGUE INICIAR SESSÃO?</p>
            <p className="tracking-widest font-bold text-gray-500 text-[11px]" >CRIAR CONTA</p>
          </div>
          <p className="absolute -right-4 tracking-widest font-bold text-gray-300 text-[11px]">V58.0.0</p>
        </div>

      </div>
      <div className="w-[100%] h-[100%] relative">
        <img src="attention.png" className="absolute left-8 top-6" />
        <img src="login-image.jpg" className="w-[100%] h-[100%]"></img>
        <div className="absolute right-8 top-6 p-2 rounded-md border-[2px] border-[#46464619]">
          <User size={28} color="#7E7F7F" weight="fill" />
        </div>
      </div>
    </div>
  )
}
