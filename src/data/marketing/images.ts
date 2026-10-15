import type { ImageMetadata } from 'astro';
import familyPractice from '../../assets/live/family-practice-platte-river-ortho-1.png';
import officeInterior from '../../assets/live/IMG_1802-2.jpg';
import officeDetail from '../../assets/live/IMG_2725-2.jpg';
import orthodontist from '../../assets/live/orthodontist-gretna-ne-platte-river-orthodontics-1.jpg';
import treatmentCompanion from '../../assets/live/platte-river-orthodontics-treatment-companion.jpg';
import whitening from '../../assets/live/platte-river-orthod-chad-carter-teeth-whitening-gretna-ne.jpg';
import whiteningSmile from '../../assets/live/IMG_1733.jpg';
import surgical from '../../assets/live/platte-river-orthodontics-gretna-ne-surgical-orthodontics.jpg';
import smileSimulator from '../../assets/live/invisalign-smile-simulator.png';
import drCarter from '../../assets/live/platte-river-orthodontics-chad-carter-gretna-ne.jpg';
import surgicalCase from '../../assets/live/platte-river-orthodontics-surgical-orthodontics-gretna-ne.jpg';
import burkina3 from '../../assets/live/20251126-Burkina-Dental-Picture3.jpg';
import burkina1 from '../../assets/live/20251126-Burkina-Dental-Picture1.jpg';
import treatmentChair from '../../assets/live/platte-river-ortho-treatment-chair.jpg';
import amyCarter from '../../assets/live/platte-river-orthodontics-gretna-ne-amy-carter.jpg';
import familyHotel from '../../assets/live/20240616-Family-Picture_Grand-Hotel-2024.jpg';
import africaClinic from '../../assets/live/20220616-IMG_6646.jpg';
import africaPortrait from '../../assets/live/20220602-IMG_6612.jpg';
import invisalign from '../../assets/live/gretna-ne-orthodontist-invisalign-platte-river-orthodontics.jpg';
import invisalignTreatment from '../../assets/live/orthodontist-gretna-ne-platte-river-orthodontics-invisalign-treatment.jpg';
import palatalExpander from '../../assets/live/invisalign-palatal-expander-system-gretna-ne-platte-river-orthodontics.jpg';
import invisalignTeen from '../../assets/live/gretna-ne-invisalign-platte-river-orthodontics.jpg';
import invisalignKids from '../../assets/live/Platte-River-Orthodontics-Invisalign-for-kids-Gretna-NE.jpg';
import invisalignTreatmentFirst from '../../assets/live/invisalign-treatment-first.jpg';
import invisalignKidsAlt from '../../assets/live/Platte-River-Orthodontics-Invisalign-for-kids-Gretna-NE-1.jpg';
import invisalignAdults from '../../assets/live/invisalign-adults.jpg';
import consult from '../../assets/live/AdobeStock_278582442.jpg';
import consultRecords from '../../assets/live/AdobeStock_266863879-1.jpg';
import consultSmile from '../../assets/live/AdobeStock_269986537-1.jpg';
import earlyTreatment from '../../assets/live/IMG_6314.jpg';
import braces from '../../assets/live/braces-gretna-ne-platte-river-orthodontics.jpg';
import bracesDetail from '../../assets/live/gretna-ne-braces-platte-river-orthodontics.jpg';
import customBraces from '../../assets/live/custom-braces-teens.jpg';
import bracesTeens from '../../assets/live/braces-for-teens-gretna-ne-platte-river-orthodontics.jpg';
import wildSmiles from '../../assets/live/wildsmiles-braces.jpg';
import kidsBraces from '../../assets/live/kids-braces-mythis-e1764088364216.jpg';
import adultBraces from '../../assets/live/adult-braces-orthodontics-platte-river-gretna-ne.jpg';
import retainers from '../../assets/live/retainers-gretna-ne-platte-river-orthodontics.jpg';
import retainersChair from '../../assets/live/chad-carter-platte-river-orthodontics-retainers-gretna-ne.jpg';
import exterior from '../../assets/office-exterior.jpg';

export const pageImages = {
  familyPractice,
  officeInterior,
  officeDetail,
  orthodontist,
  treatmentCompanion,
  whitening,
  whiteningSmile,
  surgical,
  smileSimulator,
  drCarter,
  surgicalCase,
  burkina3,
  burkina1,
  treatmentChair,
  amyCarter,
  familyHotel,
  africaClinic,
  africaPortrait,
  invisalign,
  invisalignTreatment,
  palatalExpander,
  invisalignTeen,
  invisalignKids,
  invisalignTreatmentFirst,
  invisalignKidsAlt,
  invisalignAdults,
  consult,
  consultRecords,
  consultSmile,
  earlyTreatment,
  braces,
  bracesDetail,
  customBraces,
  bracesTeens,
  wildSmiles,
  kidsBraces,
  adultBraces,
  retainers,
  retainersChair,
  exterior,
} satisfies Record<string, ImageMetadata>;

export type PageImage = keyof typeof pageImages;
