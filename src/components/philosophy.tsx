import { Col, Image } from 'antd'
import React from 'react'

export default function PhilosophyLayout() {
  return (
    <>
      <Col span={12} className='flex items-center pl-[80px]'>
        <div>
          <h1 className='text-[40px] font-semibold text-white'>Philosophy & values</h1>
          <p className='text-[26px] leading-8 text-white'>Pria tidak bercerita. Tetapi, diam - diam slicing portofolio. 😎</p>
          <p className='text-[18px] text-white mt-5'> - Efektenang 2024</p>
        </div>
      </Col>
      <Col className='flex items-center'>
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: '10% 40%',
          }}
          preview={false}
          width={800}
          height={500}
          src="https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Col>
    </>
  )
}