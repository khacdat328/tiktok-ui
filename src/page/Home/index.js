import { useCallback, useEffect, useState } from 'react';
import * as userService from '~/apiServices/userService';
import { Virtuoso } from 'react-virtuoso';
import Video from '~/components/Video';
const init_page = 1;
function Home() {
   const [page, setPage] = useState(init_page);
   const [videos, setVideos] = useState([]);
   const [noMoreVideo, setNoMoreVideo] = useState(false);
   const loadMore = useCallback(() => {
      return setTimeout(() => {
         userService.forYouVideo(page).then((res) => {
            setVideos((prev) => [...prev, ...res.data]);
            setPage((prevPage) => prevPage + 1);
            if (res.data.length === 0 || page === res.meta.pagination.total) {
               setNoMoreVideo(true);
            }
         }).catch((error) => console.log(error));
      }, 300);
   }, [page]);

   useEffect(() => {
      const timeOut = loadMore();
      return () => clearTimeout(timeOut);
   }, []);

   console.log(videos);
   const Footer = () => {
      return (
         <div
            style={{
               padding: '2rem',
               display: 'flex',
               justifyContent: 'center',
            }}
         >
            Loading...
         </div>
      );
   };
   return (
      <Virtuoso
         data={videos}
         endReached={() => {
            if (!noMoreVideo) {
               loadMore();
            }
         }}
         itemContent={(index, video) => <Video key={index} video={video} />}
         // components={{ Footer }}
      />
   );
}

export default Home;
