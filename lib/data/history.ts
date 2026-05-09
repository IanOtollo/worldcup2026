export interface TournamentHistory {
  year: number;
  host: string;
  champion: string;
  championFlag?: string;
  runnerUp: string;
  runnerUpFlag?: string;
  thirdPlace: string;
  topScorer: string;
  topScorerGoals: number;
  totalGoals: number;
  totalTeams: number;
  finalScore: string;
  stadiumFinal: string;
  attendance: number;
}

export const history: TournamentHistory[] = [
  { year: 1930, host: "Uruguay", champion: "Uruguay", runnerUp: "Argentina", thirdPlace: "USA", topScorer: "Guillermo Stábile", topScorerGoals: 8, totalGoals: 70, totalTeams: 13, finalScore: "4-2", stadiumFinal: "Estadio Centenario", attendance: 93000 },
  { year: 1934, host: "Italy", champion: "Italy", runnerUp: "Czechoslovakia", thirdPlace: "Germany", topScorer: "Oldřich Nejedlý", topScorerGoals: 5, totalGoals: 70, totalTeams: 16, finalScore: "2-1 (aet)", stadiumFinal: "Stadio Nazionale PNF", attendance: 55000 },
  { year: 1938, host: "France", champion: "Italy", runnerUp: "Hungary", thirdPlace: "Brazil", topScorer: "Leônidas", topScorerGoals: 7, totalGoals: 84, totalTeams: 15, finalScore: "4-2", stadiumFinal: "Stade Olympique de Colombes", attendance: 45000 },
  { year: 1950, host: "Brazil", champion: "Uruguay", runnerUp: "Brazil", thirdPlace: "Sweden", topScorer: "Ademir", topScorerGoals: 8, totalGoals: 88, totalTeams: 13, finalScore: "2-1", stadiumFinal: "Maracanã", attendance: 173850 },
  { year: 1954, host: "Switzerland", champion: "West Germany", runnerUp: "Hungary", thirdPlace: "Austria", topScorer: "Sándor Kocsis", topScorerGoals: 11, totalGoals: 140, totalTeams: 16, finalScore: "3-2", stadiumFinal: "Wankdorf Stadium", attendance: 62500 },
  { year: 1958, host: "Sweden", champion: "Brazil", runnerUp: "Sweden", thirdPlace: "France", topScorer: "Just Fontaine", topScorerGoals: 13, totalGoals: 126, totalTeams: 16, finalScore: "5-2", stadiumFinal: "Råsunda Stadium", attendance: 51800 },
  { year: 1962, host: "Chile", champion: "Brazil", runnerUp: "Czechoslovakia", thirdPlace: "Chile", topScorer: "Garrincha, Vavá, et al.", topScorerGoals: 4, totalGoals: 89, totalTeams: 16, finalScore: "3-1", stadiumFinal: "Estadio Nacional", attendance: 68679 },
  { year: 1966, host: "England", champion: "England", runnerUp: "West Germany", thirdPlace: "Portugal", topScorer: "Eusébio", topScorerGoals: 9, totalGoals: 89, totalTeams: 16, finalScore: "4-2 (aet)", stadiumFinal: "Wembley Stadium", attendance: 96924 },
  { year: 1970, host: "Mexico", champion: "Brazil", runnerUp: "Italy", thirdPlace: "West Germany", topScorer: "Gerd Müller", topScorerGoals: 10, totalGoals: 95, totalTeams: 16, finalScore: "4-1", stadiumFinal: "Estadio Azteca", attendance: 107412 },
  { year: 1974, host: "West Germany", champion: "West Germany", runnerUp: "Netherlands", thirdPlace: "Poland", topScorer: "Grzegorz Lato", topScorerGoals: 7, totalGoals: 97, totalTeams: 16, finalScore: "2-1", stadiumFinal: "Olympiastadion", attendance: 75200 },
  { year: 1978, host: "Argentina", champion: "Argentina", runnerUp: "Netherlands", thirdPlace: "Brazil", topScorer: "Mario Kempes", topScorerGoals: 6, totalGoals: 102, totalTeams: 16, finalScore: "3-1 (aet)", stadiumFinal: "Estadio Monumental", attendance: 71483 },
  { year: 1982, host: "Spain", champion: "Italy", runnerUp: "West Germany", thirdPlace: "Poland", topScorer: "Paolo Rossi", topScorerGoals: 6, totalGoals: 146, totalTeams: 24, finalScore: "3-1", stadiumFinal: "Santiago Bernabéu", attendance: 90000 },
  { year: 1986, host: "Mexico", champion: "Argentina", runnerUp: "West Germany", thirdPlace: "France", topScorer: "Gary Lineker", topScorerGoals: 6, totalGoals: 132, totalTeams: 24, finalScore: "3-2", stadiumFinal: "Estadio Azteca", attendance: 114600 },
  { year: 1990, host: "Italy", champion: "West Germany", runnerUp: "Argentina", thirdPlace: "Italy", topScorer: "Salvatore Schillaci", topScorerGoals: 6, totalGoals: 115, totalTeams: 24, finalScore: "1-0", stadiumFinal: "Stadio Olimpico", attendance: 73603 },
  { year: 1994, host: "USA", champion: "Brazil", runnerUp: "Italy", thirdPlace: "Sweden", topScorer: "Hristo Stoichkov, Oleg Salenko", topScorerGoals: 6, totalGoals: 141, totalTeams: 24, finalScore: "0-0 (3-2 pen)", stadiumFinal: "Rose Bowl", attendance: 94194 },
  { year: 1998, host: "France", champion: "France", runnerUp: "Brazil", thirdPlace: "Croatia", topScorer: "Davor Šuker", topScorerGoals: 6, totalGoals: 171, totalTeams: 32, finalScore: "3-0", stadiumFinal: "Stade de France", attendance: 80000 },
  { year: 2002, host: "South Korea / Japan", champion: "Brazil", runnerUp: "Germany", thirdPlace: "Turkey", topScorer: "Ronaldo", topScorerGoals: 8, totalGoals: 161, totalTeams: 32, finalScore: "2-0", stadiumFinal: "International Stadium Yokohama", attendance: 69029 },
  { year: 2006, host: "Germany", champion: "Italy", runnerUp: "France", thirdPlace: "Germany", topScorer: "Miroslav Klose", topScorerGoals: 5, totalGoals: 147, totalTeams: 32, finalScore: "1-1 (5-3 pen)", stadiumFinal: "Olympiastadion", attendance: 69000 },
  { year: 2010, host: "South Africa", champion: "Spain", runnerUp: "Netherlands", thirdPlace: "Germany", topScorer: "Thomas Müller, et al.", topScorerGoals: 5, totalGoals: 145, totalTeams: 32, finalScore: "1-0 (aet)", stadiumFinal: "Soccer City", attendance: 84490 },
  { year: 2014, host: "Brazil", champion: "Germany", runnerUp: "Argentina", thirdPlace: "Netherlands", topScorer: "James Rodríguez", topScorerGoals: 6, totalGoals: 171, totalTeams: 32, finalScore: "1-0 (aet)", stadiumFinal: "Maracanã", attendance: 74738 },
  { year: 2018, host: "Russia", champion: "France", runnerUp: "Croatia", thirdPlace: "Belgium", topScorer: "Harry Kane", topScorerGoals: 6, totalGoals: 169, totalTeams: 32, finalScore: "4-2", stadiumFinal: "Luzhniki Stadium", attendance: 78011 },
  { year: 2022, host: "Qatar", champion: "Argentina", runnerUp: "France", thirdPlace: "Croatia", topScorer: "Kylian Mbappé", topScorerGoals: 8, totalGoals: 172, totalTeams: 32, finalScore: "3-3 (4-2 pen)", stadiumFinal: "Lusail Stadium", attendance: 88966 },
];
