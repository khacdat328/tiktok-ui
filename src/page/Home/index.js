import { useCallback, useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as userService from '~/apiServices/userService';
import Video from '~/components/Video';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const init_page = 1;
function Home() {
   const [showModal, setShowModal] = useState(false);
   const [page, setPage] = useState(init_page);
   const [videos, setVideos] = useState([]);
   const [noMoreVideo, setNoMoreVideo] = useState(false);
   const loadMore = useCallback(() => {
      return setTimeout(() => {
         userService
            .forYouVideo(page)
            .then((res) => {
               if (res.data) {
                  setVideos((prev) => [...prev, ...res.data]);
                  setPage((prevPage) => prevPage + 1);
                  if (res.data.length === 0 || page === res.meta.pagination.total) {
                     setNoMoreVideo(true);
                  }
               }
            })
            .catch((error) => console.log(error));
      }, 300);
   }, [page]);

   useEffect(() => {
      const timeOut = loadMore();
      return () => clearTimeout(timeOut);
   }, []);

   const Footer = () => {
      return (
         <div style={{ textAlign: 'center', fontSize: '3.5rem', color: 'var(--primary)', marginTop: '10px' }}>
            <FontAwesomeIcon icon={faSpinner} className={'fa-spin'} />
         </div>
      );
   };
   return (
      <Virtuoso
         useWindowScroll
         data={videos}
         endReached={() => {
            if (!noMoreVideo) {
               loadMore();
            }
         }}
         itemContent={(index, video) => <Video key={index} video={video} />}
         components={{ Footer }}
      />
   );
}

export default Home;
