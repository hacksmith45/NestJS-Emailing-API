/* eslint-disable prettier/prettier */
import { Controller, Get, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private appService: AppService) {}

    @Get()
    root(@Res() res: Response) {
    return res.render('index.hbs');
  }
}