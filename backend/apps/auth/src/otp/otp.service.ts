import { decryption } from '@app/common';
import { HttpException, Injectable } from '@nestjs/common';
import { OtpDto } from './dto/otp.dto';
import { OtpRepository } from './otp.repository';

@Injectable()
export class OtpService {
  constructor(private readonly otpRepository: OtpRepository) {}

  //Otp generate API
  async createOtp(data: any) {
    return await this.otpRepository.create(data);
  }
  async verifyOtp(){
    return await this.otpRepository.deleteMany({});
  }
  //Otp varification API
  async getOtp(otpDto: any) {
    const email = decryption(otpDto.email);
    const verifyToken = decryption(otpDto.verifyToken);
    console.log("email ,verifyToken-----otp-------------",email ,verifyToken);
    
    const getUser = await this.otpRepository.findOne({ email ,verifyToken});
    console.log("getUser---------------------getUser-------------",getUser);
    if (getUser) {
      await this.otpRepository.deleteMany({email});
      return 'Otp verify successfully!!';
    }else{
        await this.otpRepository.deleteOne({ email });
        throw new HttpException('Otp expired!!', 200);
    }
  }
}
