import {Post} from '../../components/community/PostType';
import {baseAxios} from '../BaseAxios';

// 전체 게시글 조회
export const getPostList = async (): Promise<Post[]> => {
  try {
    const response = await baseAxios.get('/board');
    return response.data;
  } catch (error) {
    return [];
  }
};
