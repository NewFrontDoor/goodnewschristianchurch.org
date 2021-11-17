const baseColors = {
  background: '#ecebef',
  accent: '#6b6f73',
  primary: '#6e6e71',
  muted: '#5c646d',
  text: '#171315'
};
  
  export default {
    ...baseColors,
    // This is a workaround for consuming our own defined values
    active: baseColors.accent
  };

  