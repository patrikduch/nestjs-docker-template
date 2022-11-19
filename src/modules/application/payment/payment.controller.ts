import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Payment")
@Controller({
  path: "/api/payment",
})
export class PaymentController {
  @Get()
  getTest() {
    return "Hi, there!";
  }
}
