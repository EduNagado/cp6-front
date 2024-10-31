"use client"

import Image from 'next/image'
import { useState } from 'react'
import produto1 from './../image/camisaBatman1989.webp'
import produto2 from './../image/camisaDCComicsOriginals.webp'
import produto3 from './../image/camisaGrifinoriaHarryPotter.webp'
import produto4 from './../image/camisaHomemAranhaEmblema.webp'
import produto5 from './../image/camisaMadaraNaruto.webp'
import produto6 from './../image/camisaMarvelVintage.webp'
import produto7 from './../image/camisaXmen97.webp'
import produto8 from './../image/chaveiroHulk.webp'
import produto9 from './../image/chaveiroTrunks.webp'
import produto10 from './../image/copoCoringaBatman.webp'
import produto11 from './../image/funkoBlade.webp'
import produto12 from './../image/funkoKakashiNaruto.webp'
import produto13 from './../image/funkoPinguimBatman.webp'
import produto14 from './../image/garrafaHoraDeAventura.webp'
import produto15 from './../image/garrafaTomJerry.webp'

const slides = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10, produto11, produto12, produto13, produto14, produto15]

export default function PagPrincipal() {
    const [atual, setAtual] = useState(0)

    const prev = () => setAtual(atual === 0 ? slides.length - 1 : atual - 1)
    const next = () => setAtual(atual === slides.length - 1 ? 0 : atual + 1)

    const produtos = [
        { imagem: produto1, titulo: 'Batman 89', descricao: 'Camisa do Batman 1989 - DC', width: 300, height: 100 },
        { imagem: produto2, titulo: 'DC ORIGINAL', descricao: 'Camisa da DC Comics Original', width: 300, height: 100 },
        { imagem: produto3, titulo: 'Grifinoria', descricao: 'Camisa Grifinoria - Harry Potter', width: 300, height: 100 },
        { imagem: produto4, titulo: 'Milles Morales', descricao: 'Camisa Homem Aranha Milles Morales Emblema - Marvel', width: 300, height: 100 },
        { imagem: produto5, titulo: 'Madara', descricao: 'Camisa Madara - Naruto', width: 300, height: 100 },
        { imagem: produto6, titulo: 'Marvel Vintage', descricao: 'Camisa Marvel Comics Vintage', width: 300, height: 100 },
        { imagem: produto7, titulo: 'X-men 97', descricao: 'Camisa X-men 97 - Marvel', width: 300, height: 100 },
        { imagem: produto8, titulo: 'Hulk', descricao: 'Chaveiro Cabeça do Hulk - Marvel', width: 300, height: 100 },
        { imagem: produto9, titulo: 'Trunks', descricao: 'Chaveiro Trunks - Dragon Ball', width: 300, height: 100 },
        { imagem: produto10, titulo: 'Coringa e Batman', descricao: 'Copo do Coringa e Batman DC', width: 300, height: 100 },
        { imagem: produto11, titulo: 'Blade', descricao: 'Boneco Funko do Blade - Marvel', width: 300, height: 100 },
        { imagem: produto12, titulo: 'Kakashi', descricao: 'Boneco Funko Kakashi - Naruto', width: 300, height: 100 },
        { imagem: produto13, titulo: 'Pinguim', descricao: 'Boneco Funko Pinguim - DC', width: 300, height: 100 },
        { imagem: produto14, titulo: 'Hora de Aventura', descricao: 'Garrafa - Hora de Aventura', width: 300, height: 100 },
        { imagem: produto15, titulo: 'Tom e Jerry', descricao: 'Garrafa - Tom e Jerry', width: 300, height: 100 }
    ];

    return (
        <>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center"> Venham conhecer a melhor loja do mundo nerd</h1>

            <div className='max-w-xs mx-auto'> {/* Diminuído para 'max-w-xs' */}
                <div className='overflow-hidden relative'>
                    <div className='flex transition-transform ease-out duration-500' 
                        style={{ transform: `translateX(-${atual * 100}%)`, width: `${slides.length * 100}%` }}>
                        {slides.map((s, i) => (
                            <div key={i} className='w-full flex-shrink-0'>
                                <Image src={s} alt={`Slide ${i}`} width={300} height={100} className='object-cover' /> {/* Dimensões ajustadas */}
                            </div>
                        ))}
                    </div>
                    <div className='absolute inset-0 flex items-center justify-between p-4'>
                        <button className='text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={prev}>{' < '}</button>
                        <button className='text-3xl font-black pb-1 px-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white' onClick={next}>{' > '}</button>
                    </div>
                    <div className='absolute bottom-4 right-0 left-0'>
                        <div className='flex items-center justify-center gap-2'>
                            {slides.map((_, i) => (
                                <div key={i} onClick={() => setAtual(i)} className={`transition-all w-3 h-3 rounded-full bg-indigo-800 ${atual === i ? "p-2" : "bg-opacity-50"}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto px-4'>
                {produtos.map((produto, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
                        <Image 
                            src={produto.imagem} 
                            alt={produto.titulo} 
                            width={produto.width} 
                            height={produto.height} 
                            className='w-full h-48 object-cover' 
                        />
                        <div className='p-4'>
                            <h3 className='text-lg font-semibold text-gray-800'>{produto.titulo}</h3>
                            <p className='text-gray-600 mt-2'>{produto.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


