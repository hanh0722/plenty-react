const getDate = () => {
  const currentDate = new Date();
  const firstDate = currentDate.getDate() - currentDate.getDay();
  const lastDate = firstDate + 4;
  return {
    getFirstDate: new Date(currentDate.setDate(firstDate)).toLocaleDateString(),
    getLastDate: new Date(currentDate.setDate(lastDate)).toLocaleDateString(),
  };
};

export default getDate;
