import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }

  @Post('superadmin/login')
  async superadminLogin(@Body() GetLoginDto, @Res() res: any) {
    console.log('here');
    //set role for superadmin
    GetLoginDto.assignedRole = '1';
    await this.userLogin(GetLoginDto, res);
  }

  async userLogin(@Body() data: any, @Res() res: any) {
    if (!data.email) {
      return res.status(400).json({
        status: false
      });
    }
    if (!data.password) {
      return res.status(400).json({
        status: false
      });
    }
    //assigned role for employee
    (await this.authService.userLogin(data)).subscribe((response: any) => {
        if (response.status) {
          //token generate

          const token = this.authService.createToken(response.data);
          token.then(function (result) {
            return res.status(200).json({ status: true, token: result.accessToken, data: response.data });
          })
            .catch(function (err) {
                return res.status(400).json({ status: false, message: err.message });
              }
            )

        } else {
          return res.status(400).json(response);
        }
      }
    );
  }
}
