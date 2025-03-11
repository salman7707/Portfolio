"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";
import ContactForm from "@/components/template/form/ContactForm";
import { footerData } from "@/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
        <Link
          href={href}
          className="flex 2xl:text-xl md:text-lg text-base gap-2 items-center"
        >
          <ArrowRightCircle /> {text}
        </Link>
      ) : (
        <a
          className="flex 2xl:text-xl md:text-lg text-base gap-2 items-center"
          href={href}
        >
          <ArrowRightCircle /> {text}
        </a>
      )}
    </li>
  );
};

const Footer = () => {
  const pathname = usePathname();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className=" text-white text-xl bg-gray-900 py-8">
      {footerData.map((data) => (
        <div
          key={data.id}
          className={`max-w-[1350px] mx-auto grid grid-cols-4 gap-10 px-4 lg:px-20 md:px-14 xl:px-[122px] 1xl:px-[75px] 2xl:px-0 items-center justify-center ${
            pathname === "/contact" && "py-4"
          }`}
        >
          {pathname !== "/contact" && (
            <motion.div
              ref={ref}
              initial={{ x: -70, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -70, opacity: 0 }}
              transition={{ delay: 0.7 }}
              className="col-span-4 md:col-span-2"
            >
              <ContactForm />
            </motion.div>
          )}

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
            className={`col-span-4 py-4 text-center text-gray-300 ${
              pathname === "/contact" ? "md:-col-span-4" : "md:col-span-2"
            }`}
          >
            <h2 className={`font-edu-nsw mb-3 2xl:text-5xl text-3xl`}>
              {data.heading}
            </h2>
            <h3 className="2xl:text-3xl text-2xl mb-3">{data.subHeading}</h3>
            <p className="md:first-letter:text-5xl 2xl:first-letter:text-[55px] 2xl:text-[21px] md:text-xl first-letter:text-3xl text-lg px-7">
              {data.paragraph}
            </p>
            <div className="flex gap-3 pt-8 justify-center items-center">
              {data.Icons.map((IconData) => (
                <Link key={IconData.id} href={IconData.href}>
                  <IconData.source size={25} />
                </Link>
              ))}
            </div>
            <div className="py-3 mt-5">
              <h3 className="py-5 2xl:text-4xl md:text-3xl text-2xl">
                Other Links
              </h3>
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
          </motion.div>

          <div className="text-center 2xl:text-xl text-lg text-gray-300 col-span-4">
            <p className="mb-2">{data.CopyRight}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
