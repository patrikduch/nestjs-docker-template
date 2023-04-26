import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { QueryHandlers } from "./cqrs/handlers/";
import { LocalityController } from "./locality.controller";
import { LocalityService } from "./locality.service";

/**
 * @class LocalityModule Module for processing locality for particular IP Adresses.
 * @author Patrik Duch
 */
@Module({
    controllers: [LocalityController],
    imports: [CqrsModule],
    providers: [LocalityService, ...QueryHandlers],
  })
  export class LocalityModule {}
  