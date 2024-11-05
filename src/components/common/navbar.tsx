"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  CSSProperties,
  ElementRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import usePageLoaded from "@/hooks/use-page-loaded";
import { motion } from "framer-motion";
import PulsatingButton from "../ui/pulsating-button";

const menuList = [
  {
    href: "/",
    label: "Beranda",
  },
  {
    href: "/about",
    label: "Tentang HMIF",
  },
];

function findMenuIndex(pathname: string) {
  return menuList.findIndex((item) => item.href === pathname);
}

export default function Navbar() {
  const isLoaded = usePageLoaded();
  const pathname = usePathname();
  const menuRefs = useRef<Array<ElementRef<"a"> | null>>([]);
  const [indicatorStyle, setIndicatorStyle] = useState<Partial<CSSProperties>>({
    opacity: 0,
  });

  const updateIndicator = useCallback(
    (opacity?: number) => {
      const index = findMenuIndex(pathname);
      const currentItem = menuRefs.current[index];
      if (currentItem) {
        setIndicatorStyle({
          opacity: opacity ?? 1,
          width: `${currentItem.offsetWidth}px`,
          transform: `translateX(${currentItem.offsetLeft}px) translateY(0px)`,
        });
      }
    },
    [pathname]
  );

  useEffect(() => {
    if (isLoaded === true) {
      setTimeout(() => {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 1 }));
      }, 150 * (findMenuIndex(pathname) + 1));
    }
  }, [isLoaded, pathname]);

  useEffect(() => {
    // Set the initial indicator position and width based on the first item
    updateIndicator();
  }, [updateIndicator]);

  return (
    <div className="flex w-screen items-center justify-center py-8 fixed z-50">
      <div className="container flex items-center justify-between relative">
        <motion.div
          className="z-50"
          initial={{ x: -360, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              ease: "anticipate",
            },
          }}
        >
          <Link href="/" className="flex h-fit w-fit">
            <Image
              src="/assets/images/logo_hima.webp"
              width={50}
              height={50}
              priority
              alt="Logo Himpunan Mahasiswa Informatika Universitas Pembangunan Nasional Veteran Jakarta"
            />
            <div className="flex items-center gap-2">
              <Image
                src="/assets/images/logo_lentera_mantra.webp"
                width={50}
                height={50}
                priority
                alt="Logo Himpunan Mahasiswa Informatika Universitas Pembangunan Nasional Veteran Jakarta"
              />
              <div className="flex flex-col">
                <p className="text-sm">Kabinet</p>
                <p className="font-semibold text-sm">Lentera Mantra 2024</p>
              </div>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.15,
              duration: 0.6,
              ease: "anticipate",
            },
          }}
          className="absolute w-full flex justify-center items-center "
        >
          <ul className="overflow-hidden flex gap-2 items-center text-sm whitespace-nowrap bg-white/80 border border-slate-100 backdrop-blur py-6 px-4 rounded-full">
            <div
              style={indicatorStyle}
              className="absolute py-[0.6rem] ease-out -z-20 bottom-0 h-full left-0 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <div className="bg-custom_primary w-full h-[41px] rounded-full"></div>
            </div>
            {menuList.map((item, idx) => {
              return (
                <li key={item.label}>
                  <Link
                    ref={(el) => {
                      if (menuRefs.current) {
                        menuRefs.current[idx] = el;
                      }
                    }}
                    onClick={() => {
                      updateIndicator();
                    }}
                    className="group py-3 px-6 relative"
                    href={item.href}
                  >
                    <div
                      className={`absolute top-0 -z-40 rounded-full transition-colors h-full w-full ${
                        item.href === pathname
                          ? "text-white"
                          : "text-slate-500 group-hover:bg-slate-100"
                      }`}
                    ></div>
                    <span
                      className={`z-50  ${
                        item.href === pathname
                          ? "text-white"
                          : "text-slate-500 "
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.25,
              duration: 0.6,
              ease: "anticipate",
            },
          }}
        >
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdzjlkLgf_NQdiybQYDcoXO-JxRtgLJFJ4eFeNsmYbX9ltrlQ/viewform"
          >
            <PulsatingButton
              className="text-xs font-bold bg-custom_tertiary"
              pulseColor="#ff0072"
            >
              Daftar HMIF, Yuk!
            </PulsatingButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
