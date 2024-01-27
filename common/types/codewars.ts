interface RankOverall {
  rank: number
  name: string
  color: string
  score: number
}

interface RankLanguage {
  rank: number
  name: string
  color: string
  score: number
}

interface CodewarsRank {
  overall: RankOverall
  languages: {
    [key: string]: RankLanguage
  }
}

export interface CodeChallenges {
  totalAuthored: number
  totalCompleted: number
}
export interface CodewarsData {
  id: string
  username: string
  name: string
  honor: number
  clan: string
  leaderboardPosition: number
  skills: string[]
  ranks: CodewarsRank
  codeChallenges: CodeChallenges
}
