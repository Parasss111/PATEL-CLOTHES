import React from 'react'
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const Contact = () => {
    return (
        <div>
            <div className="text-center mt-40 mb-18">
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
        </div>
    )
}

export default Contact
