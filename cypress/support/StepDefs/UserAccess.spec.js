import { And } from 'cypress-cucumber-preprocessor/steps';
import AssetDetails from '../PageObjects/AssetDetails';
import Basket from '../PageObjects/Basket';
import Widgets from '../PageObjects/WidgetsPage';

const widgets = new Widgets();
const assetDetails = new AssetDetails();
const basket = new Basket();

And('I do not see Basket on toolbar', () => {
  basket.getFirstAsset().should('not.exist');
});

And('I do not see Shares on toolbar', () => {
  basket.getShares().should('not.exist');
});

And('I do not see Select Visible icon on Resource List', () => {
  basket.getBtnAddToShare().should('not.exist');
});

And('I do not see checkboxes on the assets', () => {
  widgets.getAssetCheckboxes().should('not.exist');
});

And('Actions menu is not displayed', () => {
  assetDetails.getActionsMenu().should('not.exist');
});