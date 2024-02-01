export default function TimeDisplay(date: string) {
  const newDate = new Date(date);

  const formattedDate = `${newDate.getFullYear()}-${String(
    newDate.getMonth() + 1,
  ).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')} ${String(
    newDate.getHours(),
  ).padStart(2, '0')}:${String(newDate.getMinutes()).padStart(2, '0')}`;

  return formattedDate;
}
