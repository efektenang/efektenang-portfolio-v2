import WorkExperience from "@/components/work-experience.layout";
import { Col, Image, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import WorkExperienceMock from "@/assets/mock/work-experiences.json";

export default function Home() {
  return (
    <Content>
      <Row className="w-full flex py-[90px]" id="home">
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

      <Row className="mx-[80px] block" id="experience">
        <div className="">
          <h2 className="text-gray-400 uppercase font-semibold text-[16px]">Work Experience</h2>
          <h1 className="text-white text-[55px] leading-[60px] font-semibold flex flex-wrap w-[660px]">
            Companies I have worked for in the past.
          </h1>
        </div>

        <Row className="my-7 overflow-x-scroll hideScroll">
          <div className="flex justify-between gap-3">
            {
              WorkExperienceMock.map((item: any, index: number) => (
                <WorkExperience
                  key={index}
                  item={item}
                />
              ))
            }
          </div>
        </Row>
      </Row>
    </Content>
  );
}
