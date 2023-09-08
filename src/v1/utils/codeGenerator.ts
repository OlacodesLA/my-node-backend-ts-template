function generateRandomString(length: number, characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"): string {
    var randomString: string = "T";
    for (let i = 0; i < length; i++) {
     randomString = characters[Math.floor(Math.random() * characters.length)];
    }
    return randomString;
  }

  export { generateRandomString }