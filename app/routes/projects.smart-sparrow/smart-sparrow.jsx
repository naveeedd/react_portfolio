import backgroundSprLarge from '~/assets/background.png';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/dumbell-bg.png';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/dumbell-bg.png';
import imageSprBackgroundVolcanism from '~/assets/dumbell-bg.png';
import backgroundSpr from '~/assets/background.png';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.png';
import imageSprStoryboarderDarkLarge from '~/assets/diet-plan.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/diet-plan.png';
import imageSprStoryboarderDark from '~/assets/diet-plan.png';
import imageBmr from '~/assets/bmr.png';
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

const title = 'Shaped the Future of Fitness with AI';
const description =
  "Built an AI-powered platform that streamlined gym operations and personalized member experiences.";
const roles = [
  'Full Stack Development',
  'UX and UI Design',
  'Product Management',
  'AI Integration',
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
          url="https://github.com/naveeedd/AI-GYM"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                  : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDark
                  : imageSprLessonBuilderLight
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
            In 2025, I initiated a complete rebuild of an AI-powered gym management platform from the ground up. The existing system was outdated and inefficient, causing friction for both gym staff and members. The new platform was designed to modernize operations by replacing manual processes with AI-driven automation. Our primary goals were to reduce administrative overhead, enhance member engagement, and deliver a seamless experience that was easy for new users to adopt, while offering the scalability and depth required by advanced fitness professionals.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
          <Image
              key={theme}
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
                  : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={
                isDark
                  ? imageSprComponentsDark
                  : imageSprComponentsLight
              }
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design System for Admin Dashboard</ProjectSectionHeading>
              <ProjectSectionText>
              I developed a flexible design system to unify the visual language of the admin dashboard and the entire platform. It streamlined the interface, accelerated development, and laid the groundwork for scalable future enhancements.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={theme}
              srcSet={`${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w` }
              width={1280}
              height={800}
              placeholder={imageSprDesignSystemDark}
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Design System for User Dashboard</ProjectSectionHeading>
              <ProjectSectionText>
              I crafted a cohesive design system to deliver a seamless and intuitive experience across the user dashboard. It ensured visual consistency, simplified navigation, and supported the platform's personalization features for gym members.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                width={1280}
                height={900}
                placeholder={imageSprBackgroundVolcanism}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>BMR Calculator</ProjectSectionHeading>
                  <ProjectSectionText>
                  I designed and developed an intuitive BMR calculator to help users understand their daily calorie needs based on their age, gender, weight, height, and activity level. This tool played a key role in personalizing fitness and nutrition recommendations across the platform. 
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.bmrImage}
                src={imageBmr}
                width={500}
                height={600}
                alt="BMR calculation and fitness tracking interface"
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>AI-Powered Diet Planner</ProjectSectionHeading>
              <ProjectSectionText>
              I built an AI-integrated diet planner that generates personalized meal plans based on users' fitness goals, dietary preferences, and BMR. The system continuously adapts recommendations using user feedback and progress data, offering a smarter and more sustainable approach to nutrition.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={theme}
              srcSet={`${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={imageSprStoryboarderDark}
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        
       
      </ProjectContainer>
      <Footer />
    </>
  );
};
