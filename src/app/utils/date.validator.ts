import { AbstractControl } from '../../../node_modules/@angular/forms';

export class DateValidator {

  static validateDate(control: AbstractControl) {
    let ret: boolean = false;
    ret = DateValidator.validaData(control.value);
    // console.log('valida data ' + control.value + ': ' + ret);
    return ret ? null : {
      validateDate: {
        valid: false
      }
    };
  }

  static validaData(dateString: string): boolean {
    if (!dateString) {
      return false;
    }
    dateString = dateString.substr(0, 10).trim();
    if (dateString.indexOf('/') === -1) { //data sem mascara
      var day = parseInt(dateString.substring(0, 2), 10);
      var month = parseInt(dateString.substring(2, 4), 10);
      var year = parseInt(dateString.substring(4), 10);
    } else if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString)) {
      return false;
    } else { // dd/mm/yyyy
      var parts = dateString.split("/");
      var day = parseInt(parts[0], 10);
      var month = parseInt(parts[1], 10);
      var year = parseInt(parts[2], 10);
    }

    let today = new Date();
    let birthDate = year;

    let age = today.getFullYear() - birthDate;
    let m = today.getMonth() - month;
    if (m < 0 || (m === 0 && today.getDate() < day)) {
      age--;
    }

    if (age < 18) {
      return false;
    }

    // Check the ranges of month and year
    if (year < 1000 || year > 3000 || month == 0 || month > 12)
      return false;

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
      monthLength[1] = 29;

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }

}
