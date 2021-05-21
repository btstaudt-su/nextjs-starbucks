import styles from './paragraph.module.scss'

export default function Paragraph() {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}