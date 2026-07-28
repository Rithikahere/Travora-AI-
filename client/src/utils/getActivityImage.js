export default function getActivityImage(activity, destination) {
  const query = encodeURIComponent(`${activity} ${destination}`);

  return `https://picsum.photos/800/600?random=${query.length}`;
}