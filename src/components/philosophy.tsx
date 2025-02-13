'use client'

import { Col, Image } from 'antd'
import React, { useEffect } from 'react'
import { WindowWidth } from './layouts/window-width'

export default function PhilosophyLayout(): React.JSX.Element {
  const windowWidth: number = WindowWidth()

  return (
    <>
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} className='flex items-center pl-5 xl:pl-[80px]'>
        <div className='py-7'>
          <h1 className='text-[30px] xl:text-[40px] font-semibold text-white'>Philosophy & values</h1>
          <p className='text-[18px] xl:text-[26px] leading-2 lg:leading-8 text-white mt-3 lg:mt-0'>Pria tidak bercerita. Tetapi, diam - diam slicing portofolio. 😎</p>
          <p className='text-[18px] text-white mt-5'> - Efektenang 2025</p>
        </div>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={12} sm={24} className='flex items-center'>
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: '10% 50%',
          }}
          preview={false}
          width={windowWidth < 400 ? 400 : 800}
          height={windowWidth < 770 ? 320 : 500}
          src="https://images.unsplash.com/photo-1618388810903-840bb0d15ea5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Col>
    </>
  )
}