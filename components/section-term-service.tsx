import Link from "next/link";
import React from "react";
const A_FEATURES = [
  {
    color: "bg-white",
    name: "BEConcept Furniture",
    desc: "Mua sắm nội thất cho tổ ấm của bạn",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m13.54,12.92l3.04-10.77h6.34v10.77h-9.38ZM30.89,2.15h-5.81v10.77h8.85l-3.04-10.77Zm-16.54,0h-6.27L2.7,12.92h8.6l3.04-10.77Zm30.87,10.77l-5.2-10.77h-6.89l3.04,10.77h9.05Zm-28.75,11.57c-2.77,0-5.03,2.22-5.03,4.94v10.41h10.05v-10.41c0-2.73-2.25-4.94-5.03-4.94Zm13.64,11.05h9.69v-9.69h-9.69v9.69Zm11.31-14.95c.69,0,1.35-.1,1.97-.28v19.54h-19.74v-10.41c0-3.91-3.22-7.1-7.18-7.1s-7.18,3.18-7.18,7.1v10.41h-4.31v-19.45c.51.12,1.05.19,1.61.19,2.57,0,4.71-1.33,5.81-3.38,1.09,2.05,3.23,3.38,5.81,3.38s4.71-1.33,5.8-3.38c1.09,2.05,3.23,3.38,5.81,3.38s4.71-1.33,5.8-3.38c1.09,2.05,3.23,3.38,5.81,3.38Zm-.54,3.11h-11.85c-.59,0-1.08.48-1.08,1.08v11.85c0,.59.48,1.08,1.08,1.08h11.85c.59,0,1.08-.48,1.08-1.08v-11.85c0-.59-.48-1.08-1.08-1.08ZM10.89,15.08H2.28c.46,1.97,2.16,3.35,4.31,3.35s3.85-1.38,4.31-3.35Zm7.3,3.35c2.15,0,3.85-1.38,4.31-3.35h-8.62c.46,1.97,2.16,3.35,4.31,3.35Zm11.61,0c2.15,0,3.85-1.38,4.31-3.35h-8.62c.46,1.97,2.16,3.35,4.31,3.35Zm11.61,0c2.15,0,3.85-1.38,4.31-3.35h-8.62c.46,1.97,2.16,3.35,4.31,3.35Zm6.43-4.98c.1.16.16.35.16.55,0,2.16-.94,4.02-2.46,5.2v22.8H2.82v-22.53C1.09,18.31,0,16.33,0,14c0-.03,0-.06,0-.09-.03-.21,0-.42.1-.62L6.75,0h34.62l6.42,13.29c.02.05.04.1.06.16Zm-14.72-11.29l3.04,10.77h9.05l-5.2-10.77h-6.89Zm-8.05,10.77h8.85l-3.04-10.77h-5.81v10.77Zm.42,2.15c.46,1.97,2.16,3.35,4.31,3.35s3.85-1.38,4.31-3.35h-8.62ZM16.59,2.15l-3.04,10.77h9.38V2.15h-6.34Zm-2.7,12.92c.46,1.97,2.16,3.35,4.31,3.35s3.85-1.38,4.31-3.35h-8.62Zm-11.18-2.15h8.6l3.04-10.77h-6.27L2.7,12.92Zm3.88,5.51c2.15,0,3.85-1.38,4.31-3.35H2.28c.46,1.97,2.16,3.35,4.31,3.35Zm14.9,11.01c0-2.73-2.25-4.94-5.03-4.94s-5.03,2.22-5.03,4.94v10.41h10.05v-10.41Zm21.9-9.13c-.62.18-1.28.28-1.97.28-2.57,0-4.71-1.33-5.81-3.38-1.09,2.05-3.23,3.38-5.8,3.38s-4.71-1.33-5.81-3.38c-1.09,2.05-3.23,3.38-5.8,3.38s-4.71-1.33-5.81-3.38c-1.09,2.05-3.23,3.38-5.81,3.38-.56,0-1.1-.07-1.61-.19v19.45h4.31v-10.41c0-3.91,3.22-7.1,7.18-7.1s7.18,3.18,7.18,7.1v10.41h19.74v-19.54Zm2.34-5.23h-8.62c.46,1.97,2.16,3.35,4.31,3.35s3.85-1.38,4.31-3.35Zm-4.85,8.62c.59,0,1.08.48,1.08,1.08v11.85c0,.59-.48,1.08-1.08,1.08h-11.85c-.59,0-1.08-.48-1.08-1.08v-11.85c0-.59.48-1.08,1.08-1.08h11.85Zm-1.08,2.15h-9.69v9.69h9.69v-9.69Z" stroke="grey" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    color: "bg-white",
    name: "BEConcept Design & Build",
    desc: "Bạn cần tư vấn?",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m27.77,44.67c-.38,0-.69-.31-.69-.69,0-7.05,3.76-11.46,4.99-12.7l-7.7-16.89-7.69,16.89c1.22,1.25,4.99,5.65,4.99,12.7,0,.38-.31.69-.69.69s-.69-.31-.69-.69c0-7.63-4.85-11.99-4.89-12.03-.23-.2-.3-.53-.17-.8l8.52-18.71c.11-.25.36-.4.63-.4h0c.27,0,.51.16.63.4l8.53,18.71c.13.28.06.6-.17.8-.05.04-4.89,4.43-4.89,12.03,0,.38-.31.69-.69.69Zm-2.85-13.4V12.72c0-.3-.25-.55-.55-.55s-.55.25-.55.55v18.54c0,.3.25.55.55.55s.55-.25.55-.55Zm-.55-2.17c-1.2,0-2.17.97-2.17,2.17s.97,2.17,2.17,2.17,2.17-.97,2.17-2.17-.97-2.17-2.17-2.17Zm-20.23-7.3s.08-3.43,2.99-6.03c2.84-2.54,7.32-3.52,13.34-2.93,7.28.72,12.96-.51,16.44-3.55,3-2.62,3.55-5.78,3.61-7.43.01-.3-.23-.56-.53-.57-.32-.01-.56.23-.57.53-.05,1.47-.54,4.29-3.23,6.64-3.24,2.83-8.64,3.97-15.61,3.28-6.35-.63-11.13.46-14.2,3.22-3.27,2.94-3.34,6.67-3.34,6.82,0,.3.24.55.54.55h0c.3,0,.55-.24.55-.54ZM41.8,0h-5.13v5.13h5.13V0ZM7.18,18.2H0v7.18h7.18v-7.18Zm30.15,2.94c.04-.06.03-.14-.03-.18L12.8,4.03c-.06-.04-.14-.03-.18.03-.04.06-.03.14.03.18l24.5,16.93s.05.02.07.02c.04,0,.08-.02.1-.05Zm-.1-1.42c-.74,0-1.34.6-1.34,1.35s.6,1.35,1.34,1.35,1.35-.6,1.35-1.35-.6-1.35-1.35-1.35ZM13.06,2.84c-.74,0-1.34.6-1.34,1.35s.6,1.35,1.34,1.35,1.35-.6,1.35-1.35-.6-1.35-1.35-1.35Zm2.31,45.16h18.04v-4.01H15.37v4.01Z" stroke="grey" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    color: "bg-white",
    name: "Tìm kiếm ý tưởng",
    desc: "Bạn cần ước lượng chi phí?",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m10.34,47.25h-1.92v-2.93c0-1.3-.31-2.6-.93-3.85l-3.11-6.32c-.78-1.59-.75-3.27.1-4.86l2.92-5.43c.67-1.24,1.01-2.53,1.01-3.82v-2.87h1.92v2.87c0,1.4-.37,2.79-1.09,4.14l-2.92,5.43c-.75,1.39-.78,2.86-.09,4.26l3.11,6.32c.66,1.35,1,2.74,1,4.14v2.93Zm3.19-2.93c0-1.3.31-2.6.93-3.85l3.11-6.32c.78-1.59.75-3.27-.11-4.86l-2.92-5.43c-.67-1.24-1.01-2.53-1.01-3.82v-2.87h-1.92v2.87c0,1.4.37,2.79,1.09,4.14l2.92,5.43c.75,1.39.78,2.86.09,4.26l-3.11,6.32c-.66,1.35-1,2.74-1,4.14v2.93h1.92v-2.93Zm-1.97-27.16h-1.15v30.08h1.15v-30.08Zm10.42-.48h0s0-.04,0-.07L16.98.43c-.08-.25-.46-.43-.9-.43H5.91c-.23,0-.44.05-.6.13,0,0,0,0,0,0-.04.02-.08.05-.12.07,0,0-.02.01-.03.02-.03.02-.05.04-.07.07,0,0-.02.02-.02.03-.02.03-.04.07-.05.1L.02,16.62s-.02.1-.02.14c0,.02,0,.03,0,.05,0,.03.01.06.02.08,0,.02.01.04.03.06.02.03.04.06.07.09.21.24.64.42,1.17.42h19.4c.76,0,1.34-.37,1.28-.78ZM.11,16.33l-.09.29c-.14.44.47.85,1.28.85h19.4c.81,0,1.41-.41,1.28-.85l-.09-.29m-4.83,31.67c1.43,0,.27-.75-1.15-.75H6.08c-1.43,0-2.58.75-1.15.75h12.12Z" stroke="grey" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
];

export function SectionTermService() {
  return (
    <div className="container flex flex-grow xl:grid xl:grid-cols-3 xl:gap-3 relative min-w-0 min-h-0 overflow-x-scroll scrollbar-hide mt-6">
      {A_FEATURES.map((item, index) => {
        return (
          <Link href="/">
            <div
              key={index}
              className={`flex flex-nowrap items-center gap-4 px-6 py-4 rounded-2xl ${item.color} dark:bg-opacity-0`}
            >
              <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
              <div className="w-max">
                <p className="font-bold text-lg text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-slate-500 mt-0.5 text-sm">{item.desc}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
