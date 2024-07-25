
const PhoneMockup: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={308}
      height={632}
      fill="none"
      {...props}
    >
      <path
        stroke="#737373"
        d="M1 54.5C1 24.953 24.953 1 54.5 1h199C283.047 1 307 24.953 307 54.5v523c0 29.547-23.953 53.5-53.5 53.5h-199C24.953 631 1 607.047 1 577.5v-523Z"
      />
      <path
        fill="#fff"
        stroke="#737373"
        d="M12 55.5C12 30.923 31.923 11 56.5 11h24C86.851 11 92 16.149 92 22.5c0 8.008 6.492 14.5 14.5 14.5h95c8.008 0 14.5-6.492 14.5-14.5 0-6.351 5.149-11.5 11.5-11.5h24c24.577 0 44.5 19.923 44.5 44.5v521c0 24.577-19.923 44.5-44.5 44.5h-195C31.923 621 12 601.077 12 576.5v-521Z"
      />
      <foreignObject x="30" y="60" width="250" height="550">
        <div className="w-full h-full flex flex-col items-center p-4 bg-white rounded-md overflow-auto">
          <div className="flex flex-col items-center gap-y-[25px]">
            <div className="bg-[#EEEEEE] rounded-full w-[96px] h-[96px] mb-4"></div>
            <div className="flex flex-col items-center gap-y-[13px]">
              <div className="bg-[#EEEEEE] h-[16px] w-[160px] mb-2 rounded-[104px]"></div>
              <div className="bg-[#EEEEEE] h-[8px] w-[72px] mb-4 rounded-[104px]"></div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-y-[20px] mt-4"> */}
            <div className="bg-[#EEEEEE] h-[44px] w-full mb-4 mt-[56px] rounded-md"></div>
            <div className="bg-[#EEEEEE] h-[44px] w-full mb-4 rounded-md"></div>
            <div className="bg-[#EEEEEE] h-[44px] w-full mb-4 rounded-md"></div>
            <div className="bg-[#EEEEEE] h-[44px] w-full mb-4 rounded-md"></div>
            <div className="bg-[#EEEEEE] h-[44px] w-full mb-4 rounded-md"></div>
          {/* </div> */}
        </div>
      </foreignObject>

    </svg>
  )
}
export default PhoneMockup