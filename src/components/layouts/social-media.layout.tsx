import React from 'react'
import { Icons } from '../icons'
import Link from 'next/link'

interface ISocialMedia {
  id: number
  url: string
  title: string
  icon: string
}

export default function SocialMediaLayout(): React.JSX.Element {
  const socialMedia: Array<ISocialMedia> = [
    {
      id: 1,
      url: "https://www.linkedin.com/in/muhammad-arizki/",
      title: 'LinkedIn',
      icon: 'LinkedinOutlined'
    },
    {
      id: 2,
      url: "https://github.com/efektenang",
      title: 'Github',
      icon: 'GithubFilled'
    },
    {
      id: 3,
      url: "https://www.instagram.com/efektenang_/",
      title: 'Instagram',
      icon: 'InstagramOutlined'
    },
    {
      id: 4,
      url: "https://www.facebook.com/aricky.muhamad",
      title: 'Facebook',
      icon: 'FacebookFilled'
    },
    {
      id: 5,
      url: "https://open.spotify.com/playlist/0U9tAoAHjOywCeSaPjmFjS?si=aff18f125a3b4a54",
      title: 'Spotify',
      icon: 'SpotifyOutlined'
    },
  ]

  return (
    <>
      {
        socialMedia.map(item => (
          <div
            key={item.id}
            style={{
              border: '0px solid #6b7280'
            }}
            className='w-[24vw] h-[140px] flex items-center justify-center'>
            <Link href={item.url} className='text-gray-500' target='_blank' title={item.title}>
              <Icons type={item.icon} size={40} />
            </Link>
          </div >
        ))
      }
    </>
  )
}