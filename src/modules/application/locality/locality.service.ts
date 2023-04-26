import axios from "axios";
import { HttpResponse } from "../../shared/core/core.dtos";
import { LocalityDetailDto } from "./dtos/locality-detail.dto";
import { Injectable } from "@nestjs/common";

/**
 * @interface ILocalityService Contract interface for LocalityService.
 */
export interface ILocalityService {
    fetchLocalityDetails(ipAddress: string): Promise<HttpResponse<LocalityDetailDto>>;
}

/**
 * @class LocalityService Obtaining locality info from IP addreses (ipV4).
 * @author Patrik Duch
 */
@Injectable()
export class LocalityService implements ILocalityService {

    constructor(
    ) {}

    async fetchLocalityDetails(ipAddress: string): Promise<HttpResponse<LocalityDetailDto>> {
        try {
            const response = await axios(`http://ip-api.com/json/${ipAddress}`);
            const data = await response.data;
        
            if (data.status === 'success') {
              const response = new HttpResponse<LocalityDetailDto>();
              response.data = {
                country: data.country,
                countryCode: data.countryCode,
                city: data.city,
                region: data.regionName,
                lat: data.lat,
                lon: data.lon,
                org: data.org,
                timezone: data.timezone,
                zip: data.zip
              }

              return response;

            } else {
              throw new Error("Unable to get locality for the IP address.");
            }
          } catch (error) {
            throw new Error(`Error: ${error}`);
          }
    }
}