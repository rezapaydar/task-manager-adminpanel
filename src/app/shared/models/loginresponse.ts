export interface responseLogin{
    id: string,
    username:string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    status: boolean,
    role: "SUPER_ADMIN"|"ADMIN",
    token: string
}