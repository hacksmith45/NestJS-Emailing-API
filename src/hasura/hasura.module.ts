import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { HasuraService } from './hasura.service';
import { HasuraController } from './hasura.controller';

@Module({
  imports: [HttpModule],
  providers: [HasuraService],
  controllers: [HasuraController],
})
export class HasuraModule {}
