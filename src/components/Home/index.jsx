import React from 'react';

import HomeWrapper from './style';
import Link from 'next/link';
import Hero from './components/Hero/BackgroundAsImage.js';
import Features from './components/features/ThreeColWithSideImage.js';
import FeatureWithSteps from './components/features/TwoColWithSteps.js';
import Pricing from './components/pricing/ThreePlans.js';
import tw from 'twin.macro';
import ContactUsForm from './components/forms/TwoColContactUsWithIllustration.js';

import Footer from './components/footers/MiniCenteredFooter.js';
import RouteAuth from '../RouteAuth/NonLoggedInPages';

export default function HomeComponent(props) {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  return (
    <RouteAuth>
      <Hero />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
      />
      <FeatureWithSteps
        subheading={<Subheading>STEPS</Subheading>}
        heading={
          <>
            Easy to <HighlightedText>Get Started.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={'/images/hero-screenshot-2.png'}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
      />
      <ContactUsForm />
      <Footer />
    </RouteAuth>
  );
}
