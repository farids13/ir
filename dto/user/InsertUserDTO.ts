import 'reflect-metadata'; 
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class InsertUserDTO {
  @IsNotEmpty({ message: 'Name should not be empty' })
  @Length(3, 50, { message: 'Name length should be between 3 and 50 characters' })
  name: string;

  @IsNotEmpty({ message: 'Email should not be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Phone number should not be empty' })
  @Length(10, 15, { message: 'Phone number length should be between 10 and 15 characters' })
  phoneNumber: string;

  @IsNotEmpty()
  @Length(6, 50, { message: 'Password length should be between 6 and 50 characters' })
  password: string;

  constructor(name: string, email: string, phoneNumber: string, password: string) {
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
  }
}
