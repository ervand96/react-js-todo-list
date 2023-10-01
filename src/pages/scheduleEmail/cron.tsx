import { useState, useEffect } from 'react';
import { Cron } from 'react-js-cron';
import styles from './cron.module.scss'

export default function ScheduleEmailComponent() {
    const [cronValue, setCronValue] = useState('*/5 * * * *'); // default 5 minutes

    useEffect(() => {
        const submitCronValue = async () => {
            try {
                await fetch('http://localhost:4000/schedule-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cron: cronValue }),
                });
                console.log('Email schedule set successfully!');
            } catch (error) {
                console.error('Error setting email schedule.', error);
            }
        };
 
        submitCronValue();

    }, [cronValue]);

    return (
        <div className={styles.container}>
            <Cron value={cronValue} setValue={setCronValue} />
        </div>
    )

}
