import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type ManekiNekoScrollTopProps = {
  enableScrollToTop: boolean
  showButton: boolean
  size: number
  textColor: string
  textSize: number
  buttonText: string
  fontFamily: string
  buttonMarginTop: number
  backgroundColor: string
  ariaLabel: string
}

/**
 * Marketplace-ready component ownership notes:
 * - Self-contained SVG and animation (no external dependencies)
 * - No global CSS selectors
 * - Safe browser guard around window usage
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 * @framerIntrinsicWidth 180
 * @framerIntrinsicHeight 180
 */
export function ManekiNekoScrollTop(props: Partial<ManekiNekoScrollTopProps>) {
  const {
    enableScrollToTop = true,
    showButton = true,
    size = 85,
    textColor = "#ffffff",
    textSize = 14,
    buttonText = "SCROLL TO TOP",
    fontFamily = "Arial, sans-serif",
    buttonMarginTop = 16,
    backgroundColor = "transparent",
    ariaLabel = "Maneki Neko scroll to top",
  } = props

  const handleClick = React.useCallback(() => {
    if (!enableScrollToTop) return
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [enableScrollToTop])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        overflow: "hidden",
        backgroundColor,
      }}
    >
      <svg
        viewBox="0 0 180 180"
        width={size}
        height={size}
        style={{ display: "block", flexShrink: 0 }}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={ariaLabel}
      >
        <ellipse cx="90" cy="125" rx="45" ry="35" fill="#ffffff" stroke="#000" strokeWidth="3" />
        <circle cx="90" cy="75" r="40" fill="#ffffff" stroke="#000" strokeWidth="3" />
        <polygon points="55,50 75,20 85,50" fill="#ffffff" stroke="#000" strokeWidth="3" />
        <polygon points="95,50 105,20 125,50" fill="#ffffff" stroke="#000" strokeWidth="3" />
        <polygon points="67,47 75,30 80,47" fill="#ffb6c1" />
        <polygon points="100,47 105,30 113,47" fill="#ffb6c1" />
        <circle cx="75" cy="75" r="5" fill="#000" />
        <circle cx="105" cy="75" r="5" fill="#000" />
        <circle cx="90" cy="90" r="4" fill="#ff9999" />
        <line x1="60" y1="85" x2="80" y2="90" stroke="#000" strokeWidth="2" />
        <line x1="100" y1="90" x2="120" y2="85" stroke="#000" strokeWidth="2" />
        <rect x="65" y="105" width="50" height="10" fill="#d40000" />
        <circle cx="90" cy="118" r="7" fill="#ffd700" stroke="#000" strokeWidth="2" />
        <circle cx="90" cy="135" r="20" fill="#ffd700" stroke="#000" strokeWidth="2" />
        <text x="90" y="142" fontSize="14" textAnchor="middle" fill="#000" fontFamily="Arial">
          福
        </text>
        <ellipse cx="144" cy="100" rx="14" ry="20" fill="#ffffff" stroke="#000" strokeWidth="3">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 144 100;25 144 100;0 144 100"
            dur="1.1s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.5;1"
            keySplines="0.42 0 0.58 1;0.42 0 0.58 1"
          />
        </ellipse>
      </svg>

      {showButton && (
        <button
          type="button"
          onClick={handleClick}
          disabled={!enableScrollToTop}
          aria-label={buttonText}
          style={{
            marginTop: buttonMarginTop,
            fontFamily,
            fontSize: textSize,
            letterSpacing: 1,
            textAlign: "center",
            color: textColor,
            background: "none",
            border: "none",
            padding: 0,
            cursor: enableScrollToTop ? "pointer" : "not-allowed",
            userSelect: "none",
            WebkitTapHighlightColor: "transparent",
            opacity: enableScrollToTop ? 1 : 0.45,
          }}
          title={enableScrollToTop ? "Scroll to top" : "Scroll to top disabled"}
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}

ManekiNekoScrollTop.defaultProps = {
  enableScrollToTop: true,
  showButton: true,
  size: 85,
  textColor: "#ffffff",
  textSize: 14,
  buttonText: "SCROLL TO TOP",
  fontFamily: "Arial, sans-serif",
  buttonMarginTop: 16,
  backgroundColor: "transparent",
  ariaLabel: "Maneki Neko scroll to top",
}

addPropertyControls(ManekiNekoScrollTop, {
  size: {
    type: ControlType.Number,
    defaultValue: 85,
    min: 40,
    max: 260,
    title: "Size",
    step: 1,
  },
  showButton: {
    type: ControlType.Boolean,
    defaultValue: true,
    title: "Show Button",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  enableScrollToTop: {
    type: ControlType.Boolean,
    defaultValue: true,
    title: "Enable Scroll",
    enabledTitle: "On",
    disabledTitle: "Off",
  },
  buttonText: {
    type: ControlType.String,
    defaultValue: "SCROLL TO TOP",
    title: "Button Text",
    hidden: (props) => !props.showButton,
  },
  textColor: {
    type: ControlType.Color,
    defaultValue: "#ffffff",
    title: "Text Color",
    hidden: (props) => !props.showButton,
  },
  textSize: {
    type: ControlType.Number,
    defaultValue: 14,
    min: 10,
    max: 30,
    title: "Text Size",
    hidden: (props) => !props.showButton,
  },
  fontFamily: {
    type: ControlType.String,
    defaultValue: "Arial, sans-serif",
    title: "Font Family",
    hidden: (props) => !props.showButton,
  },
  buttonMarginTop: {
    type: ControlType.Number,
    defaultValue: 16,
    min: 0,
    max: 100,
    title: "Button Gap",
    hidden: (props) => !props.showButton,
  },
  backgroundColor: {
    type: ControlType.Color,
    defaultValue: "transparent",
    title: "Background",
  },
  ariaLabel: {
    type: ControlType.String,
    defaultValue: "Maneki Neko scroll to top",
    title: "A11y Label",
  },
})
