import React from 'react'
import Link from 'next/link'

function PilotsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Пилоты Битвы за Москву</h1>
      
      <p className="text-lg mb-8">Список участников вот-вот станет доступен</p>
      
      <Link 
        href="/" 
        className="text-blue-600 hover:text-blue-800 underline"
      >
        Вернуться на главную
      </Link>
    </div>
  )
}

export default PilotsPage