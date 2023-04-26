import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { GetLocalityQueryRequest } from "../requests/get-locality-query.request";
import { LocalityService } from '../../locality.service';
import { HttpResponse } from 'src/modules/shared/core/core.dtos';
import { LocalityDetailDto } from '../../dtos/locality-detail.dto';

@QueryHandler(GetLocalityQueryRequest)
export class GetLocalityQueryHandler
  implements IQueryHandler<GetLocalityQueryRequest> {
  constructor(private readonly localityService: LocalityService) {}

  async execute(query: GetLocalityQueryRequest): Promise<HttpResponse<LocalityDetailDto>> {
    const { ipAddress }  = query; 

    if (!ipAddress) {
      throw Error(`Ip address cannot be blank.`);
    }

    return await this.localityService.fetchLocalityDetails(ipAddress);
  }
}
