import React, { useEffect, useState } from 'react';

const Counter = ({ initialValue, duration }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp;

        const updateCounter = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;

            if (progress < duration) {
                const percentage = (progress / duration) * 100;
                const newValue = Math.ceil((initialValue * percentage) / 100);
                setCount(newValue);
                requestAnimationFrame(updateCounter);
            } else {
                setCount(initialValue);
            }
        };

        requestAnimationFrame(updateCounter);
        // Cleanup function
        return () => {
            startTimestamp = null;
        };
    }, [initialValue, duration]);

    return <span>{count}</span>;
};

export default Counter;
