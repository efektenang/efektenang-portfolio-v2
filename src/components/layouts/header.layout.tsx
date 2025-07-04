'use client'

import { Col, Image } from 'antd'
import React from 'react'
import { FlipWords } from '../ui/flip-words';
import { WindowWidth } from './window-width';

export default function HeaderLayout(): React.JSX.Element {
  const words = ["Fullstack Dev", "IT Support", "Web Developer"];
  const windowWidth: number = WindowWidth()

  return (
    <>
      <Col xxl={12} xl={12} lg={12} md={11} sm={24} className="flex items-center">
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: '10% 4%'
          }}
          preview={false}
          width={windowWidth < 810 ? 550 : 850}
          height={windowWidth < 550 ? 450 : 600}
          src="https://res.cloudinary.com/dpr6tofwx/image/upload/v1751616813/header-no-bg_tcbk5r.png"
        />
      </Col>
      <Col xxl={12} xl={12} lg={12} md={13} sm={24} className="flex justify-items-center items-center" style={{
        position: 'relative',
        right: windowWidth < 1020 ? 0 : 90
      }}>
        <div>
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[30px] xl:leading-[60px] font-semibold m-4 lg:m-0">
            I'm Muhammad Arizky,
            <br /> A <FlipWords words={words} />
            <br />
            <span className="text-gray-400">based in Indonesia.</span>
          </h1>
          <p className="text-white mt-5 w-[350px] lg:w-[640px] xl:w-[830px] text-sm lg:text-lg">I am a Full-stack Web developer with expertise in Laravel, Node.js and Next.Js.
            I have experience in developing scalable, secure, and reliable web applications using various frameworks and technologies.
            I enjoy solving complex problems and am always enthusiastic about learning new skills.</p>
        </div>
      </Col>
    </>
  )
}