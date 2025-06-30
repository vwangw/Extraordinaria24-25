import { OptionalId } from "mongodb";

export type ContactModel = OptionalId<{
    name:string,
    phone:string,
    country:string,
    localtime:string
}>

export type PhoneAPI = {
    is_valid:boolean,
    timezones:string[]
}

export type TimezoneAPI = {
    localtime:string
}