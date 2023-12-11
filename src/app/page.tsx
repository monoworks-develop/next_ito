'use client'

import Image from 'next/image'
import {Button, Link} from '@/components/Elements'
import Header from '@/components/UI/Header'

export default function Home() {
  return (
    <main>
      <div> 
        <Header></Header>
        <Link href='ssg' className={['text-red-500', 'hover:text-blue-500']} children='SSG!!!' title='aa' />
        <Button className={['text-red-500', 'hover:text-blue-500']} children='this is Button' onClick={() => {console.log('Button!!!')}} title='aa' />
      </div>
    </main>
  )
}
