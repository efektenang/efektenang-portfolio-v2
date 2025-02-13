'use client'

import WorkExperience from "@/components/layouts/work-experience.layout";
import { Button, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import WorkExperienceMock from "@/assets/mock/work-experiences.json";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PhilosophyLayout from "@/components/philosophy";
import HeaderLayout from "@/components/layouts/header.layout";
import Skills from "@/components/skills";
import SocialMediaLayout from "@/components/layouts/social-media.layout";
import { ProjectLayout } from "@/components/layouts/projects.layout";
import OrderFormLayout from "@/components/layouts/order-form.layout";
import { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export default function Home(): React.JSX.Element {
  const scrollExp = useRef<HTMLDivElement>(null);
  const scrollSocial = useRef<HTMLDivElement>(null);

  const scroll = (scrollRef: any, direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth / 2;

      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <Content>
      {/* <BackgroundBeams /> */}
      <Row className="w-full flex pt-[90px] items-center justify-center lg:justify-between" id="home">
        <HeaderLayout />
      </Row>

      <Row className="mx-6 lg:mx-[80px] my-9 lg:my-[90px] block" id="experience">
        <div className="">
          <h2 className="text-gray-400 uppercase font-semibold text-[16px]">Work Experience</h2>
          <h1 className="text-white text-2xl md:text-3xl lg:text-3xl xl:text-[55px] leading-[30px] lg:leading-[60px] font-semibold flex flex-wrap w-[330px] lg:w-[660px]">
            Companies I have worked for in the past.
          </h1>
        </div>

        <div>

          <Row ref={scrollExp} className="my-7 overflow-x-scroll hideScroll" style={{ scrollBehavior: 'smooth' }}>
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

          <div className="w-[80px] flex items-center justify-between">
            <Button
              onClick={() => scroll(scrollExp, 'left')}
              className="bg-white p-2 rounded-full shadow-md z-10"
            >
              <LeftOutlined />
            </Button>
            <Button
              onClick={() => scroll(scrollExp, 'right')}
              className="bg-white p-2 rounded-full shadow-md z-10"
            >
              <RightOutlined />
            </Button>
          </div>
        </div>
      </Row>


      <Row className="my-[70px] h-[500px] w-full bg-gray-600 flex justify-between" id="about">
        <PhilosophyLayout />
      </Row>

      <Row className="mx-[20px] md:mx-[60px] lg:mx-[80px] flex flex-row gap-6" id="skillset">
        <Skills />
      </Row>

      <div className="relative">
        <Row ref={scrollSocial} className="flex flex-row flex-nowrap overflow-x-scroll hideScroll my-[10px] lg:my-[50px]">
          <div className="flex justify-between">
            <SocialMediaLayout />
          </div>
        </Row>
        <Button
          onClick={() => scroll(scrollSocial, 'left')}
          style={{ border: '2px solid #fafafa40' }}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 bg-transparent text-[#fafafa74] p-2 rounded-full shadow-md z-10"
        >
          <LeftOutlined />
        </Button>
        <Button
          onClick={() => scroll(scrollSocial, 'right')}
          style={{ border: '2px solid #fafafa40' }}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 bg-transparent text-[#fafafa74] p-2 rounded-full shadow-md z-10"
        >
          <RightOutlined />
        </Button>
      </div>

      <Row className="mx-[30px] lg:mx-[80px]" id="projects">
        <div className="max-w-4xl mx-auto my-[50px]">
          <h1 className='text-[30px] lg:text-[40px] font-semibold text-white'>Projects and Contributes</h1>
          <p className='text-[18px] text-gray-500 mt-3'>Based on my work and internship experience so far, I have created several projects and contributed to the team at the company.</p>
        </div>
        <ProjectLayout />
      </Row>

      <Row className="flex items-center justify-around my-9" id="contact">
        <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
          <div className="w-[340px] lg:w-[500px] mx-auto my-[50px]">
            <h1 className='text-[30px] lg:text-[40px] font-semibold text-white'>Let’s talk business</h1>
            <p className='text-[18px] text-gray-500 mt-3'>Now that you know a lot about me, let me know if you are interested to work with me.</p>
          </div>
        </Col>

        <Col xxl={12} xl={12} lg={12} md={12} sm={24}>
          <div className="w-[340px] lg:w-[600px] mx-auto my-0 lg:my-[60px]">
            <OrderFormLayout />
          </div>
        </Col>
      </Row>
    </Content>
  );
}
