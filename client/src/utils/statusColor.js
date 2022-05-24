export default function statusColor(statusName) {
  switch (statusName) {
    case 'Todo':
      return 'todo';
    case 'InProgress':
      return 'progress';
    case 'Done':
      return 'done';
    case 'Cancelled':
      return 'cancelled';
    default:
      return 'todo';
  }
}
