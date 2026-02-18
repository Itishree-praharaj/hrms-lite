export default function Card({ children }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4">
      {children}
    </div>
  );
}
