import Image from "next/image";
import Link from "next/link";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <Image
                className="rounded-full"
                src={TestimonialImg}
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>
            <p className="text-2xl font-bold text-gray-900">
              “以前我们每天花大量时间在清理广告、回答重复问题、同步信息。现在用
              Telemaster 的自动化 + AI 助理，先总结、再分流、最后一键执行，运营节奏更稳。”
            </p>
            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">社群运营负责人</span>{" "}
              <span className="text-gray-400">/</span>{" "}
              <Link className="text-blue-500" href="/use-cases">
                查看使用场景
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
