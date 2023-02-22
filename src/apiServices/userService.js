import * as request from '~/utils/httpRequest';

export const suggestedFollowing = async (per_page) => {
   try {
      const res = await request.get('users/suggested?', {
         params: {
            page: 1,
            except: 8,
            per_page: per_page,
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
};
export const forYouVideo = async (page) => {
   try {
      const res = await request.get('videos?', {
         params: {
            type: 'for-you',
            page: page,
         },
      });
      return res.data;
   } catch (error) {
      console.log(error);
   }
}