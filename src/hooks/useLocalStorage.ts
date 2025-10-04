import { useState } from 'react';

/**
 * Custom hook for using localStorage with React state
 * Handles SSR compatibility and localStorage errors gracefully
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Return initial value during SSR
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue] as const;
}

/**
 * Hook specifically for form data persistence
 */
export function useFormPersistence() {
  const [prompt, setPrompt] = useLocalStorage('ai-generator-prompt', '');
  const [contentType, setContentType] = useLocalStorage('ai-generator-content-type', 'blog-post');
  const [tone, setTone] = useLocalStorage('ai-generator-tone', 'professional');
  const [length, setLength] = useLocalStorage('ai-generator-length', 'medium');
  const [generatedContent, setGeneratedContent] = useLocalStorage('ai-generator-output', '');

  // Clear all stored data
  const clearStorage = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem('ai-generator-prompt');
        window.localStorage.removeItem('ai-generator-content-type');
        window.localStorage.removeItem('ai-generator-tone');
        window.localStorage.removeItem('ai-generator-length');
        window.localStorage.removeItem('ai-generator-output');
        
        // Reset state
        setPrompt('');
        setContentType('blog-post');
        setTone('professional');
        setLength('medium');
        setGeneratedContent('');
      } catch (error) {
        console.warn('Error clearing localStorage:', error);
      }
    }
  };

  return {
    prompt,
    setPrompt,
    contentType,
    setContentType,
    tone,
    setTone,
    length,
    setLength,
    generatedContent,
    setGeneratedContent,
    clearStorage,
  };
}