import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectDetailController } from './projectdetail.controller';
import { ProjectDetailEntity } from './projectdetail.entity';
import { ProjectDetailService } from './projectdetail.service';

/**
 * @class ProjectDetailModule ProjectDetail module contains all functional's part for to ProjectAPI to be functional.
 * @author Patrik Duch
 */

@Module({
    controllers: [ProjectDetailController],
    imports: [TypeOrmModule.forFeature([ProjectDetailEntity])],
    providers: [ProjectDetailService]
})
export class ProjectdetailModule {}
