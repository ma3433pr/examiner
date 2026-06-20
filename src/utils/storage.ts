export const save = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  export const load = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
  
    if (!item) return null;
  
    return JSON.parse(item) as T;
  };
  
  export const remove = (key: string) => {
    localStorage.removeItem(key);
  };