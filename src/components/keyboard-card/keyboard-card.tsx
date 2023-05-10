import styles from './keyboard-card.module.scss';
import classNames from 'classnames';

export interface KeyboardCardProps {
    className?: string;
}

export const KeyboardCard = ({ className }: KeyboardCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.card}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles['keeb-picture']}
                />
                <div className={styles.description}>
                    <div className={styles['left-desc']}>
                        <div className={styles['build-title']}>build:</div>
                        <div className={styles['cost-title']}>cost:</div>
                    </div>
                    <div className={styles['right-desc']}>
                        <div className={styles['build-name']}>tokyo60 v4</div>
                        <div className={styles.price}>$229.99</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
