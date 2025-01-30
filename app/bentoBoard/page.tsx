import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const BentoBoardPage = () => {
    return (
        <div className='m-4'>
            <h1 className='text-4xl font-bold text-gray-800'>BentoBoard!</h1>
            <Button asChild><Link href="./">Back to Home page</Link></Button>
        </div>
    )
}

export default BentoBoardPage