// app/contact/page.tsx ou pages/contact.tsx
import React from "react";
export default function Contact() {
  const address = "17 Rue Le Peletier, 75009 Paris, France";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const mapSrc = `https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(
    address
  )}&key=${apiKey}`;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Coordonnées de contact */}
        <div className="flex flex-col justify-center space-y-4 text-gray-800">
          <h2 className="text-3xl font-bold">📍 Nous contacter</h2>
          <p>
            📞 Téléphone :{" "}
            <span className="font-medium"> +33 1 47 70 64 11</span>
          </p>
          {/* <p>
            📧 Email :{" "}
            <span className="font-medium">contact@restaurant.com</span>
          </p> */}
          <p>
            📌 Adresse :{" "}
            <span className="font-medium">17 Rue Le Peletier, 75009 Paris</span>
          </p>
          <div className="space-y-2 text-sm md:text-base leading-relaxed">
            <p>
              🕐 <span className="font-medium">Horaires : </span>
              <br />
              <span className="font-medium">
                Lun - Sam : 12h - 14h30 / 18h30 - 22h30
              </span>
            </p>
            <p className="font-medium text-red-600">Fermé le mercredi</p>
          </div>
        </div>

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden w-full h-[300px] md:h-[400px] shadow-lg">
          <iframe
            title="Adresse du restaurant"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={mapSrc}
          />
        </div>
      </div>
    </div>
  );
}
