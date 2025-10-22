// Mock F1 data for testing purposes
import type { Driver, Team, Race } from "../types/movie";

export const mockDrivers: Driver[] = [
  {
    driverId: "verstappen",
    name: "Max",
    surname: "Verstappen",
    nationality: "Dutch",
    birthday: "1997-09-30",
    number: 1,
    shortName: "VER",
    url: "https://www.formula1.com/en/drivers/max-verstappen.html",
    teamId: "red_bull"
  },
  {
    driverId: "perez",
    name: "Sergio",
    surname: "Perez",
    nationality: "Mexican",
    birthday: "1990-01-26",
    number: 11,
    shortName: "PER",
    url: "https://www.formula1.com/en/drivers/sergio-perez.html",
    teamId: "red_bull"
  },
  {
    driverId: "leclerc",
    name: "Charles",
    surname: "Leclerc",
    nationality: "Monegasque",
    birthday: "1997-10-16",
    number: 16,
    shortName: "LEC",
    url: "https://www.formula1.com/en/drivers/charles-leclerc.html",
    teamId: "ferrari"
  },
  {
    driverId: "sainz",
    name: "Carlos",
    surname: "Sainz",
    nationality: "Spanish",
    birthday: "1994-09-01",
    number: 55,
    shortName: "SAI",
    url: "https://www.formula1.com/en/drivers/carlos-sainz.html",
    teamId: "ferrari"
  },
  {
    driverId: "norris",
    name: "Lando",
    surname: "Norris",
    nationality: "British",
    birthday: "1999-11-13",
    number: 4,
    shortName: "NOR",
    url: "https://www.formula1.com/en/drivers/lando-norris.html",
    teamId: "mclaren"
  },
  {
    driverId: "piastri",
    name: "Oscar",
    surname: "Piastri",
    nationality: "Australian",
    birthday: "2001-04-06",
    number: 81,
    shortName: "PIA",
    url: "https://www.formula1.com/en/drivers/oscar-piastri.html",
    teamId: "mclaren"
  },
  {
    driverId: "russell",
    name: "George",
    surname: "Russell",
    nationality: "British",
    birthday: "1998-02-15",
    number: 63,
    shortName: "RUS",
    url: "https://www.formula1.com/en/drivers/george-russell.html",
    teamId: "mercedes"
  },
  {
    driverId: "hamilton",
    name: "Lewis",
    surname: "Hamilton",
    nationality: "British",
    birthday: "1985-01-07",
    number: 44,
    shortName: "HAM",
    url: "https://www.formula1.com/en/drivers/lewis-hamilton.html",
    teamId: "mercedes"
  },
  {
    driverId: "alonso",
    name: "Fernando",
    surname: "Alonso",
    nationality: "Spanish",
    birthday: "1981-07-29",
    number: 14,
    shortName: "ALO",
    url: "https://www.formula1.com/en/drivers/fernando-alonso.html",
    teamId: "aston_martin"
  },
  {
    driverId: "stroll",
    name: "Lance",
    surname: "Stroll",
    nationality: "Canadian",
    birthday: "1998-10-29",
    number: 18,
    shortName: "STR",
    url: "https://www.formula1.com/en/drivers/lance-stroll.html",
    teamId: "aston_martin"
  },
  {
    driverId: "ocon",
    name: "Esteban",
    surname: "Ocon",
    nationality: "French",
    birthday: "1996-09-17",
    number: 31,
    shortName: "OCO",
    url: "https://www.formula1.com/en/drivers/esteban-ocon.html",
    teamId: "alpine"
  },
  {
    driverId: "gasly",
    name: "Pierre",
    surname: "Gasly",
    nationality: "French",
    birthday: "1996-02-07",
    number: 10,
    shortName: "GAS",
    url: "https://www.formula1.com/en/drivers/pierre-gasly.html",
    teamId: "alpine"
  },
  {
    driverId: "tsunoda",
    name: "Yuki",
    surname: "Tsunoda",
    nationality: "Japanese",
    birthday: "2000-05-11",
    number: 22,
    shortName: "TSU",
    url: "https://www.formula1.com/en/drivers/yuki-tsunoda.html",
    teamId: "alphatauri"
  },
  {
    driverId: "ricciardo",
    name: "Daniel",
    surname: "Ricciardo",
    nationality: "Australian",
    birthday: "1989-07-01",
    number: 3,
    shortName: "RIC",
    url: "https://www.formula1.com/en/drivers/daniel-ricciardo.html",
    teamId: "alphatauri"
  },
  {
    driverId: "bottas",
    name: "Valtteri",
    surname: "Bottas",
    nationality: "Finnish",
    birthday: "1989-08-28",
    number: 77,
    shortName: "BOT",
    url: "https://www.formula1.com/en/drivers/valtteri-bottas.html",
    teamId: "alfa_romeo"
  },
  {
    driverId: "zhou",
    name: "Guanyu",
    surname: "Zhou",
    nationality: "Chinese",
    birthday: "1999-05-30",
    number: 24,
    shortName: "ZHO",
    url: "https://www.formula1.com/en/drivers/guanyu-zhou.html",
    teamId: "alfa_romeo"
  },
  {
    driverId: "albon",
    name: "Alexander",
    surname: "Albon",
    nationality: "Thai",
    birthday: "1996-03-23",
    number: 23,
    shortName: "ALB",
    url: "https://www.formula1.com/en/drivers/alexander-albon.html",
    teamId: "williams"
  },
  {
    driverId: "sargeant",
    name: "Logan",
    surname: "Sargeant",
    nationality: "American",
    birthday: "2000-12-31",
    number: 2,
    shortName: "SAR",
    url: "https://www.formula1.com/en/drivers/logan-sargeant.html",
    teamId: "williams"
  },
  {
    driverId: "hulkenberg",
    name: "Nico",
    surname: "Hulkenberg",
    nationality: "German",
    birthday: "1987-08-19",
    number: 27,
    shortName: "HUL",
    url: "https://www.formula1.com/en/drivers/nico-hulkenberg.html",
    teamId: "haas"
  },
  {
    driverId: "magnussen",
    name: "Kevin",
    surname: "Magnussen",
    nationality: "Danish",
    birthday: "1992-10-05",
    number: 20,
    shortName: "MAG",
    url: "https://www.formula1.com/en/drivers/kevin-magnussen.html",
    teamId: "haas"
  }
];

