export enum Roles {
   technicin,admin 
}

export interface technicin{
    id: string,
    update: string|any,
    created: string|any,
    email: string,
    status: boolean,
    lastLogin: string|any,
    lastName: string,
    username: string,
    firstName: string,
    phoneNumber: string,
    personnelCode: string,
    role: "technicin"|"manager",
}