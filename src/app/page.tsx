import { Card, CardContent } from "@/components/ui/card";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] w-full grid grid-cols-1">
      <section className="relative flex gap-48 items-center justify-center flex-col min-h-[100dvh]">
        <div className="container h-[22rem] flex flex-col items-center justify-end gap-4">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-center">
            Himpunan Mahasiswa Informatika
          </h1>
          <h2 className="text-sm lg:text-lg text-center">
            Universitas Pembangunan Nasional Veteran Jakarta
          </h2>
        </div>
        <div className="relative w-1/2">
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/MuYW2tzSyZQ?si=e0q3a1a9G0bMF-xl"
            thumbnailSrc="/assets/images/company_profile_thumbnail.webp"
            thumbnailAlt="Hero Video"
          />
          <HeroVideoDialog
            className="hidden dark:block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/MuYW2tzSyZQ?si=e0q3a1a9G0bMF-xl"
            thumbnailSrc="/assets/images/company_profile_thumbnail.webp"
            thumbnailAlt="Hero Video"
          />
        </div>
        <div className="absolute h-96 bg-gradient-to-t from-background from-10% -bottom-5 w-full z-10 pointer-events-none"></div>
      </section>
      {/* <section
        id="video-profile"
        className="w-full my-20 flex justify-center flex-col gap-8 items-center"
      >
        <h1 className="text-3xl lg:text-3xl font-extrabold text-center">
          Video Profil
        </h1>
        <div className="container flex justify-center">
          <div className="relative px-48">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/MuYW2tzSyZQ?si=e0q3a1a9G0bMF-xl"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/MuYW2tzSyZQ?si=e0q3a1a9G0bMF-xl"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
              thumbnailAlt="Hero Video"
            />
          </div>
        </div>
      </section> */}
      <section className="min-h-[100dvh] my-36">
        <h1 className="text-3xl lg:text-3xl font-extrabold text-center">
          Tentang Kabinet
        </h1>
      </section>
      <section className="min-h-[100dvh] my-12">
        <h1 className="text-3xl lg:text-3xl font-extrabold text-center">
          Program Kerja Unggulan
        </h1>
      </section>
      <section className="min-h-[100dvh] my-12">
        <h1 className="text-3xl lg:text-3xl font-extrabold text-center">
          Departemen dan Divisi
        </h1>
      </section>
      <section className="flex my-20 flex-col gap-8 items-center min-h-[50dvh]">
        <h1 className="text-3xl lg:text-3xl font-extrabold text-center">
          Hubungi Kami
        </h1>
        <Card className="container w-fit py-12 rounded-3xl">
          <CardContent className="w-fit flex justify-center items-center">
            {/* <div className="w-1/2 h-full"></div> */}
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-bold text-xl">John Doe</p>
                <p className="font-semibold">
                  Departemen Komunikasi dan Informasi
                </p>
              </div>
              <div>
                <p>example@hmifupnvj.com</p>
                <p>idline</p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <div className="flex gap-8 h-full items-center justify-center container">
          <div className="bg-slate-200 h-full rounded-xl w-full flex flex-col gap-2 items-center justify-center">
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-bold text-xl">John Doe</p>
                <p className="font-semibold">
                  Departemen Informasi dan Komunikasi
                </p>
              </div>
              <div>
                <p>example@hmifupnvj.com</p>
                <p>idline</p>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div> */}
      </section>
    </div>
  );
}
