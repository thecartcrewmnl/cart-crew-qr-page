import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, MapPin, Camera, FileText } from "lucide-react";

export default function QRLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 flex flex-col items-center p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-yellow-600">The Cart Crew</h1>
        <p className="text-green-700 italic">Indulgence Beyond Measure.</p>
      </motion.div>

      {/* Links */}
      <div className="w-full max-w-md grid gap-4">
        <div className="shadow-lg border border-yellow-400 rounded p-4 flex flex-col gap-3">
          <a href="https://drive.google.com/drive/folders/1pn2ZvolIt0FSocAkOt0T4QhNsjxvx-YO?usp=drive_link" target="_blank" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <FileText className="w-5 h-5" /> View Our Menu & Packages
          </a>
          <a href="https://instagram.com/thecartcrew.mnl" target="_blank" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <Camera className="w-5 h-5" /> Event Gallery
          </a>
          <a href="https://forms.gle/Cew14y2pHyZafY967" target="_blank" className="w-full flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            📝 Book Us Now
          </a>
          <a href="https://instagram.com/thecartcrew.mnl" target="_blank" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <Instagram className="w-5 h-5" /> Instagram
          </a>
          <a href="https://facebook.com/thecartcrew.mnl" target="_blank" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <Facebook className="w-5 h-5" /> Facebook
          </a>
          <a href="tel:+639123456789" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <Phone className="w-5 h-5" /> Call Us
          </a>
          <a href="mailto:info@thecartcrew.com" className="w-full flex items-center gap-2 border border-green-400 text-green-700 px-4 py-2 rounded hover:bg-green-50">
            <Mail className="w-5 h-5" /> Email Us
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-8 text-green-700 text-sm text-center">
        Thank you for making us part of your celebrations 🎉
      </p>
    </div>
  );
}
