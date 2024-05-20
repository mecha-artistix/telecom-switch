function AccountingIcon(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 51 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_245_127)">
        <mask
          id="mask0_245_127"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="50"
          height="50"
        >
          <path
            d="M0.857422 0.842773H49.1574V49.1428H0.857422V0.842773Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_245_127)">
          <path
            d="M25.0096 0.84082C11.6695 0.84082 0.855469 11.6549 0.855469 24.995C0.855469 38.3351 11.6695 49.1492 25.0096 49.1492C38.3497 49.1492 49.1638 38.3351 49.1638 24.995C49.1638 11.6549 38.3497 0.84082 25.0096 0.84082ZM25.0096 7.60436C29.8128 7.60436 33.7055 11.4971 33.7055 16.3002C33.7055 21.1033 29.8128 24.996 25.0096 24.996C20.2065 24.996 16.3138 21.1023 16.3138 16.3002C16.3138 11.4981 20.2065 7.60436 25.0096 7.60436ZM25.0096 43.3533C18.8357 43.3533 13.3878 40.2966 10.0596 35.6242C13.3878 30.9518 18.8357 27.895 25.0096 27.895C31.1831 27.895 36.6315 30.9518 39.9596 35.6242C36.6315 40.2966 31.1831 43.3533 25.0096 43.3533Z"
            fill="#1C77F6"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_245_127">
          <rect
            width="50"
            height="50"
            fill="white"
            transform="translate(0.0136719)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default AccountingIcon;
