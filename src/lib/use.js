export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);


export function relativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
  
    const diffMilliseconds = now - date;
    const diffSeconds = Math.floor(diffMilliseconds / 1000);
  
    if (diffSeconds < 60) {
      return "just now";
    } else if (diffSeconds < 3600) {
      const minutes = Math.floor(diffSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 86400) {
      const hours = Math.floor(diffSeconds / 3600);
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 604800) {
      const days = Math.floor(diffSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (diffSeconds < 2592000) {
      const weeks = Math.floor(diffSeconds / 604800);
      return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(diffSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
  }

 export function formatNumber(num) {
    const suffixes = ['', 'k', 'M', 'B', 'T', 'P', 'E', 'Z', 'Y'];
    if (num === 0) {
      return '0';
    }
    let magnitude = 0;
    while (Math.abs(num) >= 1000) {
      magnitude++;
      num /= 1000.0;
    }
    return num.toFixed(1) + suffixes[magnitude];
  }
  
  export function getRandomNumber(min, max) {
    // Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
    // To get a number between min (inclusive) and max (exclusive), we multiply by the range
    // and add the min value
    return Math.floor(Math.random() * (max - min) + min);
  }