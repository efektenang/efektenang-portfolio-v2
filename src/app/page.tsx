import WorkExperience from "@/components/layouts/work-experience.layout";
import { Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import WorkExperienceMock from "@/assets/mock/work-experiences.json";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PhilosophyLayout from "@/components/philosophy";
import HeaderLayout from "@/components/layouts/header.layout";
import Skills from "@/components/skills";
import SocialMediaLayout from "@/components/layouts/social-media.layout";
import { ProjectLayout } from "@/components/layouts/projects.layout";
import OrderFormLayout from "@/components/layouts/order-form.layout";

export default function Home() {
  return (
    <Content>
      <BackgroundBeams />
      <Row className="w-full flex pt-[90px] items-center justify-center xl:justify-between" id="home">
        <HeaderLayout />
      </Row>

      <Row className="mx-[80px] my-[90px] block" id="experience">
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

      <Row className="my-[70px] h-[500px] w-full bg-gray-600 flex justify-between">
        <PhilosophyLayout />
      </Row>

      <Row className="mx-[80px] flex flex-row gap-6" id="skillset">
        <Skills />
      </Row>

      <Row className="flex flex-row flex-nowrap overflow-x-scroll hideScroll my-[50px]">
        <div className="flex justify-between">
          <SocialMediaLayout />
        </div>
      </Row>

      <Row className="mx-[80px]">
        <div className="max-w-4xl mx-auto my-[50px]">
          <h1 className='text-[40px] font-semibold text-white'>Projects and Contributes</h1>
          <p className='text-[18px] text-gray-500 mt-3'>Based on my work and internship experience so far, I have created several projects and contributed to the team at the company.</p>
        </div>
        <ProjectLayout />
      </Row>

      <Row className="flex items-center justify-center gap-32 my-9" id="contact-us">
        <Col>
          <div className="w-[500px] mx-auto my-[50px]">
            <h1 className='text-[40px] font-semibold text-white'>Let’s talk business</h1>
            <p className='text-[18px] text-gray-500 mt-3'>Based on my work and internship experience so far, I have created several projects and contributed to the team at the company.</p>
          </div>
        </Col>

        <Col span={8}>
          <div className="mx-auto my-[50px]">
            <OrderFormLayout />
          </div>
        </Col>
      </Row>
    </Content>
  );
}
