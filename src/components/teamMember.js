import React from 'react'
import { PrismicLink } from '@prismicio/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FadeIn } from './fadeIn'

import Phone from './svg/phone'
import Email from './svg/email'

const TeamMember = ({ teamMember }) => {
  const teamMemberData = teamMember.data
  const contact = teamMemberData.contact[0]

  return (
    <li className='component-teamMember'>
      <FadeIn x='0' y='50' className='ease transform grid grid-cols-2 sm:grid-cols-3 items-start gap-6'>
        <div className='aspect-square w-full'>
          <GatsbyImage image={teamMemberData.image.gatsbyImageData} className='z-10 h-full w-full grayscale object-cover' alt={teamMemberData.image.alt || ''} />
        </div>
        <div className='flex h-full flex-col justify-end sm:col-span-2'>
          <div>
            <div className='flex items-baseline'>
              <h2 className='font-semibold'>{teamMemberData.name}</h2>
              {teamMemberData.qualification && <small>{teamMemberData.qualification}</small>}
            </div>
            <div className='text-lg xl:text-xl'>{teamMemberData.position}</div>
            <div className='mt-3 flex flex-row flex-wrap gap-3 text-sm'>
              {contact?.linked_in && (
                <PrismicLink className='justify-items flex items-center gap-1' href={contact.linked_in.url}>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
                    <path
                      fillRule='evenodd'
                      d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='sr-only whitespace-nowrap'>Connect with {teamMemberData.name}</span>
                </PrismicLink>
              )}
              {contact?.email_address && (
                <PrismicLink className='justify-items flex items-center gap-1 no-underline hover:text-brandRust focus:text-brandRust' href={`mailto:${contact.email_address}`}>
                  <Email className='h-6' />
                  <span className='sr-only whitespace-nowrap'>Email {contact.email_address}</span>
                </PrismicLink>
              )}
              {contact?.phone_number && (
                <PrismicLink className='justify-items flex items-center gap-1 hover:text-brandRust focus:text-brandRust' href={`tel:${contact.phone_number}`}>
                  <Phone className='h-6' />
                  <span className='sr-only whitespace-nowrap md:not-sr-only'>Call {contact.phone_number}</span>
                </PrismicLink>
              )}
            </div>
          </div>
        </div>
      </FadeIn>
    </li>
  )
}

export default TeamMember
