import { ICareerCMS } from '../types/careers'
import { ILearnCMS } from '../types/learn'

export function careerDto(career: ICareerCMS) {
  return {
    id: career.id,
    position: career.position,
    company: career.company,
    logo: career.logo,
    location: career.location,
    location_type: career.locationType,
    type: career.type,
    start_date: new Date(career.startDate),
    end_date: career.endDate ? new Date(career.endDate) : null,
    link: career.link,
    slug: career.slug
  }
}

export function learnDto(learn: ILearnCMS) {
  return {
    id: learn.id,
    title: learn.title,
    slug: learn.slug,
    description: learn.description,
    image: learn.image,
    is_new: learn.isFeatured,
    level: learn.level,
    is_show: learn.isShow,
    language: learn.language
  }
}
