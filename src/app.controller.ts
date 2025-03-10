import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global')
  globalFunc():string{
    return this.globalHelperService.globalFunc();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showjson') 
  getJson(){
    return this.appService.getJson();
  }

  @Get('/showjson2') 
  getGit(){
    return this.appService.getGit();
  }

  @Get('/usepostman') 
  postman(){
    return this.appService.postman();
  }
}

