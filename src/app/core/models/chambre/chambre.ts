import { TypeChambre } from '../TypeChambre/type-chambre.enum';
import { Bloc } from '../bloc/bloc';

export class Chambre {
  idChambre!: number;
  numeroChambre!: number;
  typeC!: TypeChambre;
  bloc!: Bloc;
}
