// 공백 제거
export const removeWhitespace = (text: string) => {
  const regex = /\s/g;
  return text.replace(regex, '');
};

// 이메일 형식 확인
export const validateEmail = (email: string) => {
  const regex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
};

// 비밀번호 형식 확인
export const validatePw = (pw: string) => {
  const regex = /^(?=.*[a-z])(?=.*\d).{8,16}$/;
  return regex.test(pw);
};

// 닉네임 형식 확인
export const validateNickname = (nickname: string) => {
  const regex = /^.{2,8}$/;
  return regex.test(nickname);
};
