import StudentRecords from './components/StudentRecords.jsx';

export default function App() {
  return (
    <main className="container">
      <header>
        <h1>Student Records Portal</h1>
        <p className="subtitle">ANITS - Dept. of CSE (AI &amp; ML)</p>
      </header>
      <StudentRecords />
    </main>
  );
}
