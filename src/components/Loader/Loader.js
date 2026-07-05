import { useEffect, useMemo, useState } from "react";
import { Braces, Code2, Layers3, Sparkles } from "lucide-react";

const Loader = ({ darkMode, onFinish }) => {
  const [step, setStep] = useState(0);

  const loadingSteps = useMemo(
    () => [
      "Designing interface",
      "Arranging components",
      "Polishing interactions",
      "Opening portfolio",
    ],
    []
  );

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setStep((currentStep) => Math.min(currentStep + 1, loadingSteps.length - 1));
    }, 650);

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2800);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(finishTimer);
    };
  }, [loadingSteps.length, onFinish]);

  return (
    <div className={`loader-container ${darkMode ? "dark" : "light"}`}>
      <div className="loader-content loader-redesign">
        <div className="loader-stage" aria-hidden="true">
          <div className="loader-orbit loader-orbit-one">
            <span />
          </div>
          <div className="loader-orbit loader-orbit-two">
            <span />
          </div>
          <div className="loader-orbit loader-orbit-three">
            <span />
          </div>

          <div className="loader-core">
            <div className="loader-core-glass">
              <Code2 size={42} />
            </div>
          </div>

          <div className="loader-floating-card loader-card-one">
            <Braces size={18} />
            <span>React</span>
          </div>
          <div className="loader-floating-card loader-card-two">
            <Layers3 size={18} />
            <span>UI</span>
          </div>
          <div className="loader-floating-card loader-card-three">
            <Sparkles size={18} />
            <span>MERN</span>
          </div>
        </div>

        <div className="loader-copy">
          <span className="loader-kicker">Tushar Tikia</span>
          <h2 className="loader-text">{loadingSteps[step]}</h2>
          <p className="loader-subtext">
            Preparing a cleaner, sharper portfolio experience.
          </p>
        </div>

        <div className="loader-step-list" aria-label="Loading status">
          {loadingSteps.map((item, index) => (
            <span
              key={item}
              className={`loader-step ${index <= step ? "active" : ""}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