export const mockTeams: Team[] = [
  {
    teamId: "red_bull",
    teamName: "Red Bull Racing",
    teamNationality: "Austrian",
    firstAppeareance: 2005,
    constructorsChampionships: 6,
    driversChampionships: 7,
    url: "https://www.formula1.com/en/teams/Red-Bull-Racing.html"
  },
  {
    teamId: "ferrari",
    teamName: "Ferrari",
    teamNationality: "Italian",
    firstAppeareance: 1950,
    constructorsChampionships: 16,
    driversChampionships: 15,
    url: "https://www.formula1.com/en/teams/Ferrari.html"
  },
  {
    teamId: "mclaren",
    teamName: "McLaren",
    teamNationality: "British",
    firstAppeareance: 1966,
    constructorsChampionships: 8,
    driversChampionships: 12,
    url: "https://www.formula1.com/en/teams/McLaren.html"
  },
  {
    teamId: "mercedes",
    teamName: "Mercedes",
    teamNationality: "German",
    firstAppeareance: 1954,
    constructorsChampionships: 8,
    driversChampionships: 8,
    url: "https://www.formula1.com/en/teams/Mercedes.html"
  },
  {
    teamId: "aston_martin",
    teamName: "Aston Martin",
    teamNationality: "British",
    firstAppeareance: 1959,
    constructorsChampionships: 0,
    driversChampionships: 0,
    url: "https://www.formula1.com/en/teams/Aston-Martin.html"
  },
  {
    teamId: "alpine",
    teamName: "Alpine",
    teamNationality: "French",
    firstAppeareance: 1977,
    constructorsChampionships: 0,
    driversChampionships: 0,
    url: "https://www.formula1.com/en/teams/Alpine.html"
  },
  {
    teamId: "alphatauri",
    teamName: "AlphaTauri",
    teamNationality: "Italian",
    firstAppeareance: 2006,
    constructorsChampionships: 0,
    driversChampionships: 0,
    url: "https://www.formula1.com/en/teams/AlphaTauri.html"
  },
  {
    teamId: "alfa_romeo",
    teamName: "Alfa Romeo",
    teamNationality: "Swiss",
    firstAppeareance: 1950,
    constructorsChampionships: 0,
    driversChampionships: 2,
    url: "https://www.formula1.com/en/teams/Alfa-Romeo.html"
  },
  {
    teamId: "williams",
    teamName: "Williams",
    teamNationality: "British",
    firstAppeareance: 1978,
    constructorsChampionships: 9,
    driversChampionships: 7,
    url: "https://www.formula1.com/en/teams/Williams.html"
  },
  {
    teamId: "haas",
    teamName: "Haas F1 Team",
    teamNationality: "American",
    firstAppeareance: 2016,
    constructorsChampionships: 0,
    driversChampionships: 0,
    url: "https://www.formula1.com/en/teams/Haas-F1-Team.html"
  }
];

