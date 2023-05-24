import React from "react";
const A_FEATURES = [
  {
    color: "bg-white",
    name: "Miễn phí vận chuyển",
    desc: "Miễn phí vận chuyển trên toàn quốc",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.42,27.96h2.27c2.49,0,4.53-2.04,4.53-4.53V.75H9.82C6.42.75,3.45,2.63,1.91,5.4m-1.16,29.36c0,3.76,3.04,6.8,6.8,6.8h2.27c0-2.49,2.04-4.53,4.53-4.53s4.53,2.04,4.53,4.53h9.07c0-2.49,2.04-4.53,4.53-4.53s4.53,2.04,4.53,4.53h2.27c3.76,0,6.8-3.04,6.8-6.8v-6.8h-6.8c-1.25,0-2.27-1.02-2.27-2.27v-6.8c0-1.25,1.02-2.27,2.27-2.27h2.92l-3.88-6.78c-.82-1.41-2.31-2.29-3.95-2.29h-4.17v15.87c0,2.49-2.04,4.53-4.53,4.53h-2.27m-9.07,18.14c2.5,0,4.53-2.03,4.53-4.53s-2.03-4.53-4.53-4.53-4.53,2.03-4.53,4.53,2.03,4.53,4.53,4.53Zm18.14,0c2.5,0,4.53-2.03,4.53-4.53s-2.03-4.53-4.53-4.53-4.53,2.03-4.53,4.53,2.03,4.53,4.53,4.53Zm13.6-22.67v4.53h-6.8c-1.25,0-2.27-1.02-2.27-2.27v-6.8c0-1.25,1.02-2.27,2.27-2.27h2.92l3.88,6.8ZM.75,14.35h13.6M.75,21.16h9.07M.75,27.96h4.53" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    color: "bg-white",
    name: "Đổi trả trong 7 ngày",
    desc: "Nếu hàng có lỗi từ nhà sản xuất, nhân viên tư vấn size không vừa",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m46.1,30.23c0,8.77-7.1,15.87-15.87,15.87l2.38-3.97M.75,16.62C.75,7.85,7.85.75,16.62.75l-2.38,3.97m13.04,1.59l9.02,5.21,8.93-5.19m-8.93,14.42v-9.25m-2.13-10.27l-5.44,3.02c-1.22.68-2.24,2.4-2.24,3.81v5.76c0,1.41,1,3.13,2.24,3.81l5.44,3.02c1.16.66,3.06.66,4.24,0l5.44-3.02c1.22-.68,2.24-2.4,2.24-3.81v-5.76c0-1.41-1-3.13-2.24-3.81l-5.44-3.02c-1.16-.63-3.06-.63-4.24,0ZM1.54,31.25l9,5.21,8.96-5.19m-8.96,14.42v-9.25m-2.11-10.27l-5.44,3.02c-1.22.68-2.24,2.4-2.24,3.81v5.76c0,1.41,1,3.13,2.24,3.81l5.44,3.02c1.16.66,3.06.66,4.24,0l5.44-3.02c1.22-.68,2.24-2.4,2.24-3.81v-5.76c0-1.41-1-3.13-2.24-3.81l-5.44-3.02c-1.18-.63-3.08-.63-4.24,0Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    color: "bg-white",
    name: "Giao hàng nhanh",
    desc: "Nhận hàng sau 2 đến 3 ngày đặt",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.42,46.1c12.52,0,22.67-10.15,22.67-22.67S35.95.75,23.42.75.75,10.9.75,23.42s10.15,22.67,22.67,22.67ZM14.35,3.02h2.27c-4.42,13.24-4.42,27.57,0,40.81h-2.27M30.23,3.02c4.42,13.24,4.42,27.57,0,40.81M3.02,32.49v-2.27c13.24,4.42,27.57,4.42,40.81,0v2.27M3.02,16.62c13.24-4.42,27.57-4.42,40.81,0" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
  {
    color: "bg-white",
    name: "Trả tiền khi nhận hàng",
    desc: "Nhận hàng kiểm tra ưng ý mới thanh toán",
    svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m17.76,27.39c0,2.2,1.7,3.97,3.79,3.97h4.26c1.81,0,3.29-1.54,3.29-3.47,0-2.06-.91-2.81-2.24-3.29l-6.82-2.38c-1.34-.48-2.24-1.2-2.24-3.29,0-1.9,1.47-3.47,3.29-3.47h4.26c2.09,0,3.79,1.77,3.79,4.51m-5.69-6.76v20.41m22.67-10.2c0,12.52-10.16,22.67-22.67,22.67S.75,35.94.75,23.42,10.91.75,23.42.75m11.34,2.27v9.07h9.07m2.27-11.34l-11.34,11.34" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,
  },
];

export function SectionTermService() {
  return (
    <div className="container flex flex-grow xl:grid xl:grid-cols-4 xl:gap-3 relative min-w-0 min-h-0 overflow-x-scroll scrollbar-hide mt-6">
      {A_FEATURES.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-nowrap items-center gap-4 p-5 rounded-2xl ${item.color} dark:bg-opacity-0`}
          >
            <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
            <div className="w-max">
              <p className="font-bold text-lg text-slate-900 dark:text-white">{item.name}</p>
              <p className="text-slate-500 mt-0.5 text-sm">{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
