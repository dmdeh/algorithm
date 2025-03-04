function solution(emails) {
  const email = /^[a-z.]+@[a-z]+\.(com|net|org)$/;
  return emails.filter((e) => email.test(e)).length;
}

// 백슬래시가 필요한 특수문자 . \ ^ $ * + ? {} [] () | /
