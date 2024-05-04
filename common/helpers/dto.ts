import { ICareerCMS } from '../types/careers'

export function careerDto(career: ICareerCMS) {
  return {
    id: career.id,
    position: career.position,
    company: career.company,
    logo: career.logo,
    location: career.location,
    location_type: career.locationType,
    type: career.type,
    start_date: career.startDate,
    end_date: career.endDate,
    link: career.link,
    slug: career.slug
  }
}
