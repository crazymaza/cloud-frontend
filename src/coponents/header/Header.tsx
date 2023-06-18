import React from 'react';
import Folder from '../../assets/img/folder.svg';
import classes from './header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <span className={classes.avatar}>АИ</span>
            <p className={classes.fullName}>Иван Иванов</p>
            <div className={classes.links} >
                <a
                    href="https://cloud.ru/ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>Telegram</span>
                </a>
                <a
                    href="https://cloud.ru/ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://cloud.ru/ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                >
                    <img src={Folder} alt="папка" width="12.8px" height="11.2px" />
                    <span>Resume</span>
                </a>
            </div>
        </header>
    )
}

export default Header;
