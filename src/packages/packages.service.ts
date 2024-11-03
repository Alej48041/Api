/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePackageDto } from './dto/create-package.dto';

@Injectable()
export class PackagesService {
  private prisma = new PrismaClient();

  async create(createPackageDto: CreatePackageDto) {
    const { contenido, peso, largo, alto, ancho } = createPackageDto;

    const newPackage = await this.prisma.package.create({
      data: {
        contenido,
        peso,
        largo,
        alto,
        ancho,
      },
    });

    return newPackage;
  }
}
