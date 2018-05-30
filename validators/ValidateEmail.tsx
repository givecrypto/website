export const ValidateEmail = (email?: string) => {
  // Email validation from https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
  // tslint:disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email || '');
};

export default ValidateEmail;
