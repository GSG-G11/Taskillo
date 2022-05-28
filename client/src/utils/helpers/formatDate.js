export default function formatDate(taskDate) {
  let d = new Date(taskDate),
    mo = new Intl.DateTimeFormat('en', {
      month: 'short',
    }).format(d),
    da = new Intl.DateTimeFormat('en', {
      day: '2-digit',
    }).format(d);
  let getDateFormat = `${da}-${mo}`;
  return getDateFormat;
}
