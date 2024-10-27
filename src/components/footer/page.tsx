import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 w-full mt-auto">
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="space-y-6">
          <div>
            <p className="font-semibold">Newsletter</p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="E-mail"
                className="bg-white border-b-2 border-black text-black focus:outline-none"
              />
              <button className="text-black">→</button>
            </div>
          </div>
          <div>
            <p>R. Veronica Barbosa, 1521.</p>
            <p>Paulista - SP.</p>
          </div>
        </div>


        
        <div className="flex justify-end">
          <p>contact@EdueAmigos.com</p>
        </div>
      </div>
    </footer>
  );
}
