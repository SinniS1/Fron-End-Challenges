import "./App.css";
import img from "./assets/image-qr-code.png";
function App() {
  return (
    <>
      <div className="container mx-auto h-screen bg-blue-200 grid place-items-center">
        <div className="bg-white border p-4 rounded-xl flex flex-col justify-center items-center w-56">
          <img src={img} alt="qr-code-image" className="w-56 rounded-lg" />
          <div className="grid place-items-center gap-2 text-center m-4 w-full">
            <span className="font-bold text-sm">{`Improve your front-end skills by building projects`}</span>
            <span className="text-xs">
              {`Scan the QR code to visit Frontend Mentor and take your coding skills to the next level`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
