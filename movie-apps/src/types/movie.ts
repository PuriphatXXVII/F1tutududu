// Type สำหรับ Response จาก F1 API
export type F1ApiResponse = {
  api: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  season?: number | string;
  championshipId?: string;
  timezone?: string;
};

// Type สำหรับ Response ของ Drivers
export type DriversResponse = F1ApiResponse & {
  drivers: Driver[];
};

// Type สำหรับ Response ของ Teams
export type TeamsResponse = F1ApiResponse & {
  teams: Team[];
};

// Type สำหรับ Response ของ Races
export type RacesResponse = F1ApiResponse & {
  championship: Championship;
  races: Race[];
};

// Type หลักสำหรับข้อมูล Driver
export type Driver = {
  driverId: string;
  name: string;
  surname: string;
  nationality: string;
  birthday: string;
  number: number;
  shortName: string;
  url: string;
  teamId?: string | null;
};

// Type สำหรับข้อมูล Team
export type Team = {
  teamId: string;
  teamName: string;
  teamNationality: string;
  firstAppeareance: number;
  constructorsChampionships: number;
  driversChampionships: number;
  url: string;
};

// Type สำหรับข้อมูล Race
export type Race = {
  raceId: string;
  championshipId: string;
  raceName: string;
  schedule: {
    race: string;
    qualy: string;
    fp1: string;
    fp2: string;
    fp3: string;
    sprintQualy: string;
    sprintRace: string;
  };
  laps: number;
  round: number;
  url: string;
  fast_lap: {
    fast_lap: string;
    fast_lap_driver_id: string;
    fast_lap_team_id: string;
  };
  circuit: {
    circuitId: string;
    circuitName: string;
    country: string;
    city: string;
    circuitLength: string;
    lapRecord: string;
    firstParticipationYear: number;
    corners: number;
    fastestLapDriverId: string;
    fastestLapTeamId: string;
    fastestLapYear: number;
    url: string;
  };
  winner: Driver | null;
  teamWinner: Team | null;
};

// Type สำหรับข้อมูล Championship
export type Championship = {
  championshipId: string;
  year: number;
  name: string;
  url: string;
};

// Type สำหรับข้อมูล Circuit
export type Circuit = {
  circuitId: string;
  circuitName: string;
  country: string;
  city: string;
  circuitLength: string;
  lapRecord: string;
  firstParticipationYear: number;
  numberOfCorners: number;
  fastestLapDriverId: string;
  fastestLapTeamId: string;
  fastestLapYear: number;
  url: string;
};

// Union type สำหรับ F1 items (for generic handling)
export type F1Item = Driver | Team | Race | Circuit;

// Type สำหรับหนัง (สำหรับ MovieCard component)
export type Movie = {
  id: number | string;
  title: string;
  title_en?: string;
  images?: Array<{
    url: string;
  }>;
};
