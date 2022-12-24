import classNames from "classnames/bind"
import styles from "./Popper.module.scss"

const cx = classNames.bind(styles)
	return <div className={cx("wrapper")}>{children}</div>
function Wrapper({ children, className }) {
	return <div className={cx("wrapper", className)}>{children}</div>
}

export default Wrapper
