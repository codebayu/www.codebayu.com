import 'server-only'

export async function getCareers(): Promise<ICareer[]> {
  const careers = await prisma.career.findMany({ take: 10 })
  return careers.map(toCareerDtoMapper)
}
