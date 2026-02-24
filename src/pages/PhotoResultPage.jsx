import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';

export default function PhotoResultPage() {
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      {!capturedImage ? (
        <>
          <h1 className="text-2xl font-bold mb-6 text-cyan-400">
            Capture Employee Photo
          </h1>

          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="rounded-xl shadow-lg"
            videoConstraints={{
              facingMode: 'user',
            }}
          />

          <button
            onClick={capture}
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
          >
            Capture
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-6 text-green-400">
            Photo Captured ✅
          </h1>

          <img
            src={capturedImage}
            alt="Captured"
            className="rounded-xl shadow-lg mb-6"
          />

          <div className="flex gap-4">
            <button
              onClick={() => setCapturedImage(null)}
              className="px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
            >
              Retake
            </button>

            <button
              onClick={() => navigate('/list')}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition"
            >
              Back to Dashboard
            </button>
          </div>
        </>
      )}
    </div>
  );
}
