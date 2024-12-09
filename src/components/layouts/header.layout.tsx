import { Col, Image } from 'antd'
import React from 'react'
import { FlipWords } from '../ui/flip-words';

export default function HeaderLayout(): React.JSX.Element {
  const words = ["Fullstack Dev", "IT Support", "Web Developer"];

  return (
    <>
      <Col className="flex items-center">
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: '10% 40%',
          }}
          preview={false}
          width={700}
          height={500}
          src="https://res.cloudinary.com/dpr6tofwx/image/upload/v1731404289/yjm16gd2pzh7hlsjhmav.jpg"
        />
      </Col>
      <Col className="flex justify-items-center items-center" style={{
        position: 'relative',
        right: 90
      }}>
        <div>
          <h1 className="text-white text-6xl leading-[60px] font-semibold">
            I'm Muhammad Arizky,
            <br /> A <FlipWords words={words} />
            <br />
            <span className="text-gray-400">based in Indonesia.</span>
          </h1>
          <p className="text-white mt-5 w-[830px] text-lg">I am a Full-stack developer with expertise in Laravel, Node.js and Next.Js.
            I have experience in developing scalable, secure, and reliable web applications using various frameworks and technologies.
            I enjoy solving complex problems and am always enthusiastic about learning new skills.</p>
        </div>
      </Col>
    </>
  )
}