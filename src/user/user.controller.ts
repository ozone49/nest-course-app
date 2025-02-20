import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service'; 

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
                    private readonly utilityService: UtilityService
        ) {}
    
        @Get('/shared') 
        sharedFunc() {
            return this.utilityService.shareFunc();
        }
}
