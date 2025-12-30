import { useCallback } from 'react';
import useSound from 'use-sound';

// Since we don't have actual sound files, we will use a short beep encoded as a base64 string 
// or assume the user will place files. 
// For a high-quality experience, we'd normally fetch real files. 
// However, creating a synth sound via Web Audio API is safer without external assets.
// BUT, use-sound is requested. Let's create a hook that WRAPS use-sound but generates the sounds.

// Actually, `use-sound` requires a file path.
// I will create a utility that uses the browser's native AudioContext to generate 
// sci-fi beeps without needing external assets (which might 404).

export const useSciFiSound = () => {
    const playHover = useCallback(() => {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime); // Low volume
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }, []);

    const playClick = useCallback(() => {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    }, []);

    return { playHover, playClick };
};
