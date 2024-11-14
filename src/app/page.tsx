import WorkExperience from "@/components/layouts/work-experience.layout";
import { Row } from "antd";
import { Content } from "antd/es/layout/layout";
import WorkExperienceMock from "@/assets/mock/work-experiences.json";
import { BackgroundBeams } from "@/components/ui/background-beams";
import PhilosophyLayout from "@/components/philosophy";
import HeaderLayout from "@/components/layouts/header.layout";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Content>
      <BackgroundBeams />
      <Row className="w-full flex py-[90px]" id="home">
        <HeaderLayout />
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

      <Row className="my-[70px] h-[500px] w-full bg-gray-600 flex justify-between">
        <PhilosophyLayout />
      </Row>

      <Row className="mx-[80px] flex flex-row gap-6" id="skillset">
        <Skills />
      </Row>
    </Content>
  );
}
