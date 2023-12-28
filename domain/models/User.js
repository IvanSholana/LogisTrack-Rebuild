class User {
  constructor(name, nimNidn, password, email, status, question, answer) {
    this.name = name;
    this.nimNidn = nimNidn;
    this.password = password;
    this.email = email;
    this.status = status;
    this.question = question;
    this.answer = answer;
  }
  toSerializableObject() {
    return {
      name: this.name,
      nimNidn: this.nimNidn,
      password: this.password,
      email: this.email,
      status: this.status,
      question: this.question,
      answer: this.answer,
    };
  }
}

export default User;
