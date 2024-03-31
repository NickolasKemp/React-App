import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';
import { ListDto } from './list.dto';


@Injectable()
export class ListService {
  constructor(private prisma: AppService) {
  }


  // async getAll() {
  //   return this.prisma.list.findMany();
  // }
  //
  // async create(dto: ListDto) {
  //   return this.prisma.task.create({
  //     data: { ...dto },
  //   });
  // }

  getById(id: string) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async update(dto: Partial<ListDto>, taskId: string) {
    return this.prisma.task.update({
      where: {
        id: taskId,
      },
      data: dto,
    });
  }

  async delete(taskId: string) {
    return this.prisma.task.delete({
      where: {
        id: taskId,
      },
    });
  }
}
