import React from 'react'

interface IWorkExperience {
  item: {
    id: string;
    company: string;
    position: string;
    description: string
  }
}

export default function WorkExperience(
  props: IWorkExperience
): React.JSX.Element {
  return (
    <div className='my-7 w-[399px]'>
      <h1 className="text-gray-500 text-[90px] leading-[60px] font-semibold">
        {props?.item?.id}
      </h1>
      <h2 className="text-white mt-4 mb-3 text-2xl font-bold">
        <span className='text-primary-color'>{props?.item?.company}</span>, {props?.item?.position}
      </h2>
      <p className='text-white text-base leading-5.5'>{props?.item?.description}</p>
    </div>
  )
}