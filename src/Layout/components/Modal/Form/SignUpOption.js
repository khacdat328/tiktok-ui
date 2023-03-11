import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import {
   AppleIcon,
   FacebookIcon,
   GoogleIcon,
   InstagramIcon,
   KaKaoTalkIcon,
   LINEIcon,
   TwitterIcon,
   UserICon,
} from '~/components/Icons';
const cx = classNames.bind(styles);
function SignUpOption() {
   const signUpOptions = [
      {
         title: 'Use phone / email /username',
         icon: <UserICon className={cx('login-type')} />,
         components: 'EmailLogin',
      },
      { title: 'Continue with Facebook', icon: <FacebookIcon className={cx('login-type')} /> },
      { title: 'Continue with Google', icon: <GoogleIcon className={cx('login-type')} /> },
      { title: 'Continue with Twitter', icon: <TwitterIcon className={cx('login-type')} /> },
      { title: 'Continue with LINE', icon: <LINEIcon className={cx('login-type')} /> },
      { title: 'Continue with KaKaoTalk', icon: <KaKaoTalkIcon className={cx('login-type')} /> },
      { title: 'Continue with Apple', icon: <AppleIcon className={cx('login-type')} /> },
      { title: 'Continue with Instagram', icon: <InstagramIcon className={cx('login-type')} /> },
   ];
   return (
      <>
         <h1 className={cx('title')}>Sign Up for Tiktok</h1>
         {signUpOptions.map((option, index) => (
            <button key={index} className={cx('button')}>
               {option.icon}
               {option.title}
            </button>
         ))}
      </>
   );
}

export default SignUpOption;
