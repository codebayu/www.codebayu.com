export interface CareerProps {
  id?: string
  position: string
  company: string
  logo: string
  location: string
  location_type: string
  type: string
  start_date: Date
  end_date: Date | null
  link: string | null
  slug: string
}

export type ICareerCMS = {
  id?: string
  position: string
  company: string
  logo: string
  location: string
  locationType: string
  type: string
  startDate: Date
  endDate: Date
  link: string
  slug: string
}
