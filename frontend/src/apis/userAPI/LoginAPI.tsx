import {apiAxios} from '../BaseAxios';

// 네이버 로그인
export const naverLogin = async () => {
  try {
    const response = await apiAxios.post('/auth/naver');
    return response.data;
  } catch (error) {
    console.log(`네이버 로그인 실패 ${error}`);
    return null;
  }
};
