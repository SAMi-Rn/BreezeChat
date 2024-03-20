import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import SignUp from './pages/signup/Signup.jsx'


import React, { useEffect, useRef, memo } from 'react' // Import memo from React

const Doodle = memo(() => {
  const doodleRef = useRef(null)

  useEffect(() => {
    const createDoodle = () => {
      if (doodleRef.current) {
        if (typeof customElements.get('css-doodle') === 'undefined') {
          const script = document.createElement('script')
          script.src = "https://unpkg.com/css-doodle@latest"
          script.onload = () => {
            const doodle = document.createElement('css-doodle')

            doodle.innerHTML = `
      :doodle {
        @grid: 4x4 / 100vw 100vh;
      }
          --color: #a8daf9, #92d2f9, #cde2ee ;
          border-radius: 34%; 
          :container {
            perspective: 40vmin;
            --deg: @p(-160deg, 180deg);
          }
          :after, :before {
            content: '';
            background: @p(--color); 
            @place: @r(100%) @r(100%);
            @size: @r(5px);
            @shape: star;
          }
          @place: center;
          @size: 20vmin; 
          box-shadow: @m3(0 0px 50px @p(--color));
          background: @m20(
            radial-gradient(@p(--color) 50%, transparent 0) 
            @r(-20%, 120%) @r(-20%, 100%) / 1px 1px
            no-repeat
          );
         
          transform: translate3d(0, 0, 0);
          animation: scale-up 90s linear infinite;
          animation-delay: calc(-90s / @I * @i);
          @keyframes scale-up {
            0%, 95.01%, 100% {
              transform: translateZ(0) rotate(0);
              opacity: 0;
            }
            10% { 
              opacity: 1; 
            }
            95% {
              transform: translateZ(35vmin) rotateZ(var(--deg));
            }
          }
        `
            doodleRef.current.appendChild(doodle)
          }
          document.body.appendChild(script)
        }
      }
    }
    createDoodle()
  }, [])

  return <div ref={doodleRef} className="absolute top-0 left-0 w-full h-full"></div>
})

function App() {
  return (
    <div className="  bg-gif h-screen min-h-screen flex justify-center items-center">

      <Home />
    </div>
  )
}

export default App