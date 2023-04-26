import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

/**
 * @class LocalityDetailDto DTO that contains locality details from a particular IP Address.
 * @author Patrik Duch
 */
export class LocalityDetailDto {

  constructor(city: string, country: string, countryCode: string, region: string, lat: number, lon: number,  org: string,  timezone: string, zip: string) {
    this.city = city;
    this.country = country;
    this.countryCode = countryCode;
    this.region = region;
    this.lat = lat;
    this.lon = lon;
    this.org = org;
    this.timezone = timezone;
    this.zip = zip;
  }

  @ApiProperty()
  @IsNotEmpty()
  city: string;

  @ApiProperty()
  @IsNotEmpty()
  countryCode: string;

  @ApiProperty()
  @IsNotEmpty()
  country: string;

  @ApiProperty()
  @IsNotEmpty()
  lat: number;

  @ApiProperty()
  @IsNotEmpty()
  lon: number;

  @ApiProperty()
  @IsNotEmpty()
  region: string;

  @ApiProperty()
  @IsNotEmpty()
  timezone: string;

  @ApiProperty()
  @IsNotEmpty()
  org: string;

  @ApiProperty()
  @IsNotEmpty()
  zip: string;
}