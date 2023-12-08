export interface CourseCardProps {
  icon: string
  title: string
  linkIndonesia: string
  linkEnglish: string
}

export interface BadgeProps {
  label: string
  path: string
  isShow: boolean
}

export interface IRoadmap {
  frontend: CourseCardProps[]
  mastering_react: CourseCardProps[]
}
