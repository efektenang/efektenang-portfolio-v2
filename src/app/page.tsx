import { Col, Image, Row } from "antd";
import { Content } from "antd/es/layout/layout";

export default function Home() {
  return (
    <Content>
      <Row className="w-full flex py-[90px]">
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
          right: 40
        }}>
          <div>
            <h1 className="text-white text-6xl leading-[60px] font-semibold">
              I'm Muhammad Arizky,
              <br /> A Fullstack Developer
              <br />
              <span className="text-gray-400">based in Indonesia.</span>
            </h1>
            <p className="text-white mt-5 w-[830px] text-lg">I am a Full-stack developer with expertise in Laravel, Node.js and Next.Js.
              I have experience in developing scalable, secure, and reliable web applications using various frameworks and technologies.
              I enjoy solving complex problems and am always enthusiastic about learning new skills.</p>
          </div>
        </Col>
      </Row>
    </Content>
  );
}
