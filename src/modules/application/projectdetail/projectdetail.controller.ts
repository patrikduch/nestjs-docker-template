import {
    Controller,
    Get,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { HttpResponse } from "../../shared/core/core.dtos";
import { ProjectDetailItemDto } from "./dtos/project-detail-item.dto";
import { ProjectDetailService } from "./projectdetail.service";

/**
 * @class ProjectDetailController ProjectDetail API for project-detail data management.
 * @author Patrik Duch
 */
@ApiTags("projectdetail")
@Controller({
  path: "/projectdetail",
})
export class ProjectDetailController {
  constructor(
    private readonly projectdetailService: ProjectDetailService
  ) {}
  
  @Get()
  async getProjectDetails() : Promise<HttpResponse<ProjectDetailItemDto>> {

    return await this.projectdetailService.fetchProjectDetail();
  }  
}