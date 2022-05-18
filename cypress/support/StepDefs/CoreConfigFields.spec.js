import { And } from 'cypress-cucumber-preprocessor/steps';
import CoreConfigFields from '../PageObjects/CoreConfigFields';

const coreConfigFields = new CoreConfigFields();

let versionCount;
let topPadding = 0;
let bottomPadding = 0;
let leftPadding = 0;
let rightPadding = 0;

And('I select Top,Right,Bottom,Left widget Spacing on Config Panel', () => {

  const currentValue = 0;
  const targetValue = 25;
  const increment = 5;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  // Top
  coreConfigFields.getTopSpacingButton().click();
  coreConfigFields.getSpacingSliderLabel().should('have.text', 'Top');
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', 25).then(() => {
    topPadding = targetValue;
  });

  // Right
  coreConfigFields.getRightSpacingButton().click();
  coreConfigFields.getSpacingSliderLabel().should('have.text', 'Right');
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', 25).then(() => {
    rightPadding = targetValue;
  });

  // Bottom
  coreConfigFields.getBottomSpacingButton().click();
  coreConfigFields.getSpacingSliderLabel().should('have.text', 'Bottom');
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', 25).then(() => {
    bottomPadding = targetValue;
  });

  // Left
  coreConfigFields.getLeftSpacingButton().click();
  coreConfigFields.getSpacingSliderLabel().should('have.text', 'Left');
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  coreConfigFields.getSpacingSlider().should('have.attr', 'aria-valuenow', 25).then(() => {
    leftPadding = targetValue;
  });
});