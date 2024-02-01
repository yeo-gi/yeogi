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

export const getPost = async (postId: number): Promise<Post | null> => {
  try {
    const response = await baseAxios.get(`/board/${postId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
};
