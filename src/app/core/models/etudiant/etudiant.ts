import { User } from "../user/user";

export class Etudiant extends User {
    cin!: number;
    ecole!: string;
    dateNaissance!: Date;
}
