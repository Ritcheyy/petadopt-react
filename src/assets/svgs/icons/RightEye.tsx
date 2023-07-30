const RightEye = (props: { className?: string }) => (
  <svg
    className={props.className}
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="6.32635"
      cy="6.32635"
      r="6.32635"
      transform="matrix(-1 0 0 1 13.5643 0.80864)"
      fill="url(#paint0_linear_405_436)"
    />
    <circle
      cx="3.16317"
      cy="3.16317"
      r="3.16317"
      transform="matrix(-1 0 0 1 10.4011 3.97182)"
      fill="#261B12"
    />
    <circle
      opacity="0.7"
      cx="1.58159"
      cy="1.58159"
      r="1.58159"
      transform="matrix(-1 0 0 1 7.23798 3.97182)"
      fill="#DADBE3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_405_436"
        x1="1.72537"
        y1="1.15024"
        x2="13.8029"
        y2="11.5024"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#23A7E8" />
        <stop offset="1" stopColor="#219BD1" />
      </linearGradient>
    </defs>
  </svg>
);

export default RightEye;
