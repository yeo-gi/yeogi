import axios from 'axios';
import config from '../../apikey';

const uriKey = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${config.API_KEY}`;

export const MakeDynamicLink = async (params: number, value: number) => {
  const {data} = await axios({
    method: 'post',
    url: uriKey,
    data: {
      dynamicLinkInfo: {
        domainUriPrefix: 'https://yeogiapp.page.link',
        link: `https://yeogiapp.page.link/${params}=${value}`,
        androidInfo: {
          androidPackageName: 'com.yeogi',
        },
        socialMetaTagInfo: {
          socialTitle: '여행에 초대되었어요!',
          socialDescription: '어서 와서 일정을 확인해보세요.',
          socialImageLink: 'https://i.ibb.co/N2vyhMJ/image.png',
        },
      },
      suffix: {
        option: 'SHORT',
      },
    },
  });
  console.log(data.shortLink);

  return data.shortLink;
};
