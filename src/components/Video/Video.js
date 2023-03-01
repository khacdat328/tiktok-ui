import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { faCommentDots, faHeart, faMusic, faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, useRef } from 'react';

import { Wrapper as Popper } from '../Popper';
import Button from '../Button';
import styles from './Video.module.scss';
import useElementOnScreen from '~/hooks/useElementOnScreen';
const cx = classNames.bind(styles);
function Video({ video }) {
   // const [description, setDescription] = useState('');
   // const [tags, setTags] = useState([]);
   const [playing, setPlaying] = useState(false);

   const videoRef = useRef(null);
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
   };

   const isVisibile = useElementOnScreen(options, videoRef);
   
   // const onVideoClick = () => {
   //    if (playing) {
   //       videoRef.current.pause();
   //       setPlaying(!playing);
   //    } else {
   //       videoRef.current.currentTime = 0;
   //       videoRef.current.play();
   //       setPlaying(!playing);
   //    }
   // };
   useEffect(() => {
      if (isVisibile) {
         if (!playing) {
            videoRef.current.play();
            setPlaying(true);
         }
      } else {
         if (playing) {
            videoRef.current.pause();
            setPlaying(false);
         }
      }
   }, [isVisibile]);

   return (
      <div className={cx('wrapper')}>
         <img className={cx('avatar')} src={video.user.avatar} alt={video.user.nickname} />
         <div className={cx('content')}>
            <div className={cx('text-content')}>
               <div className={cx('author')}>
                  <h3 className={cx('nickname')}>{video.user.nickname}</h3>
                  <h4 className={cx('username')}>{`${video.user.first_name} ${video.user.last_name}`}</h4>
               </div>
               <div className={cx('description')}>
                  <span className={cx('description-content')}>{video.description}</span>
                  {/* <a href="/#" className={cx('hashtag')}>
                     #hashtag
                  </a> */}
               </div>
               <div className={cx('music')}>
                  <FontAwesomeIcon icon={faMusic} />
                  <a href="/#"> {video.music}</a>
               </div>
               <Button type="outline" size="small" className={cx('follow-btn')}>
                  Follow
               </Button>
            </div>
            <div className={cx('video')}>
               <div className={cx('video-item')}>
                  <video
                     ref={videoRef}
                     src={video.file_url}
                     controls
                     loop
                     muted
                     playsInline
                     style={{ width: '286px' }}
                     poster={video.thumb_url}
                  ></video>
               </div>
               <div className={cx('action')}>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faHeart} />
                     </span>
                     <strong className={cx('number')}>{video.likes_count}</strong>
                  </button>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faCommentDots} />
                     </span>
                     <strong className={cx('number')}>{video.comments_count}</strong>
                  </button>
                  <button className={cx('interact-btn')}>
                     <span className={cx('icon')}>
                        <FontAwesomeIcon icon={faShare} />
                     </span>
                     <strong className={cx('number')}>{video.shares_count}</strong>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Video;
