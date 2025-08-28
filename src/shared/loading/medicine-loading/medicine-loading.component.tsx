import React from 'react';
import styles from './medicine-loading.module.css';

function MedicineLoadingComponent() {
    return (
        <div className="absolute bg-blue-200/40 h-screen top-0 w-full flex flex-col justify-center">
            <div className={styles.content}>
                <div className={styles.pill}>
                    <div className={styles.medicine}>
                        {[...Array(20)].map((_, index) => (
                            <i key={index}></i>
                        ))}
                    </div>
                    <div className={styles.side}></div>
                    <div className={styles.side}></div>
                </div>
            </div>
            <strong className="text-center text-4xl text-[#458DFC]">در حال بارگیری</strong>
        </div>

    );
}

export default MedicineLoadingComponent;
