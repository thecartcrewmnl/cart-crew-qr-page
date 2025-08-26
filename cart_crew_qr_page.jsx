import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <Card className="shadow-lg border-yellow-400">
          <CardContent className="p-4 flex flex-col gap-3">
            <Button as="a" href="/https://drive.google.com/drive/folders/1pn2ZvolIt0FSocAkOt0T4QhNsjxvx-YO?usp=drive_link" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <FileText className="w-5 h-5" /> View Our Menu & Packages
            </Button>
            <Button as="a" href="/gallery" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <Camera className="w-5 h-5" /> Event Gallery
            </Button>
            <Button as="a" href="/booking" className="w-full flex gap-2 bg-yellow-500 text-white hover:bg-yellow-600">
              📝 Book Us Now
            </Button>
            <Button as="a" href="https://goo.gl/maps/example" target="_blank" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <MapPin className="w-5 h-5" /> Find Us on Maps
            </Button>
            <Button as="a" href="https://instagram.com/thecartcrew" target="_blank" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <Instagram className="w-5 h-5" /> Instagram
            </Button>
            <Button as="a" href="https://facebook.com/thecartcrew" target="_blank" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <Facebook className="w-5 h-5" /> Facebook
            </Button>
            <Button as="a" href="tel:+639XXXXXXXXX" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <Phone className="w-5 h-5" /> Call Us
            </Button>
            <Button as="a" href="mailto:info@thecartcrew.com" className="w-full flex gap-2 border-green-400 text-green-700" variant="outline">
              <Mail className="w-5 h-5" /> Email Us
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <p className="mt-8 text-green-700 text-sm text-center">
        Thank you for making us part of your celebrations 🎉
      </p>
    </div>
  );
}
