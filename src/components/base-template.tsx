import { Layout, Menu, MenuProps } from "antd";
import { Footer, Header } from "antd/es/layout/layout";
import Link from "next/link";

export interface IPortals {
  children: any
}
export default function BaseTemplate(props: IPortals): React.JSX.Element {
  const items1: MenuProps['items'] = [
    {
      "key": "1",
      "label": <Link href={'#home'}>Home</Link>,
      "style": {
        "lineHeight": "25px",
        "borderRadius": 20,
        "marginRight": 3
      }
    },
    {
      "key": "5",
      "label": <Link href={'#experience'}>Experiences</Link>,
      "style": {
        "lineHeight": "25px",
        "borderRadius": 20,
        "marginRight": 3
      }
    },
    {
      "key": "2",
      "label": <Link href={'#'}>About</Link>,
      "style": {
        "lineHeight": "25px",
        "borderRadius": 20,
        "marginRight": 3
      }
    },
    {
      "key": "3",
      "label": <Link href={'#'}>Projects</Link>,
      "style": {
        "lineHeight": "25px",
        "borderRadius": 20,
        "marginRight": 3
      }
    },
    {
      "key": "4",
      "label": <Link href={'#contact-us'}>Contact Us</Link>,
      "style": {
        "lineHeight": "25px",
        "borderRadius": 20,
        "marginRight": 3
      }
    }
  ];

  return (
    <Layout className="bg-base-color">
      <Header
        className='h-11 items-center w-[700px] rounded-full bg-primary-color'
        style={{
          display: 'flex',
          position: 'fixed',
          top: 20,
          left: 0,
          right: 0,
          zIndex: 99,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Link href={'/'}><h1 className='text-white font-bold text-md'>Efek Tenang</h1></Link>
        <Menu
          className='flex justify-end h-10 items-center bg-primary-color font-semibold'
          theme="dark"
          mode="horizontal"
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout className="min-h-screen bg-base-color">
        {props?.children}
      </Layout>
      <Footer className='bg-base-color text-white' style={{ textAlign: 'center' }}>
        Efektenang ©{new Date().getFullYear()} Made with ❤️
      </Footer>
    </Layout>
  )
}