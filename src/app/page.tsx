import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpotifySection from "@/components/SpotifySection";
import VideoGrid from "@/components/VideoGrid";
import GalleryPreview from "@/components/GalleryPreview";
import SocialLinks from "@/components/SocialLinks";
import BookingPreview from "@/components/BookingPreview";
import Footer from "@/components/Footer";
import TextureOverlay from "@/components/TextureOverlay";

export default function Home() {
  return (
    <>
      <TextureOverlay />
      <Header />
      <main>
        <Hero />
        <SpotifySection />
        <VideoGrid />
        <GalleryPreview />
        <SocialLinks />
        <BookingPreview />
      </main>
      <Footer />
    </>
  );
}
