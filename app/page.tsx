'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const parallaxStyle = (speed: number) => ({
    transform: `translateY(${scrollY * speed}px)`,
  })

  const cursorFollowStyle = (speed: number) => ({
    transform: `translate(${mousePos.x * speed}px, ${mousePos.y * speed}px)`,
  })

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-neo-yellow flex items-center justify-center px-4">
        {/* Floating shapes background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-neo-pink border-4 border-black shadow-brutal rotate-12 animate-float"
            style={parallaxStyle(0.1)}
          />
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-neo-cyan border-4 border-black shadow-brutal-lg -rotate-12 animate-bounce-slow"
            style={parallaxStyle(0.15)}
          />
          <div
            className="absolute bottom-40 left-1/4 w-40 h-40 bg-neo-orange border-4 border-black shadow-brutal rounded-full animate-spin-slow"
            style={parallaxStyle(0.2)}
          />
          <div
            className="absolute top-1/3 right-1/3 w-28 h-28 bg-neo-green border-4 border-black shadow-brutal-lg animate-wiggle"
            style={parallaxStyle(0.12)}
          />
        </div>

        {/* Main title */}
        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black uppercase tracking-tighter text-shadow-brutal-lg mb-8 animate-slide-in">
            dorksense
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <button className="px-8 py-4 bg-neo-pink border-4 border-black font-black text-2xl uppercase shadow-brutal hover:shadow-brutal-hover transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 active:shadow-none">
              Click Me
            </button>
            <button className="px-8 py-4 bg-neo-cyan border-4 border-black font-black text-2xl uppercase shadow-brutal hover:shadow-brutal-hover transition-all hover:translate-x-1 hover:translate-y-1 active:translate-x-2 active:translate-y-2 active:shadow-none">
              No, Me!
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-12 h-20 border-4 border-black rounded-full flex justify-center pt-2 bg-white shadow-brutal">
            <div className="w-2 h-3 bg-black rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Section 2 - Grid Chaos */}
      <section className="min-h-screen bg-neo-cyan relative px-4 py-20 overflow-hidden">
        <div
          className="absolute top-10 right-10 w-64 h-64 bg-neo-purple border-4 border-black shadow-brutal-xl opacity-50"
          style={cursorFollowStyle(0.02)}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-7xl md:text-8xl font-black text-black uppercase mb-16 text-shadow-brutal-lg border-b-8 border-black pb-4 inline-block bg-neo-yellow px-8 py-4 shadow-brutal-lg rotate-1">
            Pure Chaos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { bg: 'bg-neo-pink', text: 'Brutality First' },
              { bg: 'bg-neo-orange', text: 'No Subtlety' },
              { bg: 'bg-neo-green', text: 'Maximum Impact' },
              { bg: 'bg-neo-purple', text: 'Bold Borders' },
              { bg: 'bg-neo-yellow', text: 'Thick Lines' },
              { bg: 'bg-white', text: 'Sharp Corners' },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`${item.bg} border-6 border-black p-8 shadow-brutal-lg hover:shadow-brutal-xl transition-all hover:-rotate-2 cursor-pointer group relative overflow-hidden`}
                style={{
                  transform: `translateY(${scrollY * 0.05 * (idx % 2 === 0 ? 1 : -1)}px)`,
                }}
              >
                <div className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                <h3 className="text-4xl font-black uppercase text-black group-hover:text-neo-yellow relative z-10 transition-colors">
                  {item.text}
                </h3>
                <div className="mt-4 h-2 w-full bg-black relative z-10" />
                <div className="mt-2 h-2 w-3/4 bg-black relative z-10" />
                <div className="mt-2 h-2 w-1/2 bg-black relative z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Rotated Madness */}
      <section className="min-h-screen bg-neo-pink relative px-4 py-20 overflow-hidden">
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-neo-yellow border-4 border-black shadow-brutal-xl opacity-30 rotate-45"
          style={cursorFollowStyle(-0.03)}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center justify-center space-y-12">
            <div
              className="bg-white border-6 border-black p-12 shadow-brutal-xl rotate-3 hover:rotate-6 transition-transform"
              style={{
                transform: `rotate(${3 + scrollY * 0.02}deg)`,
              }}
            >
              <h2 className="text-6xl font-black uppercase text-black text-shadow-brutal">
                Everything
              </h2>
            </div>

            <div
              className="bg-neo-orange border-6 border-black p-12 shadow-brutal-xl -rotate-2 hover:-rotate-6 transition-transform"
              style={{
                transform: `rotate(${-2 - scrollY * 0.02}deg)`,
              }}
            >
              <h2 className="text-6xl font-black uppercase text-black text-shadow-brutal">
                Is Tilted
              </h2>
            </div>

            <div
              className="bg-neo-green border-6 border-black p-12 shadow-brutal-xl rotate-1 hover:rotate-3 transition-transform"
              style={{
                transform: `rotate(${1 + scrollY * 0.02}deg)`,
              }}
            >
              <h2 className="text-6xl font-black uppercase text-black text-shadow-brutal">
                On Purpose
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Typography Explosion */}
      <section className="min-h-screen bg-neo-green relative px-4 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8">
            <h2 className="text-9xl font-black text-black uppercase leading-none text-shadow-brutal-lg border-8 border-black bg-neo-purple p-8 inline-block shadow-brutal-xl hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all cursor-pointer">
              TYPE
            </h2>
            <h2 className="text-9xl font-black text-black uppercase leading-none text-shadow-brutal-lg border-8 border-black bg-neo-cyan p-8 inline-block shadow-brutal-xl hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all cursor-pointer ml-20 rotate-2">
              FACE
            </h2>
            <h2 className="text-9xl font-black text-black uppercase leading-none text-shadow-brutal-lg border-8 border-black bg-neo-yellow p-8 inline-block shadow-brutal-xl hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all cursor-pointer ml-40 -rotate-1">
              MANIA
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {['!', '@', '#', '$', '%', '^', '&', '*'].map((symbol, idx) => (
              <div
                key={idx}
                className="aspect-square bg-white border-6 border-black shadow-brutal-lg flex items-center justify-center text-8xl font-black hover:bg-black hover:text-neo-pink transition-colors cursor-pointer animate-float"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Call to Action Overload */}
      <section className="min-h-screen bg-neo-orange relative px-4 py-20 flex items-center justify-center overflow-hidden">
        <div
          className="absolute top-1/4 left-10 w-40 h-40 bg-neo-pink border-4 border-black shadow-brutal animate-spin-slow"
          style={parallaxStyle(0.15)}
        />
        <div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-neo-cyan border-4 border-black shadow-brutal animate-spin-slow"
          style={parallaxStyle(0.1)}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-7xl md:text-8xl font-black text-black uppercase mb-12 text-shadow-brutal-lg animate-wiggle">
            Don't Click These!
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { bg: 'bg-neo-yellow', text: 'Button 1' },
              { bg: 'bg-neo-pink', text: 'Button 2' },
              { bg: 'bg-neo-cyan', text: 'Button 3' },
              { bg: 'bg-neo-green', text: 'Button 4' },
              { bg: 'bg-neo-purple', text: 'Button 5' },
              { bg: 'bg-white', text: 'Button 6' },
            ].map((btn, idx) => (
              <button
                key={idx}
                className={`${btn.bg} border-6 border-black px-12 py-6 text-3xl font-black uppercase shadow-brutal-lg hover:shadow-brutal-hover transition-all hover:translate-x-2 hover:translate-y-2 active:translate-x-4 active:translate-y-4 active:shadow-none transform hover:rotate-3`}
              >
                {btn.text}
              </button>
            ))}
          </div>

          <div className="mt-16 bg-black border-6 border-white p-12 shadow-[12px_12px_0px_0px_#FFF] hover:shadow-[6px_6px_0px_0px_#FFF] transition-all">
            <p className="text-4xl font-black text-neo-yellow uppercase leading-tight">
              This is what happens when design rules don't exist
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-black text-white py-20 px-4 border-t-8 border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="border-4 border-neo-yellow bg-neo-yellow text-black p-8 shadow-[8px_8px_0px_0px_#FFF] rotate-1">
              <h3 className="text-4xl font-black uppercase mb-4">Contact</h3>
              <p className="text-xl font-bold">info@dorksense.com</p>
            </div>
            <div className="border-4 border-neo-pink bg-neo-pink text-black p-8 shadow-[8px_8px_0px_0px_#FFF] -rotate-1">
              <h3 className="text-4xl font-black uppercase mb-4">Follow</h3>
              <p className="text-xl font-bold">@dorksense</p>
            </div>
            <div className="border-4 border-neo-cyan bg-neo-cyan text-black p-8 shadow-[8px_8px_0px_0px_#FFF] rotate-2">
              <h3 className="text-4xl font-black uppercase mb-4">Join</h3>
              <p className="text-xl font-bold">Newsletter</p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-6xl font-black uppercase text-neo-yellow text-shadow-brutal-lg">
              dorksense © 2024
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <div className="w-4 h-4 bg-neo-pink border-2 border-white" />
              <div className="w-4 h-4 bg-neo-cyan border-2 border-white" />
              <div className="w-4 h-4 bg-neo-yellow border-2 border-white" />
              <div className="w-4 h-4 bg-neo-green border-2 border-white" />
              <div className="w-4 h-4 bg-neo-orange border-2 border-white" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