export const mockRaces: Race[] = [
  {
    raceId: "bahrain_gp_2024",
    championshipId: "f1_2024",
    raceName: "Bahrain Grand Prix",
    schedule: {
      race: "2024-03-02T15:00:00Z",
      qualy: "2024-03-01T15:00:00Z",
      fp1: "2024-02-29T11:30:00Z",
      fp2: "2024-02-29T15:00:00Z",
      fp3: "2024-03-01T11:30:00Z",
      sprintQualy: "2024-03-01T11:30:00Z",
      sprintRace: "2024-03-01T15:00:00Z"
    },
    laps: 57,
    round: 1,
    url: "https://www.formula1.com/en/racing/2024/Bahrain.html",
    fast_lap: {
      fast_lap: "1:30.940",
      fast_lap_driver_id: "verstappen",
      fast_lap_team_id: "red_bull"
    },
    circuit: {
      circuitId: "bahrain",
      circuitName: "Bahrain International Circuit",
      country: "Bahrain",
      city: "Sakhir",
      circuitLength: "5.412km",
      lapRecord: "1:30.940",
      firstParticipationYear: 2004,
      corners: 15,
      fastestLapDriverId: "verstappen",
      fastestLapTeamId: "red_bull",
      fastestLapYear: 2024,
      url: "https://www.formula1.com/en/racing/2024/Bahrain.html"
    },
    winner: mockDrivers[0], // Verstappen
    teamWinner: mockTeams[0] // Red Bull
  },
  {
    raceId: "saudi_arabia_gp_2024",
    championshipId: "f1_2024",
    raceName: "Saudi Arabian Grand Prix",
    schedule: {
      race: "2024-03-09T20:00:00Z",
      qualy: "2024-03-08T20:00:00Z",
      fp1: "2024-03-07T16:30:00Z",
      fp2: "2024-03-07T20:00:00Z",
      fp3: "2024-03-08T16:30:00Z",
      sprintQualy: "2024-03-08T16:30:00Z",
      sprintRace: "2024-03-08T20:00:00Z"
    },
    laps: 50,
    round: 2,
    url: "https://www.formula1.com/en/racing/2024/Saudi-Arabia.html",
    fast_lap: {
      fast_lap: "1:31.447",
      fast_lap_driver_id: "verstappen",
      fast_lap_team_id: "red_bull"
    },
    circuit: {
      circuitId: "jeddah",
      circuitName: "Jeddah Corniche Circuit",
      country: "Saudi Arabia",
      city: "Jeddah",
      circuitLength: "6.174km",
      lapRecord: "1:31.447",
      firstParticipationYear: 2021,
      corners: 27,
      fastestLapDriverId: "verstappen",
      fastestLapTeamId: "red_bull",
      fastestLapYear: 2024,
      url: "https://www.formula1.com/en/racing/2024/Saudi-Arabia.html"
    },
    winner: mockDrivers[0], // Verstappen
    teamWinner: mockTeams[0] // Red Bull
  },
  {
    raceId: "australia_gp_2024",
    championshipId: "f1_2024",
    raceName: "Australian Grand Prix",
    schedule: {
      race: "2024-03-24T05:00:00Z",
      qualy: "2024-03-23T05:00:00Z",
      fp1: "2024-03-22T01:30:00Z",
      fp2: "2024-03-22T05:00:00Z",
      fp3: "2024-03-23T01:30:00Z",
      sprintQualy: "2024-03-23T01:30:00Z",
      sprintRace: "2024-03-23T05:00:00Z"
    },
    laps: 58,
    round: 3,
    url: "https://www.formula1.com/en/racing/2024/Australia.html",
    fast_lap: {
      fast_lap: "1:20.235",
      fast_lap_driver_id: "leclerc",
      fast_lap_team_id: "ferrari"
    },
    circuit: {
      circuitId: "melbourne",
      circuitName: "Albert Park Circuit",
      country: "Australia",
      city: "Melbourne",
      circuitLength: "5.278km",
      lapRecord: "1:20.235",
      firstParticipationYear: 1996,
      corners: 14,
      fastestLapDriverId: "leclerc",
      fastestLapTeamId: "ferrari",
      fastestLapYear: 2024,
      url: "https://www.formula1.com/en/racing/2024/Australia.html"
    },
    winner: mockDrivers[2], // Leclerc
    teamWinner: mockTeams[1] // Ferrari
  },
  {
    raceId: "german_gp_2024",
    championshipId: "f1_2024",
    raceName: "German Grand Prix",
    schedule: {
      race: "2024-07-28T13:00:00Z",
      qualy: "2024-07-27T14:00:00Z",
      fp1: "2024-07-26T11:30:00Z",
      fp2: "2024-07-26T15:00:00Z",
      fp3: "2024-07-27T11:00:00Z",
      sprintQualy: "2024-07-27T11:00:00Z",
      sprintRace: "2024-07-27T15:30:00Z"
    },
    laps: 67,
    round: 4,
    url: "https://www.formula1.com/en/racing/2024/Germany.html",
    fast_lap: {
      fast_lap: "1:13.780",
      fast_lap_driver_id: "hamilton",
      fast_lap_team_id: "mercedes"
    },
    circuit: {
      circuitId: "hockenheim",
      circuitName: "Hockenheimring",
      country: "Germany",
      city: "Hockenheim",
      circuitLength: "4.574km",
      lapRecord: "1:13.780",
      firstParticipationYear: 1970,
      corners: 17,
      fastestLapDriverId: "hamilton",
      fastestLapTeamId: "mercedes",
      fastestLapYear: 2024,
      url: "https://www.formula1.com/en/racing/2024/Germany.html"
    },
    winner: mockDrivers[7], // Hamilton
    teamWinner: mockTeams[3] // Mercedes
  }
];

