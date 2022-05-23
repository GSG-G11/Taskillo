export default function statusColor(statusName) {
  switch (statusName) {
    case 'Todo':
      return 'todo';
    case 'In Progress':
      return 'progress';
    case 'Done':
      return 'done';
    case 'Cancelled':
      return 'cancelled';
    default:
      return 'todo';
  }
}
