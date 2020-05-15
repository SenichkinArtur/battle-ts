import { UnitInterface, UnitType } from "../models";
import { Soldier } from "./Soldier";
import { Vehicle } from "./Vehicle";

interface iSquad {

}

export class Squad {
  type: string = '';
  units: UnitInterface[] = [];
  constructor(type: string, units: UnitInterface[]) {
    this.type = type;
    this.units = units;
    console.log('units: ', this.units);
  }


  
  // TODO try to add class Unit and UnitFactory
  
  

  // getAtackProbability() {
  //   switch (this.type) {
  //     case UnitType.Vehicles: {
  //       const units: Vehicle[] = this.units;
  //       // return this.units.operators;
  //       const qwe = this.units.map(unit => {
  //         if (unit.operators !== undefined) {
  //           // unit.getAtackProbability()
  //         }
  //       });
  //       // console.log('this.units: ', this.units);
  //     }
  //     case UnitType.Soldiers: {
  //       // const qwe = this.units.map(unit => unit.getAtackProbability())
  //       // return new Squad(squad.type, soldiers)
  //     }
  //     default: {
  //       // return new Squad(squad.type, []);
  //     }
  //   }
  // }
}
