import { useEffect, useState } from "react";
import { Rocket, Sparkles, CircleDashed } from "lucide-react";


const Loader = ({ darkMode, onFinish }) => {
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing Portfolio...");

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoaderProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onFinish();
          }, 500);
          return 100;
        }

        const nextProgress = prev + 1;
        if (nextProgress === 20) setLoadingText("Loading Modules...");
  
        if (nextProgress === 90) setLoadingText("Ready for Launch...");

        return nextProgress;
      });
    }, 20);

    return () => clearInterval(progressInterval);
  }, [onFinish]);

  return (
    <div className={`loader-container ${darkMode ? "dark" : "light"}`}>
      <div className="loader-content">
        <div className="logo-loader">
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0
          }}>
            <CircleDashed
              size={120}
              className="spin-slow"
              color={darkMode ? "#4ade80" : "#16a34a"}
              style={{ opacity: 0.3 }}
            />
          </div>
          <Rocket className="rocket-icon" size={64} style={{ position: "relative", zIndex: 1 }} />
          <div className="sparkles">
            <Sparkles className="sparkle sparkle-1" size={24} />
            <Sparkles className="sparkle sparkle-2" size={20} />
            <Sparkles className="sparkle sparkle-3" size={18} />
          </div>
        </div>

        <h2 className="loader-text">{loadingText}</h2>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${loaderProgress}%` }}
          />
        </div>

        <p className="progress-text">{loaderProgress}%</p>

        <style>{`
          .spin-slow { animation: spin 8s linear infinite; }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
