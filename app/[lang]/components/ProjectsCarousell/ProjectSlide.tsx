import React from 'react'
import { SwiperSlide } from 'swiper/react'

type ProjectSlidePropsType = {
    project: any
}

const ProjectSlide = ({project}: ProjectSlidePropsType) => {
  return (
    <SwiperSlide>Slide 1</SwiperSlide>
  )
}

export default ProjectSlide