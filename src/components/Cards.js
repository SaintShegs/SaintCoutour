import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='cards'>
        <section className='first'>
            <div className='first__card'>
                <p>Spring/Summer</p>
                <p>These are the best fits for the summer season</p>
                <Link>Learn More</Link>
            </div>
            <div className="second__card">
                <p>Spring/Summer</p>
                <p>These are the best fits for the summer season</p>
                <Link>Learn More</Link>
            </div>
        </section>

        <section className='second'>
            <div className='second__first__card'>
                <p>Spring/Summer</p>
                <p>These are the best fits for the summer season</p>
            </div>
            <div className='second__second__card'>
                <p>Spring/Summer</p>
                <p>These are the best fits for the summer season</p>
            </div>
            <div className='second__third__card'>
                <p>Spring/Summer</p>
                <p>These are the best fits for the summer season</p>
            </div>
              
        </section>

    </div>
  )
}

export default Cards