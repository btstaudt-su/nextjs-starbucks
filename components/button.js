import Link from 'next/link'

import classNames from 'classnames/bind';

import styles from './button.module.scss'

let cx = classNames.bind(styles);

export default function Button({label, path, type}) {

    // "btn primary" = btn.primary in non next code
    let buttonClasses = cx({
        btn: true,
        primary: type === 'primary',
        secondary: type === 'secondary'
    })

    return (
        <Link href={path}>
            <a className={buttonClasses}>{label}</a>
        </Link>
    )
}