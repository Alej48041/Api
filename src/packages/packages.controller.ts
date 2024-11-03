/* eslint-disable prettier/prettier */
// src/packages/packages.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly packagesService: PackagesService) {}

  @Post()
  createPackage(@Body() createPackageDto: CreatePackageDto) {
    console.log('Datos recibidos:', createPackageDto);
    return this.packagesService.create(createPackageDto);
  }
}

