import Link from "next/link";
export default function Navbar() {
  return (
    <div className=" bg-gradient-to-b from-[#A041FF] via-[#612dff60] via-70% to-[#ffffff00] h-24 w-full">
      <div className="px-12 py-4 w-full flex flex-row justify-between">
        <h1 className="text-white text-[32px] font-mono font-semibold">
          Marin Kitagawa
        </h1>
        <Link href="/contact">
          <div className="text-white mt-2 font-bold font-mono text-[20px] bg-[#5F13FF] rounded-md drop-shadow-xl hover:drop-shadow-none hover:scale-105 transition-all duration-500">
            <h1 className="pt-1.5 pb-1 px-8">Contact</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
