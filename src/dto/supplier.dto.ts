import { IsString, IsNotEmpty, IsEmail, IsPhoneNumber } from 'class-validator'; 

export class SupplierDTO{
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsNotEmpty()
    readonly name: string;
    readonly address: {
        line1: string;
        line2: string;
        city: string;
        country: string;
        zipCode: string;
    }

    readonly phone: string;

    @IsEmail()
    readonly email: string;
    readonly currency: string;
    @IsPhoneNumber()
    readonly contactPerson: string;
    readonly type: 'Local' | 'Internationl';
    readonly taxRegistrationNumber: string;
    readonly businessRegistrationNumber: string;
}