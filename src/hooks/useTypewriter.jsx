import { useState, useEffect } from 'react';

export const useTypewriter = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000,
}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            if (reverse) {
                setSubIndex((prev) => prev - 1);
                setText(words[index].substring(0, subIndex - 1));
            } else {
                setSubIndex((prev) => prev + 1);
                setText(words[index].substring(0, subIndex + 1));
            }
        }, reverse ? deletingSpeed : subIndex === words[index].length ? pauseTime : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
};