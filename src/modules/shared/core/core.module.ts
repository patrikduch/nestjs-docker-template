import { Module } from '@nestjs/common';
import { HttpResponse } from './core.dtos';

/**
 * @class CoreModule Shared functionality for all modules.
 * @author Patrik Duch
 */

@Module({
    providers: [HttpResponse],
    exports: [HttpResponse]
})
export class CoreModule {}
