import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReleaseWall from "@/components/ReleaseWall";
import VideoGrid from "@/components/VideoGrid";
import GalleryPreview from "@/components/GalleryPreview";
import SocialLinks from "@/components/SocialLinks";
import BookingPreview from "@/components/BookingPreview";
import Footer from "@/components/Footer";
import TextureOverlay from "@/components/TextureOverlay";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <TextureOverlay />
      <Header />
      <main>
        <Hero />
        <SectionDivider label="ARCHIVE_001" code="315" />
        <ReleaseWall />
        <SectionDivider label="ARCHIVE_002" code="VISUAL" />
        <VideoGrid />
        <SectionDivider label="ARCHIVE_003" code="FRAMES" />
        <GalleryPreview />
        <SectionDivider label="ARCHIVE_004" code="315-PRND" />
        <SocialLinks />
        <SectionDivider label="ARCHIVE_005" code="CONTACT" />
        <BookingPreview />
      </main>
      <Footer />
    </>
  );
}
