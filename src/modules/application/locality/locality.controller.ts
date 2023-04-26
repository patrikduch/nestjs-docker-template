import { Controller, Get, Query } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { HttpResponse } from "../../shared/core/core.dtos";
import { GetLocalityQueryRequest } from "./cqrs/requests/get-locality-query.request";
import { LocalityDetailDto } from "./dtos/locality-detail.dto";

/**
 * @class LocalityControler API for obtaining locality for particular IP address.
 * @author Patrik Duch
 */
@ApiTags("Locality")
@Controller({
  path: "/locality",
})
export class LocalityController {
  constructor(private readonly queryBus: QueryBus) {}

  @ApiQuery({ name: 'ipAddress', type: String, required: true, description: 'Ip address (for example: 209.142.68.29)'})
  @Get()
  async getProjectDetails(@Query('ipAddress') ipAddress: string): Promise<HttpResponse<LocalityDetailDto>> {
    return await this.queryBus.execute(new GetLocalityQueryRequest(ipAddress));
  }
}
