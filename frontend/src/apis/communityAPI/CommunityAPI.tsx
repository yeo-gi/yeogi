import {Post} from '../../components/community/PostType';
import {baseAxios} from '../BaseAxios';

// 전체 게시글 조회
export const getPostList = async (): Promise<Post[]> => {
  try {
    console.log('여기는?');
    const response = await baseAxios.get('/board');
    return response.data;
  } catch (error) {
    console.error('서버 요청 오류:', error);
    return [];
  }
};
