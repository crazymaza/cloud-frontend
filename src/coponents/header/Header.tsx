import React from 'react';
import Folder from '../../assets/img/folder.svg';
import classes from './header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <span className={classes.avatar}>ВИ</span>
            <p className={classes.fullName}>Вальнев Игорь</p>
            <div className={classes.links} >
                <a
                    href="https://t.me/IValnev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>Telegram</span>
                </a>
                <a
                    href="https://github.com/crazymaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://hh.ru/resume/13f04afbff037ec9c20039ed1f63536755786d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>Resume</span>
                </a>
                <a
                    href="https://valnev.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>Portfolio</span>
                </a>
            </div>
        </header>
    )
}

export default Header;
