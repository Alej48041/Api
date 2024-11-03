// src/packages/dto/create-package.dto.ts
import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreatePackageDto {
  @IsString()
  @IsNotEmpty({ message: 'El contenido del paquete no debe estar vacío' })
  contenido: string;

  @IsNumber()
  @Min(1, { message: 'El peso debe ser mayor que cero' })
  peso: number;

  @IsNumber()
  largo: number;

  @IsNumber()
  alto: number;

  @IsNumber()
  ancho: number;
}
