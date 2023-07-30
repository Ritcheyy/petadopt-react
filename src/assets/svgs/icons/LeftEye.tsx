const LeftEye = (props: { className?: string }) => (
  <svg
    className={props.className}
    width="14"
    height="13"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="6.80749"
      cy="6.50217"
      r="6.32635"
      fill="url(#paint0_linear_405_447)"
    />
    <circle cx="6.80746" cy="6.50218" r="3.16317" fill="#261B12" />
    <circle
      opacity="0.7"
      cx="8.38908"
      cy="4.92059"
      r="1.58159"
      fill="#DADBE3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_405_447"
        x1="2.20651"
        y1="1.32607"
        x2="14.2841"
        y2="11.6783"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#23A7E8" />
        <stop offset="1" stopColor="#219BD1" />
      </linearGradient>
    </defs>
  </svg>
);

export default LeftEye;
