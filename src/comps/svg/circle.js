export default function Circle({ children, classNames, onClick }) {
  return (
    <div className={`circle ${classNames}`} onClick={onClick}>
      {children}
    </div>
  );
}
