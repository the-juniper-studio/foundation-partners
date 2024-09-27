import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useMergePrismicPreviewData } from 'gatsby-plugin-prismic-previews'

// SVGs
import Facebook from './svg/facebook'
import Instagram from './svg/instagram'
import LinkedIn from './svg/linkedin'
import Tiktok from './svg/tiktok'
import Twitter from './svg/twitter'
import Whatsapp from './svg/whatsapp'
import Youtube from './svg/youtube'

const Social = (props) => {
  const staticData = useStaticQuery(graphql`
    {
      prismicConfig {
        ...PrismicSocialFragment
      }
    }
  `)
  const data = useMergePrismicPreviewData(staticData)
  if (!data.prismicConfig.data.social) return null
  const socialData = data.prismicConfig.data.social
  return (
    <div className='my-3 flex space-x-3 md:order-2' {...props}>
      {socialData.map((social, index) => {
        const { social_network, social_network_url } = social
        if (social_network_url?.url === 'null') return null
        return (
          <a className='transform rounded-full bg-white p-1 hover:scale-110' href={social_network_url.url} key={`social-${index}`} target='_blank' rel='noopener noreferrer'>
            <span className='sr-only'>Visit us on {social_network}</span>
            {social_network?.toLowerCase() === 'facebook' && <Facebook className='h-8' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'instagram' && <Instagram className='h-8' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'linkedin' && <LinkedIn className='h-8 text-[#0288D1]' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'tiktok' && <Tiktok className='h-8' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'twitter' && <Twitter className='h-8' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'whatsapp' && <Whatsapp className='h-8' aria-hidden='true' />}
            {social_network?.toLowerCase() === 'youtube' && <Youtube className='h-8' aria-hidden='true' />}
          </a>
        )
      })}
    </div>
  )
}

export default Social
