import backgroundSprLarge from '~/assets/museum_background.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/museum_background.jpg';
import imageSprComponentsDarkLarge from '~/assets/museum_intro.jpg';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprDesignSystemDarkLarge from '~/assets/museum_home.jpg';
import imageSprDesignSystemDarkPlaceholder from '~/assets/museum_home.jpg';
import imageSprDesignSystemDark from '~/assets/museum_home.jpg';
import imageSprLessonBuilderDarkLarge from '~/assets/museum.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/museum.png';
import imageSprLessonBuilderDark from '~/assets/museum.png';
import imageSprStoryboarderDarkLarge from '~/assets/museum_ar.jpg';
import imageSprStoryboarderDarkPlaceholder from '~/assets/museum_ar.jpg';
import imageSprStoryboarderDark from '~/assets/museum_ar.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

const title = 'Revolutionized Museum Experience with Mobile AR';
const description =
  "Designed and developed an innovative mobile app that transforms museum visits through augmented reality, interactive exhibits, and personalized guided tours.";
const roles = [
  'Mobile App Development',
  'UX and UI Design',
  'AR Integration',
  'Museum Experience Design',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SmartSparrow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSpr}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.figma.com/design/tDt5HPwOq1FIYQx9s7vcTF/Museum?m=auto&t=hG8v5xQkE4QgXqqe-6"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
              `${imageSprLessonBuilderDark} 375w, ${imageSprLessonBuilderDarkLarge} 750w`
              }
              width={375}
              height={667}
              placeholder={imageSprLessonBuilderDark}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 375px, 375px`}
              alt="Mobile museum app home screen with interactive exhibit navigation and AR features."
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
          <Image
              key={theme}
              className={styles.mobileAppImage}
              srcSet={
                `${imageSprComponentsDark} 375w, ${imageSprComponentsDarkLarge} 750w`
              }
              width={375}
              height={667}
              placeholder={imageSprComponentsDark}
              alt={`Museum app introduction screen with ${theme} themed onboarding experience`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive Museum Introduction</ProjectSectionHeading>
              <ProjectSectionText>
              I designed an engaging onboarding experience that introduces visitors to the museum's AR capabilities. The intuitive interface guides users through the app's features while showcasing the museum's unique exhibits and interactive elements.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              className={styles.mobileAppImage}
              srcSet={`${imageSprDesignSystemDark} 375w, ${imageSprDesignSystemDarkLarge} 750w` }
              width={375}
              height={667}
              placeholder={imageSprDesignSystemDark}
              alt="Museum app home screen with exhibit categories and navigation menu."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Museum Home Experience</ProjectSectionHeading>
              <ProjectSectionText>
              I crafted a mobile-first home screen that provides visitors with easy access to exhibit categories, interactive maps, and personalized recommendations. The clean, intuitive design ensures users can quickly navigate and discover museum content that matches their interests.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Augmented Reality Exhibits</ProjectSectionHeading>
              <ProjectSectionText>
              I integrated AR technology to create immersive museum experiences that bring exhibits to life. Users can point their device at artifacts to unlock interactive content, 3D models, and historical information, making museum visits more engaging and educational.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              className={styles.mobileAppImage}
              srcSet={`${imageSprStoryboarderDark} 375w, ${imageSprStoryboarderDarkLarge} 750w`}
              width={375}
              height={667}
              placeholder={imageSprStoryboarderDark}
              alt="AR museum experience showing interactive overlay on exhibit artifacts."
              sizes={`(max-width: ${media.mobile}px) 100vw, 375px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        
       
      </ProjectContainer>
      <Footer />
    </>
  );
};
