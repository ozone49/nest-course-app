import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global')
  globalFunc():string{
    return this.globalHelperService.globalFunc();
  }

  @Get()
  productFunc(): string {
    return this.productService.productFunc();
  }

  @Get('/ProductJson')
  productJson() {
    return this.productService.productJson();
  }
    
  @Get('/shared')
  sharedFunc() {
    return this.utilityService.shareFunc();
  }
}