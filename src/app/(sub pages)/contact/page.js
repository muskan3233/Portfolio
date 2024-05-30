import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">Welcome to my portfolio! I am passionate about crafting digital experiences. From sleek designs to robust functionalities, I strive for excellence. Let collaborate on your next project! Contact me on rehmat.shah1538@gmail.com and phone number: +91-8982470747 to discuss how I can bring your ideas to life. Looking forward to hearing from you soon.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
