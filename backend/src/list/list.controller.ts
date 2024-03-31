import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  HttpCode,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { ListService } from './list.service';
import { ListDto } from './list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  async getAll() {
    return this.listService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async create(@Body() dto: ListDto) {
    return this.listService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')

  async update(@Body() dto: ListDto, @Param('id') id: string) {
    return this.listService.update(dto, id)
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.listService.delete(id)
  }
}
