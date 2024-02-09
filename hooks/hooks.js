export class User {
  constructor(email) {
    this.email = email;
  }
  
  //Setting new Email

  updateEmail(newEmail) {
    this.email = newEmail;
  }

  clearEmail() {
    this.email = '';
  }
}
