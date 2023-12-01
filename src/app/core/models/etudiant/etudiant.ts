import { Universite } from "../universite/universite";
import { User } from "../user/user";

export class Etudiant extends User {
    cin!: number;
    universite!: Universite;
    dateNaissance!: Date;
}
