const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

function getPageName(location) {
  const arr = location.pathname.split('/');
  return arr[1];
  
}

export { showFormattedDate, getPageName };
