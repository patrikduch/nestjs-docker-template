import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";

@Module({
  controllers: [PaymentController],
  imports: [],
  exports: [],
})
export class PaymentModule {}
