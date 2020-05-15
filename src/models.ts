// export enum Strategy {
//   weakest = 'weakest',
//   strongest = 'strongest',
//   random = 'random',
// }

export enum UnitType {
  Vehicle = 'vehicle',
  Soldier = 'soldier',
}

export interface ArmyInterface {
  squads: SquadInterface[];
  // strategy: Strategy;
  name: string;
}

export interface UnitInterface {
  health: number;
  recharge: number;
  operators?: SoldierInterface[];
}

export interface SquadInterface {
  units: UnitInterface[];
  type: UnitType;
}

export interface VehicleInterface {
  health: number;
  recharge: number;
  operators: SoldierInterface[];
}

export interface SoldierInterface {
  health: number;
  recharge: number;
}
