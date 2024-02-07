import {apiAxios} from '../BaseAxios';

// // 이메일 중복체크
// export const checkEmail = async (email: string) => {
//   try {
//     // const response = await axios({
//     //   method: 'get',
//     //   baseURL: config.BASE_URL,
//     //   url: 'user/check-email',
//     //   data: {
//     //     email,
//     //   },
//     // });
//     const response = apiAxios.get('/user/check-email', {email});
//     console.log('이메일 중복체크 성공');
//     return response;
//   } catch (error) {
//     console.log(`이메일 중복체크 실패 ${error}`);
//     return [];
//   }
// };

// 이메일 인증번호 받기
export const sendMail = async (email: string) => {
  try {
    const response = await apiAxios.post('/mail/send', {email});
    return response.data;
  } catch (error) {
    console.log(`이메일 인증 받기 실패 ${error}`);
    return null;
  }
};

// 이메일 인증번호 확인
export const confirmMail = async (email: string, code: string) => {
  try {
    const response = await apiAxios.post('/mail/confirm', {email, code});
    return response.data;
  } catch (error) {
    console.log(`이메일 인증 실패 ${error}`);
    return null;
  }
};
