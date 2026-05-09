export interface Competition {
  id: number;
  name: string;
  code: string;
  emblem: string;
}

export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  area: Area;
  squad?: Player[];
}

export interface Player {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
  shirtNumber?: number;
}

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | null;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: {
    winner: string | null;
    duration: string;
    fullTime: { home: number | null; away: number | null };
    halfTime: { home: number | null; away: number | null };
  };
}

export interface Standing {
  stage: string;
  type: string;
  group: string;
  table: Array<{
    position: number;
    team: Team;
    playedGames: number;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
  }>;
}

export interface Scorer {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    nationality: string;
    section: string;
  };
  team: Team;
  goals: number;
  assists: number | null;
  penalties: number | null;
}
