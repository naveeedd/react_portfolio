import sliceAppLarge from '~/assets/airline-home.png';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/airline-home.png';
import sliceBackgroundBarLarge from '~/assets/search.png';
import sliceBackgroundBarPlaceholder from '~/assets/search.png';
import sliceBackgroundBar from '~/assets/search.png';
import sliceBackgroundLarge from '~/assets/airline-bg.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/airline-bg.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/user-page.png';
import sliceSlidesLarge from '~/assets/admin.png';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/admin.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Airline Management System';
const description =
  'This project focused on creating a more efficient way for airline staff and administrators to collaboratively manage flights, bookings, and operational data';
const roles = ['Full Stack Development', 'UI / UX Design', 'Database Management','Performance Optimization'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackground}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/naveeedd/Airline-Management-System"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceApp}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the Admin Experience</ProjectSectionHeading>
              <ProjectSectionText>
              To improve efficiency for airline staff, we've enhanced the dashboard with features designed around real-world workflows. A common challenge was the time spent locating specific flights or booking records. To solve this, we're introducing a "Recently Accessed Flights" section—soon to appear beneath the dashboard overview—so admins can instantly resume tasks without repeated navigation.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceSlides}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
                  width={440}
                  height={790}
                  placeholder={sliceBackgroundBar}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
              Searching for flights efficiently is critical for both customer support and internal operations. To streamline this process, we enhanced the flight search functionality with smart filters, including departure and arrival cities, dates, aircraft type, and flight status. Results are now displayed with key details—such as timings, seat availability, and booking status—at a glance. These improvements enable staff to quickly locate relevant flights, assist customers faster, and manage schedules with greater accuracy.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Book a Flight</ProjectSectionHeading>
              <ProjectSectionText>
              Booking a flight is now faster and more intuitive than ever. The customer flight booking page offers a seamless experience with a clean interface and guided steps.Each result displays key flight details—departure and arrival times, seat availability, and pricing—for easy comparison. Once a flight is selected, the booking flow includes secure passenger information entry, add-on options (like lounge access or insurance), and real-time fare calculation.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              width={940}
              height={500}
              placeholder={sliceIrl}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export function links() {
  return [
    { rel: "preload", as: "image", href: "/assets/hero.webp", type: "image/webp" },
    // fallback for non-webp browsers
    { rel: "preload", as: "image", href: "/assets/hero.jpg", type: "image/jpeg" }
  ];
}
