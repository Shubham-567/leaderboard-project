export const timeAgo = (timeStamp) => {
  const timeDiff =
    (new Date().getTime() - new Date(timeStamp).getTime()) / 1000;

  const minutes = Math.floor(timeDiff / 60);
  const hours = Math.floor(timeDiff / 3600);
  const days = Math.floor(timeDiff / 86400);

  if (days > 0) {
    return `${days}d ago`;
  } else if (hours > 0) {
    return `${hours}h ago`;
  } else if (minutes > 0) {
    return `${minutes}m ago`;
  } else {
    return "just now";
  }
};
