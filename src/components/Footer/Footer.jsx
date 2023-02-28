import React from 'react'
import Logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,
} from '@heroicons/react/outline'
import css from './Footer.module.css'


const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>
                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>111 north avenue Orlando, FL 32801</span>
                        </span>

                        <spna className={css.pngLine}>
                            {" "}
                            <PhoneIcon className={css.icon} />
                            333-306-4015
                        </spna>

                        <spna className={css.pngLine}>
                            {" "}
                            <InboxIcon className={css.icon} />
                            <a href='mailto:support@amazon.com'>Support@amazon.com</a>
                        </spna>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            Sign In
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <a href="/about">
                                <p>About us</p>
                            </a>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <p>Safety Prvacy & Terms</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className={css.copyRight}>
                <span>Copyright ©2022 by Amazon</span>
                <span>All right reserved</span>
            </div>
        </div>
    )
}

export default Footer;