const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

function getPageName(location) {
  const arr = location.pathname.split("/");
  return arr[1];  
}

function stripHtml(htmlString) {
   let tmp = document.createElement("DIV");
   tmp.innerHTML = htmlString;
   return tmp.textContent || tmp.innerText || "";
}

function translate(locale, id, en) {
  return locale === "id" ? id : en;
}

export {
  showFormattedDate,
  getPageName,
  stripHtml,
  translate
};
