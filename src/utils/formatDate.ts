const formatDate = (date: string): string =>
  Intl.DateTimeFormat('en-GB').format(Date.parse(date));

export default formatDate;
