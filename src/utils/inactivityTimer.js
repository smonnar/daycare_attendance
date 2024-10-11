export const initInactivityTimer = (callback, timeout) => {
    let timer;
  
    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(callback, timeout);
    };
  
    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keypress', resetTimer);
    window.addEventListener('touchstart', resetTimer);
  
    resetTimer();
  
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keypress', resetTimer);
      window.removeEventListener('touchstart', resetTimer);
      if (timer) clearTimeout(timer);
    };
  };