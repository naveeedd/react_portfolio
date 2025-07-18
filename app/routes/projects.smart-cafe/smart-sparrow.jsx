import backgroundSprLarge from '~/assets/cafe-background.jpeg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/dumbell-bg.png';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/dumbell-bg.png';
import imageSprBackgroundVolcanism from '~/assets/dumbell-bg.png';
import backgroundSpr from '~/assets/cafe-background.jpeg';
import imageSprComponentsDarkLarge from '~/assets/menu.png';
import imageSprComponentsDarkPlaceholder from '~/assets/menu.png';
import imageSprComponentsDark from '~/assets/menu.png';
import imageSprDesignSystemDarkLarge from '~/assets/store.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/store.png';
import imageSprDesignSystemDark from '~/assets/store.png';
import imageSprLessonBuilderDarkLarge from '~/assets/cafe_home.png';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/cafe_home.png';
import imageSprLessonBuilderDark from '~/assets/cafe_home.png';
import imageSprStoryboarderDarkLarge from '~/assets/about.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/about.png';
import imageSprStoryboarderDark from '~/assets/about.png';
import imageBmr from '~/assets/about.png';
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

const title = 'Brewed a Delightful Digital Experience for Cafe Delicia';
const description =
  "Designed a user-centric website that enhanced customer engagement and streamlined the online ordering process for a modern café.";
const roles = [
  'UI/UX Design',
  'User Research',
  'Prototyping & Testing',
  'Responsive Design',
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
          url="https://www.figma.com/design/x32LkFt6iKpBONAypc9fdF/Delicia-Cafe?m=auto&t=hG8v5xQkE4QgXqqe-6"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={`${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={imageSprLessonBuilderDark}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
       
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
          <Image
              key={theme}
              srcSet={`${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w`
              }
              width={1024}
              hright={800}
              placeholder={imageSprComponentsDark}
              alt={`A set of ${theme} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Menu Page Design</ProjectSectionHeading>
              <ProjectSectionText>I designed a responsive and visually engaging menu page for Cafe Delicia to enhance the digital customer experience. The layout organizes items into clear categories—Drinks, Donuts, and Cakes—with high-quality images, consistent pricing, and concise descriptions to support quick decision-making.
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
              <ProjectSectionHeading>Find a Store Page Design</ProjectSectionHeading>
              <ProjectSectionText>
              I designed the Find a Store page to help users easily locate their nearest Cafe Delicia branch. The layout combines a searchable list of store locations on the left with an interactive Google Map on the right for real-time visual guidance.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider theme="dark" data-invert>
         
        </ThemeProvider>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>About Us Page Design</ProjectSectionHeading>
              <ProjectSectionText>
              The About Us page shares the brand's origin story and core values using storytelling and visual appeal. It introduces the café's heritage with warmth and clarity, supported by visuals that reflect its ambiance, taste, and quality.
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
