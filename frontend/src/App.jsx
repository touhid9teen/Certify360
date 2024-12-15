// App Component
import Button from './elements/Button';

function App() {
  return (
    <>
      <div>Do Start</div>
      <div className="border-2">
        <Button
          buttonType="submit"
          customClass="flex justify-center items-center !bg-primary font-semibold text-sm" // Ensure this is valid
        >
          Create Account
        </Button>
      </div>
    </>
  );
}

export default App;
