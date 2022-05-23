export default function statusColor(statusName) {
  switch (statusName) {
    case 'To Do':
      return 'todo';
    case 'In Progress':
      return 'progress';
    case 'done':
      return 'done';
    case 'cancelled':
      return 'cancelled';
    default:
      return 'todo';
  }
}
