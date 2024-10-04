import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import TeamMember from './teamMember'
import { FadeInStagger } from './fadeIn'

const Team = ({ slice }) => {
  var grid = 'sm:grid-cols-2'
  if (slice.items.length > 2) {
    grid = 'sm:grid-cols-2 lg:grid-cols-3'
  }

  const teamData = slice
  return (
    <section className={`component-team mx-auto w-full max-w-screen-2xl p-3 md:p-6 transition-opacity lg:py-10`}>
      <div className='prose mb-6 dark:prose-invert lg:prose-lg lg:mb-12 px-3 md:px-6 max-w-screen-xl mx-auto'>
        {slice.primary.title.text && <PrismicRichText field={slice.primary.title.richText} />}
        <PrismicRichText field={slice.primary.text.richText} />
      </div>
      <FadeInStagger duration='.5'>
        <ul className={`grid grid-cols-1 gap-6 md:gap-12 p-6 lg:p-0 ${grid}`}>
          {teamData.items.map((teamMember, index) => {
            return <TeamMember key={`teamMember-${index}`} teamMember={teamMember.team_member.document} />
          })}
        </ul>
      </FadeInStagger>
    </section>
  )
}

export default Team
