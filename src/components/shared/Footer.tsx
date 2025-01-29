"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import ContactForm from "@/components/template/form/ContactForm";
import { footerData } from "@/constants";

const ImportantLinks = ({
  href,
  text,
}: {
  href: string;
  text: string | undefined;
}) => {
  return (
    <li className="mb-2 hover:text-gray-500">
      {href.startsWith("/") ? (
        <Link href={href} className="flex md:text-lg text-base gap-2 items-center">
          <ArrowRightCircle /> {text}
        </Link>
      ) : (
        <a className="flex md:text-lg text-base gap-2 items-center" href={href}>
          <ArrowRightCircle /> {text}
        </a>
      )}
    </li>
  );
};

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className=" text-white text-xl bg-gray-900 py-8">
      {footerData.map((data) => (
        <div
          key={data.id}
          className={`max-w-[1350px] mx-auto grid grid-cols-4 gap-10 px-4 lg:px-20 md:px-14 xl:px-[122px] ${
            pathname === "/contact" && "py-4"
          }`}
        >
          {pathname !== "/contact" && (
            <div className="col-span-4 md:col-span-2">
              <ContactForm />
            </div>
          )}

          <div
            className={`col-span-4 py-4 text-center text-gray-300 ${
              pathname === "/contact" ? "md:-col-span-4" : "md:col-span-2"
            }`}
          >
            <h2 className={`font-edu-nsw mb-3 text-3xl`}>{data.heading}</h2>
            <h3 className="text-2xl mb-3">{data.subHeading}</h3>
            <p className="md:first-letter:text-5xl md:text-xl first-letter:text-3xl text-lg px-7">{data.paragraph}</p>
            <div className="flex gap-3 pt-8 justify-center items-center">
              {data.Icons.map((IconData) => (
                <Link key={IconData.id} href={IconData.href}>
                  <IconData.source size={25} />
                </Link>
              ))}
            </div>
            <div className="py-3 mt-5">
              <h3 className="py-5 md:text-3xl text-2xl">Other Links</h3>
              <ul className="grid grid-cols-2 place-items-center">
                {data.Links.map((link) => (
                  <ImportantLinks
                    key={link.id}
                    href={link.href}
                    text={link.text}
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center text-lg text-gray-300 col-span-4">
            <p className="mb-2">{data.CopyRight}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