// Mock API responses
export const getMockDriversResponse = (offset: number = 0, limit: number = 20) => ({
  api: "F1 Connect API",
  url: `http://localhost:3000/api/current/drivers?offset=${offset}&limit=${limit}`,
  limit,
  offset,
  total: mockDrivers.length,
  season: 2024,
  championshipId: "f1_2024",
  drivers: mockDrivers.slice(offset, offset + limit)
});

export const getMockTeamsResponse = (offset: number = 0, limit: number = 20) => ({
  api: "F1 Connect API",
  url: `http://localhost:3000/api/current/teams?offset=${offset}&limit=${limit}`,
  limit,
  offset,
  total: mockTeams.length,
  season: 2024,
  championshipId: "f1_2024",
  teams: mockTeams.slice(offset, offset + limit)
});

export const getMockRacesResponse = (offset: number = 0, limit: number = 20) => ({
  api: "F1 Connect API",
  url: `http://localhost:3000/api/current?offset=${offset}&limit=${limit}`,
  limit,
  offset,
  total: mockRaces.length,
  season: 2024,
  championshipId: "f1_2024",
  championship: {
    championshipId: "f1_2024",
    year: 2024,
    name: "Formula 1 World Championship",
    url: "https://www.formula1.com/"
  },
  races: mockRaces.slice(offset, offset + limit)
});
