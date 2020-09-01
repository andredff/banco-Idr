import { AbstractControl } from '@angular/forms';

export function Age(control: AbstractControl) {
  if (control.value) {
    const age = getAgeFromBirthday(control.value);
    if (age < 18) {
      return { invalidAge: true};
    } else if (control.value.slice(6, 10) <= 1900) {
      return { invalidDate: true };
    } else {
      return null;
    }
  }
}

export function getAgeFromBirthday(birthday) {
  const today = new Date();
  const birthDate = convertInAmericanFormat(birthday);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function convertInAmericanFormat(brDate) {
  const splitedDate = brDate.split('/');
  const americanFormat = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
  return americanFormat;
}


