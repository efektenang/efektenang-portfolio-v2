import { Col } from 'antd'
import React from 'react'
import { CardHoverEffectDemo } from './card-hover-effect-demo'

export default function Skills(): React.JSX.Element {
  return (
    <>
      <Col xxl={9} xl={9} lg={9} md={24} sm={24} className='flex items-center'>
        <div>
          <h1 className='text-[40px] font-semibold text-white'>Skillset</h1>
          <p className='text-[18px] text-gray-500 mt-3'>With a background in technology solution development and system support, I have contributed to various projects involving the Node.js platform and PHP framework to build efficient and reliable solutions in the backend of a website.</p>
        </div>
      </Col>
      <Col xxl={14} xl={14} lg={14} md={24} sm={24} className='flex items-center'>
        <CardHoverEffectDemo />
      </Col>
    </>
  )
}