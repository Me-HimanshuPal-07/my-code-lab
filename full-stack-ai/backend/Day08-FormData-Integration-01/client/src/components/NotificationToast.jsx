import React, { useEffect } from "react";

const NotificationToast = ({ alert, onDismiss, appName = "ProfileApp", duration = 4000 }) => {
  useEffect(() => {
    if (!alert) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [alert, onDismiss, duration]);

  if (!alert) return null;

  return (
    <>
      <style>{`
        @keyframes notifDrop {
          0% { transform: translate(-50%, -120%); opacity: 0; }
          8% { transform: translate(-50%, 0); opacity: 1; }
          92% { transform: translate(-50%, 0); opacity: 1; }
          100% { transform: translate(-50%, -120%); opacity: 0; }
        }
      `}</style>

      <div
        role="alert"
        onClick={onDismiss}
        style={{
          position: "fixed",
          top: "calc(env(safe-area-inset-top, 0px) + 12px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: "calc(100% - 24px)",
          maxWidth: "380px",
          boxSizing: "border-box",
          zIndex: 9999,
          animation: `notifDrop ${duration}ms ease forwards`,
        }}
        className="cursor-pointer rounded-[22px] border border-white/40 bg-white/85 p-3 shadow-2xl ring-1 ring-black/5 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] ${
              alert.type === "success" ? "bg-emerald-500" : "bg-red-500"
            }`}
          >
            {alert.type === "success" ? (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12.5l4 4L19 6.5"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4.5M12 16h.01"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-[13px] font-semibold text-slate-900">
                {appName}
              </p>
              <span className="shrink-0 text-[11px] font-medium text-slate-400">
                now
              </span>
            </div>
            <p className="truncate text-[13px] leading-4 text-slate-600">
              {alert.message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationToast;
