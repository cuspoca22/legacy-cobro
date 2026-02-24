import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

import { Ruta } from "../../ruta/entities/ruta.entity";
import { Empresa } from "../../empresa/entities/empresa.entity";

@Schema()
export class User extends Document {

   @Prop({
      type: String,
      index: true,
      required: true,
      uppercase: true,
      trim: true
   })
   nombre: string;

   @Prop({
      type: Boolean,
      required: true,
      default: true
   })
   estado: boolean;

   @Prop({
      type: String,
      index: true,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
   })
   username: string;

   @Prop({
      type: String,
      required: true,
   })
   password?: string;

   @Prop({
      type: String,
      enum: ['ADMIN', 'SUPERADMIN', 'COBRADOR', 'SUPERVISOR', 'CLIENTE'],
      default: 'COBRADOR'
   })
   rol: string;

   @Prop({
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ruta"
   })
   ruta: Ruta | string;

   @Prop({
      type: [{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Ruta"
      }]
   })
   rutas: (Ruta | string)[];

   @Prop({
      type: mongoose.Schema.Types.ObjectId,
      ref: "Empresa"
   })
   empresa: Empresa | string;

   @Prop({ type: Boolean })
   close_ruta: boolean;

}

export const UserSchema = SchemaFactory.createForClass(User);
