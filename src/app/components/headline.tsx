import Link from "next/link";

export default function Headline(props: any) {
  return (
    <Link href={props.href}>
      <div className="relative z-50 h-8 w-[548px] bg-gradient-to-r from-[#A041FF] via-transparent via-10%"></div>
      <div className="relative z-50 mt-[-32px] h-8 w-[548px] bg-gradient-to-l from-[#A041FF] via-transparent via-10%"></div>
      <div className="relative z-0 mt-[-32px] w-[548px] overflow-x-hidden bg-[#A041FF]">
        <p className="animate-marqueeSmall font-serif text-[18px] whitespace-nowrap pb-2 pt-1.5">
          {props.text1} {props.text2} {props.text3} {props.text4}
        </p>
      </div>
    </Link>
  );
}
