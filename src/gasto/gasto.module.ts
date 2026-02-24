import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Gasto, GastoSchema } from './entities/gasto.entity';
import { AuthModule } from '../auth/auth.module';
import { CajaModule } from '../caja/caja.module';
import { RutaModule } from '../ruta/ruta.module';
import { MomentService } from '../common/plugins/moment/moment.service';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    CajaModule,
    RutaModule,
    MongooseModule.forFeature([
      {
        name: Gasto.name,
        schema: GastoSchema
      }
    ])
  ],
  controllers: [GastoController],
  providers: [GastoService, MomentService],
  exports: [GastoService, MongooseModule]
})
export class GastoModule { }
