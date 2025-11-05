export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🧳</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  const message =
    percentage === 100
      ? "You got everything! Ready to go ✈️"
      : `💼 You have ${numItems} items in your packing list, ${numPacked} of them are packed (${percentage}%)`;

  return (
    <footer className="stats">
      <em>{message}</em>
    </footer>
  );
}
