const SellAdExp = () => {
  return (
    <div className="flex flex-row justify-evenly py-9 px-24 text-gray-700 text-xs">
      <div>
        <span>Sell from </span>
        <span className="font-bold">€1,500</span>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <span>Advertise on </span>
        <span>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 257 82"
            width="65"
            height="20"
          >
            <defs>
              <image
                width="257"
                height="82"
                id="img1"
                href="data:image/png;base64,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"
              />
            </defs>
            <use id="Background" href="#img1" x="0" y="0" />
          </svg>
        </span>
        <span>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 257 82"
            width="65"
            height="20"
          >
            <defs>
              <image
                width="246"
                height="50"
                id="img1"
                href="data:image/png;base64,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"
              />
            </defs>
            <use id="Background" href="#img1" x="0" y="0" />
          </svg>
        </span>
      </div>
      <div className="flex flex-row space-x-2">
        <span>5 Star Experience</span>
        <span className="flex flex-row space-x-1">
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 31"
            width="13"
            height="13"
            className="fill-current text-teal"
          >
            <g id="Page 1">
              <path
                id="Path 1"
                class="shp0"
                d="M17 0.55L21.14 10.32L31.71 11.23C32.44 11.29 32.74 12.21 32.18 12.69L24.16 19.64L26.56 29.98C26.73 30.69 25.95 31.26 25.32 30.88L16.24 25.4L7.15 30.88C6.52 31.25 5.74 30.69 5.91 29.98L8.31 19.64L0.29 12.69C-0.27 12.2 0.03 11.29 0.76 11.23L11.34 10.32L15.47 0.55C15.75 -0.13 16.71 -0.13 17 0.55Z"
              />
            </g>
          </svg>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 31"
            width="13"
            height="13"
            className="fill-current text-teal"
          >
            <g id="Page 1">
              <path
                id="Path 1"
                class="shp0"
                d="M17 0.55L21.14 10.32L31.71 11.23C32.44 11.29 32.74 12.21 32.18 12.69L24.16 19.64L26.56 29.98C26.73 30.69 25.95 31.26 25.32 30.88L16.24 25.4L7.15 30.88C6.52 31.25 5.74 30.69 5.91 29.98L8.31 19.64L0.29 12.69C-0.27 12.2 0.03 11.29 0.76 11.23L11.34 10.32L15.47 0.55C15.75 -0.13 16.71 -0.13 17 0.55Z"
              />
            </g>
          </svg>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 31"
            width="13"
            height="13"
            className="fill-current text-teal"
          >
            <g id="Page 1">
              <path
                id="Path 1"
                class="shp0"
                d="M17 0.55L21.14 10.32L31.71 11.23C32.44 11.29 32.74 12.21 32.18 12.69L24.16 19.64L26.56 29.98C26.73 30.69 25.95 31.26 25.32 30.88L16.24 25.4L7.15 30.88C6.52 31.25 5.74 30.69 5.91 29.98L8.31 19.64L0.29 12.69C-0.27 12.2 0.03 11.29 0.76 11.23L11.34 10.32L15.47 0.55C15.75 -0.13 16.71 -0.13 17 0.55Z"
              />
            </g>
          </svg>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 31"
            width="13"
            height="13"
            className="fill-current text-teal"
          >
            <g id="Page 1">
              <path
                id="Path 1"
                class="shp0"
                d="M17 0.55L21.14 10.32L31.71 11.23C32.44 11.29 32.74 12.21 32.18 12.69L24.16 19.64L26.56 29.98C26.73 30.69 25.95 31.26 25.32 30.88L16.24 25.4L7.15 30.88C6.52 31.25 5.74 30.69 5.91 29.98L8.31 19.64L0.29 12.69C-0.27 12.2 0.03 11.29 0.76 11.23L11.34 10.32L15.47 0.55C15.75 -0.13 16.71 -0.13 17 0.55Z"
              />
            </g>
          </svg>
          <svg
            version="1.2"
            baseProfile="tiny-ps"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33 31"
            width="13"
            height="13"
            className="fill-current text-teal"
          >
            <g id="Page 1">
              <path
                id="Path 1"
                class="shp0"
                d="M17 0.55L21.14 10.32L31.71 11.23C32.44 11.29 32.74 12.21 32.18 12.69L24.16 19.64L26.56 29.98C26.73 30.69 25.95 31.26 25.32 30.88L16.24 25.4L7.15 30.88C6.52 31.25 5.74 30.69 5.91 29.98L8.31 19.64L0.29 12.69C-0.27 12.2 0.03 11.29 0.76 11.23L11.34 10.32L15.47 0.55C15.75 -0.13 16.71 -0.13 17 0.55Z"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default SellAdExp
