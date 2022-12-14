import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customPhoneNumber', async: false })
export class CustomPhoneNumber implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return /^\d{8,13}$/.test(text); // for async validations you must return a Promise<boolean> here
  }

  defaultMessage(args: ValidationArguments) {
    // here you can provide default error message if validation failed
    return 'Doit être un numero de 8 a 13 chiffres!';
  }
}
