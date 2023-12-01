import { Role } from "../Role/role.enum";

export class User {
    id!: number;
    nom!: string;
    prenom!: string;
    image!: string;
    email!: string;
    password!: string;
    role!: Role;
    passwordResetToken!: string;
}
