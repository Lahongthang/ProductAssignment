import React, { useCallback, useEffect } from 'react';

/**
 * 
 * @param {ref} scrollRef 
 * @param {function} callback 
 * @param {boolean} isPreventCallback 
 */
export const useInfiniteScroll = (
    scrollRef: React.RefObject<HTMLDivElement>,
    callback: () => void,
    isPreventCallback: boolean = false
) => {
    const handleScroll = useCallback((e: Event) => {
        if (isPreventCallback) return;

        const el = e.target as HTMLDivElement;
        const { clientHeight, scrollTop, scrollHeight } = el;
        const isAtBottom = Math.floor(clientHeight + scrollTop + 1) >= scrollHeight;

        if (isAtBottom) callback();
    }, [callback, isPreventCallback]);

    useEffect(() => {
        const element = scrollRef.current;
        element?.addEventListener('scroll', handleScroll);
        // Cleanup
        return () => element?.removeEventListener('scroll', handleScroll);
    }, [scrollRef, handleScroll]);
};
