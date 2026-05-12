import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReleaseWall from "@/components/ReleaseWall";
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
        <ReleaseWall />
        <VideoGrid />
        <GalleryPreview />
        <SocialLinks />
        <BookingPreview />
      </main>
      <Footer />
    </>
  );
}
