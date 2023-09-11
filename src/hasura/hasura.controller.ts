// hasura.controller.ts
import { Controller, Get } from '@nestjs/common';
import { HasuraService } from './hasura.service';

@Controller('authors')
export class HasuraController {
  constructor(private readonly hasuraService: HasuraService) {}

  @Get()
  async getAuthors() {
    try {
      const response = await this.hasuraService.getAuthors();
      return response.data.data.users;
    } catch (error) {
      return { error: error.message };
    }
  }
}
