import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import { faCommentDots, faHeart, faMusic, faShare, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AccountPreview from '../SidebarAccount/AccountPreview';
import { Wrapper as Popper } from '../Popper';
import Button from '../Button';
import styles from './Video.module.scss';
import useElementOnScreen from '~/hooks/useElementOnScreen';
import { Link } from 'react-router-dom';
import Image from '../Image';

const cx = classNames.bind(styles);
function Video({ video }) {
   const [description, setDescription] = useState('');
   const [tags, setTags] = useState([]);
   const [playing, setPlaying] = useState(false);
   const [music, setMusic] = useState('');
   const previewAccount = () => (
      <Popper>
         <AccountPreview data={video.user} />
      </Popper>
   );

   useEffect(() => {
      const videoDesc = video.description;
      if (videoDesc.includes('#')) {
         const descSplit = videoDesc.split('#');
         if (descSplit[0]) setDescription(descSplit[0]);
         descSplit.shift();
         setTags(descSplit);
      } else {
         setDescription(videoDesc);
      }
   }, [video.description]);

   useEffect(() => {
      const videoMusic = video.music;
      if (videoMusic && !(videoMusic.includes('Original sound') || videoMusic.includes('original sound'))) {
         setMusic(videoMusic);
      }
   }, [video.music]);

   const videoRef = useRef(null);
   const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
   };

   const isVisibile = useElementOnScreen(options, videoRef);

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
         <Tippy interactive delay={[600, 0]} offset={[-10, 5]} render={previewAccount} placement="bottom-start">
            <Link to={`/@${video.user.nickname}`} className={cx('link-avatar')}>
               <div>
                  <Image className={cx('avatar')} src={video.user.avatar} alt={video.user.nickname} />
               </div>
            </Link>
         </Tippy>
         <div className={cx('content')}>
            <div className={cx('text-content')}>
               <div>
                  <Tippy
                     interactive
                     delay={[600, 0]}
                     offset={[-77, 30]}
                     render={previewAccount}
                     placement="bottom-start"
                  >
                     <Link to={`/@${video.user.nickname}`} className={cx('author')}>
                        <h3 className={cx('nickname')}>{video.user.nickname}</h3>
                        <h4 className={cx('username')}>{`${video.user.first_name} ${video.user.last_name}`}</h4>
                     </Link>
                  </Tippy>
               </div>
               <div className={cx('description')}>
                  <span className={cx('description-content')}>{description}</span>
                  {tags.map((tag, index) => (
                     <a key={index} href="/#" className={cx('hashtag')}>
                        {`#${tag}`}
                     </a>
                  ))}
               </div>

               <div className={cx('music')}>
                  <FontAwesomeIcon icon={faMusic} style={{ marginRight: '4px' }} />
                  {music ? (
                     <a href="/#">{music}</a>
                  ) : (
                     <a href="/#">
                        {video.user.first_name || video.user.last_name
                           ? `Original sound - ${video.user.first_name} ${video.user.last_name}`
                           : `Original sound`}
                     </a>
                  )}
                  
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
                     // style={{ width: '286px' }}
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
