import css from './App.module.css';
// import Button from './components/Button/Button';
import ModalOn from './components/Modal/ModalOn';

function App() {
  return (
    <>
      <section className={css.container}>
        <h1>START PETLOVE SITE</h1>

        <ModalOn />
        {/* <Button variant="primary" text="Login" /> */}
        {/* <Button variant="secondary" text="Follow" /> */}
      </section>
    </>
  );
}

export default App;
