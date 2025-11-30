import React, {useState} from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16 mt-16">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 tracking-widest">
        ABOUT US
      </h1>

      {/* Brand Story */}
      <div className="text-center md:text-left mb-25">
        <h2 className="text-2xl font-semibold mb-4">Brand Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed">
          At Patel Clothes, we believe true luxury never fades. Each piece is
          crafted with premium fabrics and refined detailing, blending classic
          elegance with modern style. Designed to last beyond seasons, our
          collections celebrate timeless fashion that empowers confidence and
          creates a statement of enduring sophistication.
        </p>

        {showMore && (
          <p className="text-gray-600 max-w-3xl mx-auto md:mx-0 leading-relaxed mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sed convallis neque. Praesent luctus, ligula ut placerat tempor,
            lacus magna porta lorem, eget pulvinar mauris massa ut lectus.
            Nullam vel metus id elit pretium convallis. Integer pretium, felis
            in porttitor feugiat, ligula tortor porta turpis, id cursus justo
            lorem nec orci. Duis congue nibh vel urna sollicitudin, a pulvinar
            erat volutpat. Sed at felis non nulla tempor vehicula. Nam
            fringilla dictum ex, sit amet venenatis neque vestibulum ac.
          </p>
        )}

        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 py-2 border border-gray-400 rounded-lg text-gray-600 hover:bg-gray-100 transition"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-18">
        <h2 className="text-4xl md:text-4xl font-bold mb-18">CONTACT US</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <MapPin size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">Mota varacha, surat</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Phone size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">99299 99399</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Mail size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">patelclothes@gmail.com</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-black text-white p-4 rounded-full mb-3">
              <Instagram size={28} className="cursor-pointer" />
            </div>
            <p className="text-sm font-medium cursor-pointer">Patel_clothes_surat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
