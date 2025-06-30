import { GraphQLError } from "graphql";
import { PhoneAPI, TimezoneAPI } from "./types.ts";

export const getPhoneData = async (phone:string): Promise<PhoneAPI> => {
    const API_KEY = Deno.env.get("API_KEY");
    if(!API_KEY) throw new GraphQLError("Api key needed");

    const url = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`;
    const data = await fetch(url,
        {
            headers:{
                "X-Api-Key":API_KEY
            }
        }
    );
    if(data.status!==200) throw new GraphQLError("Api ninja error");

    const response:PhoneAPI = await data.json();
    return response;
}

export const getTimeZoneData = async(timezone:string): Promise<TimezoneAPI> => {
    const API_KEY = Deno.env.get("API_KEY");
    if(!API_KEY) throw new GraphQLError("Api key needed");

    const url = `https://api.api-ninjas.com/v1/timezone?timezone=${timezone}`;
    const data = await fetch(url,
        {
            headers:{
                "X-Api-Key":API_KEY
            }
        }
    );
    if(data.status!==200) throw new GraphQLError("Api ninja error");

    const response:TimezoneAPI = await data.json();
    return response;
}

export const getTimeZoneFromPhoneData = (phoneAPI:PhoneAPI): string => {
    return phoneAPI.timezones[0];
}