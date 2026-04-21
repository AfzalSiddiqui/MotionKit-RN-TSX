import {useState, useEffect} from 'react';

export const useTypewriter = (fullText: string, speedMs: number = 50): string => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [fullText, speedMs]);

  return displayedText;
};

export default useTypewriter;
